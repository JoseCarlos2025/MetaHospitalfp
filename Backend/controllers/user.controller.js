const db = require("../models");
const User = db.User;
const Op = db.sequelize.Op;
const utils = require("../utils");
const bcrypt = require('bcryptjs');

function generateUID() {
    let UID = "";
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 4; i++) {
        UID += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return UID;
}

async function validationUID() {
    let UID = generateUID();

    try {
        const data = await User.findByPk(UID);

        if (data) {
            return validationUID();
        }
        return UID;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

exports.create = async (req, res) => {
    if (!req.body.name || !req.body.password || !req.body.discriminator || !req.body.email) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        console.log(req.body.name+" "+req.body.password+" "+req.discriminator+" "+req.body.email)
        return;
    }

    try {
        const user = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            discriminator: req.body.discriminator,
            password: req.body.password
        };

        User.findOne({ where: { email: user.email } }).then(data => {
            if (data) {
                const result = bcrypt.compareSync(user.password, data.password);
                if (!result) return res.status(401).send('Password not valid!');

                const token = utils.generateToken(data);

                const userObj = utils.getCleanUser(data);

                delete userObj.password;

                return res.json({ user: userObj, access_token: token});
            }

            user.password = bcrypt.hashSync(req.body.password);

            
            User.create(user).then(data => {
                const token = utils.generateToken(data);
                
                const userObj = utils.getCleanUser(data);

                delete userObj.password;
                
                return res.json({ user: userObj, access_token: token });
            })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the User."
                    });
                });
        })

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({
            message: error.message || "Some error occurred while creating the user."
        });
    }
};

exports.findAll = (req, res) => {
    User.findAll({attributes: { exclude: ['password'] }}).then((alluser) => {
        res.send(alluser)
    }).catch(err => {
        res.status(500).send({ message: "Server error. Couldn't find Users" });
    })
};

exports.findAllStudent = (req, res) => {
    User.findAll({where: {discriminator: 'estudiante'}},{attributes: { exclude: ['password'] }}).then((alluser) => {
        res.send(alluser)
    }).catch(err => {
        res.status(500).send({ message: "Server error. Couldn't find Users" });
    })
};

exports.findAllTeachers = (req, res) => {
    User.findAll({where: {discriminator: 'profesor'}},{attributes: { exclude: ['password'] }}).then((alluser) => {
        res.send(alluser)
    }).catch(err => {
        res.status(500).send({ message: "Server error. Couldn't find Users" });
    })
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id,{attributes: { exclude: ['password'] }})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const userId = req.params.id;

    User.destroy({
        where: { id: userId }
    }).then((deletedCount) => {
        if (deletedCount === 1) {
            res.send({ message: "User deleted successfully." });
        } else {
            res.status(404).send({ message: "User not found or already deleted." });
        }
    }).catch(err => {
        res.status(500).send({ message: "Server error. Couldn't delete User." });
    });
}

exports.update = (req, res) => {
    const userId = req.params.id;

    const updatedUser = {
        name: req.body.name,
        discriminator: req.body.discriminator,
        password: req.body.password
    };

    User.update(updatedUser, {
        where: { id: userId }
    }).then((result) => {
        if (result[0] === 1) {
            res.send({ message: "User updated successfully." });
        } else {
            res.status(404).send({ message: "User not found or no changes made." });
        }
    }).catch(err => {
        res.status(500).send({ message: "Server error. Couldn't update User." });
    });
}



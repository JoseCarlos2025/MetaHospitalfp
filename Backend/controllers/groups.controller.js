const db = require("../models");
const Group = db.Group;

exports.create = (req, res) => {
    if (!req.body.name||!req.body.date) {
        res.status(500).send({ error: "name is mandatory" });
        return;
    }

    const GroupData = {
        name: req.body.name,
        date: req.body.date,
    };

    Group.create(GroupData)
        .then((createdGroup) => {
            res.send(createdGroup);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Server error. Couldn't add new Group.",
            });
        });
};

exports.findAll = (req, res) => {
    Group.findAll()
        .then((allGroups) => {
            res.send(allGroups);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Server error. Couldn't find Groups.",
            });
        });
};

exports.delete = (req, res) => {
    const GroupId = req.params.id;

    Group.destroy({
        where: { id: GroupId },
    })
        .then((deletedCount) => {
            if (deletedCount === 1) {
                res.send({ message: "Group deleted successfully." });
            } else {
                res.status(404).send({
                    message: "Group not found or already deleted.",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Server error. Couldn't delete Group.",
            });
        });
};

exports.update = (req, res) => {
    const GroupId = req.params.id;

    const updatedGroupData = {
        name: req.body.name,
        date: req.body.date,
    };

    Group.update(updatedGroupData, {
        where: { id: GroupId },
    })
        .then((result) => {
            if (result[0] === 1) {
                res.send({ message: "Group updated successfully." });
            } else {
                res.status(404).send({
                    message: "Group not found or no changes made.",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Server error. Couldn't update Group.",
            });
        });
};
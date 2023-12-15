module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        discriminator: {
            type: Sequelize.STRING
        },
        filename: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    User.associate = (models) => {
        User.belongsToMany(models.School, { through: models.StudentSchool });
        User.belongsToMany(models.School, { through: models.TeacherSchool });
        User.belongsToMany(models.Group, { through: models.TeacherGroup});
        User.belongsToMany(models.Group, { through: models.StudentGroup});
        User.belongsTo(models.School, { through: 'SchoolId' });
    };

    User.createDefaultUser = async function () {
        try {
            const existingUser = await User.findOne({ where: { email: 'admin@gmail.com' } });

            if (!existingUser) {
                await User.create({
                    name: 'Admin',
                    email: 'admin@gmail.com',
                    discriminator: 'admin',
                    filename: '',
                    password: '1234'
                });
                console.log('Usuario por defecto creado exitosamente.');
            } else {
                console.log('El usuario por defecto ya existe.');
            }
        } catch (error) {
            console.error('Error al crear el usuario por defecto:', error);
        }
    };

    return User;
};

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
        password: {
            type: Sequelize.STRING
        }
    });

    User.associate = (models) => {
        User.belongsToMany(models.School, { through: models.StudentSchool });
        User.belongsToMany(models.School, { through: models.TeacherSchool });
        User.belongsToMany(models.Group, { through: models.TeacherCourse });
        User.belongsTo(models.School, { through: 'SchoolId' });
    };

    return User;
};

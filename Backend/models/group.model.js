module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define("Group", {
        name: {
            type: Sequelize.STRING
        }
    });

    Group.associate = (models) => {
        Group.belongsTo(models.School, { through: 'SchoolId' });
        Group.belongsToMany(models.User, { through: models.TeacherCourse });
    };

    return Group;
};
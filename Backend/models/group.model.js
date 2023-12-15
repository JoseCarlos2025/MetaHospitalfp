module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define("Group", {
        name: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.STRING
        }
    });

    Group.associate = (models) => {
        Group.belongsTo(models.School, { through: 'SchoolId' });
        Group.belongsToMany(models.User, { through: models.TeacherGroup });
        Group.belongsToMany(models.User, { through: models.StudentGroup });
    };

    return Group;
};
module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("Course", {
        name: {
            type: Sequelize.STRING
        },
        Acronyms: {
            type: Sequelize.STRING
        }
    });

    Course.associate = (models) => {
        Course.belongsTo(models.Group, { through: 'GroupId' });
    };

    return Course;
};

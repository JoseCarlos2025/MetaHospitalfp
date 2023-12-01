module.exports = (sequelize, Sequelize) => {
    const TeacherCourse = sequelize.define("TeacherCourse", {});

    TeacherCourse.associate = (models) => {
        TeacherCourse.belongsTo(models.Group);
        TeacherCourse.belongsTo(models.User);
    };

    return TeacherCourse;
};
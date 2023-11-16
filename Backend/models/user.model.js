module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user",{
        id:{
            type: Sequelize.STRING,
            primaryKey: true
        },
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
            type:  Sequelize.STRING
        }
    });

    return user;
}
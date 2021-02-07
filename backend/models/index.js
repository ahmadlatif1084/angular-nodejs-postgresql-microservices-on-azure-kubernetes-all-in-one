module.exports = (sequelize, Sequelize) => {

    const Customer = sequelize.define(
        "Customer", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
            }
        }
    )
    return Customer;
}
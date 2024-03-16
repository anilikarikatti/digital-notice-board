module.exports = {
    async up(queryInterface, Sequelize) {
      return queryInterface.createTable("notices", {
        notice_id: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        notice_name:{
          type: Sequelize.STRING(255),
          allowNull: false,
          unique:true,
        },
        description:{
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        
        start_date: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        end_date: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal(
            "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
          ),
        },
      });
    },
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("notices");
    },
  };
  
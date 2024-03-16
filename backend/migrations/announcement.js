module.exports = {
    async up(queryInterface, Sequelize) {
      return queryInterface.createTable("announcements", {
        announce_id: {
          autoIncrement: true,
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        announcement: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        url: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique:true,
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
      await queryInterface.dropTable("announcements");
    },
  };
  
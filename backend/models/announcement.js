module.exports = function (sequelize, dataType) {
    return sequelize.define("announcements", {
      announce_id: {
        autoIncrement: true,
        type: dataType.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      announcement: {
        type: dataType.STRING(255),
        allowNull: false,
      },
      url: {
        type: dataType.STRING(255),
        allowNull: false,
        unique:true,
      },
      start_date: {
        type: dataType.DATEONLY,
        allowNull:false,
      },
      end_date: {
        type: dataType.DATEONLY,
        allowNull:false,
      },
      status: {
        type: dataType.BOOLEAN,
        defaultValue: true,
      }
    });
  };
  
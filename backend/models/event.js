module.exports = function (sequelize, dataType) {
    return sequelize.define("events", {
      event_id: {
        autoIncrement: true,
        type: dataType.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      event_name: {
        type: dataType.STRING(255),
        allowNull: false,
      },
      event_url: {
        type: dataType.STRING(255),
        allowNull: false,
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
  
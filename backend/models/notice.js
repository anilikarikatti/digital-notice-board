module.exports = function (sequelize, dataType) {
    return sequelize.define("notices", {
      notice_id: {
        autoIncrement: true,
        type: dataType.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      notice_name:{
        type: dataType.STRING(255),
        allowNull: false,
        unique:true,
      },
      notice_url: {
        type: dataType.STRING(255),
        allowNull: false,
        unique:true,
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
  
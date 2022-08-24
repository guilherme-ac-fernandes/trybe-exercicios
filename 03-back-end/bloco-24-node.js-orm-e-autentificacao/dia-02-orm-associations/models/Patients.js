module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    patient_id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
     },
    fullname: DataTypes.STRING,
    plan_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    timestamps: false,
    tableName: 'Patients',
    underscored: true,
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans, {
      foreignKey: 'plan_id', as: 'plans'
    });
  };

  return Patients;
};
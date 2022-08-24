const { Patients, Plans, Surgeries } = require('../models');

const getAllPatientsPlans = async (_req, res) => {
  try {
    const patientsPlan = await Patients.findAll({
      include: { model: Plans, as: 'plans' },
    });
    if (!patientsPlan || patientsPlan.length === 0) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(patientsPlan);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getAllPatientsSurgeries = async (_req, res) => {
  try {
    const patientsSurgeries = await Patients.findAll({
      include: {
        model: Surgeries,
        as: 'surgeries',
        through: { attributes: [] },
      },
    });

    if (!patientsSurgeries || patientsSurgeries.length === 0) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(patientsSurgeries);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getAllPlanWithPacients = async (req, res) => {
  try {
    const { id } = req.params;

    const planPacients = await Plans.findAll({
      where: { plan_id: id },
      include: [{
        model: Patients,
        as: 'patients',
        attributes: { exclude: ['plan_id'] },
      }],
    });

    if (!planPacients || planPacients.length === 0) {
      return res.status(404).send({ message: 'No plan found' });
    }
    return res.status(200).json(planPacients);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const addNewPatient = async (req, res) => {
  try {
    
    const { fullname, plan_id } = req.body;

    const newPatient = await Patients.create({ fullname, plan_id });

    return res.status(201).json(newPatient);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getAllPatientsSurgeriesWithoutDoctor = async (_req, res) => {
  try {
    const patientsSurgeries = await Patients.findAll({
      include: {
        model: Surgeries,
        as: 'surgeries',
        attributes: { exclude: ['doctor'] },
        through: { attributes: [] },
      },
    });

    if (!patientsSurgeries || patientsSurgeries.length === 0) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(patientsSurgeries);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getSurgeriesByDoctor = async (req, res) => {
  try {
    const { doctor } = req.params;
    const surgeries = await Surgeries.findAll({
      where: { doctor },
      include: {
        model: Patients,
        as: 'patients',
        through: { attributes: [] },
      },
    });

    if (!surgeries || surgeries.length === 0) {
      return res.status(404).send({ message: 'No doctor found' });
    }
    return res.status(200).json(surgeries);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  getAllPlanWithPacients,
  addNewPatient,
  getAllPatientsSurgeriesWithoutDoctor,
  getSurgeriesByDoctor,
}
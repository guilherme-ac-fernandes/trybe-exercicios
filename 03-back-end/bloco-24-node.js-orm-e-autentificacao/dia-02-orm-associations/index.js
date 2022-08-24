const bodyParser = require('body-parser');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3001;

const patientsController = require('./controllers/patientsController');

app.get('/patients', patientsController.getAllPatientsPlans);
app.get('/surgeries', patientsController.getAllPatientsSurgeries);
app.get('/plan/:id', patientsController.getAllPlanWithPacients);
app.post('/patients', patientsController.addNewPatient);
app.get('/surgeries/nodoctor', patientsController.getAllPatientsSurgeriesWithoutDoctor);
app.get('/surgeries/:doctor', patientsController.getSurgeriesByDoctor)

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
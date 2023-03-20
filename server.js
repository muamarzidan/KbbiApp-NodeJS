const express = require('express'); 
const cors = require('cors');
const app = express(); 
const port = 5000;

//mengambil route quiz dan route jobsheet
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')
const synonimRoute = require('./router/synonim')
const antonimRoute = require('./router/antonim')


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true}));

//mengambil model dan sequelize
const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => { 
    res.send('Quiz ExpressJS API by Noviana');
});

//daftarin 
app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)
app.use('/api/synonim', synonimRoute)
app.use('/api/antonim', antonimRoute)

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));
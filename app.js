//node app.js

require('dotenv').config()
const cors = require('cors')
const express = require('express')              //Import exrepss
const app = express()                           //Init exrpess
const mongoose = require('mongoose')            //Import mongoose
const PORT = process.env.PORT || 5001; //Define port

//app.use(helmet());
app.use(cors());

//middleware
app.use(express.json());  
                      // Formats data to Json

//const postRouter = require('./routes/posts');
//app.use('/posts', postRouter);

const bookingRouter = require('./routes/booking');
app.use('/bookings', bookingRouter);

const cleanerRouter = require('./routes/cleaner');
app.use('/cleaners', cleanerRouter);

const customerRouter = require('./routes/customer');
app.use('/customers', customerRouter);

//*********************************************************** 
// Base URL

app.get('/', cors(),  function (req, res) 
{
  res.send('Hello World 2');
})

//*********************************************************** 
mongoose.set('strictQuery', false);
//DB connection
mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log(`***********************************`);
        console.log('DB connected...');
        console.log(`***********************************`);
    }
)

//*********************************************************** 
//Listen to server
app.listen(PORT, err => 
    {
        if (err) 
        {
            return console.log('Error', err);
        }
        else
        {
            console.log(`\n***********************************`);
            console.log(`Server listening on port ${PORT}...`);
        }
    });
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();

const mongoose = require('mongoose');

// database

const uri = 'mongodb://DanielM_0802:r2Fl7bOhsM0Wul82@ac-pxribpk-shard-00-00.rof0thq.mongodb.net:27017,ac-pxribpk-shard-00-01.rof0thq.mongodb.net:27017,ac-pxribpk-shard-00-02.rof0thq.mongodb.net:27017/?ssl=true&replicaSet=atlas-lums8h-shard-0&authSource=admin&retryWrites=true&w=majority';

app.use(cors());
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))


// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
const userRoutes = require('./routes/users');
const validaToken = require('./routes/validate-token');
const sessions = require('./routes/sessions');
// routes
app.use('/api/users', userRoutes);
app.use('/api/sessions', validaToken, sessions);
//app.use('/api/users/sessions', validaToken, userRoutes);


// static
app.use(express.static(path.join(__dirname, 'public')));

// listenning on port
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

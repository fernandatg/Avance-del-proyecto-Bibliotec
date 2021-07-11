
import express from 'express';

import path from 'path';

import mongoose from 'mongoose';

import cors from 'cors';

import routes from './routes';

const app=express();

mongoose.Promise=global.Promise;
const dbURL = 'mongodb://localhost:27017/biblioteca_db';
mongoose.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
.then(mongoose=>console.log('Conectado en el servidor de bases de datos de mongodb puerto 27017'))
.catch(err=>console.log(err));

app.set('port', process.env.PORT || 4000);
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',routes);

app.listen(app.get('port'), ()=>{
    console.log('Servidor ejecutandose en el puerto ' + app.get('port'));
});

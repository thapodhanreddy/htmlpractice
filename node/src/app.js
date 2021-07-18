const express = require('express');
const hbs = require('hbs');
const path = require('path');

const weatherData = require('../utils/weatherData');

const app = express();

const port = process.env.port || 3000;

const publicStaticDirPath = path.join(__dirname,'../public');

const viewPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');


app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));



app.get('',(req,res)=>{
    res.render('index',{title:'THE WEATHER APP'})
    
});

app.get('/weather',(req,res)=>{
    const address = req.query.address;
    if(!address){
        res.send('<h1>error you must enter any address</h1>');
    }
    weatherData(address,(error,{temperature,description,cityname})=>{
       if(error){
          res.send(error);
       }
       else{
           res.send({temperature:temperature,description:description,place:cityname});
       }
    })
});

app.get('*',(req,res)=>{
    res.render('404',{title:"THE WEATHER APP"})
});

 app.listen(port,()=>{
     console.log("server is up and running on port:",port);
    
 });
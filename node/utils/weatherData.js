const request = require('request');
const constants = require('../config');

const weatherData = (address,callback)=>{
    const url = constants.openWeatherMap.BASE_URL+encodeURIComponent(address)+'&appid='+constants.openWeatherMap.SECRET_KEY;
    request({url,json:true},(error,{body})=>{
        if(error){
            callback("cant fetch data from open weather map api",undefined);
        }
        else{
            callback(undefined,{
                temperature:body.main.temp,
                description:body.weather[0].description,
                cityname:body.name
            });
        }
    })
    
}

module.exports = weatherData;
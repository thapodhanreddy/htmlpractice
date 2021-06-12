var rrespo = fetch("https://raw.githubusercontent.com/datasets/covid-19/main/data/time-series-19-covid-combined.csv");
var response = rrespo.then(res=>res.text());
var text = response.then(value=>{
    data =value.split('\n');
    info = data;
     infosys = info.splice(0,1);
     console.log(infosys);
     document.getElementById('helo').innerHTML=infosys;
    });




    



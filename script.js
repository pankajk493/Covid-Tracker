const corona_case = document.querySelector(".corona_case");
const total_case = document.querySelector(".total_case");
const recovered = document.querySelector(".recovered");
const total_recover = document.querySelector(".total_recover");
const deaths = document.querySelector(".deaths");
const total_deaths = document.querySelector(".total_deaths");

const corona_caseI = document.querySelector(".corona_caseI");
const total_caseI = document.querySelector(".total_caseI");
const recoveredI = document.querySelector(".recoveredI");
const total_recoverI = document.querySelector(".total_recoverI");
const deathsI = document.querySelector(".deathsI");
const total_deathsI = document.querySelector(".total_deathsI");

const corona = () => {
  fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      corona_case.innerText = "+" + (data.todayCases / 1000).toFixed(1) + "K";
      recovered.innerText = "+" + (data.todayRecovered / 1000).toFixed(1) + "K";
      deaths.innerText = "+" + (data.todayDeaths / 1000).toFixed(1) + "K";
      total_deaths.innerText = "Total: "+(data.deaths / 1000000).toFixed(1) + "M";
      total_case.innerText = "Total: "+(data.cases / 1000000).toFixed(1) + "M";
      total_recover.innerText =
        "Total: "+(data.recovered / 1000000).toFixed(1) + "M";
    });

  fetch("https://disease.sh/v3/covid-19/countries/India")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      corona_caseI.innerText = "+" + (data.todayCases / 1000).toFixed(1) + "K";
      recoveredI.innerText =
        "+" + (data.todayRecovered / 1000).toFixed(1) + "K";
      deathsI.innerText = "+" + (data.todayDeaths / 1000).toFixed(1) + "K";
      total_deathsI.innerText =
        "Total: " + (data.deaths / 1000000).toFixed(1) + "M";
      total_caseI.innerText = "Total: "+(data.cases / 1000000).toFixed(1) + "M";
      total_recoverI.innerText =
        "Total: "+(data.recovered / 1000000).toFixed(1) + "M";
    });
};
corona();

const india = () => {
  fetch("https://api.covid19india.org/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let i = 1;
      
      while (i < 38) {
        let row = document.getElementById("table").insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = data.statewise[i].state;
        if(data.statewise[i].confirmed > 1000 && data.statewise[i].confirmed < 1000000){
            cell2.innerHTML = (data.statewise[i].confirmed/1000).toFixed(1)+"K";
        }else if(data.statewise[i].confirmed > 1000000){
            cell2.innerHTML = (data.statewise[i].confirmed/1000000).toFixed(1)+"M";
        }else{
            cell2.innerHTML = (data.statewise[i].confirmed);
        }
        cell3.innerHTML = data.statewise[i].active;
        cell4.innerHTML = (data.statewise[i].recovered/1000).toFixed(1)+"K";
        cell5.innerHTML = data.statewise[i].deaths;
        i++;
      }
    });
};
india();

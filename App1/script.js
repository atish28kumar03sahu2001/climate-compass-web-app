let SBTN = document.getElementById("SUBMIT");
SBTN.addEventListener("click",()=>{
    let location = document.getElementById("location").value;
    GetAQI(location);
})
let GetAQI = async (location) => {
    let API_KEY = "Usd4M7zuzRkf7YBVifJFdQ==StrOB8wfcDp3w060";

    return fetch(`https://api.api-ninjas.com/v1/airquality?city=${location}`,{
        method: 'GET',
        headers : {'X-Api-Key': `${API_KEY}`,},
        contentType: 'application/json',
    })
    .then(res => {
        if(!res.ok) {
            throw new Error (`Network Responses Was Not Ok`);
        }
        return res.json();
    })
    .then(res => {
        let PM25V = document.getElementById("PM25V").innerHTML = `${res["PM2.5"].concentration} µg/m³`;
        if(parseFloat(PM25V) >= 0 && parseFloat(PM25V) <= 12){
            document.getElementById("PM25V").style.color = "#8dff85";
        }
        if(parseFloat(PM25V) >= 12.1 && parseFloat(PM25V) <= 35.4){
            document.getElementById("PM25V").style.color = "#11ff00";
        }
        if(parseFloat(PM25V) >= 35.5 && parseFloat(PM25V) <= 55.4){
            document.getElementById("PM25V").style.color = "#fff761";
        }
        if(parseFloat(PM25V) >= 55.5 && parseFloat(PM25V) <= 150.4){
            document.getElementById("PM25V").style.color = "#f77800";
        }
        if(parseFloat(PM25V) >= 150.5 && parseFloat(PM25V) <= 250.4){
            document.getElementById("PM25V").style.color = "#ff0000";
        }
        if(parseFloat(PM25V) >= 250.5 && parseFloat(PM25V) <= 500.4){
            document.getElementById("PM25V").style.color = "#bb00e6";
        }

        let PM25AQI = document.getElementById("PM25AQI").innerHTML = `${res["PM2.5"].aqi} (AQI)`;
        if(parseInt(PM25AQI) >= 0 && parseInt(PM25AQI) <= 50){
            document.getElementById("PM25AQI").style.color = "#8dff85";
        }
        if(parseInt(PM25AQI) >= 51 && parseInt(PM25AQI) <= 100){
            document.getElementById("PM25AQI").style.color = "#11ff00";
        }
        if(parseInt(PM25AQI) >= 101 && parseInt(PM25AQI) <= 150){
            document.getElementById("PM25AQI").style.color = "#fff761";
        }
        if(parseInt(PM25AQI) >= 151 && parseInt(PM25AQI) <= 200){
            document.getElementById("PM25AQI").style.color = "#f77800";
        }
        if(parseInt(PM25AQI) >= 201 && parseInt(PM25AQI) <= 300){
            document.getElementById("PM25AQI").style.color = "#ff0000";
        }
        if(parseInt(PM25AQI) >= 301 && parseInt(PM25AQI) <= 500){
            document.getElementById("PM25AQI").style.color = "#bb00e6";
        }

        let PM10V = document.getElementById("PM10V").innerHTML = `${res["PM10"].concentration} µg/m³`;
        if(parseFloat(PM10V) >= 0 && parseFloat(PM10V) <= 54){
            document.getElementById("PM10V").style.color = "#8dff85";
        }
        if(parseFloat(PM10V) >= 55 && parseFloat(PM10V) <= 154){
            document.getElementById("PM10V").style.color = "#11ff00";
        }
        if(parseFloat(PM10V) >= 155 && parseFloat(PM10V) <= 254){
            document.getElementById("PM10V").style.color = "#fff761";
        }
        if(parseFloat(PM10V) >= 255 && parseFloat(PM10V) <= 354){
            document.getElementById("PM10V").style.color = "#f77800";
        }
        if(parseFloat(PM10V) >= 355 && parseFloat(PM10V) <= 424){
            document.getElementById("PM10V").style.color = "#ff0000";
        }
        if(parseFloat(PM10V) >= 425 && parseFloat(PM10V) <= 604){
            document.getElementById("PM10V").style.color = "#bb00e6";
        }

        let PM10AQI = document.getElementById("PM10AQI").innerHTML = `${res["PM10"].aqi} (AQI)`;
        if(parseInt(PM10AQI) >= 0 && parseInt(PM10AQI) <= 50){
            document.getElementById("PM10AQI").style.color = "#8dff85";
        }
        if(parseInt(PM10AQI) >= 51 && parseInt(PM10AQI) <= 100){
            document.getElementById("PM10AQI").style.color = "#11ff00";
        }
        if(parseInt(PM10AQI) >= 101 && parseInt(PM10AQI) <= 150){
            document.getElementById("PM10AQI").style.color = "#fff761";
        }
        if(parseInt(PM10AQI) >= 151 && parseInt(PM10AQI) <= 200){
            document.getElementById("PM10AQI").style.color = "#f77800";
        }
        if(parseInt(PM10AQI) >= 201 && parseInt(PM10AQI) <= 300){
            document.getElementById("PM10AQI").style.color = "#ff0000";
        }
        if(parseInt(PM10AQI) >= 301 && parseInt(PM10AQI) <= 500){
            document.getElementById("PM10AQI").style.color = "#bb00e6";
        }

        let O3V = document.getElementById("O3V").innerHTML = `${res["O3"].concentration} ppb`;
        if(parseFloat(O3V) >= 0 && parseFloat(O3V) <= 54){
            document.getElementById("O3V").style.color = "#8dff85";
        }
        if(parseFloat(O3V) >= 55 && parseFloat(O3V) <= 70){
            document.getElementById("O3V").style.color = "#11ff00";
        }
        if(parseFloat(O3V) >= 71 && parseFloat(O3V) <= 85){
            document.getElementById("O3V").style.color = "#fff761";
        }
        if(parseFloat(O3V) >= 86 && parseFloat(O3V) <= 105){
            document.getElementById("O3V").style.color = "#f77800";
        }
        if(parseFloat(O3V) >= 106 && parseFloat(O3V) <= 200){
            document.getElementById("O3V").style.color = "#ff0000";
        }
        if(parseFloat(O3V) >= 201 && parseFloat(O3V) <= 405){
            document.getElementById("O3V").style.color = "#bb00e6";
        }

        let O3AQI = document.getElementById("O3AQI").innerHTML = `${res["O3"].aqi} (AQI)`;
        if(parseInt(O3AQI) >= 0 && parseInt(O3AQI) <= 50){
            document.getElementById("O3AQI").style.color = "#8dff85";
        }
        if(parseInt(O3AQI) >= 51 && parseInt(O3AQI) <= 100){
            document.getElementById("O3AQI").style.color = "#11ff00";
        }
        if(parseInt(O3AQI) >= 101 && parseInt(O3AQI) <= 150){
            document.getElementById("O3AQI").style.color = "#fff761";
        }
        if(parseInt(O3AQI) >= 151 && parseInt(O3AQI) <= 200){
            document.getElementById("O3AQI").style.color = "#f77800";
        }
        if(parseInt(O3AQI) >= 201 && parseInt(O3AQI) <= 300){
            document.getElementById("O3AQI").style.color = "#ff0000";
        }
        if(parseInt(O3AQI) >= 301 && parseInt(O3AQI) <= 500){
            document.getElementById("O3AQI").style.color = "#bb00e6";
        }

        let NO2V = document.getElementById("NO2V").innerHTML = `${res["NO2"].concentration} ppb`;
        if(parseFloat(NO2V) >= 0 && parseFloat(NO2V) <= 53){
            document.getElementById("NO2V").style.color = "#8dff85";
        }
        if(parseFloat(NO2V) >= 54 && parseFloat(NO2V) <= 100){
            document.getElementById("NO2V").style.color = "#11ff00";
        }
        if(parseFloat(NO2V) >= 101 && parseFloat(NO2V) <= 360){
            document.getElementById("NO2V").style.color = "#fff761";
        }
        if(parseFloat(NO2V) >= 361 && parseFloat(NO2V) <= 649){
            document.getElementById("NO2V").style.color = "#f77800";
        }
        if(parseInt(NO2V) >= 650 && parseFloat(NO2V) <= 1249){
            document.getElementById("NO2V").style.color = "#ff0000";
        }
        if(parseFloat(NO2V) >= 1250 && parseFloat(NO2V) <= 2049){
            document.getElementById("NO2V").style.color = "#bb00e6";
        }

        let NO2AQI = document.getElementById("NO2AQI").innerHTML = `${res["NO2"].aqi} (AQI)`;
        if(parseInt(NO2AQI) >= 0 && parseInt(NO2AQI) <= 50){
            document.getElementById("NO2AQI").style.color = "#8dff85";
        }
        if(parseInt(NO2AQI) >= 51 && parseInt(NO2AQI) <= 100){
            document.getElementById("NO2AQI").style.color = "#11ff00";
        }
        if(parseInt(NO2AQI) >= 101 && parseInt(NO2AQI) <= 150){
            document.getElementById("NO2AQI").style.color = "#fff761";
        }
        if(parseInt(NO2AQI) >= 151 && parseInt(NO2AQI) <= 200){
            document.getElementById("NO2AQI").style.color = "#f77800";
        }
        if(parseInt(NO2AQI) >= 201 && parseInt(NO2AQI) <= 300){
            document.getElementById("NO2AQI").style.color = "#ff0000";
        }
        if(parseInt(NO2AQI) >= 301 && parseInt(NO2AQI) <= 500){
            document.getElementById("NO2AQI").style.color = "#bb00e6";
        }

        let SO2V = document.getElementById("SO2V").innerHTML = `${res["SO2"].concentration} ppb`;
        if(parseFloat(SO2V) >= 0 && parseFloat(SO2V) <= 35){
            document.getElementById("SO2V").style.color = "#8dff85";
        }
        if(parseFloat(SO2V) >= 36 && parseFloat(SO2V) <= 75){
            document.getElementById("SO2V").style.color = "#11ff00";
        }
        if(parseFloat(SO2V) >= 75 && parseFloat(SO2V) <= 185){
            document.getElementById("SO2V").style.color = "#fff761";
        }
        if(parseFloat(SO2V) >= 186 && parseFloat(SO2V) <= 304){
            document.getElementById("SO2V").style.color = "#f77800";
        }
        if(parseInt(SO2V) >= 305 && parseFloat(SO2V) <= 604){
            document.getElementById("SO2V").style.color = "#ff0000";
        }
        if(parseFloat(SO2V) >= 605 && parseFloat(SO2V) <= 804){
            document.getElementById("SO2V").style.color = "#bb00e6";
        }

        let SO2AQI = document.getElementById("SO2AQI").innerHTML =`${res["SO2"].aqi} (AQI)`;
        if(parseInt(SO2AQI) >= 0 && parseInt(SO2AQI) <= 50){
            document.getElementById("SO2AQI").style.color = "#8dff85";
        }
        if(parseInt(SO2AQI) >= 51 && parseInt(SO2AQI) <= 100){
            document.getElementById("SO2AQI").style.color = "#11ff00";
        }
        if(parseInt(SO2AQI) >= 101 && parseInt(SO2AQI) <= 150){
            document.getElementById("SO2AQI").style.color = "#fff761";
        }
        if(parseInt(SO2AQI) >= 151 && parseInt(SO2AQI) <= 200){
            document.getElementById("SO2AQI").style.color = "#f77800";
        }
        if(parseInt(SO2AQI) >= 201 && parseInt(SO2AQI) <= 300){
            document.getElementById("SO2AQI").style.color = "#ff0000";
        }
        if(parseInt(SO2AQI) >= 301 && parseInt(SO2AQI) <= 500){
            document.getElementById("SO2AQI").style.color = "#bb00e6";
        }

        let COV = document.getElementById("COV").innerHTML = `${res["CO"].concentration} ppm`;
        if(parseFloat(COV) >= 0 && parseFloat(COV) <= 53){
            document.getElementById("COV").style.color = "#8dff85";
        }
        if(parseFloat(COV) >= 54 && parseFloat(COV) <= 100){
            document.getElementById("COV").style.color = "#11ff00";
        }
        if(parseFloat(COV) >= 101 && parseFloat(COV) <= 360){
            document.getElementById("COV").style.color = "#fff761";
        }
        if(parseFloat(COV) >= 361 && parseFloat(COV) <= 649){
            document.getElementById("COV").style.color = "#f77800";
        }
        if(parseInt(COV) >= 650 && parseFloat(COV) <= 1249){
            document.getElementById("COV").style.color = "#ff0000";
        }
        if(parseFloat(COV) >= 1250 && parseFloat(COV) <= 2049){
            document.getElementById("COV").style.color = "#bb00e6";
        }
        if(parseFloat(COV) >= 2050){
            document.getElementById("COV").style.color = "#bb00e6";
        }

        let COAQI = document.getElementById("COAQI").innerHTML = `${res["CO"].aqi} (AQI)`;
        if(parseInt(COAQI) >= 0 && parseInt(COAQI) <= 50){
            document.getElementById("COAQI").style.color = "#8dff85";
        }
        if(parseInt(COAQI) >= 51 && parseInt(COAQI) <= 100){
            document.getElementById("COAQI").style.color = "#11ff00";
        }
        if(parseInt(COAQI) >= 101 && parseInt(COAQI) <= 150){
            document.getElementById("COAQI").style.color = "#fff761";
        }
        if(parseInt(COAQI) >= 151 && parseInt(COAQI) <= 200){
            document.getElementById("COAQI").style.color = "#f77800";
        }
        if(parseInt(COAQI) >= 201 && parseInt(COAQI) <= 300){
            document.getElementById("COAQI").style.color = "#ff0000";
        }
        if(parseInt(COAQI) >= 301 && parseInt(COAQI) <= 500){
            document.getElementById("COAQI").style.color = "#bb00e6";
        }

        let AAQI = document.getElementById("AAQI").innerHTML = `${res.overall_aqi} (AQI)`;
        if(parseInt(AAQI) >= 0 && parseInt(AAQI) <= 50){
            document.getElementById("AAQI").style.color = "#8dff85";
        }
        if(parseInt(AAQI) >= 51 && parseInt(AAQI) <= 100){
            document.getElementById("AAQI").style.color = "#11ff00";
        }
        if(parseInt(AAQI) >= 101 && parseInt(AAQI) <= 150){
            document.getElementById("AAQI").style.color = "#fff761";
        }
        if(parseInt(AAQI) >= 151 && parseInt(AAQI) <= 200){
            document.getElementById("AAQI").style.color = "#f77800";
        }
        if(parseInt(AAQI) >= 201 && parseInt(AAQI) <= 300){
            document.getElementById("AAQI").style.color = "#ff0000";
        }
        if(parseInt(AAQI) >= 301 && parseInt(AAQI) <= 500){
            document.getElementById("AAQI").style.color = "#bb00e6";
        }
        
    })
    .catch(error => {
        alert(`Error : ${error}`);
    });
}
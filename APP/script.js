let submit = document.getElementById("SUBMIT");
submit.addEventListener('click', () => {
    let location = document.getElementById("location").value;
    getData(location);
});
const getData = async (location) => {
    let API_KEY = "mdGL3YgWQ3rkuO/mVf9mkg==wDzGqQL0RNpkAsoi";
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/weather?city=${location}`,{
            method: 'GET',
            headers : {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok){
            throw new Error("Network Response Was Not Ok");
        }
        const result = await response.json();

        document.getElementById("temperature").innerHTML = `${result.temp}° C`;
        document.getElementById("mintemperature").innerHTML = `${result.min_temp}° C`;
        document.getElementById("maxtemperature").innerHTML = `${result.max_temp}° C`;

        document.getElementById("windspeed").innerHTML = `${result.wind_speed} km/h`;
        document.getElementById("winddegree").innerHTML = `${result.wind_degrees}°`;
        document.getElementById("humidity").innerHTML = `${result.humidity}%`;

        let sunr = new Date(parseInt(result.sunrise) * 1000);
        let sunr_hr = sunr.getHours();
        let sunr_mn = sunr.getMinutes();

        let suns = new Date(parseInt(result.sunset) * 1000);
        let suns_hr = suns.getHours();
        let suns_mn = suns.getMinutes();

        document.getElementById("sunrise").innerHTML = `${sunr_hr} : ${sunr_mn} AM`;
        document.getElementById("moonrise").innerHTML = `${suns_hr} : ${suns_mn} PM`;
        document.getElementById("feelslike").innerHTML = `${result.feels_like}° C`;
    } catch (error) {
        alert(`Error : ${error}`);
    }
}
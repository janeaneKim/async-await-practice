//Assignment 2: create and call an async function that fetches remote API data

async function cityData (cityName){
    let city = cityName.toLowerCase();
    fetch(`https://geocode.xyz/${city}?json=1`)
    .then(result => result.json())
    .then((data) => {
        console.log(`Your city's latitude and longitude are ${data.longt} and ${data.latt}. `);
    })
}


cityData("Paris");
//Your city's latitude and longitude are 2.34280 and 48.85756.

cityData("MADISON");
// //Your city's latitude and longitude are -89.39598 and 43.07026.

cityData("SAlinAs");
// //Your city's latitude and longitude are -42.26929 and -16.14458. 




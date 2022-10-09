const xhr = new XMLHttpRequest ();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType = "json";
xhr.onload = function displayResult (){
    const countries = xhr.response;
        countries.forEach((d) =>{ 
            console.log(`${d.name.common} ${d.capital} ${d.flags}`) 
    });
} 
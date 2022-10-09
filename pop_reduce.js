const xhr = new XMLHttpRequest ();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType = "json";
xhr.onload = function displayResult (){
    const countries = xhr.response;
            let result = countries.reduce(function(accu , curr) {
                return accu+curr.population;
            },0);
            
            console.log("The countries total population is:",result)
}
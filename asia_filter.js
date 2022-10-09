const xhr = new XMLHttpRequest ();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType = "json";
xhr.onload = function displayResult (){
    const countries = xhr.response;
    let result = countries.filter((element)=>{
        return element.region === "Asia";
 })
 console.log(result); 
}
var request = new XMLHttpRequest ();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();
request.onload = function print()
{

  var Data = JSON.parse (this.responseText);
  for (let country of Data){
console.log(country.name);
console.log(country.region);
console.log(country.subregion);
console.log(country.population);

  }

}
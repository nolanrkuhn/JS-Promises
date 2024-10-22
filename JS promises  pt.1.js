let favNumber = 10;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favNumber}?json`, function(data) {
  console.log(data);
});

let favNumbers = [42, 68, 101];
$.getJSON(`${baseURL}/${favNumbers}?json`, function(data) {
  console.log(data);
});

let facts = [];

function getFact(number) {
  return $.getJSON(`${baseURL}/${number}?json`);
}

Promise.all([getFact(favNumber), getFact(favNumber), getFact(favNumber), getFact(favNumber)])
  .then(factsArray => {
    factsArray.forEach(fact => {
      facts.push(fact.text); 
    });

    facts.forEach(fact => {
      $("body").append(`<p>${fact}</p>`);
    });
  })
  .catch(err => console.log('Error:', err));



  
let favNumber = 3;
let baseURL = "http://numbersapi.com";


async function NumFacts_1() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
NumFacts_1();


const favNumbers = [6, 9, 22];
async function NumFacts_2() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}
NumFacts_2();


async function NumFacts_3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
NumFacts_3();
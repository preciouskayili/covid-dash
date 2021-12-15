let spinners = document.getElementById("spin");
const spins = () => {
  console.log(spinners);
};
spins();
const markup = document.getElementsByClassName("data");
fetch("https://disease.sh/v3/covid-19/all")
  .then((response) => {
    if (!response.ok) {
      throw Error("Error fetching results");
    }
    return response.json();
  })
  .then((res) => {
    markup[0].innerHTML = `${res.cases.toLocaleString()}`;
    markup[1].innerHTML = `${res.active.toLocaleString()}`;
    markup[2].innerHTML = `${res.recovered.toLocaleString()}`;
    markup[3].innerHTML = `${res.critical.toLocaleString()}`;
    markup[4].innerHTML = `${res.tests.toLocaleString()}`;
    markup[5].innerHTML = `${res.deaths.toLocaleString()}`;
  })
  .catch((err) => {
    console.log(err);
  });

const fetchResult = (country) => {
  console.log(country);
  const markup = document.getElementsByClassName("data");
  document.getElementById("title").innerHTML = `${country}`;
  fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error fetching results");
      }

      return response.json();
    })
    .then((res) => {
      markup[0].innerHTML = `${res.cases.toLocaleString()}`;
      markup[1].innerHTML = `${res.active.toLocaleString()}`;
      markup[2].innerHTML = `${res.recovered.toLocaleString()}`;
      markup[3].innerHTML = `${res.critical.toLocaleString()}`;
      markup[4].innerHTML = `${res.tests.toLocaleString()}`;
      markup[5].innerHTML = `${res.deaths.toLocaleString()}`;
    })
    .catch((err) => {
      console.log(err);
    });
};

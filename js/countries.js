const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  console.log(countries[0]);
  const countriesHTML = countries.map((country) => getCountryHTML(country));
  //   console.log(countriesHTML[0]);
  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join("");
};

// original

// const getCountryHTML = (country) => {
//   return `
//     <div class="country">
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}">
//     </div>
//     `;
// };

// Option 1

// const getCountryHTML = (country) => {
//   const { name, flags } = country;

//   return `
//     <div class="country">
//     <h2>${name.common}</h2>
//     <img src="${flags.png}">
//     </div>
//     `;
// };

// Option 2

const getCountryHTML = ({ name, flags, area, region }) => {
  //   const { name, flags } = country;

  return `
    <div class="country">
    <h2 title="${name.official}">${name.common}</h2>
    <!-- <h2>${name.common}<span class="officialName"> (${name.official})</span></h2> -->
    
    <p> Area:${area}km<sup>2</sup> </p>
    <p>Continent: ${region}</p>


    <img src="${flags.png}">
    </div>
    `;
};

loadCountries();

const form = document.querySelector('.form');
const country = document.querySelector('.country');
const flag = document.querySelector('.flag');
const native_name = document.querySelector('.native_name');
const population = document.querySelector('.population');
const region = document.querySelector('.region');
const sub_region = document.querySelector('.sub_region');
const capital = document.querySelector('.capital');
const top_level_domain = document.querySelector('.top_level_domain');
const currencies = document.querySelector('.currencies');
const languages = document.querySelector('.languages');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.querySelector('.input_box').value;
    console.log(input);

    fetch(`https://restcountries.com/v3.1/name/${input}`)
        .then(function (data) {
            return data.json();
        })
        .then(function (jsondata) {
            const flagurl = jsondata[0].flags.png;
            flag.src = flagurl;

            const country_name = jsondata[0].name.common;
            country.innerHTML = country_name;

            const native = Object.keys(jsondata[0].name.nativeName);
            native_name.innerHTML = native;

            const populations = jsondata[0].population;
            population.innerHTML = populations;

            const regions = jsondata[0].region;
            region.innerHTML = regions;

            const sub_regions = jsondata[0].subregion;
            sub_region.innerHTML = sub_regions;

            const capital_1 = jsondata[0].capital;
            capital.innerHTML = capital_1;

            const top_level_domains = jsondata[0].tld;
            top_level_domain.innerHTML = top_level_domains;

            // const currencies_1 = Object.keys(jsondata[0].currencies);
            // currencies.innerHTML = currencies_1;

            const currencies_1 = jsondata[0].currencies;
            const currency_names = Object.keys(currencies_1).map(code => currencies_1[code].name);
            currencies.innerHTML = currency_names;


            const languages_1 = Object.values(jsondata[0].languages);
            languages.innerHTML = languages_1;


        })

})
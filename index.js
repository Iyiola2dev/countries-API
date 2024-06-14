const fecthCountries = async () => {
    const data = await fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
        return data;
    })
    .catch((error) =>{
        console.log(error)
    })

    const mainBody = document.getElementById('main')
    const countries = data.map((country)=>{
        const countryDiv = document.createElement("div")
        
        countryDiv.setAttribute('class','flex flex-col items-center bg-slate-100 w-fit items-center gap-3')
        countryDiv.innerHTML = `
          <img class="h-[9rem] w-[16rem]" src = ${country.flags.png} alt =${country.flags.alt}/>
            <div class="flex flex-col items-start">
            <p>Name: ${country.name.common}</p>
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population.toLocaleString()}</p>
            <a href=${country.maps.goggleMaps}><button>Google maps</button></a>
            
        
        </div>
        `
        mainBody.appendChild(countryDiv)
    })
}

fecthCountries()



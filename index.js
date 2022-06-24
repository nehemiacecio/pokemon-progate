const getPoke = document.getElementById("button");
const resultPoke = document.getElementById("pokemon-result");

getPoke.addEventListener('click', (e)=>{
    // console.log('hello')
    e.preventDefault()
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30",{
        method:'GET'
    })
        .then(response => response.json())
        .then(data =>{
            // console.log(data)
            data.results.forEach(value => {
                fetch(value.url,{
                    method:'GET'
                })
                    .then(response => response.json())
                    .then(data =>{
                        // console.log(data)
                        const {
                            id,
                            name,
                            sprites,
                            types
                        } = data;
                        const sprite = sprites['front_default'];
                        const type = types[0]['type']['name'];

                        resultPoke.innerHTML += `
                            <div class="card" style="width: 18rem;">
                                <img src="${sprite}" class="card-img-top" alt="${name}">
                            <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                         <p class="card-text">${type}</p>
                         </div>
                    </div>
                        `
                    })
            })
        });
});
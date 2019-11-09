//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadUser() {
        this.data.users = []
        $.ajax({
            type: 'GET',
            url: 'https://randomuser.me/api/?results=7',
            success: (data) => {
                 const results = data.results
                 for(let result of results){
                     let user = {"firstName": result.name.first, "lastName": result.name.last, "city": result.location.city, "state": result.location.state, "photo": result.picture.medium }
                     this.data.users.push(user)
                     
                 }
            }
        });

    }

    loadQuote() {

        $.ajax({
            type: 'GET',
            url: 'https://api.kanye.rest?format=text',
            success: (data) => {
                this.data.quote = data
            }
        });

    }

    loadPokemon() {
        const x = (Math.floor(Math.random() * 400))
        this.data.pokemonArray = []
        $.ajax({
            type: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${x}/`,
            success: (data) => {
                // this.data.pokemon = data.sprites.front_default
                    let pokemon = {"name": data.name, "image": data.sprites.front_default }
                    this.data.pokemonArray.push(pokemon)
                    
                }
            })
        }
    

    loadMeat() {
        $.ajax({
            type: 'GET',
            url: `https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html`,
            success: (data) => {
                this.data.meat = data
            }
        });

    }



    loadData() {

        this.loadUser()
        this.loadQuote()
        this.loadPokemon()
        this.loadMeat()



    }
}

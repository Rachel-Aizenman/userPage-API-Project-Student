// Fill in the functions for your Renderer Class

class Renderer {
    constructor(user) {
        this.user = user
    }
        _renderUsers(users) {
            $("#display-users").empty()
            const source = $("#users-template").html()
            const template = Handlebars.compile(source)
            const newHTML = template(users[0])
            $("#display-users").append(newHTML)
        }
    
    _renderFriends(users) {
        $("#display-friends").empty()
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        for(let i = 0; i < 6; i++){
        const newHTML = template(users[i])
        $("#display-friends").append(newHTML)
        }

    }

    _renderQuote(quote) {
        $("#display-quote").empty()
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({quote: quote})
        $("#display-quote").append(newHTML)
        


    }

    _renderPokemon(pokemonArray) {
        const pokemon = pokemonArray[0]
        console.log(pokemon)
        $("#display-pokemon").empty()
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(pokemon)
        $("#display-pokemon").append(newHTML)


    }

    _renderMeat(meat) {
        $("#display-meat").empty()
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({meat: meat})
        $("#display-meat").append(newHTML)



    }


    render(data) {
        this._renderUsers(data.users)
        this._renderFriends(data.users)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemonArray)
        this._renderMeat(data.meat)

        //invokes all the individual _render methods
    }
}



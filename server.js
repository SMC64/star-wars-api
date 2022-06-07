const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

let swCharacters = {
    'darth vader' : {
        name: 'Darth Vader',
        affiliation: 'Sith, Galactic Empire',
        species: 'Human',
        weapon: 'Lightsaber'
    },
    'yoda' : {
        name: 'Yoda',
        affiliation: 'Jedi Order',
        species: 'UNKNOWN',
        weapon: 'Lightsaber'
    },
    'han solo' : {
        name: 'Han Solo',
        affiliation: 'Rebel Alliance',
        species: 'Human',
        weapon: 'Blaster Pistol'
    },
    'chewbacca' : {
        name: 'Chewbacca',
        affiliation: 'Rebel Alliance, The Resistance',
        species: 'Wookiee',
        weapon: 'Bowcaster'
    }, 
    'luke skywalker': {
        name: 'Luke Skywalker',
        affiliation: 'Rebel Alliance, Jedi Order',
        species: 'Human',
        weapon: 'Lightsaber, Blaster Pistol'
    },
    'unknown' : {
        name: 'UNKNOWN',
        affiliation: 'UNKNOWN',
        species: 'UNKNOWN',
        weapon: 'UNKNOWN'
    }
}

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) =>{
    response.json(swCharacters)
})

app.get('/api/:character', (request, response) => {
    const characterName = request.params.character.toLowerCase()
    if(swCharacters[characterName]){
        response.json(swCharacters[characterName])
    } else {
        response.json(swCharacters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})
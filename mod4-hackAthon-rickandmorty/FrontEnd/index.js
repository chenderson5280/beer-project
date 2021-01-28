base_URL = 'http://localhost:3000/characters'

fetch(base_URL)
    .then(response => response.json())
    .then(characters => displayCharacters(characters))
    
    function displayCharacters(characters){
        characters.forEach(character => showCharacter(character))
    }

    function showCharacter(character){
        const characterCard = document.createElement('div')
        
        const characterName = document.createElement('h2')
        characterName.textContent = character.name

        const characterSpecies = document.createElement('h4')
        characterSpecies.textContent = character.species

        const characterImage = document.createElement('img')
        characterImage.src = character.image

        characterCard.append(characterName,characterSpecies,characterImage)
        document.body.append(characterCard)

        characterCard.addEventListener('click', (event) => {
            console.log()
        })

    }

    




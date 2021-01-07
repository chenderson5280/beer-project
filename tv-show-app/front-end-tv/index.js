// console.log('Fuckin Loaded')

const showContainer = document.querySelector('.show-container')

shows = [
    {"id": 1,
    "name": "Under the Dome",
    "officialSite": "http://www.cbs.com/shows/under-the-dome/",
    "image": {"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"},
    "likes": 0,
    "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>"
    },
    {"id": 2,
    "name": "Person of Interest",
    "officialSite": "http://www.cbs.com/shows/person_of_interest/",
    "image": {"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg"},
    "likes": 0,
    "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>"
    },
    {"id": 3,
    "name": "Bitten",
    "officialSite": "http://bitten.space.ca/",
    "image": {"medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg" },
    "likes": 0,
    "summary": "<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her \"happily ever after\" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>"
    }
]
displayShows(shows)

function displayShows(shows){
    shows.forEach(show => showProgram(show))
}

function showProgram(show){
    const showCard = document.createElement('div')
    showCard.classList.add('show-card')

    const showName = document.createElement('h3')
    showName.textContent = show.name

    const showOfficialSite = document.createElement('h4')
    showOfficialSite.innerHTML = `<a href='${show.officialSite}'>-> ${show.name}'s Official Site <-</a>`

    const showImage = document.createElement('img')
    showImage.src = show.image.medium

    const showLikes = document.createElement('h4')
    showLikes.textContent = `${show.likes} : Likes`

    showCard.append(showName, showImage, showOfficialSite, showLikes)
    showContainer.append(showCard)
}




let userName = prompt('Please type your name')

alert(`Oh, hello ${userName}!`)

let userPlay = confirm(` ${userName}... do you want to take a gamble?`)

console.log(userPlay)

const playGame = (choice) => {
  if (choice) {
    alert('Okay lets gamble!')
  } else {
    alert(`Okay ${userName} maybe next time`)
  }
}

const choosePill = () => {
  let pillChoice = prompt(
    'You see three pills in front of you. Do you want to take the RED, BLUE, or GREEN pill?'
  )
  if (pillChoice === 'RED') {
    alert('Congrats! you now get to choose a superpower and a mystical animal!')
    let superPower = prompt('Do you want Super Sonic Speed or Super Strength')
    alert(`Congrats, ${userName} now you have ${superPower}!`)
    let mythicalAnimal = prompt(`Do you want a Dragon or a T-rex?`)
    alert(`Congrats ${userName} now you have a ${mythicalAnimal}!`)
  } else if (pillChoice === 'GREEN') {
    alert('Lucky you! Choose Wisely....')
    let sportsTeam = prompt('Chelsea or Man City?')
    if (sportsTeam === 'Chelsea') {
      let chelseaPlayer = prompt(
        'Good choice! Do you like Reece James or Mason Mount better?'
      )
      alert(`Great choice! Can't go wrong with ${chelseaPlayer}!`)
    } else if (sportsTeam === 'Man City') {
      let cityPlayer = prompt(
        `Yikes... i'll let it slide... At least tell me... Haaland or Salah? `
      )
      if (cityPlayer === 'Haaland') {
        alert(`Okay you're safe... for now...`)
      } else if (cityPlayer === 'Salah') {
        alert('Ew. Liverpool stinks')
      } else {
      }
    } else {
      alert(`Hopefully it's not Liverpool`)
    }
  } else if (pillChoice === 'BLUE') {
    const numberChoice = prompt('Congrats! Pick a number between 1 and 5')

    switch (numberChoice) {
      case '1':
        alert('Congrats! You get to meet Reece James')
        console.log('Reece')
        break
      case '2':
        alert('Oh no! You fell off the grand canyon')
        break
      case '3':
        alert('How epic! You now have the force ')
        break
      case '4':
        alert(
          `Oh no! You've been teleported into a shark tank. Hope you can swim!`
        )
        break
      case '5':
        alert(`Wow, you've just inherited Elon Musks networth!`)
      default:
        alert(`That's not a choice, try again.`) //Cant figure out how to replay their choice
    }

    console.log(numberChoice)
  } else {
    alert("That wasn't a choice")
    choosePill()
  }
}

choosePill()

const replay = prompt('Play again? Type yes')
if (replay === 'yes') {
  choosePill()
}

// playGame(userPlay)

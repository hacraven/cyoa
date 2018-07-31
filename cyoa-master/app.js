const name = prompt('What is your name?')

const hobby = prompt(`Hello ${name}. Are you a hiker, swimmer or runner?`)

switch (hobby) {
  case 'hiker':
    hiker(prompt('You are hiking an unmarked trail. Do you go left, right, or straight?'))
    break
  case 'swimmer':
    swimmer(prompt('Would you like to swim in a pool or the ocean?'))
    break
  case 'runner':
    runner(prompt('How far are you running today: 5k, 10k, or marathon?'))
    break
  default:
    alert('You have failed to select a valid option.')
}

function hiker(choice) {
  switch (choice) {
    case 'left':
      alert('You walked up a killer hill and are now looking at an amazing view!!!.')
      break
    case 'right':
      alert('You tripped over a log and rolled to the bottom of a very steep hill.')
      break
    case 'staight':
      alert('You just ran into an angry bear. Good luck surviving that!')
      break
    default:
      alert('You have failed to select a valid option.')
  }
}

function swimmer(choice) {
  switch (choice) {
    case 'pool':
      alert('You had a lovely swim.')
      break
    case 'ocean':
      alert('You got stung by a school of jellyfish.  Ouch!')
      break
    default:
      alert('You have failed to select a valid option.')
  }
}

function runner(choice) {
  switch (choice) {
    case '5k':
      alert('You picked a run that you are in shape for!  Awesome!')
      break
    case '10k':
      alert('You will struggle a bit, but you can finish!')
      break
    case 'marathon':
      alert('Wow! OVERACHEIVER.')
      break
    default:
      alert('You have failed to select a valid option.')
  }
}


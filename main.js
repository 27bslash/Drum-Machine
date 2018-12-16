
var x = document.querySelectorAll('.drum-pad')
console.log(x)
playSound = () => {
  document.addEventListener("keydown", function (event) {
    let keyTrigger = event.key.toString().toUpperCase()
    const sound = document.getElementById(keyTrigger)
    sound.currentTime = 0;
    sound.play()
    switch (event.keyCode) {
      case 81:
        display.textContent = x[0].id
        break
      case 87:
        display.textContent = x[1].id
        break
      case 69:
        display.textContent = x[2].id
        break
      case 65:
        display.textContent = x[3].id
        break
      case 83:
        display.textContent = x[4].id
        break
      case 68:
        display.textContent = x[5].id
        break
      case 90:
        display.textContent = x[6].id
        break
      case 88:
        display.textContent = x[7].id
        break
      case 67:
        display.textContent = x[8].id
        break
    }
  })
}
heater1 = () => {
  var sound = document.getElementById('Q')
  sound.currentTime = 0
  sound.play();
  display.textContent = 'Heater 1'

}
heater2 = () => {
  var sound = document.getElementById('W')
  sound.currentTime = 0
  sound.play();
  display.textContent = 'Heater-2'

}
heater3 = () => {
  var sound = document.getElementById('E')
  sound.currentTime = 0
  sound.play();
  display.textContent = 'Heater-3'

}
heater4 = () => {
  var sound = document.getElementById('A')
  sound.currentTime = 0
  sound.play();
  display.textContent = 'Heater-4'

}
clap = () => {
  var sound = document.getElementById('S')
  sound.currentTime = 0
  sound.play();
  display.textContent = 'Clap'

}
openHH = () => {
  var sound = document.getElementById('D')
  sound.currentTime = 0
  sound.play();
  display.textContent = 'Open-HH'

}
kickNHat = () => {
  var sound = document.getElementById('Z')
  sound.currentTime = 0
  sound.play();
  display.textContent = 'Kick n Hat'

}
kick = () => {
  var sound = document.getElementById('X')
  sound.currentTime = 0
  sound.play();
  display.textContent = 'Kick'
}
closedHH = () => {
  var sound = document.getElementById('C')
  sound.currentTime = 0
  sound.play();
  display.textContent = 'Closed-HH'

}


var bank = 'heater-kit'
//switch statement for keys //
function handleKeyPress(event) {
  playSound()
}
handleKeyPress()
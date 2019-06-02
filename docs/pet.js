console.log("pet script running")


const petButton = document.querySelector("#pet")
const feedButton = document.querySelector("#feed")
const playButton = document.querySelector("#play")
const status = document.querySelector("#status")
const imageDiv = document.querySelector("#image-container")
const petNameForm = document.querySelector("form")


let petCount = 0
let feedCount = 0
let playCount = 0



const cat = prompt("Please enter your name", "the cat");

petButton.addEventListener('click', (e) =>{
  // Increment the count by 1
  petCount += 1
  if (petCount ==1) {
      status.innerHTML = `<h3>You pet ${cat} ${petCount} time!</h3>`
  } else if (petCount == 4) {
    status.innerHTML = `<h3>I think that's enough. You can stop now.</h3>`
    imageDiv.innerHTML = `<img src="img/grumpymashy.png" />`
  } else if (petCount > 10) {
    status.innerHTML = `<h3>No more pets!</h3>`
    imageDiv.innerHTML = `<img src="img/superangrymashy.png" />`
  } else {
    status.innerHTML = `<h3>You pet ${cat} ${petCount} times!</h3>`
  }
})

feedButton.addEventListener('click', (e) =>{
  // Increment the count by 1
  feedCount += 1
  if (feedCount ==1) {
      status.innerHTML = `<h3>You fed ${cat} ${feedCount} time!</h3>`
      imageDiv.innerHTML = `<img src="img/happymashy.png" />`
  } else if (feedCount == 3) {
    status.innerHTML = `<h3>I can haz more plz.</h3>`
  } else if (feedCount > 12) {
    status.innerHTML = `<h3>No more. I'm full.</h3>`
    imageDiv.innerHTML = `<img src="img/grumpymashy.png" />`
  } else {
    status.innerHTML = `<h3>You fed ${cat} ${feedCount} times!</h3>`
    imageDiv.innerHTML = `<img src="img/happymashy.png" />`
  }
})

playButton.addEventListener('click', (e) =>{
  // Increment the count by 1
  playCount += 1
  if (playCount ==1) {
      status.innerHTML = `<h3>You played with ${cat} ${playCount} time!</h3>`
      imageDiv.innerHTML = `<img src="img/happymashy.png" />`
  } else if (playCount == 4) {
    status.innerHTML = `<h3>That's enough. I'm bored. </h3>`
    imageDiv.innerHTML = `<img src="img/grumpymashy.png" />`
  } else if (playCount > 8) {
    status.innerHTML = `<h3>Now you annoy me, peasant.</h3>`
    imageDiv.innerHTML = `<img src="img/superangrymashy.png" />`
  } else {
    status.innerHTML = `<h3>You played with ${cat} ${playCount} times!</h3>`
    imageDiv.innerHTML = `<img src="img/happymashy.png" />`
  }
})
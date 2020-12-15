// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!

function displayErrorMessage(message) {
  document.getElementById('modal').class = '';
  document.getElementById('modal-message').innerText = message;
  setTimeout(function() {
    document.getElementById('modal').class = 'hidden';
  }, 5000);
}

function addListenersToLikeButtons(likeButtons) {
  for (const likeButton of likeButtons) {
    likeButton.addEventListener('click', function() {
      mimicServerCall().then(function(response) {
        console.log(response);
      }).catch(function(error) {
        displayErrorMessage(error);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  addListenersToLikeButtons(document.getElementsByClassName('like'))
});


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

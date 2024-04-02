// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const likeButtons = document.querySelectorAll(".like-glyph");

  errorModal.classList.add("hidden");

  function handleLikeButtonClick(event) {
      const likeButton = event.target;
      mimicServerCall()
          .then(() => {
              likeButton.classList.add("activated-heart");
              likeButton.classList.toggle("like-glyph");
              likeButton.classList.toggle("like-glyph-empty");
          })
          .catch(() => {
              errorModal.classList.remove("hidden");
              const errorMessage = document.getElementById("modal-message");
              errorMessage.textContent = "Server Error. Please try again later.";
              setTimeout(() => {
                  errorModal.classList.add("hidden");
              }, 3000);
          });
  }

  likeButtons.forEach(button => {
      button.addEventListener("click", handleLikeButtonClick);
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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

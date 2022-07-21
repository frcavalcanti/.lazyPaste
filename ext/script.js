// [[ Save INPUT content ]]

document.getElementById("save").addEventListener("click", () => {
  chrome.storage.sync.set ({
    formLinkedIn: document.getElementById("formLinkedIn").value,
    formGitHub: document.getElementById("formGitHub").value,
    formInstagram: document.getElementById("formInstagram").value,
    formTwitter: document.getElementById("formTwitter").value,
    formPortfolio: document.getElementById("formPortfolio").value,
    formOne: document.getElementById("formOne").value,
    formTwo: document.getElementById("formTwo").value,
    formThree: document.getElementById("formThree").value,
    formFour: document.getElementById("formFour").value,
    formFive: document.getElementById("formFive").value,
  }, function() {
    console.log("Saved!")
  })
})


// [[ Copy each INPUT by IMG ]]

document.getElementById("linkedIn").addEventListener("click", () => {

})


// [[ Hide-Show RIGHT column ]]

function show() {
  const right = document.getElementById("right");
  if (right.style.display === "none") {
    right.style.display = "flex";
  } else {
    right.style.display = "none";
  }
}
document.getElementById('edit').addEventListener('click', show);


// [[ Loads previously saved INPUTS everytime it OPENS ]]

window.onload = function() {
  chrome.storage.sync.get([
    "formLinkedIn",
    "formGitHub",
    "formInstagram",
    "formTwitter",
    "formPortfolio",
    "formOne",
    "formTwo",
    "formThree",
    "formFour",
    "formFive",
    ],

    function(result) {
      document.getElementById('formLinkedIn').textContent = result.formLinkedIn
      document.getElementById('formGitHub').textContent = result.formGitHub
      document.getElementById('formInstagram').textContent = result.formInstagram
      document.getElementById('formTwitter').textContent = result.formTwitter
      document.getElementById('formPortfolio').textContent = result.formPortfolio
      document.getElementById('formOne').textContent = result.formOne
      document.getElementById('formTwo').textContent = result.formTwo
      document.getElementById('formThree').textContent = result.formThree
      document.getElementById('formFour').textContent = result.formFour
      document.getElementById('formFive').textContent = result.formFive
    }
  )
};

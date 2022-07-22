// [[ When SAVE = SET input AND GET ]]

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
  },
    function() {
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
    }
  )
})

// [[ When OPEN = GET saved inputs ]]

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

// [[ Copy each INPUT by IMG ]]

document.getElementById("linkedIn").onclick = function () {
  let text = document.getElementById("formLinkedIn").textContent;
  navigator.clipboard.writeText(text)
}

document.getElementById("gitHub").onclick = function () {
  let text = document.getElementById("formGitHub").textContent;
  navigator.clipboard.writeText(text)
}

document.getElementById("instagram").onclick = function () {
  let text = document.getElementById("formInstagram").textContent;
  navigator.clipboard.writeText(text)
}

document.getElementById("twitter").onclick = function () {
  let text = document.getElementById("formTwitter").textContent;
  navigator.clipboard.writeText(text)
}

document.getElementById("portfolio").onclick = function () {
  let text = document.getElementById("formPortfolio").textContent;
  navigator.clipboard.writeText(text)
}

document.getElementById("one").onclick = function () {
  let text = document.getElementById("formOne").textContent;
  navigator.clipboard.writeText(text)
}

document.getElementById("two").onclick = function () {
  let text = document.getElementById("formTwo").textContent;
  navigator.clipboard.writeText(text)
}

document.getElementById("three").onclick = function () {
  let text = document.getElementById("formThree").textContent;
  navigator.clipboard.writeText(text)
}

document.getElementById("four").onclick = function () {
  let text = document.getElementById("formFour").textContent;
  navigator.clipboard.writeText(text)
}

document.getElementById("five").onclick = function () {
  let text = document.getElementById("formFive").textContent;
  navigator.clipboard.writeText(text)
}

// [[ Hide-Show RIGHT column ]]

document.getElementById('edit').addEventListener('click', show);
function show() {
  const right = document.getElementById("right");
  const button = document.getElementById("edit").firstChild
  if (right.style.display === "none") {
    right.style.display = "flex";
    button.data = "Collapse"
  } else {
    right.style.display = "none";
    button.data = "Expand"
  }
}

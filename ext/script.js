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

// [[ Copy each INPUT by IMG - Refactor later]]

document.getElementById("linkedIn").onclick = function () {
  let text = document.getElementById("formLinkedIn").textContent;
  let copied = document.getElementById("copiedLinkedIn");

  navigator.clipboard.writeText(text)
  if (copied.style.visibility === "hidden") {
    copied.style.visibility = "visible"
    setTimeout(() => {
      copied.style.visibility = "hidden"
    }, 300);
    clearTimeout
  }
}

document.getElementById("gitHub").onclick = function () {
  let text = document.getElementById("formGitHub").textContent;
  let copied = document.getElementById("copiedGitHub")

  navigator.clipboard.writeText(text)
  if (copied.style.visibility === "hidden") {
    copied.style.visibility = "visible"
    setTimeout(() => {
      copied.style.visibility = "hidden"
    }, 300);
    clearTimeout
  }
}

document.getElementById("instagram").onclick = function () {
  let text = document.getElementById("formInstagram").textContent;
  let copied = document.getElementById("copiedInstagram")

  navigator.clipboard.writeText(text)
  if (copied.style.visibility === "hidden") {
    copied.style.visibility = "visible"
    setTimeout(() => {
      copied.style.visibility = "hidden"
    }, 300);
    clearTimeout
  }
}

document.getElementById("twitter").onclick = function () {
  let text = document.getElementById("formTwitter").textContent;
  let copied = document.getElementById("copiedTwitter")

  navigator.clipboard.writeText(text)
  if (copied.style.visibility === "hidden") {
    copied.style.visibility = "visible"
    setTimeout(() => {
      copied.style.visibility = "hidden"
    }, 300);
    clearTimeout
  }
}

document.getElementById("portfolio").onclick = function () {
  let text = document.getElementById("formPortfolio").textContent;
  let copied = document.getElementById("copiedPortfolio")

  navigator.clipboard.writeText(text)
  if (copied.style.visibility === "hidden") {
    copied.style.visibility = "visible"
    setTimeout(() => {
      copied.style.visibility = "hidden"
    }, 300);
    clearTimeout
  }
}

document.getElementById("one").onclick = function () {
  let text = document.getElementById("formOne").textContent;
  let copied = document.getElementById("copiedOne")

  navigator.clipboard.writeText(text)
  if (copied.style.visibility === "hidden") {
    copied.style.visibility = "visible"
    setTimeout(() => {
      copied.style.visibility = "hidden"
    }, 300);
    clearTimeout
  }
}

document.getElementById("two").onclick = function () {
  let text = document.getElementById("formTwo").textContent;
  let copied = document.getElementById("copiedTwo")

  navigator.clipboard.writeText(text)
  if (copied.style.visibility === "hidden") {
    copied.style.visibility = "visible"
    setTimeout(() => {
      copied.style.visibility = "hidden"
    }, 300);
    clearTimeout
  }
}

document.getElementById("three").onclick = function () {
  let text = document.getElementById("formThree").textContent;
  let copied = document.getElementById("copiedThree")

  navigator.clipboard.writeText(text)
  if (copied.style.visibility === "hidden") {
    copied.style.visibility = "visible"
    setTimeout(() => {
      copied.style.visibility = "hidden"
    }, 300);
    clearTimeout
  }
}

document.getElementById("four").onclick = function () {
  let text = document.getElementById("formFour").textContent;
  let copied = document.getElementById("copiedFour")

  navigator.clipboard.writeText(text)
  if (copied.style.visibility === "hidden") {
    copied.style.visibility = "visible"
    setTimeout(() => {
      copied.style.visibility = "hidden"
    }, 300);
    clearTimeout
  }
}

document.getElementById("five").onclick = function () {
  let text = document.getElementById("formFive").textContent;
  let copied = document.getElementById("copiedFive")

  navigator.clipboard.writeText(text)
  if (copied.style.visibility === "hidden") {
    copied.style.visibility = "visible"
    setTimeout(() => {
      copied.style.visibility = "hidden"
    }, 300);
    clearTimeout
  }
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

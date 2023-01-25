const fullName = document.getElementById("fullName")
const email = document.getElementById("email")
const button = document.getElementsByTagName("button")
const form = document.querySelector("form")
const subject = document.querySelector("#subject")
let errorElement = document.querySelector(".error")

let para = document.createElement("p")
let fullNameP = document.getElementById("fullNameP")

let fullNameFormat = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/

form.addEventListener("submit", (e) => {
  if (fullNameFormat === false) {
    para.innerHTML = "Good"
    fullNameP.appendChild(para)
  } else {
    para.innerHTML = "Fuck off"
    fullNameP.appendChild(para)
    para.classList.add("text-danger")
    fullName.classList.add("border-danger")
  }
  e.preventDefault()
})

function removeClear() {
  //clear form on focus even if it was error before
}

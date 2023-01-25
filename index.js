const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const button = document.getElementsByTagName('button')
const form = document.querySelector('form')
const subject = document.querySelector('#subject')
let errorElement = document.querySelector('.error')

form.addEventListener("submit", (e) => {
   
  // ? using If Else
   
    let messages = []

    // * Full Name
    if (fullName.value === '' || fullName.value === null) {
        messages.push('Full Name Can not be Empty')
        fullName.classList.add('border-danger')
        if (fullName.value !== '' || fullName.value !== null) {
            fullName.className.replace('border-danger' ,  'border')
            // fullName.classList.remove('border-danger', 'border-warning')
        }
    }

    // * Email 
    else if (email.value === '' || email.value === null) {
        messages.push('Kindly Enter Your Email')
        email.classList.add('border-danger')

        if (email.value !== '' ||email.value !== null  ) {
            email.className.replace('border-danger', 'border')
        }
    }

    // * Subject
    else if (subject.value === '' || subject.value === null) {
        messages.push('Subject is required')
        subject.classList.add('border-danger') 
        if (subject.value !== '' || subject.value !== null) {
            subject.className.replace('border-danger', 'border')
        }
    }



    // ? Now Using Switch Case



    e.preventDefault()
    errorElement.innerText = messages.join(', ')
})


// console.log()
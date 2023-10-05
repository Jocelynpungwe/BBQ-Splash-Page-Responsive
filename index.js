const registerForm = document.getElementById("register-form")
let registerArray = []
let localRegister = JSON.parse(localStorage.getItem('register'))

registerArray = localRegister

registerForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const registerData = new FormData(registerForm)
    let firstName = registerData.get('firstName');
    let email = registerData.get("email")
    registerArray.push({ firstName,email})
    localStorage.setItem('register',JSON.stringify(registerArray))

})




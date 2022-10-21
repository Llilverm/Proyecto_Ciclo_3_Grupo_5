const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});
function ir (){
    var u=1065563816;
    var c=2131;
   
    if(document.form.password.value==c && document.form.login.value==u){
    alert("bienvenido");
    window.location="proyectoC3_G5.html";}

    else{
    alert("porfa.");}

}
let passwordEl=document.querySelector("#password");
let showBtn=document.querySelector("#show");
console.log(passwordEl);


showBtn.addEventListener("click",function(){
    if(passwordEl.type=="text"){
        passwordEl.type="password";
    }else{
        passwordEl.type="text";
    }
});

let btnLogin = document.querySelector(".btn--login");
btnLogin.addEventListener("click",(Event)=>{
Event.preventDefault();
});

let btnGoogle = document.querySelector(".btn--google");

btnGoogle.addEventListener("click",(e)=>{
    e.preventDefault();
   // window.location=""
});

let fbbtn=document.querySelector("btn--facebook");

fbbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    //window.location=""
})
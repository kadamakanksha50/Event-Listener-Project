var status1=document.querySelector("#status");
var btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
    if(btn.innerHTML=="Add Friend"){
        status1.innerHTML="Friends";
        status1.style.color="green";
        if(status1.classList.contains("removefrnd")){
            status1.classList.remove("removefrnd");
        }
        status1.classList.add("addFrnd");
        btn.innerHTML="Remove Friend";
        btn.style.backgroundColor="red";
    }
    else{
        status1.innerHTML="Stranger";
        status1.style.color="red";
        if(status1.classList.contains("addFrnd")){
            status1.classList.remove("addFrnd");
        }
        status1.classList.add("removeFrnd");
        btn.innerHTML="Add Friend";
        btn.style.backgroundColor="green";
    }
});
var btn1=document.querySelector("#btn1");
var para=document.querySelector("#para");
var back1=document.querySelector("#back");
btn1.addEventListener("dblclick",function(){
    if(para.innerHTML=="HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.HTML describes the structure of a Web page.HTML consists of a series of elements."){
        para.innerHTML="CSS stands for Cascading Style Sheets.CSS describes how HTML elements are to be displayed on screen, paper, or in other media.CSS saves a lot of work.";
        back1.style.background="url('css1.jpg')";
        back1.style.backgroundPosition="center";
        btn1.style.backgroundColor="blue";
    }
    else{
        para.innerHTML="HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.HTML describes the structure of a Web page.HTML consists of a series of elements.";
        back1.style.background="url('html1.png')";
        back1.style.backgroundPosition="center";
        back1.style.backgroundSize="cover";
        btn1.style.backgroundColor="orangered";
    }
});
var usr=document.querySelector("usr");
var pass=document.querySelector("pass");
var btn3=document.querySelector("#btn3");
btn3.addEventListener("click",function(){
    if(document.getElementById("usr").value=="Admin" && document.getElementById("pass").value=="123"){
        alert("Login Successfully!");
        document.getElementById("login").reset();
    }
    else{
        alert("Login Failed!");
        document.getElementById("login").reset();
    }
});
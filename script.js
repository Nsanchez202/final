var img = document.getElementById('img');
var slides=['A1.png','A2.jpeg', 'A3.jpg','A5.jpg', 'A6.jpg', 'A7.jpg'];
var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,3000);

function doClear(){
    document.membresia.name.value = "";
    document.membresia.email.value = "";
    document.membresia.phone.value = "";
    var element = document.getElementById("membership-type");
    element.remove(element.selectedIndex);

}

function doSubmmit(){
    if(validateName() == false){
        alert("Please enter your Name");
        return;
    }
    if (validateEmail()== false){
        alert("Please enter your email");
        return;
    }
    if (validatePhone()== false){
        alert("Please enter your Phone Number");
        return;
    }
    if (validateSession()== false){
        alert("Please select the session Time");
        return;
    }
        alert("Somebody from our membership department will be contacting you shortly through email");
    return;
}

function validateName(){
    var name = document.membresia.name.value; 
    if (name.length == 0) return false; 
    return true;   
}
function validateEmail(){
    var email =  document.membresia.email.value; 
    if (email.length == 0) return false; 
    return true;   
}
function validatePhone(){
    var phone =  document.membresia.phone.value; 
    if (phone.length == 0) return false; 
    return true;   
}
function validateSession(){
    var session = document.getElementById("membership-type");
    if (session.value == "limpio") return false; 
    return true;   
}




function getSelectedValue(selectList){
    return selectList[selectList.selectedIndex].value;
}

function validate(frm){
    var firstName=frm.firstName.value;
    var secondName=frm.secondName.value;
    var telephone=frm.telephone.value;
    var mailAddress=frm.email.value;
    var about=getSelectedValue(frm.options);
    var feedback=frm.yourFeedback.value;

    if(((firstName=="")||(secondName=="")||(telephone=="")||(mailAddress=="")||(feedback=="")||(about=="empty"))){
        alert("Please fill all areas before submitting the form!");
    }
    else if(telephone.length!=10){
        alert("There should be 10 digits in your phone number.");
    }
    else{
        if((mailAddress.includes("@"))&&(mailAddress.includes(".com"))){
            alert("Successfully Filled!")
            displayForm(firstName,secondName,telephone,mailAddress,about,feedback);

        } 
        else{
            alert("Invalid E-mail!")
        }
    }  
}
function displayForm(firstName,secondName,telephone,mailAddress,about,feedback){
    document.getElementById("name").innerHTML="Your Full Name: "+firstName+" "+secondName;
    document.getElementById("tele").innerHTML="Your Telephone: "+telephone;
    document.getElementById("mail").innerHTML="Your E-mail: "+mailAddress;
    document.getElementById("aboutWhat").innerHTML="Categoty you chose: "+about;
    document.getElementById("comments").innerHTML="Feedback: "+feedback;

    document.getElementById("display-form").style.visibility="visible";
    document.getElementById("feedback-form").style.visibility="hidden";
    document.getElementById("choose-theme").style.visibility="hidden";
    document.getElementById("feedback").style.backgroundColor="Black";    
}

var theme=document.getElementById("theme");
function changeMode(){
    var userTheme=getSelectedValue(theme);
    if(userTheme=="empty"){
        document.getElementById("feedback").style.backgroundColor="White";
    }
    else if(userTheme=="dark"){
        document.getElementById("feedback").style.backgroundColor="Black";
        document.getElementById("feedback-form").style.border="3px solid Red";
    }
    else if(userTheme=="light"){
        document.getElementById("feedback").style.backgroundColor="White";
        document.getElementById("feedback-form").style.border="3px solid Black";
    }
    else if(userTheme=="cream"){
        document.getElementById("feedback").style.backgroundColor="#ffffca";
        document.getElementById("feedback-form").style.border="3px solid Navy";
    }
}
theme.onchange=changeMode;
changeMode();

function resetForm(frm){
    frm.firstName.value="";
    frm.secondName.value="";
    frm.telephone.value="";
    frm.email.value="";
    frm.options.value="empty";
    frm.yourFeedback.value="";
}

function goBack(){
    document.getElementById("feedback-form").style.visibility="visible";
    document.getElementById("display-form").style.visibility="hidden";
    document.getElementById("choose-theme").style.visibility="visible";
    document.getElementById("feedback").style.backgroundColor="White";    
}

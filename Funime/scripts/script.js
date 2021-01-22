document.getElementById("alert").style.display = "grid";
document.getElementById("alertTitle").innerHTML = "Funime is in dev-mode!";
document.getElementById("alertBody").innerHTML = "[PREVIEW] *factory sounds*, keep watching Funime. We're building it piece by piece.";
const errorName = document.getElementById("errorName");
const errorBody = document.getElementById("errorBody");
const fcode = document.getElementById("fcode");

fcode.addEventListener("click", function(){
    fcode.value = "TEST";
})

document.getElementById("aboutPage").addEventListener("click", function(){
    document.location.assign("about.html");
})
document.getElementById("learnmorePage").addEventListener("click", function(){
    error("morepage");
})
document.getElementById("createCode").addEventListener("click", function(){
    error("morepage");
})
document.getElementById("conditionsPage").addEventListener("click", function(){
    document.location.assign("conditions.html");
})

fcode.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        var code = fcode.value;
        fcode.blur();
        console.log(code);
        code = code.toUpperCase();
        console.log("up: " + code);
        error(code);
    }
})

function error(code){
    switch(code){
        case "TEST":
            document.location.assign("room.html");
        break;

        case "morepage":
            document.getElementById("error").style.display = "grid";
            errorName.innerHTML = "Unavailable page.";
            errorBody.innerHTML = "This feature is in dev-mode.<br>Follow us on Reddit for progress information.";
            fcode.value = "";
            fcode.blur();
            setTimeout(function(){document.getElementById("error").style.display = "none";}, 7000);
        break;

        case "invited":
            document.getElementById("error").style.display = "grid";
            errorName.innerHTML = "Invite link copied.";
            errorBody.innerHTML = "Share this link with your friends to invite them to join the room.";
            setTimeout(function(){document.getElementById("error").style.display = "none";}, 7000);
        break;

        default: 
            document.getElementById("error").style.display = "grid";
            errorName.innerHTML = "Wait, wait, wait!";
            errorBody.innerHTML = "Oops, you cannot access Funime. We are still assembling the pieces.<br>Follow us on Reddit for progress information.";
            fcode.value = "";
            fcode.blur();
            setTimeout(function(){document.getElementById("error").style.display = "none";}, 7000);
        break;
    }
}
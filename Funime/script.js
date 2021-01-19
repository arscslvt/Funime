document.getElementById("alert").style.display = "grid";
document.getElementById("alertTitle").innerHTML = "Funime is in dev-mode!";
document.getElementById("alertBody").innerHTML = "*factory sounds*, keep watching Funime. We're building it piece by piece. [283]";

document.getElementById("aboutPage").addEventListener("click", function(){
    document.location.assign("about.html");
})
document.getElementById("learnmorePage").addEventListener("click", function(){
    document.location.assign("learnmore.html");
})
document.getElementById("conditionsPage").addEventListener("click", function(){
    document.location.assign("conditions.html");
})
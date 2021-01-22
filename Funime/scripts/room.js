console.log("Select a screen source and stream;");
// var promise = navigator.mediaDevices.getDisplayMedia();
const videoElement = document.getElementById("video");
const start = document.getElementById("startCapture");
const end = document.getElementById("endCapture");
const video_snippet = document.getElementById("video_snippet");
const invite = document.getElementById("invite");

invite.blur();
invite.value = document.location.href;

var displayMediaOptions = {
    video:{
        cursor: 'always'
    },
    audio: false
}

invite.addEventListener("click", function(){
    invite.select();
    document.execCommand("copy");
    invite.value = "Copied!";
    setTimeout(function(){invite.value = document.location.href; invite.blur()}, 3000);
})

start.addEventListener("click", function(){
    startCapture();
})

end.addEventListener("click", function(){
    stopCapture();
})

async function startCapture(){
    try{
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        start.style.display = "none";
        setTimeout(function(){end.style.display = "block";}, 200);
        videoElement.style.display = 'initial'; 
        video_snippet.style.display = 'none';
    }catch(err){
        console.error("Error getting video.");
    }
}

function stopCapture(e){
    try{
        let tracks = videoElement.srcObject.getTracks();
        tracks.forEach(track => track.stop());
        videoElement.srcObject = null;
        // alert("tracks: ", tracks); 
        document.location.assign("index.html");
    }catch(err){
        document.location.assign("index.html"); 
    }
    
}
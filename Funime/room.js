console.log("Select a screen source and stream;");
// var promise = navigator.mediaDevices.getDisplayMedia();
const videoElement = document.getElementById("video");
const start = document.getElementById("startCapture");
const end = document.getElementById("endCapture");
end.style.display = "none";

var displayMediaOptions = {
    video:{
        cursor: 'always'
    },
    audio: false
}

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
    }catch(err){
        console.error("Error getting video.");
    }
}

function stopCapture(e){
    let tracks = videoElement.srcObject.getTracks();
    tracks.forEach(track => track.stop());
    videoElement.srcObject = null;
    document.location.assign("index.html");
}
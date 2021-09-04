var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start() {
    document.getElementById("Speech").innerHTML = "";
    recognition.start();
}

recognition.onresult = function Run(e) {
    console.log(e);
    var content = e.results[0][0].transcript;
    document.getElementById("Speech").innerHTML = content;
    talk();
}

function talk() {
    var sTalk = window.speechSynthesis;
    var speakData = document.getElementById("Speech").value;
    var utterData = new SpeechSynthesisUtterance(speakData);
    sTalk.speak(utterData);
    Webcam.attach(camera);
}

var camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    Image_format: 'jpeg',
    jpeg_quality: 90
});
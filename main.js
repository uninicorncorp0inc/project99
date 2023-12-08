var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =  new SpeechRecognition();

function start()
             {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    //2. CREATE THE CONTENT VARIABLE TO STORE THE TRANSCRIPT OF THE VOICE:
    var content = event.results[0][0].transcript;
    

    document.getElementById("textarea").innerHTML = content;

   speak(); 

    
}



function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textarea").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}


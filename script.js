let speech= new SpeechSynthesisUtterance();

let voices=[1,2,];
let voiceselect =document.querySelector("select")
 
document.querySelector("button").addEventListener("click",() => {
speech.text = document.querySelector("textarea").value;
window.speechSynthesis.speak(speech);
}); 

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[20];

    voices.forEach((voice, i) => ( voiceselect.options[i] = new option 
        (voice.name, i)));
};

voiceselect.addEventListener("change",()=>{
    speech.voice=voices[voiceselect.value]
})
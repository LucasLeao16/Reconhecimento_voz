window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();
recognition.addEventListener("result", onSpeak);
function onSpeak(evento) {
  const tentativa = evento.results[0][0].transcript;

  valorBox.textContent = tentativa;
  validador(tentativa);
}
recognition.addEventListener("end", () => {
  recognition.start();
});

import './main.css';

document.querySelector('#app').innerHTML = `
  <div class="container" id="main">
    <h1>HomeWork AI</h1>
    <form id="mainform">
  <label for="curso">Elige Tu Curso:</label>
  <select name="curso" id="curso">
    <option value="4primaria">4° Primaria</option>
    <option value="5primaria">5° Primaria</option>
    <option value="6primaria">6° Primaria</option>
    <option value="1eso">1° ESO</option>
  </select>
  <br><br>
  <input type="submit" value="Siguiente">
</form>
</div>
  
  <div class="container" id="camera">
  <h1>HomeWork AI</h1>
  <form>
  <label for="camera">Haz una foto a tu tarea:</label>
  <video id="video" autoplay></video>
  <input type="submit" value="Hacer Foto">
  </form>
  
  </div>
  
`;

navigator.mediaDevices.getUserMedia({
  video: { facingMode: { exact: "environment" } }
})
.then(stream => {
  document.getElementById('video').srcObject = stream;
})
.catch(error => {
  console.error("Could not access the camera:", error);
});

const x = document.getElementById("camera");
const y = document.getElementById("main");
x.style.display = "none";

function showCamera() {
    x.style.display = "block";
    y.style.display = "none";
}

document.getElementById('mainform').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const curso = document.getElementById('curso').value;

  const newUrl = `${window.location.pathname}?curso=${encodeURIComponent(curso)}`;
  window.history.pushState({}, '', newUrl);

  showCamera();
});

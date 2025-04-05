import './main.css';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>HomeWork AI</h1>
    <form>
  <label for="curso">Elige Tu Curso:</label>
  <select name="curso" id="curso">
    <option value="4primaria">4° Primaria</option>
    <option value="5primaria">5° Primaria</option>
    <option value="6primaria">6° Primaria</option>
    <option value="1eso">1° ESO</option>
  </select>
      <video id="video" autoplay></video>
  <br><br>
  <input type="submit" value="Resolver Tarea">
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

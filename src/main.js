document.querySelector('#app').innerHTML = `
  <div>
    <h1>HomeWork AI</h1>
    <video id="video" autoplay></video>
    <div>
    <form>
  <label for="cars">Elige Tu Curso:</label>
  <select name="curso" id="curso">
    <option value="4primaria">4° Primaria</option>
    <option value="5primaria">5° Primaria</option>
    <option value="6primaria">6° Primaria</option>
    <option value="1eso">1° ESO</option>
  </select>
  <br><br>
  <input type="submit" value="Resolver Tarea">
</form>
    </div>
  </div>
`;

navigator.mediaDevices.getUserMedia({
  video: { facingMode: { exact: "environment" } }
})
.then(stream => {
  document.getElementById('video').srcObject = stream;
})
.catch(error => {
  console.error("Could not access the back camera:", error);
});

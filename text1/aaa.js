document.getElementById("file-input").addEventListener("change", function(event) {
    var file = event.target.files[0];
    document.getElementById("file").innerHTML = file.name;
  });
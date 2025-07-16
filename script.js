 document.addEventListener("DOMContentLoaded", function () {
    const album1 = document.getElementById("album1");
    const album2 = document.getElementById("album2");

    album1.addEventListener("click", function () {
      window.open("https://drive.google.com/drive/folders/167_1prmbMIwE2y-Kux5THt1lz2QSiVgE?usp=drive_link", "_blank");
    });

    album2.addEventListener("click", function () {
      window.open("https://www.youtube.com/playlist?list=PLXMmVA0aMm0a6lhAhrZ0IoyAsG3SfGQO2", "_blank");
    });
  });
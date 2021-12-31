var pilihan = document.getElementById("pilihan");
pilihan.addEventListener("change", function() {
    var gambar = document.getElementById("gambar");
    gambar.src = "img/" + this.value;
    setTimeout(function() {
        alert("ini adalah gambar " + pilihan.value);
    }, 500);
});
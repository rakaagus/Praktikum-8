var lanjut = document.getElementById("lanjut");
lanjut.addEventListener("click", function() {
    var nama = document.getElementById("nama");
    var email = document.getElementById("email");
    var jam = document.getElementById("time");
    var tujuan = document.getElementById("tujuan");
    var tiket = document.getElementById("tiket");
    var atps = email.value.indexOf("@");
    var dots = email.value.lastIndexOf(".");
    var check = true;

    if (nama.value == "") {
        var req_nama = document.getElementById("req_nama");
        req_nama.style.display = "block";
        check = false;
    } else if (nama.value > 30) {
        var char_nama = document.getElementById("char_nama");
        char_nama.style.display = "block";
        check = false;
    }
    if (atps < 1 || dots < atps + 2 || dots + 2 >= email.value.leng) {
        if (email.value == "") {
            var req_email = document.getElementById("req_email");
            req_email.style.display = "block";
            check = false;
        } else {
            var valid_email = document.getElementById("valid_email");
            valid_email.style.display = "block";
            check = false;
        }
    }
    if (jam.value == "") {
        var req_jam = document.getElementById("req_jam");
        req_jam.style.display = "block";
        check = false;
    }
    if (tujuan.value == "") {
        var req_tujuan = document.getElementById("req_tujuan");
        req_tujuan.style.display = "block";
        check = false;
    }
    if (tiket.value == "") {
        var req_tiket = document.getElementById("req_tiket");
        req_tiket.style.display = "block";
        check = false;
    } else if (tiket.value > 10) {
        var char_tiket = document.getElementById("char_tiket");
        char_tiket.style.display = "block";
        check = false;
    }
    if (check == true) {
        var hasil_nama = document.getElementById("hasil_nama");
        var hasil_email = document.getElementById("hasil_email");
        var hasil_jam = document.getElementById("hasil_jam");
        var hasil_tujuan = document.getElementById("hasil_tujuan");
        var hasil_tiket = document.getElementById("hasil_tiket");

        hasil_nama.innerHTML = nama.value;
        hasil_email.innerHTML = email.value;
        hasil_jam.innerHTML = jam.value;
        hasil_tujuan.innerHTML = tujuan.value;
        hasil_tiket.innerHTML = tiket.value;

        nama.value = "";
        email.value = "";
        jam.value = "";
        tujuan.value = "";
        tiket.value = "";
    }
});
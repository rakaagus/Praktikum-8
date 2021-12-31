function validate() {

    let username = document.getElementById('userName').value;
    let password = document.getElementById('password').value;



    if (username == "ahmad2017" && password == "123") {
        alert("Login Sukses");
        window.open("web12_login_success.html");
    } else if (username != "ahmad2017" && password != "123") {
        alert("Tolong Masukan Username Dengan Benar");

    } else {
        alert("Tidak Punya Akun?");

    }

}
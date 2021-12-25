// funcition untuk chat
function chat() {
    let tempatChat = document.getElementById('chat-pesan');
    let chat = document.getElementById('chat').value;

    if (chat) {
        tempatChat.innerHTML += `${chat} <br>`;
    }

    document.getElementById('chat').value = "";
}
// function untuk titik di mata uang rupiah
function titikMataUang(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// function kurs mata uang
function kursMataUang() {
    let nilai = document.getElementById('nilai').value;

    let kurs = document.getElementById('kurs').value;
    switch (kurs) {
        case "usd":
            document.getElementById('hasil').value = `Rp. ${titikMataUang(parseFloat(nilai) * 9915)},-`;
            break
        case "sgd":
            document.getElementById('hasil').value = `Rp. ${titikMataUang(parseFloat(nilai) * 13472)},-`;
            break
        case "rm":
            document.getElementById('hasil').value = `Rp. ${titikMataUang(parseFloat(nilai) * 874)},-`;
            break
        case "yen":
            document.getElementById('hasil').value = `Rp. ${titikMataUang(parseFloat(nilai) * 120)},-`;
            break
        case "euro":
            document.getElementById('hasil').value = `Rp. ${titikMataUang(parseFloat(nilai) * 15888)},-`;
            break
        case "riyal":
            document.getElementById('hasil').value = `Rp. ${titikMataUang(parseFloat(nilai) * 3592)},-`;
            break
        default:
            break;
    }
}
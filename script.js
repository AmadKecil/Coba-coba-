// Fungsi untuk memindahkan halaman/layer
function pindahLayer(nomorLayer) {
    // Sembunyikan semua layer dengan menghapus class 'active'
    const semuaLayer = document.querySelectorAll('.layer');
    semuaLayer.forEach(layer => {
        layer.classList.remove('active');
        layer.style.display = 'none'; // Memastikan tersembunyi total
    });

    // Tampilkan layer yang dituju
    const layerTujuan = document.getElementById('layer-' + nomorLayer);
    if (layerTujuan) {
        layerTujuan.classList.add('active');
        layerTujuan.style.display = 'block'; // Menampilkan layer tujuan
    }
}

// Variabel untuk menyimpan ukuran tombol (mulai dari 100% atau 1.0)
let skalaTombol = 1.0;

function hindariTombol() {
    const btnNo = document.getElementById('btn-no');
    
    // 1. Logika perpindahan tempat secara acak
    const maxX = window.innerWidth - btnNo.offsetWidth - 30;
    const maxY = window.innerHeight - btnNo.offsetHeight - 30;
    
    const randomX = Math.floor(Math.random() * Math.max(maxX, 1));
    const randomY = Math.floor(Math.random() * Math.max(maxY, 1));
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
    btnNo.style.zIndex = '9999';

    // 2. Logika menyusut (Mengecil 20% setiap kali didekati)
    skalaTombol -= 0.2; 
    
    // Jika ukuran sudah di bawah 0.1, sembunyikan total agar tidak bisa diklik
    if (skalaTombol <= 0.1) {
        btnNo.style.display = 'none'; 
    } else {
        btnNo.style.transform = `scale(${skalaTombol})`;
    }
}

// Fungsi opsional untuk kembali ke WhatsApp
function kembaliKeWA() {
    // ⚠️ SILAKAN GANTI nomor di bawah ini dengan nomor WhatsApp kamu sendiri!
    // Gunakan kode negara 62 (sebagai pengganti angka 0 di depan).
    const nomorWA = "6283168457106"; 
    
    // Pesan otomatis yang akan langsung muncul di kolom chat dia
    const pesan = encodeURIComponent("YAHAHAHAHAH");
    
    // Perintah untuk membuka WhatsApp secara otomatis
    window.location.href = `https://wa.me/${nomorWA}?text=${pesan}`;
}

class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
    }
}

class KapalCepat extends Kapal {
    constructor(nama, jenis, panjang, lebar, kecepatan) {
        super(nama, jenis, panjang, lebar); 
        this.kecepatan = kecepatan; 
    }

    infoKapalCepat() {
        return `${this.infoKapal()} Kapal ini dapat melaju hingga ${this.kecepatan} knot.`;
    }
}

const Kapalpenumpang = new Kapal("Hilwa NF", "kapal ferry", 200, 100);
const Kapalpesiar = new Kapal("Titanic", "kapal pesiar", 300, 100);

const KapalCepat1 = new KapalCepat("Speedy", "kapal cepat", 100, 30, 50);

console.log(Kapalpenumpang.infoKapal());
console.log(Kapalpesiar.infoKapal());

console.log(KapalCepat1.infoKapalCepat());

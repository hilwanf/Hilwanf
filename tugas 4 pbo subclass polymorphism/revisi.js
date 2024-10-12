// class Kapal
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

// Subclass KapalCepat 
class KapalCepat extends Kapal {
    constructor(nama, jenis, panjang, lebar, kecepatan) {
        super(nama, jenis, panjang, lebar); 
        this.kecepatan = kecepatan; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat melaju hingga ${this.kecepatan} knot.`;
    }
}

// Subclass KapalSelam
class KapalSelam extends Kapal {
    constructor(nama, jenis, panjang, lebar, kedalamanMaks) {
        super(nama, jenis, panjang, lebar);
        this.kedalamanMaks = kedalamanMaks; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat menyelam hingga kedalaman ${this.kedalamanMaks} meter.`;
    }
}

// Subclass KapalKontainer
class KapalKontainer extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitas) {
        super(nama, jenis, panjang, lebar);
        this.kapasitas = kapasitas; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat membawa ${this.kapasitas} TEU (Twenty-foot Equivalent Unit) kontainer.`;
    }
}

// Subclass KapalPerang
class KapalPerang extends Kapal {
    constructor(nama, jenis, panjang, lebar, senjata) {
        super(nama, jenis, panjang, lebar);
        this.senjata = senjata; 
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dilengkapi dengan senjata ${this.senjata}.`;
    }
}

// Subclass KapalPenangkapIkan
class KapalPenangkapIkan extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasTangkap) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasTangkap = kapasitasTangkap; 
    }

        infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat menangkap ikan hingga ${this.kapasitasTangkap} ton.`;
    }
}

const KapalCepat1 = new KapalCepat("Speedy", "kapal cepat", 100, 30, 50);
const KapalSelam1 = new KapalSelam("Deep Explorer", "kapal selam", 80, 20, 300);
const KapalKontainer1 = new KapalKontainer("CargoMaster", "kapal kontainer", 350, 60, 10000);
const KapalPerang1 = new KapalPerang("Destroyer", "kapal perang", 150, 40, "rudal dan torpedo");
const KapalPenangkapIkan1 = new KapalPenangkapIkan("Fishing Pro", "kapal penangkap ikan", 70, 25, 200);

const kapalList = [KapalCepat1, KapalSelam1, KapalKontainer1, KapalPerang1, KapalPenangkapIkan1];

kapalList.forEach(kapal => {
    console.log(kapal.infoKapal());
});

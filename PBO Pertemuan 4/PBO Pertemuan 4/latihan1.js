//Class1 Laptop
class laptop {
    constructor (nama) {
        this.nama = nama
    }
    spesifikasi(){
        console.log(`Laptop ${this.nama} memiliki spesifikasi entry level`)
    }
}   

class hp extends laptop {
    spesifikasi() {
        console.log(`Laptop ${this.nama} merupakan laptop belajar` )
    }
}

class asusROG extends laptop {
    spesifikasi() {
        console.log(`Laptop ${this.nama} merupakan laptop gaming`)
    }
}

let Laptop = [new hp('hp'), new asusROG('asusROG')]
Laptop.forEach(laptop => laptop.spesifikasi())


//Class2 Motor
class motor {
    constructor (nama) {
        this.nama = nama
    }
    spesifikasi(){
        console.log(`Motor ${this.nama} merupakan motor dari perusahaan Honda `)
    }
}   

class scopy extends motor {
    spesifikasi() {
        console.log(`Motor ${this.nama} sering di pakai perempuan` )
    }
}

class supra extends motor {
   spesifikasi() {
        console.log(`Motor ${this.nama} sering dipakai bapak-bapak`)
    }
}

let Motor = [new scopy('scopy'), new supra('supra')]
Motor.forEach(motor => motor.spesifikasi())


//Class3 segitiga
class segitiga {
    constructor (bentuk) {
        this.bentuk = bentuk
    }
    panjangSisi(){
        console.log(`Segitiga ${this.bentuk} memiliki sisi yang sama`)
    }
}   

class samakaki extends segitiga {
    panjangSisi() {
        console.log(`Segitiga ${this.bentuk} memiliki panjang kaki yang sama `)
    }
}

class samasisi extends segitiga {
    panjangSisi() {
        console.log(`Segitiga ${this.bentuk} memiliki panjang sisi yang sama `)
    }
}

let Segitiga = [new samakaki('samakaki'), new samasisi('samasisi')]
Segitiga.forEach(segitiga => segitiga.panjangSisi())


//class4 film
class film {
    constructor (genre) {
        this.genre = genre
    }
    genrefilm(){
        console.log(`Filml ini bergenre ${this.genre}`)
    }
}   

class comedy extends film {
    genrefilm() {
        console.log(`Film ini bergenre ${this.genre} dan diperankan oleh Raditya Dika`)
    }
}

class horor extends film {
    genrefilm() {
        console.log(`Film ini bergenre ${this.genre} dan diperankan oleh Prilly`)
    }
}

let Film = [new comedy('comedy'), new horor('horor')]
Film.forEach(film => film.genrefilm())
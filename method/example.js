// Mengenal keyword "this".
const cat = {
    name: "Tobi",
    fur: "Black",
    sibling: 3,
    food: ['Fish', 'Meat', 'Whiskas'],
    getName() {
        return "Nama Kucing adalah " + this.name

    },
    getFurColor() {
        return "Warna bulu " + this.fur
    },

}

// Naming COnvention 
// # Pascal Case
// function KucingBiru() {}

// # Camel Case
// function kucingBiru() {}

// # Snack Case 
// function kucing_biru() {}

// Jika terdapat 3 kata, kata awal kecil, kata kedua dst dia memakai kapital
// function kucingLiarBiru()
// Kucing Liar Biru


const namaKucing = cat.getName()
console.log(namaKucing)
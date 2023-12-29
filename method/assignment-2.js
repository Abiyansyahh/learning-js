//sebuah warkop
//format file study-case-2.js
//branch: feat/argumen-method
// sebuah warung kopi
const coffeeShop ={
    name: "Gustea",
    menus:{
        signature_tea: 5,
        milk_tea: 3,
        cireng :10,
        gorengan: 5,
    },
    // buat method dng nama orderA
    // order a akan mengurangi isi dari property
    // signature_tea -1
    // cireng -3
    // gorengan -3

    orderA(){
        // return nilai adalah sisa stok menu
        // sample output
        // "sisa stok signature Tea: "+menu.signature_tea
        // "sisa stok milk Tea: "+menu.milk_tea
        // "sisa stok cirengTea: "+menu.cireng
        // "sisa stok gorengan: "+menu.gorengan
    }
}
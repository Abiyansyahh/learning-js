const coffeeShop = {
    name: "Gustea",
    menu: {
        signature_tea: 5,
        milk_tea: 3,
        cireng: 10,
        gorengan: 5,
    },
    orderA(){
        this.menu.signature_tea -= 3
        this.menu.milk_tea -= 1
        this.menu.cireng -= 4
        this.menu.gorengan -= 2
        return{
            "Sisa Stok Signature Tea : ": this.menu.signature_tea,
            "Sisa Stok Milk Tea : ": this.menu.milk_tea,
            "Sisa Stok Cireng : ": this.menu.cireng,
            "Sisa Stok Gorengan : ": this.menu.gorengan,
        }
    }
}
const SisaStok = coffeeShop.orderA()
console.log(SisaStok)
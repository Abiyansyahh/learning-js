function pengurangan(x,y){
    if(y === undefined){
        y = 100
    }
    return x-y
}
console.log(pengurangan(200))

function pertambahan(a,b){
    if(b === undefined){
        b = 90
    }
    return a+b
}
console.log(pertambahan(230))

function alamat(rumah){
    if(rumah === undefined){
        rumah = "Beji, Bejen, Karanganyar"
    }
    return rumah
}
console.log("Saya Tinggal di " + alamat())
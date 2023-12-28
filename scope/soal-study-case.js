// ubah ke local scope
const animal = "Bebek"

function MyAnimal(){
    return animal
}
//jawaban local scope
function MyAnimal(hewan){
    const animal = "Bebek" + hewan;
    return animal
}
console.log(animal)


//ubah ke global scope
function MyAge(){
    const age = 17
    return age
}
//jawaban gllobal scope
const age = 17
function MyAge(){
    return age
}
console.log(MyAge());


//ubah ke block scope
function orderCheck(param){
    let order
    if(param > 0){
        order = "Pesanan sedang diproses"
        return order
    } else {
        order = "Pesanan Kosong"
        return order
    }
}
orderCheck(1)
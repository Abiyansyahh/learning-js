// Assignment: Method and keyword 'this'
// Kerjakan dalam format file study-case.js

// #1 Lengkapilah kode di bawah ini.
const tiger = {
    name: "Jojo",
    fur: "White",
    food: ["Chicken Meat", "Beef"],
    getFood() {
        return this.name + "Suka Makan" + this.food
    }
}
const JojoLikes = tiger.getFood()
console.log(JojoLikes)

const eagle = {
    name: "Elang",
    fur: "Black",
    food: ["Fish", "Beef"],
    voice: "Wushhh",
    getElang(){
        return "Suara" + this.name + "" + this.voice
    }
}
const suaraElang = eagle.getElang()
console.log(suaraElang)

// #3 Lengkapilah kode di bawah ini
const uniqueNumber = {
    n: [3, 7, 5, 15, 13, 2, 30, 27, 45],
    multipleOfFive() {
     if(n % 5 === 0){
        return n;
  }
}
}
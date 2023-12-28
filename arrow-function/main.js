// yang sebelumnya
//
function namaFungsi() {
    return "halo dunia";
}

//anonymous function
const addTodo = function() {
    return "Halo Dunia";
};

//arrow function
const greeting = (nama, age) => `Halo ${nama}, Umur ${age}`;

console.log(namaFungsi)
console.log(addTodo());
//console.log(greeting("arrow function"));
console.log(greeting("Abiyansyah", 17))
let shoppingList = [];

//fungsi tambah item
const addItem = (itemName) => {
    shoppingList.push(itemName);
    console.log(`${itemName}telah ditambahkan`);
};

//fungsi hapus item
const removeItem = (item) => {
    const removeIndex = shoppingList.indexOf(item);
    shoppingList.splice(removeIndex, 1);
    console.log(`${item} berhasil dihapus`);
};

//fungsi untuk menampilkan item
constShowItem = () => {
    shoppingList.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
};

addItem("Laptop");
addItem("Macbook");
addItem("Sprite");
addItem("Cola");
console.log("");
showItem();
console.log("");
removeItem("Cola");
console.log("");
showItem();

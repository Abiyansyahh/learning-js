let tasks = ["makan", "tidur"];

//funsi tambah tugas
function addTasks(task) {
    tasks.push(task);
    console.log(`Tugas ${task} berhasil ditambahkan`);
}

//fungsi tampilkan semua tugas
function showTasks(){
    if (tasks.length === 0) {
        console.log("tidak ada tugas")
    } else {
        for (let i = 0; i < tasks.length; i++){
            console.log(`${i + 1}. ${tasks[i]}`);
        }
    }
}

//fungsi hapus tugas
function deleteTask(index){
    if(index >= 0 && index < tasks.length){
        let deleteTasks = tasks.splice(index, 1);
        console.log(`Tugas ${deleteTasks} berhasil dihapus`);
    } else {
        console.log("indeks tugas tidak valid");
    }
}

//panggil fungsi tambah
addTasks("Study kasus javascript")
console.log("")
showTasks()
console.log("")
deleteTask(0)
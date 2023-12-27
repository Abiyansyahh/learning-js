function computerSelect() {
    let select = ["batu", "gunting", "kertas"];
    let index = Math.floor(Math.random() * select.length);
    return select[index];
}

function winner(userSelect,computerSelect){
    if (userSelect === computerSelect){
        return Seri;
    } else if (
        (userSelect === "gunting" && computerSelect === "batu") ||
        (userSelect === "kertas" && computerSelect === "gunting") ||
        (userSelect === "batu" && computerSelect === "kertas")
    ) {
        return "pemenang"
    } else {
        return "computer"
    }
}

function play(userSelect){
    const user = userSelect;
    const computer = computerSelect();
    const result = winner(user,computer);
    console.log(`pemain memilih ${user}`);
    console.log(`komputer memilih : ${computer}`);
    console.log(`Hasilnya: ${result}`);
}
play("kertas");
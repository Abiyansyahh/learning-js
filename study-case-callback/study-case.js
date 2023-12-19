function callbackFunction(data){
    console.log("perkenalkan nama saya : " + data);
}

function performTask(callback){
    let result = "muhammad adib abiyansyah";
}

performTask(callbackFunction);

function createClosure(UmurHanylahAngka){
    let umur = UmurHanyalahAngka;

    function closureFunction() {
        console.log("Saya Berumur : " + Umur);
    }

    return  closureFunction;
}
let myClosure = createClosure(17);
myClosure();
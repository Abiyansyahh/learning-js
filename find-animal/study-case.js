function searchAnimal(cari){
    const data = ['Owl','Fish','Flamingo','Chick','Snake','Crocodile']
    let hasil = ''

    if(cari === undefined){
        return data
    }

    for(let i = 0; i < data.length; i++){
        if(data[i] === cari){
            hasil = data[i]
        } else {
            hasil = 'Tidak Ditemukan'
        }
    }
    return hasil
}
console.log(searchAnimal('Flamingo'))
console.log(searchAnimal('Sapi'))
console.log(searchAnimal())
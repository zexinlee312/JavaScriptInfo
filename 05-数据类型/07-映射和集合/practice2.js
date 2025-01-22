function aClean(arr) {
    let newArray = arr.map(word => {
        let temp = word.toLowerCase().split('');
        return temp.sort().join('');
    });
    console.log(newArray);
    return Array.from(new Set(newArray));
}

console.log(aClean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]))
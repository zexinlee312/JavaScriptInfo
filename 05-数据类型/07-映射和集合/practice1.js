let arr = [];
function unique(arr) {
    let set = new Set(arr);
    return Array.from(set);
}
const array = [10,50,40,60,20];

function arrSort(arr){
    arr.sort((a,b) => a-b);
    arr.reverse();
    return arr;
}
console.log(arrSort(array));
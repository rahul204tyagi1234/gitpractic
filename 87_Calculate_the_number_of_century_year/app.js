function centuryFromYear1() {
    var year = document.getElementById('yearfield').value;
    var x = Math.floor(year/100) + 1;
    document.getElementById('result').innerHTML= x -1; 
}
// console.log(centuryFromYear1('499'))


var numArray = []
    , arrayFloat = [];

// Nhập số n:

function getN() {
    var a = Number(document.getElementById("inputN").value);
    numArray.push(a);
    document.getElementById('addN').innerHTML = numArray;
}

// 1. Tính tổng số dương calSum
function clickToSum() {
    for (var a = 0, b = 0; a < numArray.length; a++)
        numArray[a] > 0 && (b += numArray[a]);

    document.getElementById('calSum').innerHTML = 'Tổng số dương: ' + b
}

// 2. Đếm số dương countPositive
function clickToCount() {
    for (var a = 0, b = 0; a < numArray.length; a++)
        numArray[a] > 0 && b++;
    document.getElementById('countPositive').innerHTML = 'Số dương: có ' + b + ' số'
}

// 3. Tìm số nhỏ nhất: find
function clickToFind() {
    for (var a = numArray[0], b = 1; b < numArray.length; b++)
        numArray[b] < a && (a = numArray[b]);
    document.getElementById("find").innerHTML = "Số nhỏ nhất: " + a
}

// 4. Tìm số dương nhỏ nhất: findMin
function clickMinP() {
    for (var a = [], b = 0; b < numArray.length; b++)
        numArray[b] > 0 && a.push(numArray[b]);
    if (a.length > 0) {
        for (var min = a[0], b = 1; b < a.length; b++)
            a[b] < min && (min = a[b]);
        document.getElementById("findMin").innerHTML = "Số dương nhỏ nhất: " + min
    } else
        document.getElementById("findMin").innerHTML = "Không có số dương trong mảng"
}


// 5. Số chẵn cuối cùng: findLastNumber
function lastNumber() {
    for (var a = 0, b = 0; b < numArray.length; b++)
        numArray[b] % 2 == 0 && (a = numArray[b]);
        document.getElementById("findLastNumber").innerHTML = "Số chẵn cuối cùng: " + a
}

// 6. Đổi chỗ: switch
function change(a,b) {
    var s = numArray[a];
    numArray[a] = numArray[b];
    numArray[b] = s;
}
function clickToSwitch() {
    change(document.getElementById('place1').value, document.getElementById('place2').value),
    document.getElementById('switch').innerHTML = "Mảng sau khi đổi: " + numArray
}

// 7. Sắp xếp tăng dần: sort
function clickToSort() {
    for (var a = 0; a < numArray.length; a++)
    for (var b = 0; b < numArray.length - 1; b++)
    numArray[b] > numArray[b + 1] && change(b, num + 1);
    document.getElementById("sort").innerHTML = "Mảng sau khi sắp xếp: " + numArray
}


// 8. Tìm số nguyên tố đầu tiên: findPrime
function Prime(a) {
    if (a < 2)
        return !1;
    for (var b = 2; b <= Math.sqrt(a); b++)
        if (a % b == 0)
            return !1; return !0

}

function clickToPrime() {
    for (var a = -1, b = 0; b < numArray.length; b++) {
        if (Prime(numArray[b])) 
        {a = numArray[b]; break}
    }
    document.getElementById("findPrime").innerHTML = -1 !== a ? a : "Không có số nguyên tố"
}




// 9. Đếm số nguyên: addPrime  countPrime
function ClickToAddPrime() {
    var a = Number(document.getElementById("prime1").value);
    arrayFloat.push(a),
    document.getElementById("addPrime").innerHTML = arrayFloat

}

function clickToCountPrime() {
    for (var a = 0, b = 0; b < arrayFloat.length; b++)
        Number.isInteger(arrayFloat[b]) && a++;
    document.getElementById("countPrime").innerHTML = 'Có: ' + a + ' số nguyên'

}

// 10. So sánh số âm và số dương: comPare
function clickToCompare() {
    for (var a = 0, b = 0, c = 0; c < numArray.length; c++)
        numArray[c] > 0 ? a++ : numArray[c] < 0 && b++;
    document.getElementById("comPare").innerHTML = a > b ? "Số âm < Số dương" : a < b ? "Số âm > Số dương" : "Số âm = Số dương"

}

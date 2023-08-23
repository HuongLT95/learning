// Bài 1: Khai báo 2 mảng, nhân và chia lấy dư (%) 2 cặp giá trị cùng index
var name = [89, 30, 7]
var number = [10, 15, 20]

let total = name[0] * number [0]
// console.log(total);

let tong = name[1] / number[1]
// console.log(tong);


// Bài 2: Cho 2 mảng 
var arr1 = [10, 20, 13, 6]
var arr2 = [9, 32, 46, 15]
// a. Tính tổng 2 mảng
let sum = arr1[0] + arr1[1] + arr1[2] + arr1[3]
// console.log(sum);
let sum1 = arr2[0] + arr2[1] + arr2[2] + arr2[3]
// console.log(sum1);
let total1 = sum + sum1
// console.log(total1);
// b. Chia bình thường và chia lấy dư tổng mảng 2 cho mảng 1
let total2 = sum1 / sum
// console.log(total2);
let total3 = sum1 % sum
// console.log(total3);

// Bài 3: Khai báo 2 object có value là kiểu dữ liệu number hoặc string. Cộng 2 cặp giá trị nếu là string và nhân 2 cặp giá trị nếu là number.
let obj1 = {
    name: 'huong',
    lop: 123
}

let obj2 = {
    name: 'sau',
    tuoi: 3
}

let str = obj1.name + obj2.name
console.log(str);

var arr3 = obj1.lop * obj2.tuoi
console.log(arr3);
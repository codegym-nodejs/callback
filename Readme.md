Bài 1: 
Đếm phần tử chẵn lẽ trong mảng:

  console.log(count([1,2,3,4,5], function(num){
    if(num % 2 === 0) return 'even';
    else return 'odd';
  }))

  function count() {
    ..................
  }

Bài 2:
Kiểm tra số phần kiểu x có nhiều hơn số phần tử kiểu y hay không;

  const even = (num) => {
    return num % 2 === 0;
  }

  const odd = (num) => {
    return num % 2 === 1;
  }

  console.log(checkMajority([1,2,3,4,5], even))
  True - số phần tử chẵn nhiều hơn số phần tử lẻ 
  False - ngược lại hoặc số phần tử chẵn bằng số phần tử lẻ

  console.log(checkMajority([1,2,3,4,5], odd))

  True - số phần tử lẻ nhiều hơn số phần tử chẵn
  False - số phần tử lẻ <= số phần tử chẵn

Bài 3:
Ghép các mảng lại với nhau và bỏ đi các phần tử trung lặp của mảng:
union([5,10,15], [15,20], [20,31,33])

// [5,10,15,20, 31,33]

Bài 4: 

Tự implement một hàm có tên là myEach có chức năng giống forEach.
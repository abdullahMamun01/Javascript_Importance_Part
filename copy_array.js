let arr = [1,2,3,4,5]

let copy_arr = Array.from(arr,)
copy_arr[0] = arr[0] * 200
console.log(arr)
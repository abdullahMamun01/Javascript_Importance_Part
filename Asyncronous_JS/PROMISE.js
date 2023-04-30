


let userData = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com"
}

function fetchUserData(data,isPassed){
    return new Promise((resolve , reject) => {
        if(isPassed){
            setTimeout(resolve(data) , 1000 )
        }else{
            reject(new Error('user data not found'))
        }
    })
}



fetchUserData(userData,Math.floor(Math.random() * Math.max(2)))
    .then(res => {
        console.log(res)
    })
    .catch(e =>{
        console.log(e.message)
    })


let p1  = new Promise(res => {
    setTimeout(() => res('p1') , 400)
})
let p2  = new Promise(res => {
    setTimeout(() => res('p2') , 2000)
})
let p3  = new Promise((res,reject) => {
    setTimeout(() => reject('p3') , 100)
})
let p4  =new Promise(res => {
    setTimeout(() => res('p4') , 1000)
})


let promiseArr = [p1,p2,p3,p4]
Promise.any(promiseArr)
    .then(arr => {
        console.log(arr)
    })
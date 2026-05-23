let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(110)
        }, 1000);
    })
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(120)
        }, 3000);
    })
}

let y = async () => {
    let x = await Promise.all([p1(),p2(),p3()])
    console.log(x)
}
y()
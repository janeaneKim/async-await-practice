function getRandomNumber(x){
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(x);
        }, 500);
    });
}


async function startFunction(){
    let x = await getRandomNumber(Math.floor(Math.random()*10000));
    console.log(x);
}

startFunction(); //invokes getRandomNumber() and prints number to console after setTimeout is resolved
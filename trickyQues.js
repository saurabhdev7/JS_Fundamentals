
for (let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i)
    }, 2000);
}
// 0 1 2 3 4


for (var i = 0; i < 5; i++){
    setTimeout(()=>{
        console.log(i)
    }, 2000); 
}
// 5 5 5 5 5
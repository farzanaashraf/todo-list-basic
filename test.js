// let func = function () {
//     console.log("this executes after timeout");
//     setTimeout(function() {  console.log("after another timeout") }, 2000);
// }

// setTimeout(func, 2000);
// console.log("Start");

/*
setTimeout(function() {
console.log("done"); 
setTimeout(function () {
console.log("second");

setTimeout(function() {
    console.log("After 6000 ms")
}, 3000)
}, 1000)
}, 2000)

*/

//promise

// function timeoutPromise (timer) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             try {
//                 resolve();
//             } catch (e) {
//                 reject(e);
//             }
//         }, timer);
//     });
// };

// const x = 1;

// timeoutPromise(2000)
//     .then(function() { 
//         console.log("done"); 
//         x = 2;
//     })
//     .catch((e) => console.log(e.message))
//     .then(() => { 
//         console.log("second"); 
//         return timeoutPromise(3000) 
//     })
//     .then(() => console.log("After 6000 ms"))
//     .finally(() => console.log("This always executes"));


function login (username, password, func){
    if(username === "admin" && password==="12345"){
        func();
    }
}
login("admin","12345",function(){
    console.log("login succesfully");
})
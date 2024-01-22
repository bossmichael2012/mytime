



// console.log('hello world')

// var output = document.querySelector('.output')

// document.querySelector('.Start').addEventListener('click', Start)

// //  document.querySelector('.Start').addEventListener('click', stop)

// var hint = 0


// function Start() {

//     var timig = setInterval(action, 100)
//     function action() {
//         if (hint == 200) {
//             clearInterval(timig)
//         } else {
//             hint++
//             output.innerHTML = Math.floor(Math.random() * 100)
//             console.log(hint)
//         }

//     }
// }


var hhr = document.querySelector('.hr')
var hmin = document.querySelector('.min')
var hsec = document.querySelector('.sec')

setInterval(() => {
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    if(min < 10){
        min = '0' + min
    }
    if(sec < 10){
        sec = '0' + sec
    }

    console.log(hr + ':' + min + ':' + sec)
    hhr.innerHTML = hr;
    hmin.innerHTML = min;
    hsec.innerHTML = sec;
}, 1000);






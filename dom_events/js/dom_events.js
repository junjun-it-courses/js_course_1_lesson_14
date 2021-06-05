// function countRabbits() {
//
//     for(let i=1; i<=3; i++) {
//         console.log("Кролик номер " + i);
//     }
//
// }

const elem = document.getElementById('elem');
// elem.onclick = function () {
//     console.log(123)
// }


const elem2 = document.getElementById('elem2');
function elemClickHandler() {
    console.log(123);
}

elem.onclick = elemClickHandler;
elem2.onclick = elemClickHandler;




document.getElementById('elem3').onclick = function (event) {

    if(event.target.innerHTML === 'Hello Julia') {

        event.target.innerHTML = 'Hello Dima';
        event.target.style.backgroundColor = 'green'

    } else {

        event.target.innerHTML = 'Hello Julia';
        event.target.style.backgroundColor = 'pink'

    }

    console.log(event.target.getAttribute('type'));

}




//
// elem.onclick = elemClickHandler;







// elem.addEventListener('click', {
//     handleEvent(event) {
//         alert(event.type + " на " + event.currentTarget);
//     }
// });
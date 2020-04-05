// =>>>>>>>>>GRANIM JS<<<<<<<<<<<<=

var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});

// =>>>>>>>>><<<<<<<<<<<<=





let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');
let box6 = document.querySelector('.box6');
let box7 = document.querySelector('.box7');
let box8 = document.querySelector('.box8');
let box9 = document.querySelector('.box9');
let ticCounter = document.querySelector('.ticCounter');
let tacCounter = document.querySelector('.tacCounter');


let counter = 0;

document.body.addEventListener('click', condition);

function condition(e){
    if(e.target.classList[0] == "col-lg-4"){
        if(counter % 2 == 0){
            if(e.target.classList.contains("tic") == false && e.target.classList.contains("tac") == false){
                e.target.classList.add('tic');
                e.target.classList.add('ticbg');
                ticWinner();
                counter++;
            }
            else{
                return;
            }
        }else if(counter % 2 == 1){
            if(e.target.classList.contains("tac") == false && e.target.classList.contains("tic") == false){
                e.target.classList.add('tac');
                e.target.classList.add('tacbg');
                tacWinner();
                counter++;
            }
            else{
                return;
            }
        }
        
    }
}


function ticWinner(){
    if(box1.classList[2] == "tic" && box2.classList[2] == "tic" && box3.classList[2] == "tic"){
        // alert("Крестики выиграли");
        box1.classList.add('redBg');
        box2.classList.add('redBg');
        box3.classList.add('redBg');
        ticCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }else if(box1.classList[2] == "tic" && box4.classList[2] == "tic" && box7.classList[2] == "tic"){
        // alert("Крестики выиграли");
        box1.classList.add('redBg');
        box4.classList.add('redBg');
        box7.classList.add('redBg');
        ticCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }else if(box7.classList[2] == "tic" && box8.classList[2] == "tic" && box9.classList[2] == "tic"){
        // alert("Крестики выиграли");
        box7.classList.add('redBg');
        box8.classList.add('redBg');
        box9.classList.add('redBg');
        ticCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }else if(box3.classList[2] == "tic" && box6.classList[2] == "tic" && box9.classList[2] == "tic"){
        // alert("Крестики выиграли");
        box3.classList.add('redBg');
        box6.classList.add('redBg');
        box9.classList.add('redBg');
        ticCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }else if(box2.classList[2] == "tic" && box5.classList[2] == "tic" && box8.classList[2] == "tic"){
        // alert("Крестики выиграли");
        box5.classList.add('redBg');
        box2.classList.add('redBg');
        box8.classList.add('redBg');
        ticCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }
    else if(box4.classList[2] == "tic" && box5.classList[2] == "tic" && box6.classList[2] == "tic"){
        // alert("Крестики выиграли");
        box4.classList.add('redBg');
        box5.classList.add('redBg');
        box6.classList.add('redBg');
        ticCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }
    else if(box7.classList[2] == "tic" && box8.classList[2] == "tic" && box9.classList[2] == "tic"){
        // alert("Крестики выиграли");
        box7.classList.add('redBg');
        box8.classList.add('redBg');
        box9.classList.add('redBg');
        ticCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }
    else if(box1.classList[2] == "tic" && box5.classList[2] == "tic" && box9.classList[2] == "tic"){
        // alert("Крестики выиграли");
        box1.classList.add('redBg');
        box5.classList.add('redBg');
        box9.classList.add('redBg');
        ticCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }
    else if(box3.classList[2] == "tic" && box5.classList[2] == "tic" && box7.classList[2] == "tic"){
        // alert("Крестики выиграли");
        box3.classList.add('redBg');
        box5.classList.add('redBg');
        box7.classList.add('redBg');
        ticCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }
}

function tacWinner(){
    if(box1.classList[2] == "tac" && box2.classList[2] == "tac" && box3.classList[2] == "tac"){
        // alert("Нолики выиграли");
        box1.classList.add('redBg');
        box2.classList.add('redBg');
        box3.classList.add('redBg');
        tacCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }else if(box1.classList[2] == "tac" && box4.classList[2] == "tac" && box7.classList[2] == "tac"){
        // alert("Нолики выиграли");
        box1.classList.add('redBg');
        box4.classList.add('redBg');
        box7.classList.add('redBg');
        tacCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }else if(box7.classList[2] == "tac" && box8.classList[2] == "tac" && box9.classList[2] == "tac"){
        // alert("Нолики выиграли");
        box7.classList.add('redBg');
        box8.classList.add('redBg');
        box9.classList.add('redBg');
        tacCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }else if(box3.classList[2] == "tac" && box6.classList[2] == "tac" && box9.classList[2] == "tac"){
        // alert("Нолики выиграли");
        box1.classList.add('redBg');
        box6.classList.add('redBg');
        box9.classList.add('redBg');
        tacCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }else if(box2.classList[2] == "tac" && box5.classList[2] == "tac" && box8.classList[2] == "tac"){
        box2.classList.add('redBg');
        box5.classList.add('redBg');
        box8.classList.add('redBg');
        // alert("Нолики выиграли");
        tacCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }
    else if(box4.classList[2] == "tac" && box5.classList[2] == "tac" && box6.classList[2] == "tac"){
        box4.classList.add('redBg');
        box5.classList.add('redBg');
        box6.classList.add('redBg');
        // alert("Нолики выиграли");
        tacCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }
    else if(box7.classList[2] == "tac" && box8.classList[2] == "tac" && box9.classList[2] == "tac"){
        box7.classList.add('redBg');
        box8.classList.add('redBg');
        box9.classList.add('redBg');
        // alert("Нолики выиграли");
        tacCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }
    else if(box1.classList[2] == "tac" && box5.classList[2] == "tac" && box9.classList[2] == "tac"){
        box1.classList.add('redBg');
        box5.classList.add('redBg');
        box9.classList.add('redBg');
        // alert("Нолики выиграли");
        tacCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }
    else if(box3.classList[2] == "tac" && box5.classList[2] == "tac" && box7.classList[2] == "tac"){
        // alert("Нолики выиграли");
        box3.classList.add('redBg');
        box5.classList.add('redBg');
        box7.classList.add('redBg');
        tacCounter.innerHTML++;
        document.body.removeEventListener('click', condition);
    }
}



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let reset = document.querySelector('.reset');

// let temp = style.background;

reset.addEventListener('click', (e) =>{
    e.preventDefault();
    counter = 0;
    box1.classList.remove('ticbg', 'tacbg', 'tic', 'tac', 'redBg');
    box2.classList.remove('ticbg', 'tacbg', 'tic', 'tac', 'redBg');
    box3.classList.remove('ticbg', 'tacbg', 'tic', 'tac', 'redBg');
    box4.classList.remove('ticbg', 'tacbg', 'tic', 'tac', 'redBg');
    box5.classList.remove('ticbg', 'tacbg', 'tic', 'tac', 'redBg');
    box6.classList.remove('ticbg', 'tacbg', 'tic', 'tac', 'redBg');
    box7.classList.remove('ticbg', 'tacbg', 'tic', 'tac', 'redBg');
    box8.classList.remove('ticbg', 'tacbg', 'tic', 'tac', 'redBg');
    box9.classList.remove('ticbg', 'tacbg', 'tic', 'tac', 'redBg');
    document.body.addEventListener('click', condition);
    // condition(e);

})



// counter_reset btn
let counterReset = document.querySelector('#counter_reset');
counterReset.addEventListener('click', (e) =>{
    e.preventDefault();
    ticCounter.innerHTML = 0;
    tacCounter.innerHTML = 0;
})


// let a = document.querySelector('#h');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     a.classList.remove('hi', 'hello', 'sds');
// })
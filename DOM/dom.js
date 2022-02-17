const button = document.createElement("button"); //Step 1
const buttonDiv = document.createElement("div");
button.innerText = "Nice";
buttonDiv.textContent = "[Step 1] "
buttonDiv.appendChild(button)
document.body.appendChild(buttonDiv);


const btnText = document.getElementById("btnSub"); //Step 3
const hoverDiv = document.getElementById("hoverDiv");


const rgbPara = document.createElement("p");  //Step 4
const paraDiv = document.createElement("div");
rgbPara.innerText = "Paragraph goes right here change to random color [Step 4]"
paraDiv.appendChild(rgbPara)
document.body.appendChild(paraDiv);


const btnSpan = document.createElement("button"); //Step 5
const spanDiv = document.createElement("div");
btnSpan.innerText = "Span";
document.body.appendChild(btnSpan);


let friends = [ //Step 6
    'Josh',
    'Garett',
    'Haylee',
    'Kait',
    'Pepper',
    'Harry',
    'Ron',
    'Hermione',
    'Tom Riddle',
    'Geralt of Rivia'
]
let btnFriends = document.getElementById("btnFriends");     
let ulFriends = document.getElementById("ulFriends");


button.addEventListener('click', function() {
    alert('~*~ Nice ~*~');
})

btnText.addEventListener('click', function () {
    let text = document.getElementById('textField')
    alert(text.value)
})

hoverDiv.onmouseenter = function (event) {
    event.target.style.background = 'blue';
}

hoverDiv.onmouseleave = function (event) {
    event.target.style.background = 'white';
}

rgbPara.addEventListener('click', function (event) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    event.target.style.color = `rgb(${r}, ${g}, ${b})`;
})

btnSpan.addEventListener('click', function() {
    let newSpan = document.createElement("span");
    newSpan.innerText = "Dan the Mann ";
    spanDiv.appendChild(newSpan);
    document.body.appendChild(spanDiv);
})

btnFriends.addEventListener('click', function () {
    for (let i = 0; i < friends.length; i++) {
        let newLi = document.createElement("li");
        let friendLi = friends[i];
        newLi.textContent = friendLi;
        ulFriends.appendChild(newLi);
        document.body.appendChild(ulFriends);
    }
})
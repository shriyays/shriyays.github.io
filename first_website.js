const heading = document.querySelector('h1');
//heading.textContent = "Welcome to My Test Page!";

const img = document.querySelector('img');
img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    if (src === 'images/hpy1.jpg') {
        img.setAttribute('src', 'images/hny2.jpg');
    } else {
        img.setAttribute('src', 'images/hpy1.jpg');
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Happy New Year, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    myHeading.textContent = `Happy New Year, ${localStorage.getItem("name")}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});
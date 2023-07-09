const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/kingfisher.jpg") {
    myImage.setAttribute("src", "images/gray-jay.jpg");
    myImage.setAttribute(
      "alt",
      "A photo of a Gray Jay bird standing on a branch"
    );
  } else {
    myImage.setAttribute("src", "images/kingfisher.jpg");
    myImage.setAttribute(
      "alt",
      "A photo of a kingfisher bird with a blurry background"
    );
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Birds are cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Birds are cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

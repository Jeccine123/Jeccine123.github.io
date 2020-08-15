let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/火狐.jpg') {
      myImage.setAttribute('src', 'images/光盘.jpg');
    } else {
      myImage.setAttribute('src', 'images/火狐.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '好喜欢你，' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '好喜欢你，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }
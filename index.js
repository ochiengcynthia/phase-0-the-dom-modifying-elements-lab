// Write your code here!
const elementToRemove=document.querySelector('#main');
elementToRemove.remove();

const newHeader=document.createElement('h1');
newHeader.id= 'victory';
newHeader.textContent= 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);
const yourName='Cynthia';
newHeader.textContent= yourName + 'is the champion';
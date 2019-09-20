//getElementbyid
let pElement=document.getElementById('demo');
console.log(pElement);
pElement.textContent='this is new p tag';

//getElementsByClassName
let divElements=document.getElementsByClassName('blue');
console.log(divElements);
let pElements=document.getElementsByTagName('p');
console.log(pElements);
let nameElements=document.getElementsByName('helement');
console.log(nameElements);
let demoElements=document.querySelector('demo');
console.log(demoElements);
let blueclasselement=document.querySelectorAll('blue');
console.log(blueclasselement);
let buttonElement=document.createElement('button');
buttonElement.textContent='Click me';
console.log(buttonElement);
document.body.appendChild(buttonElement);
console.log("========================");
let buttonElement1=document.getElementById('buttonEle');
//buttonElement1.className='add';
buttonElement1.classList='add add1';
console.log(buttonElement1);

document.getElementById('tableid').innerHTML =  
                                        `<table border='2px'>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>Age</td>
                                                </tr>
                                                <tr>
                                                    <td>john</td>
                                                    <td>13</td>
                                                </tr>
                                                <tr>
                                                    <td>Dinga</td>
                                                    <td>20</td>
                                                </tr>
                                            </table>`;

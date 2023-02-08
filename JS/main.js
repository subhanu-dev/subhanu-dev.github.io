
/* console.log(document.domain);
 console.log(document.URL);
 console.log(document.title);
 console.log(document.all);
 console.log(document.forms);


console.log(document.getElementById('dummy'));
let subhanu=document.getElementById('dummy');
console.log(subhanu.innerText);
subhanu.textContent=("please check the requied fields")
subhanu.textContent='sent successfully!';
subhanu.innerHTML='<h4>hey</h4>';
subhanu.style.backgroundColor="red";
let saki=document.querySelector('textarea');
saki.style.backgroundColor='blue';
let saki1=document.querySelector('input:last-child');
saki1.value='fuck ya'
//queryselectorAll can be used to select multiple elements.


//traversing the DOM!

//let subba=document.querySelector('table.parentNode');
//console.log(subba);
//subba.style.backgroundColor='black'
//parentNode and parentElement both can be used to see the nodes that are parent nodes of the elements
var hola=document.querySelector('form.childNodes');
console.log(hola);
var hey=document.querySelector('form');
//console.log(hola.children);
//console.log(hola.children[2]);
console.log(hola.firstChild);
console.log(hola.firstElementChild);
console.log(hola.lastElementChild);
console.log(hola.nextSibling);
console.log(hola.nextElementSibling);
console.log(hola.previousElementSibling);
hola.nextElementSibling.style.color="blue";

//create elements

let newdiv=document.createElement('div');
newdiv.className='boo';
newdiv.id='hehe';
newdiv.setAttribute('title','hello div');
console.log(newdiv);
let txtnode=document.createTextNode("boo hehe");
newdiv.appendChild(txtnode);
let caption=document.querySelector('caption');
let input=document.querySelector('itd input');
input.insertBefore(newdiv,caption);
 \

*/
let vira=document.querySelector('body');
let subba=document.getElementById('dummy');
let submit = document.querySelector('#submit');
let name=document.querySelector('#name')
let subject=document.querySelector('#subject')
let check=document.querySelector('#check');
let reset=document.querySelector('#reset')

submit.addEventListener('click',subhanu);
reset.addEventListener('dblclick',konara);



function subhanu(x)
{
x.preventDefault();


if(name.value!='' && subject.value!=''&& check.checked)
{
   subba.innerText='Submitted Successfully!!';
   subba.style.color='green';

}
if(name.value=='' || subject.value=='')
{
subba.innerText='please fill all the required fields';
subba.style.color='red';
}
if(!check.checked && name.value!='' && subject.value!='')
{
    subba.innerText=('Are u a Robot?');
    subba.style.color='red';
}

}

function konara(e)
{
    e.preventDefault();
    vira.style.backgroundColor='yellow';
}

let x=document.createElement('h4');
x.className='heheheh';
x.textContent='//Contact Subhanu';
x.style.color=' rgba(152, 8, 8,.7)';
x.style.fontWeight='600';
console.log(x);
const c=document.querySelector('table');
const d=document.querySelector('.contact');

d.insertBefore(x,c);

     var bgcol=document.querySelector('table');
  bgcol.addEventListener('mouseover','colorch');

function colorch()
  {
document.body.style.backgroundColor=black;
  }

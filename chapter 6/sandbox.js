// const para = document.querySelector('p');
// const error = document.querySelector('div.error');

// console.log(para);
// console.log(error);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');


// paras.forEach(para => {

//     console.log(para);
// })

// console.log(paras[2]);
// console.log(errors);

// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName('error')
// console.log(errors)
// console.log(errors[0]);

// get elements by their tag name
// const paras = document.getElementsByTagName('p')
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');
// para.innerText = 'Test change';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'New Text';
// });

// console.log(para.innerText);

// const content = document.querySelector('.content');
// content.innerHTML = '<h2>new tag</h2>';

// const people = ['guy1', 'guy2', 'guy1'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'TheNetNinja Website';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success')
// mssg.setAttribute('style', 'color:green;');

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px');

// title.style.margin = '50px';
// title.style.color ='crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

const paras = document.querySelectorAll('p');
paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){
        p.classList.add('success');
    }
});

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// /*define global variables*/
// const navBarMenu = document.getElementById('navbar__list');
// const components = document.querySelectorAll('section');
// debugger;
// /*list of item*/
// let numberOfItems = components.length;

// /*add elements to the navbar*/
// for (let i=0; i<numberOfItems; i++) { 
    
//     let componentId = components[i].getAttribute('id')
//     let componentName = components[i].getAttribute('data-nav')

//     let allTogether = document.createElement('li')

//     allTogether.innerHTML = `<a class='menu__link' href='#${componentId}'>${componentName}</a>`
//     navBarMenu.appendChild(allTogether);
// }

// for (let i=0; i<numberOfItems; i++){
    
//     let componentId = components[i].getAttribute('id')

//     let position = document.getElementById(componentId).getBoundingClientRect().top;
//      if (position < 150 && position > -150) {
//         components[i].classList.add('section.your-active-class');
//     }
//     else {
//         components[i].classList.remove('section.your-active-class');
//     }
// }



/*define global variables*/
const navBarMenu = document.getElementById('navbar__list');
const components = document.querySelectorAll('section');

/*list of item*/
let numberOfItems = components.length;

/*add elements to the navbar*/
for (let i=0; i<numberOfItems; i++) { 
    
    var aExtra = document.createElement('a'); 

    aExtra.href = '#'+ components[i].id;

    const liExtra = document.createElement('li'); 

    let name = components[i].dataset.title;

    let textName = document.createTextNode(name)

    navBarMenu.appendChild(aExtra);

    aExtra.appendChild(liExtra);

    liExtra.appendChild(textName);

    

    let componentId = components[i].getAttribute('id')
    let componentName = components[i].getAttribute('data-nav')

    let allTogether = document.createElement('li')

    allTogether.innerHTML = `<a class='menu__link' href='#${componentId}'>${componentName}</a>`
    navBarMenu.appendChild(allTogether);
}

for (let i=0; i<numberOfItems; i++){
    
    let componentId = components[i].getAttribute('id')

    let position = document.getElementById(componentId).getBoundingClientRect().top;
     if (position < 150 && position > -150) {
        components[i].classList.add('section.your-active-class');
    }
    else {
        components[i].classList.remove('section.your-active-class');
    }
}
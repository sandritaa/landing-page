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

/*define global variables*/
const navBarMenu = document.getElementById('navbar__list');

const components = document.querySelectorAll('section');

/*list of items*/
const numberOfItems = components.length;

/*addition of active and non- active classes */
function activeSearch(){
    for (let i = 0; i < numberOfItems; i++){
        let topScreenDistance = components[i].getBoundingClientRect().top;     
        
        if (topScreenDistance <=  150 && topScreenDistance >= -150){
            components[i].className = 'your-active-class';
        }
        else {
            components[i].className = '';
        }
    }
}

/* creating the scroll event listener */
document.addEventListener('scroll', activeSearch);

/*navbar additions*/
function barAdditions(){
    
    for (let i = 0; i < numberOfItems; i++) { 
    
        const liExtra = document.createElement('li');
        liExtra.className = 'menu__link'; 
        
        /* creating the click event listener */
        liExtra.addEventListener('click', 
        function() {
            components[i].scrollIntoView({behavior: 'smooth'});
            activeSearch();
        })

        const name = components[i].dataset.nav;
        const textName = document.createTextNode(name);

        navBarMenu.appendChild(liExtra);
        liExtra.appendChild(textName);

    }
}

barAdditions()
const navBarMenu = document.getElementById('navbar__list');
const components = document.querySelectorAll('section');


/*list of item*/
let numberOfItems = components.length;




/*add elements to the navbar*/
for (let i=0; i<numberOfItems; i++) { 
    
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



// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < numberOfItems; i++) {
    components[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("your-active-class");
    current[0].className = current[0].className.replace("active", "");
    this.className += " your-active-class";
  });
}
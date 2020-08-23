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

let p1=performance.now();
let navLists = document.querySelector('#navbar__list');
let sections = document.querySelectorAll('section');

// build the nav
for(let item of sections){
    let navItem = document.createElement('li');
    navItem.innerHTML = `<a class = "menu__link" href = "#${item.id}">${item.id}</a>`;
    navLists.appendChild(navItem);
}

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll',()=>{
    let mini = Math.min(Math.abs(sections[0].getBoundingClientRect().top),Math.abs(sections[1].getBoundingClientRect().top),Math.abs(sections[2].getBoundingClientRect().top),Math.abs(sections[3].getBoundingClientRect().top));
    sections.forEach(sec=>{
        sec.getBoundingClientRect().top==mini?sec.classList.add('your-active-class'):sec.classList.remove('your-active-class');
    });    
});

// Scroll to anchor ID using scrollTO event
document.querySelectorAll('.menu__link').forEach(link=>{
    link.addEventListener('click',function (e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

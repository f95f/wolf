const navToggle = document.querySelector(".nav-button");
const navEntity = document.querySelector("#primary-navigation");

navToggle.addEventListener('click', () => {

    const visibility = navEntity.getAttribute('data-visible');
    
    if(visibility === "false"){ 
        navEntity.setAttribute("data-visible", true); 
        navToggle.setAttribute("aria-expanded", true);    
    }
    else{ 
        navEntity.setAttribute("data-visible", false); 
        navToggle.setAttribute("aria-expanded", false); 
    }

});
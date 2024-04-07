
document.addEventListener("DOMContentLoaded", function() {
    const parentElement = document.getElementById("parent");
    
    const firstChild = parentElement.firstElementChild;
    const nextSibling = firstChild.nextElementSibling;
    const lastChild = parentElement.lastElementChild;
    
    console.log(firstChild.textContent);
    console.log(nextSibling.textContent);
    console.log(lastChild.textContent);
});

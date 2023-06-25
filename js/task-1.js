const items = document.querySelectorAll('li.item');
console.log('Number of categories:', items.length);
items.forEach(function(element) {
    console.log('Category:', element.querySelector('h2').textContent);
    console.log('Elements:', element.querySelectorAll('li').length);
});
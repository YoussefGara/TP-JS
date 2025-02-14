document.querySelectorAll('li').forEach((li) => {
  li.addEventListener('click', function() {
    this.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
  }); 
});

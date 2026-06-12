function toggleDrop(btn){btn.parentElement.classList.toggle('open')}
document.addEventListener('click',function(e){
  document.querySelectorAll('.dropdown').forEach(function(d){
    if(!d.contains(e.target))d.classList.remove('open');
  });
});

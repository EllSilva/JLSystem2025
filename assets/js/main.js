window.addEventListener("scroll", function(){
  let header = this.document.querySelector('#headerX')
  header.classList.toggle('sticky-top', window.scrollY > 0 )
})





 
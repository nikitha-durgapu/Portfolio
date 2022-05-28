$(document).ready(function() {

$('.menu-btn').click(function() {
  $('.navb .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});
const skillsContent = document.getElementsByClassName('skill_content'),
      skillsHeader = document.querySelectorAll('.skill_header')
function toggleskills() {
  let itemClass = this.parentNode.className
  for(i=0; i<skillsContent.length; i++){
    skillsContent[i].className = 'skill_content skills_close'
  }
  if(itemClass === 'skill_content skills_close'){
    this.parentNode.className = 'skill_content skills_open'
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleskills)
});
});

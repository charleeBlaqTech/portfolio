const skillLink=document.querySelector('.tab-links.skill')
const experienceLink=document.querySelector('.tab-links.experience')
const educationLink=document.querySelector('.tab-links.education')
const skill=document.querySelector('.tab-contents.skills')
const experience=document.querySelector('.tab-contents.Experience')
const education=document.querySelector('.tab-contents.Education')
const menu=document.querySelector('.fa-solid.fa-bars')
const menuHide=document.querySelector('.fa-solid.fa-xmark')
const navUl=document.querySelector('.ul-li')
const ulLists=document.querySelectorAll('.lists')



// skill section and education control

skillLink.addEventListener('click', function(){
    this.classList.toggle("active-link")
    skill.classList.toggle('active-tab')
    experienceLink.classList.remove('active-link')
    educationLink.classList.remove('active-link')
    education.classList.remove('active-tab')
    experience.classList.remove('active-tab')
})
experienceLink.addEventListener('click', function(){
    this.classList.toggle("active-link")
    experience.classList.toggle('active-tab')
    skillLink.classList.remove('active-link')
    educationLink.classList.remove('active-link')
    education.classList.remove('active-tab')
    skill.classList.remove('active-tab')
})
educationLink.addEventListener('click', function(){
    this.classList.toggle("active-link")
    education.classList.toggle('active-tab')
    experienceLink.classList.remove('active-link')
    skillLink.classList.remove('active-link')
    skill.classList.remove('active-tab')
    experience.classList.remove('active-tab')
})

//menu control

menu.addEventListener('click',()=>{
    navUl.classList.add('display')
})
menuHide.addEventListener('click',()=>{
    navUl.classList.remove('display');
})
ulLists.forEach((list)=>{
    list.addEventListener('click',()=>{
        navUl.classList.remove('display');
    })
})
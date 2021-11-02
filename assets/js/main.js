/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {origin:'bottom', delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '100px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

//audio 
sr.reveal('.audio', {origin:'bottom', delay: 400})
 
/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // Khi cuộn cao hơn 460 chiều cao khung nhìn, hãy thêm lớp Show-Scroll vào thẻ có lớp cuộn trên
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/*===== MENU SHOW 2 PDS =====*/ 
const showMenu2 = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('block')
        })
    }
}
showMenu2('PSD','modals')
showMenu2('poster','posters')
showMenu2('menu','menus')
showMenu2('brochuer','brochuers')
showMenu2('AI','ais')

/*===== REMOVE MENU SHOW 2  =====*/
const navLink2 = document.querySelectorAll('.closes')

function linkAction2(){
    const navMenu2 = document.getElementById('modals' )
    navMenu2.classList.remove('block')
    const navMenu3 = document.getElementById('posters' )
    navMenu3.classList.remove('block')
    const navMenu4 = document.getElementById('menus')
    navMenu4.classList.remove('block')
    const navMenu5 = document.getElementById('brochuers')
    navMenu5.classList.remove('block')
    const navMenu6 = document.getElementById('ais')
    navMenu6.classList.remove('block')
}
navLink2.forEach(n => n.addEventListener('click', linkAction2))


/*============ Background Header ============= */
function scrollHeader(){
  const header = document.getElementById('header');
  //when the scroll is greater than 50 viewpoint height, add the scroll-header class to header tag
  if(this.scrollY >= 50) Header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);
/*============ Mixitup Filter ============= */
let mixerprojects = mixitup('.projets__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});
/*============ Active Work ============= */
const lineWork = document.querySelectorAll('.category__btn');
function activeWork(){
    lineWork.forEach((a)=> a.classList.remove('active-work'));
    this.classList.add('active-work');
}
lineWork.forEach((a)=> a.addEventListener('click', activeWork));
/*============ Testimonials Swiper ============= */
var testiswiper = new Swiper(".testimonial__container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
/*============ Contact form============= */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();
  //check if the field has a value
  if(contactName.value === '' || contactEmail.value === '' || Message.value === ''){
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');
    //show message
    contactMessage.textContent = 'please input the fields !!';
  }else{
    emailjs.sendForm('service_r7ar3bb','template_mtaccu6','#contact-form','UGipNUz27psEs3LTB')
    .then(()=>{
      //show message and add color , window+ dot to  open emoji
      contactMessage.classList.add('color-light');
      contactMessage.textContent = 'Message Sent ✔️';
      //remove message after 5 second
      setTimeout(()=>{
        contactMessage.textContent ='';
      },5000);
    }, (error)=>{
      alert('OOPs!! Sorry!! Somthing Went Wrong.....', error);
    } );
    //clear input fields
    contactName.value = '';
    contactEmail.value= '';
    Message.value = '';
  } 
  
};
contactForm.addEventListener('submit', sendEmail);
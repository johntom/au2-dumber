// import Animasection from './animasection.js';
// Animasection.observeAll()
const callback = function (entries) {
  entries.forEach((entry) => {
   
    if (entry.isIntersecting) {

      entry.target.classList.remove(...entry.target.getAttribute('data-class-out').split(' '))
      entry.target.classList.add(...entry.target.getAttribute('data-class-in').split(' '))


    } else {
     
      entry.target.classList.remove(...entry.target.getAttribute('data-class-in').split(' '))
      entry.target.classList.add(...entry.target.getAttribute('data-class-out').split(' '))

    }
  });
};


export class WelcomePage {
  message = 'Welcome to Aurelia 2 / dumber / javascript with tailwind (see tailwindcss.com) wip au-ux !';
  constructor() {


  }
  onClick() {
    alert('this is ms fast!');
    console.log('this is ms fast clicked!');
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async attached() {


    // A nice way to initialise default options
    this.options = Object.assign(this, {
      root: null, // relative to document viewport 
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.5 // visible amount of item shown in relation to root (higher values can cause problems)
    }, this.options);

    // this.observer = new IntersectionObserver(this.onChange, this.options);
    const observer = new IntersectionObserver(callback, this.options);
    const targets = document.querySelectorAll('[data-class-in], [data-class-out]');
    targets.forEach(target => observer.observe(target));




  }

}
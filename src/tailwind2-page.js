

  const callback = function (entries) {
    entries.forEach((entry) => {
      console.log(entry);
  
      if (entry.isIntersecting) {
  
        entry.target.classList.remove(...entry.target.getAttribute('data-class-out').split(' '))
        entry.target.classList.add(...entry.target.getAttribute('data-class-in').split(' '))
  
  
      } else {
  
        entry.target.classList.remove(...entry.target.getAttribute('data-class-in').split(' '))
        entry.target.classList.add(...entry.target.getAttribute('data-class-out').split(' '))
  
      }
    });
  };
  
  // const observer = new IntersectionObserver(callback);
  export class Tailwind2Page {
    constructor() {
  
  
  
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
      //alert('inb')
    }
  }
  
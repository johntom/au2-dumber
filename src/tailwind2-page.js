

  // const callback = function (entries) {
  //   entries.forEach((entry) => {
  //     console.log(entry);
  
  //     if (entry.isIntersecting) {
  
  //       entry.target.classList.remove(...entry.target.getAttribute('data-class-out').split(' '))
  //       entry.target.classList.add(...entry.target.getAttribute('data-class-in').split(' '))
  
  
  //     } else {
  
  //       entry.target.classList.remove(...entry.target.getAttribute('data-class-in').split(' '))
  //       entry.target.classList.add(...entry.target.getAttribute('data-class-out').split(' '))
  
  //     }
  //   });
  // };
  
  //// const observer = new IntersectionObserver(callback);

  import Animasection from "./animasection.js";
  export class Tailwind2Page {
    constructor() {
    
    }
  
    async attached() {
  		Animasection.observeAll();
     
   
    }
  }
  
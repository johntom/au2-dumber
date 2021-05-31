
// import { bindable, inject, NewInstance } from 'aurelia-framework';


const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
    //  entry.target.classList.add("animate-fadeIn");
      entry.target.classList.add("animate-wiggle");
   
    } else {
      // entry.target.classList.remove("animate-fadeIn");
      entry.target.classList.remove("animate-wiggle");
   
    }
  });
};

const observer = new IntersectionObserver(callback);

// const targets = document.querySelectorAll(".js-show-on-scroll");
// targets.forEach(function (target) {
//   target.classList.add("opacity-0");
//   observer.observe(target);
// });

// const targets = document.querySelectorAll(".js-show-on-scroll");
// targets.forEach(function (target) {
//   target.classList.add("opacity-0");
//   observer.observe(target);
// });

export class Tailwind2Page {
  message = 'Welcome to Aurelia 2!';
  constructor() {

   // alert('in c')

    // const observer = new IntersectionObserver(callback);

    // const targets = document.querySelectorAll(".js-show-on-scroll");
    // targets.forEach(function (target) {
    //   target.classList.add("opacity-0");
    //   observer.observe(target);
    // });

  }
  // async callback(entries) {
  //   entries.forEach((entry) => {
  //     console.log(entry);

  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("animate-fadeIn");
  //     } else {
  //       entry.target.classList.remove("animate-fadeIn");
  //     }
  //   });
  // };

  async attached() {
    // alert('in a')

    //   const observer = new IntersectionObserver(callback);
      const targets = document.querySelectorAll(".animate-fadeIn");

      const targets2 = document.querySelectorAll(".js-show-on-scroll");
      const targets3 = document.querySelectorAll(".animate-wiggle");
    
      
      targets.forEach(function (target) {
        target.classList.add("opacity-1"); // hides all 
        observer.observe(target);
      });



      targets2.forEach(function (target) {
        target.classList.add("opacity-0"); // hides all 
        observer.observe(target);
      });
      targets3.forEach(function (target) {
        target.classList.add("opacity-0"); // hides all 
        observer.observe(target);
      });

      //alert('inb')
  }
}


// from  https://codepen.io/jamesdoc/pen/qBbeOym?editors=1010

// const callback = function (entries) {
//   entries.forEach((entry) => {
//     console.log(entry);

//     if (entry.isIntersecting) {
//       entry.target.classList.add("animate-fadeIn");
//     } else {
//       entry.target.classList.remove("animate-fadeIn");
//     }
//   });
// };

// const observer = new IntersectionObserver(callback);

// const targets = document.querySelectorAll(".js-show-on-scroll");
// targets.forEach(function (target) {
//   target.classList.add("opacity-0");
//   observer.observe(target);
// });

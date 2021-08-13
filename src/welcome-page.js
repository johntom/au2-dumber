
// const callback = function (entries) {
//   entries.forEach((entry) => {

//     if (entry.isIntersecting) {

//       entry.target.classList.remove(...entry.target.getAttribute('data-class-out').split(' '))
//       entry.target.classList.add(...entry.target.getAttribute('data-class-in').split(' '))


//     } else {

//       entry.target.classList.remove(...entry.target.getAttribute('data-class-in').split(' '))
//       entry.target.classList.add(...entry.target.getAttribute('data-class-out').split(' '))

//     }
//   });
// };
// function dropdownFunction(element) {
//   var dropdowns = document.getElementsByClassName("dropdown-content");
//   var i;
//   let list = element.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
//   list.classList.add("target");
//   for (i = 0; i < dropdowns.length; i++) {
//     if (!dropdowns[i].classList.contains("target")) {
//       dropdowns[i].classList.add("hidden");
//     }
//   }
//   list.classList.toggle("hidden");
// }

// function dropdown() {
//   return {
//     options: [],
//     selected: [],
//     show: false,
//     open() { this.show = true },
//     close() { this.show = false },
//     isOpen() { return this.show === true },
//     select(index, event) {

//       if (!this.options[index].selected) {

//         this.options[index].selected = true;
//         this.options[index].element = event.target;
//         this.selected.push(index);

//       } else {
//         this.selected.splice(this.selected.lastIndexOf(index), 1);
//         this.options[index].selected = false
//       }
//     },
//     remove(index, option) {
//       this.options[option].selected = false;
//       this.selected.splice(index, 1);


//     },
//     loadOptions() {
//       const options = document.getElementById('select').options;
//       for (let i = 0; i < options.length; i++) {
//         this.options.push({
//           value: options[i].value,
//           text: options[i].innerText,
//           selected: options[i].getAttribute('selected') != null ? options[i].getAttribute('selected') : false
//         });
//       }


//     },
//     selectedValues() {
//       return this.selected.map((option) => {
//         return this.options[option].value;
//       })
//     }
//   }
// }

export class WelcomePage {
  message = 'Welcome to Aurelia 2 / dumber / javascript with tailwind (see tailwindcss.com) wip au-ux !';
  firstname='John'
  currentColor='blue'
  btncolor='bg-blue-500'
  btnSel=  'btn--info'
 // currentColor= ''//

  constructor() {
  

  }

  async onClick(cname) {
  //  alert('clicked!'+cname);
  this.btnSel= cname// 'btn--primary';
}
async onColorClick(cname) {
  //  alert('clicked!'+cname);
//   this.currentColor= this.id ;// cname //'btn--primary'
console.log('clicked!',cname, this.currentColor);

}

}
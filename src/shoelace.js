// add event to sl input and do an observable listen
export class Shoelace {
  message = 'Welcome to Aurelia 2 / dumber / javascript with tailwind (see tailwindcss.com) wip au-ux !';
  firstname = 'John'
  selectedopt = ''

  constructor() {
   
  }
  onClick() {
    alert('this is ms fast!' + this.firstname );
    console.log('this is ms fast clicked!');
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  OpenDrawer() {

    openButton.addEventListener('click', () => drawer.show());
  }
  // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.43/dist/themes/base.css">
  // <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.43/dist/shoelace.js"></script>

  async attached() {

    const slCheckbox = document.querySelector('sl-checkbox');
    slCheckbox.addEventListener('sl-change', event => {
      console.log(event.target.checked ? 'checked' : 'not checked');
    });
    const slRating = document.querySelector('sl-rating');
    // slRating.addEventListener('sl-change', (event) => console.log(event.target.srcElement.value));
    slRating.addEventListener('sl-change', (event) => console.log(event.srcElement.value));

    const colorPicker = document.querySelector('sl-color-picker');
    colorPicker.swatches = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];



    // const slInput = document.querySelector('sl-input'); on enter
    const slInput = document.querySelector('sl-input');
    slInput.addEventListener('sl-input', (event) => {

    // slInput.addEventListener('sl-change', (event) => {
      
      this.firstname=event.srcElement.value
      console.log('change', event.srcElement.value,' this.firstname',this.firstname)
    })

    const slTxtarea = document.querySelector(' sl-textarea');
    slTxtarea.addEventListener('sl-change', (event) => console.log('textarea', event.srcElement.value));

    const slRadioGroup = document.querySelector('sl-radio-group');
    // slRadioGroup.addEventListener('sl-change', (event) => console.log('slRadioGroup',event.srcElement.value));
    slRadioGroup.addEventListener('sl-change', (event) => {
      for (let i = 0; i < slRadioGroup.childElementCount; i++) {
             if (slRadioGroup.children[i].checked) {
          console.log(slRadioGroup.children[i].textContent)
          this.selectedopt = slRadioGroup.children[i].textContent
        }
      }


    })



    const slSwitch = document.querySelector('sl-switch');
    slSwitch.addEventListener('sl-change', (event) => {
      console.log(event.target.checked ? 'slSwitch checked' : 'slSwitch not checked');
    })

    const slSelect = document.querySelector('sl-select');
    slSelect.addEventListener('sl-change', (event) => {
      this.slist =event.srcElement.value;
      console.log('slselect', event.srcElement.value);
    })




    // side
    const drawer = document.querySelector('.drawerl-placement-start');
    const openButton = drawer.nextElementSibling;
    const closeButton = drawer.querySelector('sl-button[type="primary"]');
    openButton.addEventListener('click', () => drawer.show());
    closeButton.addEventListener('click', () => drawer.hide());

    const fn = document.querySelector('fn');
    //top
    const drawer2 = document.querySelector('.drawer-placement-top');
    const openButton2 = drawer2.nextElementSibling;
    const closeButton2 = drawer2.querySelector('sl-button[type="primary"]');
    openButton2.addEventListener('click', () => drawer2.show());
    closeButton2.addEventListener('click', () => drawer2.hide());

    //bot
    const drawer3 = document.querySelector('.drawer-placement-bottom');
    const openButton3 = drawer3.nextElementSibling;
    const closeButton3 = drawer3.querySelector('sl-button[type="primary"]');
    openButton3.addEventListener('click', () => drawer3.show());
    closeButton3.addEventListener('click', () => drawer3.hide());

    //right
    const drawer4 = document.querySelector('.drawer-placement-overview');
    const openButton4 = drawer4.nextElementSibling;
    const closeButton4 = drawer4.querySelector('sl-button[type="primary"]');
    openButton4.addEventListener('click', () => drawer4.show());
    closeButton4.addEventListener('click', () => drawer4.hide());




  }
}
    // const     slRadio = document.querySelector('sl-radio');
    // slRadio.addEventListener('sl-change', (event) => console.log('slRadio',event.srcElement.value));

    //jrt
    //  const slRadio = document.querySelectorAll("slRadio")
    //   // log = <HTMLElement>document.querySelector("#log");
    //   // const     slRadioGroup = document.querySelector('sl-radio-group');

    //   // slRadioGroup.addEventListener('sl-change', (event) => console.log('slRadioGroup',event.srcElement.value));
    //  const slRadioGroup = document.querySelectorAll("sl-radio-group")

    //     for (let i = 0; i < slRadioGroup[0].children.length-1; i++) {
    //       slRadioGroup[i].addEventListener('sl-change', function (event) {
    //         console.log(i,event.target.checked ? 'slSwitch checked' : 'slSwitch not checked');
    //             // const checkStatus = event.detail.value;
    //             // console.log(event.target.innerHTML + " is checked");
    //         });
    //     }


  //   const form = document.querySelector('.form-overview');

  // //  Watch for the slSubmit event
  //   this.form.addEventListener('sl-submit', event => {
  //     const formData = event.detail.formData;
  //     let output = '';

  //     //
  //     // Example 1: Post data to a server and wait for a JSON response
  //     //
  //     fetch('https://jsonplaceholder.typicode.com/posts', {
  //       method: 'POST',
  //       body: formData
  //     })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log('Success:', result);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });

  //     //
  //     // Example 2: Output all form control names + values
  //     //
  //     for (const entry of  this.formData.entries()) {
  //       output += `${entry[0]}: ${entry[1]}\n`;
  //     }
  //     alert(output);

  //     //
  //     // Example 3: Get all form controls that were serialized as 
  //     // an array of HTML elements
  //     //
  //     console.log(event.detail.formControls);
  //   });
  // }





// add event to sl input and do an observable listen
export class Shoelace2 {
  message = 'Welcome to Aurelia 2 / dumber / javascript with tailwind (see tailwindcss.com) wip au-ux !';
  firstname = 'John'
  selectedopt = ''

  constructor() {

  }
  onClick() {
    alert('this is ms fast!' + this.firstname);
    console.log('this is ms fast clicked!');
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  OpenDrawer() {

    openButton.addEventListener('click', () => drawer.show());
  }

  async attached() {

    const drawer = document.querySelector('.drawer-placement-left');
    const openButton = drawer.nextElementSibling;
    openButton.addEventListener('click', () => drawer.show());


  }
}
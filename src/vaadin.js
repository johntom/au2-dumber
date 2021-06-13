// import Animasection from './animasection.js';
// Animasection.observeAll()
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column'; // fixed from documentation
import '@vaadin/vaadin-grid/vaadin-grid-sort-column'; // fixed from documentation
import '@vaadin/vaadin-grid/vaadin-grid-filter-column'; // fixed from documentation
import '@vaadin/vaadin-combo-box'; // fixed from documentation





export class Vaadin {
  message = 'Welcome to Aurelia 2 / dumber / javascript with tailwind (see tailwindcss.com) wip au-ux !';
  firstname = 'johnny'
  // pickfruit='orange';
  constructor() {
    this.pickfruit = '';

  }
  onClick() {
    alert('this is ms fast!' + this.pickfruit);
    console.log('this is ms fast clicked!');
  }
  onClick2() {
    this.pickfruit='apple'
    // alert('this is ms fast!' + this.pickfruit);
    // console.log('this is ms fast clicked!');
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  OpenDrawer() {

    openButton.addEventListener('click', () => drawer.show());
  }
  // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.43/dist/themes/base.css">
  // <script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.43/dist/shoelace.js"></script>
  onClick() {

    alert(this.pickfruit)
  }
  async attached() {

    // fetch local json
    customElements.whenDefined('vaadin-combo-box').then(function () {
      const comboBox = document.querySelector('vaadin-combo-box');
      const span = document.querySelector('span');
      const fruits = ['Apple', 'Orange', 'Banana', 'pear', 'grapes', 'kiwi'];
      comboBox.items = fruits;
      comboBox.value = 'Apple';

      comboBox.addEventListener('change', function (event) {
        span.textContent = event.target.value;
        this.pickfruit = event.target.value;
        console.log('his.pickfruit!', this.pickfruit);
        alert(this.pickfruit)
      });
    });
    let users = [{
      'name': { 'first': 'John', 'last': 'Tomas' }, 'location': { "street": '221 4th Street', "city": 'Greenport' }, "email": 'jrt@gtz.com',
      'picture': { 'large': 'https://storage.googleapis.com/gtzdocs/ALSTONC019.jpg', 'small': 'https://storage.googleapis.com/gtzdocs/JohnTomaselliheadShot.JPG' }
    },
    { 'name': { 'first': 'Nancy', 'last': 'Tomas' }, 'location': { "street": '453 E 14 St ', "city": 'nyc' }, "email": 'tomt@gtz.com', 'picture': { 'large': 'https://storage.googleapis.com/gtzdocs/ALSTONC019.jpg', 'small': 'https://storage.googleapis.com/gtzdocs/JohnTomaselliheadShot.JPG' } },
    { 'name': { 'first': 'Michael', 'last': 'Tomas' }, 'location': { "street": '353 E 14 St ', "city": 'nyc' }, "email": 'mat@gtz.com', 'picture': { 'large': 'https://storage.googleapis.com/gtzdocs/DSC00871cbwsepia-less.jpg', 'small': 'https://storage.googleapis.com/gtzdocs/JohnTomaselliheadShot.JPG' } },
    { 'name': { 'first': 'Maria', 'last': 'Tomas' }, 'location': { "street": '453 E 14 St ', "city": 'nyc' }, "email": 'maria@gtz.com', 'picture': { 'large': 'https://storage.googleapis.com/gtzdocs/ALSTONC019.jpg', 'small': 'https://storage.googleapis.com/gtzdocs/JohnTomaselliheadShot.JPG' } },
    { 'name': { 'first': 'Charlotte', 'last': 'Tomas' }, 'location': { "street": '53 E 14 St ', "city": 'nyc' }, "email": 'jrt@gtz.com' },
    { 'name': { 'first': 'Tom', 'last': 'Tomas' }, 'location': { "street": '553 E 14 St ', "city": 'nyc' }, "email": 'gigi@gtz.com' },
    { 'name': { 'first': 'Nancy', 'last': 'Smith' }, 'location': { "street": '153 E 14 St ', "city": 'nyc' }, "email": 'nl@gtz.com' },
    { 'name': { 'first': 'Jeb', 'last': 'Smith' }, 'location': { "street": '253 E 14 St ', "city": 'nyc' }, "email": 'jrt@gtz.com' },
    { 'name': { 'first': 'Linda', 'last': 'Smith' }, 'location': { "street": '333 E 14 St ', "city": 'nyc' }, "email": 'jrt@gtz.com' },
    { 'name': { 'first': 'Brian', 'last': 'Smith' }, 'location': { "street": '443 E 14 St ', "city": 'nyc' }, "email": 'jrt@gtz.com' },
    { 'name': { 'first': 'Mat', 'last': 'Smith' }, 'location': { "street": '444 E 14 St ', "city": 'nyc' }, "email": 'jrt@gtz.com' },
    { 'name': { 'first': 'Tom', 'last': 'Lewis' }, 'location': { "street": '453 E 14 St ', "city": 'nyc' }, "email": 'gigi@gtz.com' },
    { 'name': { 'first': 'Nancy', 'last': 'Lewis' }, 'location': { "street": '644 E 14 St ', "city": 'nyc' }, "email": 'nl@gtz.com' },
    { 'name': { 'first': 'Jeb', 'last': 'Lewis' }, 'location': { "street": '653 E 14 St ', "city": 'nyc' }, "email": 'jrt@gtz.com' },
    { 'name': { 'first': 'Linda', 'last': 'Wolf' }, 'location': { "street": '753 E 14 St ', "city": 'nyc' }, "email": 'jrt@gtz.com' },
    { 'name': { 'first': 'Brian', 'last': 'Wolf' }, 'location': { "street": '753 E 14 St ', "city": 'nyc' }, "email": 'jrt@gtz.com' },
    { 'name': { 'first': 'Mat', 'last': 'Wolf' }, 'location': { "street": '753 E 14 St ', "city": 'nyc' }, "email": 'jrt@gtz.com' },

    ]
    let users2 = [{ 'name': { 'first': 'John', 'last': 'Tomas' }, 'location': { "street": '221 4th Street', "city": 'Greenport' } },
    { 'name': { 'first': 'Nancy', 'last': 'Tomas' }, 'location': { "street": '453 E 14 St ', "city": 'nyc' } },
    { 'name': { 'first': 'Michael', 'last': 'Tomas' }, 'location': { "street": '453 E 14 St ', "city": 'nyc' } },
    { 'name': { 'first': 'Jeb', 'last': 'Smith' }, 'location': { "street": '453 E 14 St ', "city": 'nyc' } },
    { 'name': { 'first': 'Linda', 'last': 'Smith' }, 'location': { "street": '453 E 14 St ', "city": 'nyc' } },
    { 'name': { 'first': 'Brian', 'last': 'Smith' }, 'location': { "street": '453 E 14 St ', "city": 'nyc' } },
    { 'name': { 'first': 'Mat', 'last': 'Smith' }, 'location': { "street": '453 E 14 St ', "city": 'nyc' } },

    ]
    // users=[{'First name':'John','Last name':'Tomas'},{'First name':'Nancy','Last name':'Tomas'} ]


    customElements.whenDefined('vaadin-grid').then(function () {
      const grid = document.querySelector('vaadin-grid');// all for a loop
      // grid.items = Vaadin.GridDemo.users;
      grid.items = users;

      const columns = document.querySelectorAll('vaadin-grid-column');

      // Use renderers to populate the cell content
      columns[0].renderer = function (root, column, model) {
        root.textContent = model.index;
      };
      columns[0].headerRenderer = columns[0].footerRenderer = function (root, column) {
        root.textContent = '#';
      };

      columns[1].renderer = function (root, column, model) {
        root.textContent = model.item.name.first;
      };
      columns[1].headerRenderer = columns[1].footerRenderer = function (root, column) {
        root.textContent = 'First name';
      };

      columns[2].renderer = function (root, column, model) {
        root.textContent = model.item.name.last;
      };
      columns[2].headerRenderer = columns[2].footerRenderer = function (root, column) {
        root.textContent = 'Last name';
      };

      columns[3].renderer = function (root, column, model) {
        // Check if there is a container generated with the previous renderer call to update its content instead of recreation
        if (!root.firstElementChild) {
          root.innerHTML = '<div style="white-space: normal"></div>';
        }
        root.firstElementChild.textContent = model.item.location.street + ', ' + model.item.location.city;
      };
      columns[3].headerRenderer = columns[3].footerRenderer = function (root, column) {
        root.textContent = 'Address';
      };
    });
    const grid = document.querySelector('vaadin-grid');
    grid.multiSort = true;
    const addBtn = document.querySelector('#add-btn');


    const emailColumn = document.querySelector('#email');
    emailColumn.headerRenderer = function (root) {
      root.innerHTML =
        '<vaadin-grid-filter path="email">' +
        '  <vaadin-text-field slot="filter" focus-target label="Email" style="max-width: 100%" theme="small"></vaadin-text-field>' +
        '</vaadin-grid-filter>';
      root.querySelector('vaadin-text-field').addEventListener('value-changed', function (e) {
        root.querySelector('vaadin-grid-filter').value = e.detail.value;
      });
    };

    grid.rowDetailsRenderer = function (root, grid, model) {
      if (!root.firstElementChild) {
        root.innerHTML =
          '<div class="details">' +
          '<img><p><span></span><br>' +
          '<small></small></p>' +
          '</div>';
      }
      root.firstElementChild.querySelector('img').src = model.item.picture.large;
      root.firstElementChild.querySelector('span').textContent = 'Hi! My name is ' + model.item.name.first + '!';
      root.firstElementChild.querySelector('small').textContent = model.item.email;
      root.firstElementChild.querySelector('img2').textContent = model.item.picture.small;

      // If the bounds of the image weren't known/specified beforehand, grid would need to
      // be notified of an asynchronous size change once the image gets loaded.
      // root.firstElementChild.querySelector('img').onload = () => {
      //   grid.notifyResize();
      // };
    };

    const detailsToggleColumn = document.querySelector('#details');
    detailsToggleColumn.renderer = function (root, column, model) {
      if (!root.firstElementChild) {
        root.innerHTML = '<vaadin-checkbox>Show Details</vaadin-checkbox>';
        root.firstElementChild.addEventListener('checked-changed', function (e) {
          if (e.detail.value) {
            grid.openItemDetails(root.item);
          } else {
            grid.closeItemDetails(root.item);
          }
        });
      }
      root.item = model.item;
      root.firstElementChild.checked = grid.detailsOpenedItems.indexOf(root.item) > -1;
    };

    addBtn.addEventListener('click', function () {
      grid.push('items', this.users[grid.items.length]);
    });

    const removeBtn = document.querySelector('#remove-btn');
    removeBtn.addEventListener('click', function () {
      grid.pop('items');
    });





    window.addEventListener('WebComponentsReady', function () {
      const grid = document.querySelector('vaadin-grid');
      grid.multiSort = true;
      const addBtn = document.querySelector('#add-btn');
      addBtn.addEventListener('click', function () {
        grid.push('items', this.users[grid.items.length]);
      });

      const removeBtn = document.querySelector('#remove-btn');
      removeBtn.addEventListener('click', function () {
        grid.pop('items');
      });

      grid.items = this.users.slice(0, 6);
    });


    // const checkBox = document.querySelector('vaadin-checkbox');
    // checkBox.addEventListener('checked-changed', function(event) {
    //   grid.multiSort = event.detail.value;
    // });


  }




}
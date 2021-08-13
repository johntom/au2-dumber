// // import {Grid} from "../../../source/typescript/smart.elements"
// import { HttpClient } from "aurelia-fetch-client";
export class Autable1 {

  constructor() {

  }

  async bind(){
    await this.getData()
}
  async getData() {
    await fetch('../data.json')

      .then(response => response.json())
      .then(users => this.users = users);

    console.log('getData this.users:', this.users);



    return;



  }

  // async attached() {
  //   await this.getData()
  // }

}
 // let client = new HttpClient();

    // return client.fetch('data.json')

    // return await fetch('../data.json')

    //   .then(response => response.json())
    //   .then(users => this.users = users);


 // selectLast() {
  //   let last = this.users[this.users.length - 1];
  //   last.$isSelected = true;
  //   this.tableApi.revealItem(last);

  // }

 // const vendor = await fetch('https://backend.gtztest.com/api/gallerynm/beverages', {
    //   method: 'get',
    //   // headers: myHeaders,
    //   mode: 'cors'
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log('Success:', result);
    //     this.products = result
    //     console.log(this.products)


    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
// async bind() {
  //   await fetch('../data.json')

  //     .then(response => response.json())
  //     .then(users => this.users = users);

  //   console.log('bnd this.users:', this.users);
  // }
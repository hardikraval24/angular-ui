import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {

    console.log(this.data);

   }

   private data = "test";

  getQuestions()
  {
    // console.log(this.data);
    // return this.data;  
  }
}

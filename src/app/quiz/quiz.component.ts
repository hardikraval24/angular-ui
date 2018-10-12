import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private contentService : ContentService) { }

  public data;

  ngOnInit() {
    // this.data = this.getQuestions();
    console.log(this.contentService.getQuestions());
  }

  /* getQuestions()
  {
    return this.contentService.getQuestions();
  } */

}

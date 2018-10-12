import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private contentService : ContentService ) { }

  ngOnInit() {
  }

  

}

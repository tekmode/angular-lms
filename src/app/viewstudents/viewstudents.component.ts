import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {
  public students;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getstudents();
  }

getstudents(){
  this._data.viewstudents().subscribe(
          data => { this.students = data},
          err => console.error(err),
          () => console.log('List of students recieved')
      );
    
}
}

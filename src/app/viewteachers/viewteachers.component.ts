import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-viewteachers',
  templateUrl: './viewteachers.component.html',
  styleUrls: ['./viewteachers.component.css']
})
export class ViewteachersComponent implements OnInit {
  public teachers;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getteachers();
  }

getteachers(){
  this._data.viewteachers().subscribe(
          data => { this.teachers = data},
          err => console.error(err),
          () => console.log('List of Teachers recieved')
      );
    
}
}

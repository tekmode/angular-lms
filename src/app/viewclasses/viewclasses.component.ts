import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-viewclasses',
  templateUrl: './viewclasses.component.html',
  styleUrls: ['./viewclasses.component.css']
})
export class ViewclassesComponent implements OnInit {
  public classes;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getclasses();
  }

getclasses(){
  this._data.viewclasses().subscribe(
          data => { this.classes = data},
          err => console.error(err),
          () => console.log(this.classes)
      );
    
}
}

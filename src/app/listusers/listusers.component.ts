import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { JsonPipe } from '@angular/common';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  public users;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getusers();
  }

getusers(){
   this._data.userslist().subscribe(
          data => { this.users = data},
          err => console.error(err),
          () => console.log(this.users)
      );
    
}
}

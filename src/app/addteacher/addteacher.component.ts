import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
  tname:string;
  tdesignation:string;
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  addteacher(){
   
  var ret;
  let teacher={
    name:this.tname,
    designation:this.tdesignation
  };
this._data.addteacher(teacher).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('Teacher Added')

  );
  alert("Teacher Added Successfully");
  this.tname='';
  this.tdesignation='';
    }

  }



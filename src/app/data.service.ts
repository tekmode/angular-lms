import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { $ } from 'protractor';
import { text } from '@fortawesome/fontawesome-svg-core';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json',
    'Authorization':`Bearer ${JSON.parse(localStorage.getItem('id_token'))}`,
    responseType: 'text'
  })
};


@Injectable({
  providedIn: 'root'
})
  
export class DataService {
baseUrl="http://localhost:3000/admin/";
  constructor(private http:HttpClient) {  }
   
  viewteachers(){
    let url=this.baseUrl+ "teachers";
    return this.http.get(url,httpOptions);
  }
  addteacher(teacher){
    let body=JSON.stringify(teacher);
  let url=this.baseUrl+ "addteacher";
  return this.http.post(url,body,httpOptions);
  }
  viewstudents(){
    let url=this.baseUrl+ "students";
    return this.http.get(url,httpOptions);
  }
  addstudent(student){
    let body=JSON.stringify(student);
  let url=this.baseUrl+ "addstudent";
  return this.http.post(url,body,httpOptions);
}
  viewclasses(){
    console.log(httpOptions);
    let url=this.baseUrl+ "classes";
    return this.http.get(url,httpOptions);
  }
   userslist(){
     console.log(httpOptions);
    let url="http://localhost:3000/users";
    return this.http.get(url,httpOptions);
  }
  }

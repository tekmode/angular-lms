import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponseBase } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders()
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl="http://localhost:3000/users/";
  authToken=null;
  user=null;
  constructor(private http:HttpClient) { }
    registerUser(user){
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/users/signup', user, {headers: headers});
    }
    
    authenticateUser(user){
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.baseUrl+ "login", 
         user, {headers: headers});
    }
    storeUserData(token, user){
        localStorage.setItem('id_token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
      }
      logout(){
          this.authToken = null;
          this.user = null;
          localStorage.clear();
        }
        
}

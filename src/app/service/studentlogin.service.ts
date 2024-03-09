import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentloginService {

 


  baseUrl='http://localhost:8082';
  
  constructor(private http:HttpClient) { }

  addStudLogin(studentlogin: Object): Observable<Object> {
    console.log(studentlogin);
    return this.http.post(`${this.baseUrl}/addstudLogin`, studentlogin); 
  }
}

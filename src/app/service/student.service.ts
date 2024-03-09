import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { Guardian } from '../models/Guardian';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

    
baseUrl='http://localhost:8082';

//import httpClietModule 
constructor(private http: HttpClient) { }

createStudent(student:Object):Observable<Object>{
  return this.http.post(`${this.baseUrl}/addStudent`,student);
}
createGuardian(guardian:Object):Observable<Object>{
  return this.http.post(`${this.baseUrl}/addGuardian`,guardian);
}

//get value from any type it must be void or object
getAllstud():any{
   return this.http.get(`${this.baseUrl}/getAllstud`);
}

//delete by id
deleteStud(id:number):Observable<any>{
   return this.http.delete(`${this.baseUrl}/deleteStud/${id}`);
}


//get one player by id
getOneStud(id:number):Observable<any>{

  return this.http.get(`${this.baseUrl}/getOneStud/${id}`);

}


updateStud(student:Student){
 
  return this.http.put(`${this.baseUrl}/updateStud`,student);
}


loginStudent(StudentLogin: object): Observable<object> {
  return this.http.post(`${this.baseUrl}/addstudLogin`, StudentLogin)
};



}

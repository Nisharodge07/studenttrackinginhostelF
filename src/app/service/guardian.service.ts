import { Injectable } from '@angular/core';
import { Guardian } from '../models/Guardian';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hostel } from '../models/hostel';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {


 

  baseUrl='http://localhost:8082';

//import httpClietModule 
constructor(private http: HttpClient) { }

createGuardian(guardian:Object):Observable<Object>{
  return this.http.post(`${this.baseUrl}/addGuardian`,guardian);

}
// createStudent(student:Object):Observable<Object>{
//   return this.http.post(`${this.baseUrl}/addStudent`,student);

// }

//get value from any type it must be void or object
getAllGuardian():any{
   return this.http.get(`${this.baseUrl}/getAllGuardian`);
}


// getAllstud(): any {
//   return this.http.get(`${this.baseUrl}/getAllstud`);
// }
getOneStud(id:number):Observable<any>{

  return this.http.get(`${this.baseUrl}/getOneStud/${id}`);

}

//delete by id
deleteGuardian(id:number):Observable<any>{
   return this.http.delete(`${this.baseUrl}/deleteGuardian/${id}`);
}


//get one player by id
getOneGuardian(id:number):Observable<any>{

  return this.http.get(`${this.baseUrl}/getOneGuardian/${id}`);

}


updateGuardian(guardian:Guardian){
 
  return this.http.put(`${this.baseUrl}/updateGuardian`,guardian);
}
}

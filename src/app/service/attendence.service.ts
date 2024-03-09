import { Injectable } from '@angular/core';
import { Attendence } from '../models/attendence';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  baseUrl='http://localhost:8082';

//import httpClietModule 
constructor(private http: HttpClient) { }

createAttendence(attendence:Object):Observable<Object>{
  return this.http.post(`${this.baseUrl}/addAttendence`,attendence);

}

//get value from any type it must be void or object
getAllAttendence():any{
   return this.http.get(`${this.baseUrl}/getAllAttendence`);
}
getAllstud():any{
  return this.http.get(`${this.baseUrl}/getAllstud`);
}

getOneStud(id:number):Observable<any>{

  return this.http.get(`${this.baseUrl}/getOneStud/${id}`);

}

//delete by id
deleteAttendence(id:number):Observable<any>{
   return this.http.delete(`${this.baseUrl}/deleteAttendence/${id}`);
}


//get one player by id
getOneAttendence(id:number):Observable<any>{

  return this.http.get(`${this.baseUrl}/getOneAttendence/${id}`);

}


updateStud(attendence:Attendence){
 
  return this.http.put(`${this.baseUrl}/updateAttendence`,attendence);
}



}

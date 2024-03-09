import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardstudService {

  baseUrl='http://localhost:8082';

  //import httpClietModule 
  constructor(private http: HttpClient) { }

  getOneGuardian(id:number):Observable<any>{

    return this.http.get(`${this.baseUrl}/getOneGuardian/${id}`);
  
  }

  createStudent(student:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/addStudent`,student);
  
  }

  getAllstud(): any {
    return this.http.get(`${this.baseUrl}/getAllstud`);
  }

  createGuardian(guardian:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/addGuardian`,guardian);
  
  }
}

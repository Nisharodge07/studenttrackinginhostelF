import { Injectable } from '@angular/core';
import { Hostel } from '../models/hostel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostelService {

  baseUrl='http://localhost:8082';

//import httpClietModule 
constructor(private http: HttpClient) { }

createHostel(hostel:Object):Observable<Object>{
  return this.http.post(`${this.baseUrl}/addHostel`,hostel);

}

//get value from any type it must be void or object
getAllHostel():any{
   return this.http.get(`${this.baseUrl}/getAllHostel`);
}

//delete by id
deleteHostel(id:number):Observable<any>{
   return this.http.delete(`${this.baseUrl}/deleteHostel/${id}`);
}


//get one player by id
getOneHostel(id:number):Observable<any>{

  return this.http.get(`${this.baseUrl}/getOneHostel/${id}`);

}


updateHostel(hostel:Hostel){
 
  return this.http.put(`${this.baseUrl}/updateHostel`,hostel);
}


}

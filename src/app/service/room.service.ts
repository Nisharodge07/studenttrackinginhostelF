import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/Room';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

 
  baseUrl='http://localhost:8082';

//import httpClietModule 
constructor(private http: HttpClient) { }

createRoom(room:Object):Observable<Object>{
  return this.http.post(`${this.baseUrl}/addRoom`,room);

}

//get value from any type it must be void or object
getAllRoom():any{
   return this.http.get(`${this.baseUrl}/getAllRoom`);
}

//delete by id
deleteRoom(id:number):Observable<any>{
   return this.http.delete(`${this.baseUrl}/deleteRoom/${id}`);
}


//get one player by id
getOneRoom(id:number):Observable<any>{

  return this.http.get(`${this.baseUrl}/getOneRoom/${id}`);

}


updateRoom(room:Room){
 
  return this.http.put(`${this.baseUrl}/updateRoom`,room);
}
}

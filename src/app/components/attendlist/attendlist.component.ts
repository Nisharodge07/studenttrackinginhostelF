import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Attendence } from '../../models/attendence';
import { AttendenceService } from '../../service/attendence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendlist',
  templateUrl: './attendlist.component.html',
  styleUrl: './attendlist.component.css'
})
export class AttendlistComponent {
 //default initialization of 
 public attendence: Observable<Attendence[]> = of([]);

 //service initialization

 //router used for nevigate one component to other
 constructor(private service: AttendenceService, private router: Router) { }


 //angular method , interface if angular load then it initialize
 ngOnInit() {
   this.getAll();
 }


 getAll() {

   this.attendence = this.service.getAllAttendence();

 }
 //subscribe for show remaining data

 deleteattend(id: number) {
   return this.service.deleteAttendence(id).subscribe((data) => {
     console.log(data);
     this.getAll();
   });
 }

 //router used to go in other age/component : call one ts to other ts is called router
 //two ways to route 1.routerLink 2.router nevigate
 attendtDetails(id: number) {
   this.router.navigate(['attendDetails', id]);
 }


 updateAttend(id:number){

   //call kiya update ko
   this.router.navigate(['updateattend',id]);

 }
}

import { Component } from '@angular/core';
import { Attendence } from '../../models/attendence';
import { Observable, map, of } from 'rxjs';
import { Student } from '../../models/student';
import { AttendenceService } from '../../service/attendence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent {

  submitted = false;
  constructor(private service:AttendenceService,private router: Router) 
  {

  }
  attendence=new Attendence();
  // public students: Observable<Student[]> =of([]);

  
  
    // ngOnInit() {
    //   this.getAll();
    // }
  
    // getAll() {
    //   this.students = this.service.getAllstud();
    //   console.log(this.students);
    // }
  
    onSubmit()
  {
    this.save();
    this.submitted=true;
   console.log(this.attendence);
    
  }

  save()
  {
    this.service.createAttendence(this.attendence).subscribe();
    this.goto();

  }



  goto()
  {
    this.router.navigate(['/home']);
  }
  
    // addattendstud(id:string)
    // {
    //   this.students.pipe(
    //     map(studlist => studlist[Number(id)])
    //   ).subscribe(
    //     selectedstud => {
    //       this.attendence.students.push(selectedstud);
    //     }
    //   );
      
    // }
    

  
}

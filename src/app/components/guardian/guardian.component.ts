import { Component } from '@angular/core';
import { GuardianService } from '../../service/guardian.service';
import { Guardian } from '../../models/Guardian';
import { Student } from '../../models/student';
import { Observable,  map, of } from 'rxjs';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';
import { GuardstudService } from '../../service/guardstud.service';

@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.component.html',
  styleUrl: './guardian.component.css'
})
export class GuardianComponent {

  submitted = false;

//object creating
guardian = new Guardian();

// student=new Student();

//product array
// public students:Observable<Student[]>=of([]);

  //dependency injection
  constructor(private service: GuardstudService,private router: Router){}
 

  // createStudent(){
  //   this.router.navigate(['add']);
  // }
/*
  createGuardian(){
    this.router.navigate(['addGuardian']);
  }
*/



// getAll()
// {
//   this.students=this.service.getAllstud();
//   // this.guardian=this.service.getAllGuardian();
//   console.log(this.students);
// }

// addstudgaurdian(guardian_id:string)
// {
//   console.log("inside"+guardian_id);
//   this.students.pipe(
//     map(studenlist => studenlist[Number(guardian_id)])
//   ).subscribe(
//    selectedstudent => {
//       this.guardian.students.push(selectedstudent);
//     }
//   );
//   console.log("outside");
// }


  
  onSubmit(){
    console.log(this.guardian);
    this.save();
    this.submitted = true;
  }

  save(){

    this.service.createGuardian(this.guardian).subscribe();
    // link to home page here 
   this.goto();

 }





 goto()
 {
   return this.router.navigate(['home'])
 }




 
}




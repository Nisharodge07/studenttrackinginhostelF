import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { Observable, of } from 'rxjs';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {

  //default initialization of 
  public student: Observable<Student[]> = of([]);

  //service initialization

  //router used for nevigate one component to other
  constructor(private service: StudentService, private router: Router) { }


  //angular method , interface if angular load then it initialize
  ngOnInit() {
    this.getAll();
  }


  getAll() {

    this.student = this.service.getAllstud();

  }
  //subscribe for show remaining data

  deleteStud(id: number) {
    return this.service.deleteStud(id).subscribe((data) => {
      console.log(data);
      this.getAll();
    });
  }

  //router used to go in other age/component : call one ts to other ts is called router
  //two ways to route 1.routerLink 2.router nevigate
  StudentDetails(id: number) {
    this.router.navigate(['details', id]);
  }


  updateDetails(id:number){

    //call kiya update ko
    this.router.navigate(['update',id]);

  }
}

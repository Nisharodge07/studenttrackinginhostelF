import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GuardianService } from '../../service/guardian.service';
import { Guardian } from '../../models/Guardian';
import { Observable, of } from 'rxjs';
import { Student } from '../../models/student';

@Component({
  selector: 'app-guardiandetails',
  templateUrl: './guardiandetails.component.html',
  styleUrl: './guardiandetails.component.css'
})
export class GuardiandetailsComponent {

  constructor(private route:ActivatedRoute, private router:Router, private service:GuardianService){}

  guardian_id:number = 0;

  guardian:Guardian = new Guardian();
  student:Student=new Student();

  ngOnInit(){

    this.guardian = new Guardian();

    //fetch inforamtion from routes 
    this.guardian_id = this.route.snapshot.params['guardian_id'];

//ye service ko data dete hai
    this.service.getOneGuardian(this.guardian_id).subscribe((data)=>{
      console.log(data);
      this.guardian = data;
    })


  }






}

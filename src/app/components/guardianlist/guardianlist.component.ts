import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Guardian } from '../../models/Guardian';
import { GuardianService } from '../../service/guardian.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardianlist',
  templateUrl: './guardianlist.component.html',
  styleUrl: './guardianlist.component.css'
})
export class GuardianlistComponent {

  //default initialization of 
  public guardian: Observable<Guardian[]> = of([]);

  //service initialization

  //router used for nevigate one component to other
  constructor(private service: GuardianService, private router: Router) { }


  //angular method , interface if angular load then it initialize
  ngOnInit() {
    this.getAll();
  }


  getAll() {

    this.guardian = this.service.getAllGuardian();

  }
  //subscribe for show remaining data

  deleteStud(id: number) {
    return this.service.deleteGuardian(id).subscribe((data) => {
      console.log(data);
      this.getAll();
    });
  }

  //router used to go in other age/component : call one ts to other ts is called router
  //two ways to route 1.routerLink 2.router nevigate
  guardianDetails(id: number) {
    this.router.navigate(['guardiandetails', id]);
  }


  updateDetails(id:number){

    //call kiya update ko
    this.router.navigate(['updateGuardian',id]);

  }
}

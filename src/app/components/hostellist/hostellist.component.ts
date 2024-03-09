import { Component } from '@angular/core';
import { Hostel } from '../../models/hostel';
import { HostelService } from '../../service/hostel.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hostellist',
  templateUrl: './hostellist.component.html',
  styleUrl: './hostellist.component.css'
})
export class HostellistComponent {
//default initialization of 
public hostel: Observable<Hostel[]> = of([]);

//service initialization

//router used for nevigate one component to other
constructor(private service: HostelService, private router: Router) { }


//angular method , interface if angular load then it initialize
ngOnInit() {
  this.getAll();
}


getAll() {

  this.hostel = this.service.getAllHostel();

}
//subscribe for show remaining data

deleteStud(id: number) {
  return this.service.deleteHostel(id).subscribe((data) => {
    console.log(data);
    this.getAll();
  });
}

//router used to go in other age/component : call one ts to other ts is called router
//two ways to route 1.routerLink 2.router nevigate
StudentDetails(id: number) {
  this.router.navigate(['hosteldetails', id]);
}


updateDetails(id:number){

  //call kiya update ko
  this.router.navigate(['updatehostel',id]);

}
}

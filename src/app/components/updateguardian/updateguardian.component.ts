import { Component } from '@angular/core';
import { Guardian } from '../../models/Guardian';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardianService } from '../../service/guardian.service';

@Component({
  selector: 'app-updateguardian',
  templateUrl: './updateguardian.component.html',
  styleUrl: './updateguardian.component.css'
})
export class UpdateguardianComponent {

  guardian_id: number = 0;
  guardian: Guardian = new Guardian();

  //take information from routes

  constructor(private route: ActivatedRoute, private router: Router, private service: GuardianService) {

  }

  //load angular and initialize the page
  //when component load on page angular initialize init method
  ngOnInit() {

    //data nikalana hai or set krna hai
    //object createe'
    this.guardian = new Guardian();

    //apne palyer mai data aya
    this.guardian_id = this.route.snapshot.params['guardian_id'];

    //data lane ke liye subscribe kro
    this.service.getOneGuardian(this.guardian_id).subscribe((data) => {

      //data initialize on player
      console.log(data);
      this.guardian = data;
    })
  }

  onSubmit(){
    this.updateGuardian();
  }

  updateGuardian(){
    //
    this.service.updateGuardian(this.guardian).subscribe((data)=>
    {
      console.log(data);
      // this.player = new Players();
      this.goto();
    });
  }


  goto(){
    this.router.navigate(['listGuardian']);
  }

}

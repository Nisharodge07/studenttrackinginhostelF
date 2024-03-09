import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { StudentloginComponent } from './components/studentlogin/studentlogin.component';
import { HostelComponent } from './components/hostel/hostel.component';
import { RoomComponent } from './components/room/room.component';
import { GuardianComponent } from './components/guardian/guardian.component';
import { AttendenceComponent } from './components/attendence/attendence.component';
// import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HostellistComponent } from './components/hostellist/hostellist.component';
import { HosteldetailsComponent } from './components/hosteldetails/hosteldetails.component';
import { HostelupdateComponent } from './components/hostelupdate/hostelupdate.component';
import { CreateattendenceComponent } from './components/createattendence/createattendence.component';
import { GuardiandetailsComponent } from './components/guardiandetails/guardiandetails.component';
import { UpdateguardianComponent } from './components/updateguardian/updateguardian.component';
import { GuardianlistComponent } from './components/guardianlist/guardianlist.component';
import { AttenddetailsComponent } from './components/attenddetails/attenddetails.component';
import { AttendlistComponent } from './components/attendlist/attendlist.component';
import { UpdateattendComponent } from './components/updateattend/updateattend.component';
import { Home1Component } from './components/home1/home1.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    NavbarComponent,
    StudentlistComponent,
    StudentDetailsComponent,
    UpdatestudentComponent,
    StudentloginComponent,
    HostelComponent,
    RoomComponent,
    GuardianComponent,
    AttendenceComponent,
    // HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HostellistComponent,
    HosteldetailsComponent,
    HostelupdateComponent,
    CreateattendenceComponent,
    GuardiandetailsComponent,
    
    UpdateguardianComponent,
          GuardianlistComponent,
          AttenddetailsComponent,
          AttendlistComponent,
          UpdateattendComponent,
          Home1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenddetailsComponent } from './attenddetails.component';

describe('AttenddetailsComponent', () => {
  let component: AttenddetailsComponent;
  let fixture: ComponentFixture<AttenddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttenddetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttenddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

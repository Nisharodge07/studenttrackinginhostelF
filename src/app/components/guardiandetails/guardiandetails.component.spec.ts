import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiandetailsComponent } from './guardiandetails.component';

describe('GuardiandetailsComponent', () => {
  let component: GuardiandetailsComponent;
  let fixture: ComponentFixture<GuardiandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardiandetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardiandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

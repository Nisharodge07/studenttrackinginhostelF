import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianlistComponent } from './guardianlist.component';

describe('GuardianlistComponent', () => {
  let component: GuardianlistComponent;
  let fixture: ComponentFixture<GuardianlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardianlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardianlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

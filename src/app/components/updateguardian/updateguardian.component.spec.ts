import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateguardianComponent } from './updateguardian.component';

describe('UpdateguardianComponent', () => {
  let component: UpdateguardianComponent;
  let fixture: ComponentFixture<UpdateguardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateguardianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateguardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateattendenceComponent } from './createattendence.component';

describe('CreateattendenceComponent', () => {
  let component: CreateattendenceComponent;
  let fixture: ComponentFixture<CreateattendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateattendenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateattendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

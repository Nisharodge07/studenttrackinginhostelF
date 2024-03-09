import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateattendComponent } from './updateattend.component';

describe('UpdateattendComponent', () => {
  let component: UpdateattendComponent;
  let fixture: ComponentFixture<UpdateattendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateattendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateattendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

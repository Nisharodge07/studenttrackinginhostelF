import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendlistComponent } from './attendlist.component';

describe('AttendlistComponent', () => {
  let component: AttendlistComponent;
  let fixture: ComponentFixture<AttendlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttendlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

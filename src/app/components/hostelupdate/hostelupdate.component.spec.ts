import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelupdateComponent } from './hostelupdate.component';

describe('HostelupdateComponent', () => {
  let component: HostelupdateComponent;
  let fixture: ComponentFixture<HostelupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostelupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostelupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

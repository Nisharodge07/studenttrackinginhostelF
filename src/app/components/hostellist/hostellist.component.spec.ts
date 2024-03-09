import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostellistComponent } from './hostellist.component';

describe('HostellistComponent', () => {
  let component: HostellistComponent;
  let fixture: ComponentFixture<HostellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostellistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

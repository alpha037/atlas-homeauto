import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBedroomComponent } from './master-bedroom.component';

describe('MasterBedroomComponent', () => {
  let component: MasterBedroomComponent;
  let fixture: ComponentFixture<MasterBedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterBedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

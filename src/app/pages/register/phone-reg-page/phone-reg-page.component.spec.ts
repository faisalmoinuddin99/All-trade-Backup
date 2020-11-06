import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneRegPageComponent } from './phone-reg-page.component';

describe('PhoneRegPageComponent', () => {
  let component: PhoneRegPageComponent;
  let fixture: ComponentFixture<PhoneRegPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneRegPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneRegPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropInsuranceComponent } from './crop-insurance.component';

describe('CropInsuranceComponent', () => {
  let component: CropInsuranceComponent;
  let fixture: ComponentFixture<CropInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

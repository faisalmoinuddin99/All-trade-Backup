import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropForecastingComponent } from './crop-forecasting.component';

describe('CropForecastingComponent', () => {
  let component: CropForecastingComponent;
  let fixture: ComponentFixture<CropForecastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropForecastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropForecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

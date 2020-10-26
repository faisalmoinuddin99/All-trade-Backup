import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDistrictComponent } from './report-district.component';

describe('ReportDistrictComponent', () => {
  let component: ReportDistrictComponent;
  let fixture: ComponentFixture<ReportDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

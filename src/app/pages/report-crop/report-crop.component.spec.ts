import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCropComponent } from './report-crop.component';

describe('ReportCropComponent', () => {
  let component: ReportCropComponent;
  let fixture: ComponentFixture<ReportCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

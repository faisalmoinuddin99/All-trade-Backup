import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureKeyPersonnelComponent } from './structure-key-personnel.component';

describe('StructureKeyPersonnelComponent', () => {
  let component: StructureKeyPersonnelComponent;
  let fixture: ComponentFixture<StructureKeyPersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureKeyPersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureKeyPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

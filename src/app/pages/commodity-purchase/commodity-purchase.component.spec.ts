import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityPurchaseComponent } from './commodity-purchase.component';

describe('CommodityPurchaseComponent', () => {
  let component: CommodityPurchaseComponent;
  let fixture: ComponentFixture<CommodityPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

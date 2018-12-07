import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationToBuyBundleComponent } from './location-to-buy-bundle.component';

describe('LocationToBuyBundleComponent', () => {
  let component: LocationToBuyBundleComponent;
  let fixture: ComponentFixture<LocationToBuyBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationToBuyBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationToBuyBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

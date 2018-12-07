import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleCreationComponent } from './bundle-creation.component';

describe('BundleCreationComponent', () => {
  let component: BundleCreationComponent;
  let fixture: ComponentFixture<BundleCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundleCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBundlesComponent } from './your-bundles.component';

describe('YourBundlesComponent', () => {
  let component: YourBundlesComponent;
  let fixture: ComponentFixture<YourBundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourBundlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

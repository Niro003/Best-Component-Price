import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowYourCurrentBundleComponent } from './show-your-current-bundle.component';

describe('ShowYourCurrentBundleComponent', () => {
  let component: ShowYourCurrentBundleComponent;
  let fixture: ComponentFixture<ShowYourCurrentBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowYourCurrentBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowYourCurrentBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

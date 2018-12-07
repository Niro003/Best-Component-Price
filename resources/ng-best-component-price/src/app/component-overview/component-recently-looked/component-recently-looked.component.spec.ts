import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRecentlyLookedComponent } from './component-recently-looked.component';

describe('ComponentRecentlyLookedComponent', () => {
  let component: ComponentRecentlyLookedComponent;
  let fixture: ComponentFixture<ComponentRecentlyLookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRecentlyLookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRecentlyLookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopedByComponent } from './developed-by.component';

describe('DevelopedByComponent', () => {
  let component: DevelopedByComponent;
  let fixture: ComponentFixture<DevelopedByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopedByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

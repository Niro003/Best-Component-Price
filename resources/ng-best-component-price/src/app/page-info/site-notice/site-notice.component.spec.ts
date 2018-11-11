import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNoticeComponent } from './site-notice.component';

describe('SiteNoticeComponent', () => {
  let component: SiteNoticeComponent;
  let fixture: ComponentFixture<SiteNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

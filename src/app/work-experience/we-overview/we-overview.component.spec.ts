import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WEOverviewComponent } from './we-overview.component';

describe('WEOverviewComponent', () => {
  let component: WEOverviewComponent;
  let fixture: ComponentFixture<WEOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WEOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WEOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

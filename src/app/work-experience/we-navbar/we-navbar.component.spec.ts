import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WENavbarComponent } from './we-navbar.component';

describe('WENavbarComponent', () => {
  let component: WENavbarComponent;
  let fixture: ComponentFixture<WENavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WENavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WENavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

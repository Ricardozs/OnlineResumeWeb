import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsNavbarComponent } from './skills-navbar.component';

describe('SkillsNavbarComponent', () => {
  let component: SkillsNavbarComponent;
  let fixture: ComponentFixture<SkillsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

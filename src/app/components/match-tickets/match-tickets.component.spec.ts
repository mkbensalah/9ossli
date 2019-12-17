import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTicketsComponent } from './match-tickets.component';

describe('MatchTicketsComponent', () => {
  let component: MatchTicketsComponent;
  let fixture: ComponentFixture<MatchTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

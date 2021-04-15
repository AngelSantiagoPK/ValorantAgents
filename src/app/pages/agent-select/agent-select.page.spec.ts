import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSelectPage } from './agent-select.page';

describe('AgentSelectPage', () => {
  let component: AgentSelectPage;
  let fixture: ComponentFixture<AgentSelectPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentSelectPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantTheaterComponent } from './valorant-theater.component';

describe('ValorantTheaterComponent', () => {
  let component: ValorantTheaterComponent;
  let fixture: ComponentFixture<ValorantTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorantTheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorantTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

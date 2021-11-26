import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCardsComponent } from './series-cards.component';

describe('SeriesCardsComponent', () => {
  let component: SeriesCardsComponent;
  let fixture: ComponentFixture<SeriesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

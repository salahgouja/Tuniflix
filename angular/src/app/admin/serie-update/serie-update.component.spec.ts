import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieUpdateComponent } from './serie-update.component';

describe('SerieUpdateComponent', () => {
  let component: SerieUpdateComponent;
  let fixture: ComponentFixture<SerieUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

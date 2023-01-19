import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailserieComponent } from './detailserie.component';

describe('DetailserieComponent', () => {
  let component: DetailserieComponent;
  let fixture: ComponentFixture<DetailserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailserieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryDisplayResultComponent } from './query-display-result.component';

describe('QueryDisplayResultComponent', () => {
  let component: QueryDisplayResultComponent;
  let fixture: ComponentFixture<QueryDisplayResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryDisplayResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryDisplayResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

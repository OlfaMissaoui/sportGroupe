import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlyersTableComponent } from './plyers-table.component';

describe('PlyersTableComponent', () => {
  let component: PlyersTableComponent;
  let fixture: ComponentFixture<PlyersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlyersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlyersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

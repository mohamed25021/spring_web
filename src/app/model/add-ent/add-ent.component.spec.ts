import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntComponent } from './add-ent.component';

describe('AddEntComponent', () => {
  let component: AddEntComponent;
  let fixture: ComponentFixture<AddEntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

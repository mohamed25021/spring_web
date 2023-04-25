import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEncComponent } from './add-enc.component';

describe('AddEncComponent', () => {
  let component: AddEncComponent;
  let fixture: ComponentFixture<AddEncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

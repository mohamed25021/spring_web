import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbordComponent } from './tabbord.component';

describe('TabbordComponent', () => {
  let component: TabbordComponent;
  let fixture: ComponentFixture<TabbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

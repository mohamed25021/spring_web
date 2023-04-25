import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrpriseComponent } from './entrprise.component';

describe('EntrpriseComponent', () => {
  let component: EntrpriseComponent;
  let fixture: ComponentFixture<EntrpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

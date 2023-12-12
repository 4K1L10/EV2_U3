import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEgresosComponent } from './ver-egresos.component';

describe('VerEgresosComponent', () => {
  let component: VerEgresosComponent;
  let fixture: ComponentFixture<VerEgresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerEgresosComponent]
    });
    fixture = TestBed.createComponent(VerEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

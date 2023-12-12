import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosUsuarioComponent } from './egresos-usuario.component';

describe('EgresosUsuarioComponent', () => {
  let component: EgresosUsuarioComponent;
  let fixture: ComponentFixture<EgresosUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgresosUsuarioComponent]
    });
    fixture = TestBed.createComponent(EgresosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

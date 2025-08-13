import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarCertificado } from './gerar-certificado';

describe('GerarCertificado', () => {
  let component: GerarCertificado;
  let fixture: ComponentFixture<GerarCertificado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerarCertificado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerarCertificado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

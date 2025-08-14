import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Certificado, PropsAdicionarCertificado } from '../interfaces/certificado.model';
import { v4 as uuid4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
  // BehaviorSubject para armazenar a lista de certificados
  private certificadosSubject = new BehaviorSubject<Certificado[]>([]);

  // Observable público
  certificados$: Observable<Certificado[]> = this.certificadosSubject.asObservable();

  constructor() { }

  adicionarCertificado({ name, atividades }: PropsAdicionarCertificado): Certificado {
    const novoCertificado: Certificado = {
      id: uuid4(),
      name,
      atividades,
      dataGeracao: new Date()
    }

    this.certificadosSubject.next([...this.certificadosSubject.value, novoCertificado]);
    this.setLocalStorage();
    return novoCertificado;
  }

  removerCertificado(id: string) {
    const certificados = this.certificadosSubject.value.filter(certificado => certificado.id !== id);

    this.certificadosSubject.next(certificados);
    this.setLocalStorage();
  }

  getCertificadoById(id: string): Certificado | undefined {
    return this.certificadosSubject.value.find(certificado => certificado.id === id);
  }

  private setLocalStorage() {
    localStorage.setItem('certificados', JSON.stringify(this.certificadosSubject.value));
  }

  public getLocalStorage() {
    const certificadosString = localStorage.getItem('certificados');

    const certificados = certificadosString
      ? JSON.parse(certificadosString)
      : []; // se vazio, retorna array vazio

    this.certificadosSubject.next(certificados);
  }
}

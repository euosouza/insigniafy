
export interface Certificado{
  id: string;
  name: string;
  atividades: Array<string>;
  dataGeracao: Date;
}

export interface PropsAdicionarCertificado{
  name: string;
  atividades: Array<string>;
}

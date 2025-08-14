
export interface Certificado{
  id: string;
  name: string;
  atividades: Array<string>;
  dataGeracao: string;
}

export interface PropsAdicionarCertificado{
  name: string;
  atividades: Array<string>;
}

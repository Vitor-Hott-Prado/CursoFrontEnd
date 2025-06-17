export class Curriculo {


  constructor(
    private _id: number | null,
    private _usuarioId: number,
    private _nomeCompleto: string,
    private _email: string,
    private _telefone: string,
    private _cpf: string,
    private _dataNascimento: string,
    private _cep: string,
    private _formacaoAcademica: string[],
    private _experienciaProfissional: string[],
    private _habilidades: string[],
    private _dataCriacao: string | null = null,
    private _dataAtualizacao: string | null = null
  ) {}



  public get id(): number | null {
    return this._id;
  }
  public set id(v: number | null) {
    this._id = v;
  }

  public get usuarioId(): number {
    return this._usuarioId;
  }
  public set usuarioId(v: number) {
    this._usuarioId = v;
  }

  public get nomeCompleto(): string {
    return this._nomeCompleto;
  }
  public set nomeCompleto(v: string) {
    this._nomeCompleto = v;
  }

  public get email(): string {
    return this._email;
  }
  public set email(v: string) {
    this._email = v;
  }

  public get telefone(): string {
    return this._telefone;
  }
  public set telefone(v: string) {
    this._telefone = v;
  }

  public get cpf(): string {
    return this._cpf;
  }
  public set cpf(v: string) {
    this._cpf = v;
  }

  public get dataNascimento(): string {
    return this._dataNascimento;
  }
  public set dataNascimento(v: string) {
    this._dataNascimento = v;
  }

  public get cep(): string {
    return this._cep;
  }
  public set cep(v: string) {
    this._cep = v;
  }

  public get formacaoAcademica(): string[] {
    return this._formacaoAcademica;
  }
  public set formacaoAcademica(v: string[]) {
    this._formacaoAcademica = v;
  }

  public get experienciaProfissional(): string[] {
    return this._experienciaProfissional;
  }
  public set experienciaProfissional(v: string[]) {
    this._experienciaProfissional = v;
  }

  public get habilidades(): string[] {
    return this._habilidades;
  }
  public set habilidades(v: string[]) {
    this._habilidades = v;
  }

  public get dataCriacao(): string | null {
    return this._dataCriacao;
  }
  public set dataCriacao(v: string | null) {
    this._dataCriacao = v;
  }

  public get dataAtualizacao(): string | null {
    return this._dataAtualizacao;
  }
  public set dataAtualizacao(v: string | null) {
    this._dataAtualizacao = v;
  }


  public toMap(): { [key: string]: any } {
    return {
      id: this._id,
      usuarioId: this._usuarioId,
      nomeCompleto: this._nomeCompleto,
      email: this._email,
      telefone: this._telefone,
      cpf: this._cpf,
      dataNascimento: this._dataNascimento,
      cep: this._cep,
      formacaoAcademica: this._formacaoAcademica,
      experienciaProfissional: this._experienciaProfissional,
      habilidades: this._habilidades,
      dataCriacao: this._dataCriacao,
      dataAtualizacao: this._dataAtualizacao
    };
  }

 
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.usuarioId,
      map.nomeCompleto,
      map.email,
      map.telefone,
      map.cpf,
      map.dataNascimento,
      map.cep,
      map.formacaoAcademica || [],       // Garante que seja um array, mesmo se o campo estiver faltando no map
      map.experienciaProfissional || [], // Garante que seja um array
      map.habilidades || [],             // Garante que seja um array
      map.dataCriacao || null,          // Garante null se o campo estiver faltando
      map.dataAtualizacao || null       // Garante null se o campo estiver faltando
    );
  }
}
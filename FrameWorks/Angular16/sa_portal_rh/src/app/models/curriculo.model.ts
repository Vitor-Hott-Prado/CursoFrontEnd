export class Curriculo {
  constructor(
    private _id: number,
    private _nome: string,
    private _idade: number,
    private _linkedin: string,
    private _github: string,
    private _experiencia: string
  ) {}

  // Getters and setters de ID
  public get id(): number {
    return this._id;
  }
  public set id(id: number) {
    this._id = id;
  }

  // Getters and Setters de NOME
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  // Getters and Setters IDADE
  public get idade(): number {
    return this._idade;
  }
  public set idade(value: number) {
    this._idade = value;
  }

  // Getters and Setters de LINKEDIN
  public get linkedin(): string {
    return this._linkedin;
  }
  public set linkedin(value: string) {
    this._linkedin = value;
  }

  // Getters and Setters GITHUB
  public get github(): string {
    return this._github;
  }
  public set github(value: string) {
    this._github = value;
  }

  // Getters and Setters EXPERIENCIA
  public get experiencia(): string {
    return this._experiencia;
  }
  public set experiencia(value: string) {
    this._experiencia = value;
  }

  // Conversão de objetos
  // OBJ to JSON
  public toMap():{[key:string]: any}{
    return {
      id: this.id,
      nome: this.nome,
      idade: this.idade,
      linkedin: this.linkedin,
      github: this.github,
      experiencia: this.experiencia
    }
  }

  // JSON to OBJ
  static fromMap(map:any): Curriculo{
    return new Curriculo(
      map.id,
      map.nome,
      map.idade,
      map.linkedin,
      map.github,
      map.experiencia
    )
  }
}

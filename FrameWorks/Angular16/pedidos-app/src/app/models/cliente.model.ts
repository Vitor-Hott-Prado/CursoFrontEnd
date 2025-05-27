//classe model para manipulação de dados


export class Cliente {
  //atributos
  public id: number; //tipagem
  public nome: string;

  constructor(id:number,  nome:string){
    this.id = id;
    this.nome = nome;
  }

   // método acesso punlico
   // gettera and setter

   public getId():number{
    return this.id;
   }
    public setId(id: number): void{
      this.id =id;
    }



  // //abreviada de escrever o model
  // export class Cliente{
  //     constructor(
  //         public id: number,
  //         public nome:String
  //     ){}
}

export class Member {
  private _name:string;
  private _dni:String;

  constructor(name?:string,dni?:String){
    this.name = name;
    this.dni = dni;
  };

  public get name(){
    return this._name;
  }
  public get dni(){
    return this._dni;
  }
  public set name(name){
    this._name = name;
  }
  public set dni(dni){
    this._dni = dni;
  }

}

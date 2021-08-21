export class Quote {
  showInfo! : boolean;
  constructor(public id: number,public name: string,public author:string,public poster:string,public uploadDate: Date,public score: number){
  this.showInfo = false;
  }
}

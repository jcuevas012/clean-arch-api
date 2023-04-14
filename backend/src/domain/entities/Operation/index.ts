
export enum OperationType {
  addition, 
  subtraction, 
  multiplication, 
  division, 
  square_root, 
  random_string
}

export class Operation {
  protected id: string
  protected type: OperationType
  protected cost: number

  constructor(id: string, type: OperationType, cost: number) {
    this.id = id;
    this.type = type;
    this.cost = cost;
  }

  getId() {
    return this.id
  }

  getType() {
    return this.type
  }

  getCost() {
    return this.cost
  }



}

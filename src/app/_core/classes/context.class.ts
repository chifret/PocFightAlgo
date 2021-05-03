export class ContextClass {
  creatures: {
    id: number,
    name: string,
    effects: any[]
  }[] = [];

  mockInit(): ContextClass {
    this.creatures.push({
      id: 1,
      name: 'Porko Rosso',
      effects: []
    });

    this.creatures.push({
      id: 2,
      name: 'El Pistolero',
      effects: [{
        name: 'Viens-y pas !',
        code: 'Viensypas'
      }]
    });

    return this;
  }
}

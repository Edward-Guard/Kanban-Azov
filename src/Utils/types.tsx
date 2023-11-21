export type ComponentType = {
  Nome: string,
  Area: string,
  Material:string
  Estado : 'Concluido' | 'Interrompido' | 'Incompleto'
};

export type MaterialType = {
  Nome: string
  Componentes: ComponentType[]
  Conclusao: number
  NumFolhas: number
};

export type ModuleType = {
  Nome:string,
  Data: Date[],
  Componentes: MaterialType[]
  Conclusao: number
};

export type ShipType = {
  id:string
  Data:Date
  Conclusao: number
  Adcionais: ComponentType | null
  Modulos : ModuleType[]
};

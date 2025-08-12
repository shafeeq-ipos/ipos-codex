export interface Table {
  id: string;
  name: string;
}

export interface Room {
  id: string;
  name: string;
  tables: Table[];
}

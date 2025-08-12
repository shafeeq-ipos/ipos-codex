import { Room } from '../models/room';

export const rooms: Room[] = [
  {
    id: 'room1',
    name: 'Main Hall',
    tables: [
      { id: 't1', name: 'Table 1' },
      { id: 't2', name: 'Table 2' }
    ]
  },
  {
    id: 'room2',
    name: 'Patio',
    tables: [
      { id: 't3', name: 'Table 3' },
      { id: 't4', name: 'Table 4' }
    ]
  }
];

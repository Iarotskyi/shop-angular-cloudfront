export interface mockProduct {
  id: number;
  name: string;
  available: boolean;
}

export const mockProducts: Array<mockProduct> = [
  { id: 1, name: 'item 1', available: true },
  { id: 2, name: 'item 2', available: true },
  { id: 3, name: 'item 3', available: true },
];

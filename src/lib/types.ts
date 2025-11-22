export type Operation = {
  id: string;
  type: 'Receipt' | 'Delivery' | 'Internal' | 'Adjustment';
  reference: string;
  partner?: string;
  scheduledDate: string;
  source?: string;
  destination?: string;
  product: string;
  quantity: number;
  status: 'Draft' | 'Waiting' | 'Ready' | 'Done' | 'Canceled';
};

export type Product = {
    id: string;
    name: string;
    sku: string;
    category: string;
    uom: string;
    stock: number;
    location: string;
    imageUrl: string;
    imageHint: string;
};

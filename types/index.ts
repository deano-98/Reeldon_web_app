export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  sizes?: string[];
  category: string;
};
export type QuoteItem = {
  product: string;
  quantity?: number;
  specification?: string;
};
export type QuoteFormData = {
  name: string;
  company?: string;
  phone: string;
  email?: string;
  product: string;
  quantity?: string;
  specification?: string;
  message: string;
};

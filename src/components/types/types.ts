export interface ProductType {
  id: number;
  badge: string;
  badgeColor: string;
  icon: string;
  title: string;
  description: string;
  price: {
    currency: string;
    amount: number;
    period: string;
  };
  features: string[];
}
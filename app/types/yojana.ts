export interface Yojana {
  id: string;
  name: string;
  amount: string;
  seatsTotal: number;
  icon?: React.ReactNode;

  description?: string;
  features?: string[];
  benefits?: string[];
}

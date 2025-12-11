export interface Yojana {
  id?: string;               // optional
  name: string;
  amount: string;
  seatsTotal?: number;       // optional
  icon?: React.ReactNode;

  description?: string;
  features?: string[];
  benefits?: string[];
}

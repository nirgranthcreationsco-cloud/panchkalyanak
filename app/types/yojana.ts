export interface Yojana {
  id?: string;                   // optional to avoid build errors
  name: string;
  amount: string;
  description?: string;
  features?: string[];
  icon?: React.ReactNode;
  benefits?: string[];
  seatsTotal?: number;           // optional
}

export interface Yojana {
  icon: React.ReactNode;   // <-- changed from string to React.ReactNode
  name: string;
  amount: string;
  description: string;
  features: string[];
}

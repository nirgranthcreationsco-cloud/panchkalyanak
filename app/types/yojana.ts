// app/types/yojana.ts

export interface Yojana {
  id: string;                 // ⭐ required for seats tracking
  name: string;
  amount: string;

  description?: string;
  features?: string[];

  icon?: React.ReactNode;     // ⭐ ensures no type error on icons

  seatsTotal: number;         // ⭐ main yojna component requires this
  benefits?: string[];        // for detailed modals if needed
}

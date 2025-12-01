export interface Yojana {
  name: string;
  amount: string;
  description?: string;
  features?: string[];
  icon?: React.ReactNode; // ⭐ fixes your error
  benefits?: string[]; // used in more yojna modal
}

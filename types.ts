
export interface Raffle {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  ticketPrice: number;
  raisedAmount: number;
  goalAmount: number;
  daysLeft: number;
}

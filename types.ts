export interface Raffle {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  raisedAmount: number;
  goalAmount: number;
  ticketPrice: number;
  daysLeft: number;
}

export interface Collaboration {
  id: number;
  collaboratorName: string;
  raffleId: number;
  ticketsSold: number;
  amountRaised: number;
}

export interface RankingEntry {
  id: number;
  buyerName: string;
  raffleId: number;
  ticketsBought: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User';
  createdAt: string;
}

export interface Category {
    id: number;
    name: string;
    description: string;
}

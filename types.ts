
export interface Winner {
  place: number;
  buyerName: string;
  ticketNumber: number;
}

export interface Participant {
  userId?: number; // Added to link participant to user
  buyerName: string;
  ticketNumber: number;
  paymentStatus: 'Pendente' | 'Pago' | 'Cancelado';
}

export interface Raffle {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  raisedAmount: number;
  goalAmount: number;
  ticketPrice: number;
  daysLeft: number;
  status: 'Ativa' | 'Encerrada' | 'Sorteada' | 'Cancelada';
  winners?: Winner[];
  participants?: Participant[];
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
  password?: string; // Added for login simulation
  role: 'Admin' | 'User';
  createdAt: string;
}

export type CurrentUser = Omit<User, 'password'>;


export interface Category {
    id: number;
    name: string;
    description: string;
}
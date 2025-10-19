import { Raffle, Category, User, Collaboration, RankingEntry } from './types';

export const RAFFLES: Raffle[] = [
  { 
    id: 1, 
    title: 'Ajuda para o Hospital do Câncer', 
    imageUrl: 'https://picsum.photos/seed/1/400/300', 
    category: 'Saúde', 
    raisedAmount: 7500, 
    goalAmount: 10000, 
    ticketPrice: 10, 
    daysLeft: 15,
    status: 'Ativa',
    participants: [
      { userId: 1, buyerName: 'Admin', ticketNumber: 1, paymentStatus: 'Pago' },
      { userId: 2, buyerName: 'Ana Silva', ticketNumber: 101, paymentStatus: 'Pago' },
      { buyerName: 'Pedro Costa', ticketNumber: 205, paymentStatus: 'Pago' },
      { userId: 2, buyerName: 'Ana Silva', ticketNumber: 350, paymentStatus: 'Pendente' },
    ],
  },
  { 
    id: 2, 
    title: 'Construção da Creche Comunitária', 
    imageUrl: 'https://picsum.photos/seed/2/400/300', 
    category: 'Educação', 
    raisedAmount: 20000, 
    goalAmount: 20000, 
    ticketPrice: 15, 
    daysLeft: 0,
    status: 'Encerrada',
    participants: [
      { buyerName: 'Maria Oliveira', ticketNumber: 50, paymentStatus: 'Pago' },
      { buyerName: 'Carlos Lima', ticketNumber: 75, paymentStatus: 'Pago' },
    ],
  },
  { 
    id: 3, 
    title: 'Cadeira de Rodas para o Sr. João', 
    imageUrl: 'https://picsum.photos/seed/3/400/300', 
    category: 'Causa Pessoal', 
    raisedAmount: 2000, 
    goalAmount: 2000, 
    ticketPrice: 5, 
    daysLeft: 0,
    status: 'Sorteada',
    participants: [
       { userId: 2, buyerName: 'Ana Silva', ticketNumber: 1, paymentStatus: 'Pago' },
       { buyerName: 'Ricardo Alves', ticketNumber: 2, paymentStatus: 'Pago' },
    ],
    winners: [
      { place: 1, buyerName: 'Ana Silva', ticketNumber: 1 }
    ]
  },
  { 
    id: 4, 
    title: 'Castração de Animais de Rua', 
    imageUrl: 'https://picsum.photos/seed/4/400/300', 
    category: 'Causa Animal', 
    raisedAmount: 4800, 
    goalAmount: 5000, 
    ticketPrice: 8, 
    daysLeft: 12,
    status: 'Ativa',
    participants: [
      { buyerName: 'Sofia Martins', ticketNumber: 88, paymentStatus: 'Pago' },
      { userId: 2, buyerName: 'Ana Silva', ticketNumber: 90, paymentStatus: 'Pago' },
    ]
  },
  { 
    id: 5, 
    title: 'Reforma do Asilo Recanto Feliz', 
    imageUrl: 'https://picsum.photos/seed/5/400/300', 
    category: 'Ação Social', 
    raisedAmount: 25000, 
    goalAmount: 30000, 
    ticketPrice: 20, 
    daysLeft: 45,
    status: 'Ativa',
    participants: []
  },
  { 
    id: 6, 
    title: 'Viagem de Formatura da Turma 9', 
    imageUrl: 'https://picsum.photos/seed/6/400/300', 
    category: 'Educação', 
    raisedAmount: 3000, 
    goalAmount: 8000, 
    ticketPrice: 25, 
    daysLeft: 20,
    status: 'Ativa',
    participants: []
  },
  { 
    id: 7, 
    title: 'Tratamento Dentário para a Maria', 
    imageUrl: 'https://picsum.photos/seed/7/400/300', 
    category: 'Causa Pessoal', 
    raisedAmount: 1800, 
    goalAmount: 1800, 
    ticketPrice: 10, 
    daysLeft: 0,
    status: 'Cancelada',
    participants: []
  },
  { 
    id: 8, 
    title: 'Kit Esportivo para Crianças Carentes', 
    imageUrl: 'https://picsum.photos/seed/8/400/300', 
    category: 'Ação Social', 
    raisedAmount: 6000, 
    goalAmount: 7000, 
    ticketPrice: 12, 
    daysLeft: 18,
    status: 'Ativa',
    participants: []
  },
];

export const CATEGORIES: Category[] = [
    { id: 1, name: 'Saúde', description: 'Rifas para tratamentos médicos, hospitais, etc.' },
    { id: 2, name: 'Educação', description: 'Rifas para escolas, material escolar, etc.' },
    { id: 3, name: 'Causa Pessoal', description: 'Rifas para ajudar indivíduos com necessidades específicas.' },
    { id: 4, name: 'Causa Animal', description: 'Rifas para abrigos, castração, e cuidados com animais.' },
    { id: 5, name: 'Ação Social', description: 'Rifas para comunidades, asilos, e projetos sociais.' },
];

export const USERS: User[] = [
    { id: 1, name: 'Admin', email: 'admin@rifa10.com', password: 'admin123', role: 'Admin', createdAt: '2023-01-15T10:00:00Z' },
    { id: 2, name: 'Ana Silva', email: 'ana.silva@example.com', password: 'user123', role: 'User', createdAt: '2023-02-20T11:30:00Z' },
    { id: 3, name: 'Carlos Souza', email: 'carlos.souza@example.com', password: 'user123', role: 'User', createdAt: '2023-03-10T15:45:00Z' },
];

export const COLLABORATIONS: Collaboration[] = [
    { id: 1, collaboratorName: 'Empresa X', raffleId: 1, ticketsSold: 100, amountRaised: 1000 },
    { id: 2, collaboratorName: 'Loja Y', raffleId: 2, ticketsSold: 50, amountRaised: 750 },
    { id: 3, collaboratorName: 'Influencer Z', raffleId: 4, ticketsSold: 200, amountRaised: 1600 },
];

export const RANKING_DATA: RankingEntry[] = [
    { id: 1, buyerName: 'João Pereira', raffleId: 1, ticketsBought: 50 },
    { id: 2, buyerName: 'Maria Oliveira', raffleId: 2, ticketsBought: 45 },
    { id: 3, buyerName: 'Pedro Costa', raffleId: 1, ticketsBought: 42 },
    { id: 4, buyerName: 'Sofia Martins', raffleId: 4, ticketsBought: 38 },
];
/** * Mock data for the application's sellers/vendors */
export const SELLERS = [
  {
    id: "1",
    name: "Albertina Magalhães",
    location: "Matosinhos",
    imageUri: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Sou a Maria. Tenho 68 anos e sou feirante. Aqui partilho informações sobre os meus produtos frescos e novidades. Se gostas de boa disposição e produtos autênticos, estás no sítio certo!",
    categories: ["Alimentação", "Vestuário"],
    marketIds: [1, 2, 3],
  },
  {
    id: "2", 
    name: "Joaquim Fonseca",
    location: "Porto",
    imageUri: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Olá, sou o Joaquim Fonseca. Produzo queijos artesanais há mais de 20 anos, utilizando métodos tradicionais e leite de alta qualidade.",
    categories: ["Alimentação"],
    marketIds: [1, 3]
  },
  {
    id: "3",
    name: "Carolina Deslandes", 
    location: "Gaia",
    imageUri: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Apaixonada por antiguidades, ofereço uma seleção única de peças vintage e colecionáveis.",
    categories: ["Velharias", "Decoração"],
    marketIds: [1, 3]
  }
];

/** * Mock data for announcements/posts made by sellers */
export const POSTS = [
  {
    id: "p1",
    sellerId: "1",
    text: "Laranjas frescas a 1.20€ o kilo 🍊",
    date: "Hoje"
  },
  {
    id: "p2",
    sellerId: "1",
    text: "Hoje a feira está cheia!",
    date: "Ontem"
  },
  {
    id: "p3",
    sellerId: "2",
    text: "Queijo artesanal acabado de chegar 🧀",
    date: "Hoje"
  },
  {
    id: "p4",
    sellerId: "1",
    text: "Novas peças vintage disponíveis! Venha descobrir tesouros únicos.",
    date: "2 dias atrás"
  },
  {
    id: "p5",
    sellerId: "1",
    text: "Descontos especiais em decoração retro este fim de semana! Não perca.",
    date: "3 dias atrás"
  },
  {
    id: "p6",
    sellerId: "1",
    text: "Visite o meu stand para provar os melhores queijos artesanais da região!",
    date: "4 dias atrás"
  },
  {
    id: "p7",
    sellerId: "1",
    text: "Peças vintage restauradas com amor e cuidado. Venha conferir!",
    date: "5 dias atrás"
  }
];

/** * Mock data for physical market locations 
 */
export const MARKETS = [
  {
    id: 1,
    title: "Mercado do Bolhão",
    schedule: "Seg - Sex 11:00 - 19:00",
    address: "R. Formosa 322, 4000-248 Porto",
    latitude: 41.1496, 
    longitude: -8.6109,
    // image: require("@/assets/markets/bolhao.png")
  },
  {
    id: 2,
    title: "WOW É Natal",
    schedule: "30 Nov 2025",
    address: "WOW - World of Wine, Gaia",
    latitude: 41.1375, 
    longitude: -8.6128,
    // image: require("@/assets/markets/bolhao.png")
  },
  {
    id: 3,
    title: "Time Out Market Porto",
    schedule: "Todos os dias 10:00 - 00:00",
    address: "Praça De Almeida Garrett, Porto 40",
    latitude: 41.1579, 
    longitude: -8.6291,
    // image: require("@/assets/markets/bolhao.png")
  },
  {
    id: 4,
    title: "Mercado da Foz",
    schedule: "Seg - Sáb 07:00 - 17:00",
    address: "Rua de Diogo Botelho, 4150-262 Porto",
    latitude: 41.1555,
    longitude: -8.6695,
    // image: require("@/assets/markets/foz.png")
  }
];
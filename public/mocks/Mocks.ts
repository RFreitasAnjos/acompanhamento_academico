export const usersMock = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Student",
  },
   {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      role: "Teacher",
  }
];

export const notificationMock = [
  {
    id: 1,
    title: "New Assignment Posted",
    message: "Your teacher has posted a new assignment for Math class.",
    date: "2024-06-01T10:00:00Z",
    read: false,
  },
   {
      id: 2,
      title: "Assignment Due Soon",
      message: "Remember that your Math assignment is due tomorrow.",
      date: "2024-06-02T10:00:00Z",
      read: false,
  }
];

export const ContentMock = [
  {
    id: 1,
    title: "Introduction to Algebra",
    description: "Learn the basics of algebra, including variables, equations, and functions.",
    price: 19.99,
    type: "Video",
    url: "https://example.com/algebra-intro",
  },
   {
      id: 2,
      title: "Geometry Basics",
      description: "Explore the fundamentals of geometry, including shapes, angles, and theorems.",
      price: 19.99,
      type: "Article",
      url: "https://example.com/geometry-basics",
  }
];

export const cardMarketMock = [
  {
    id: 1,
    title: "Algebra Textbook",
    description: "A comprehensive textbook covering all topics in algebra.",
    category: "Books",
    price: 49.99,
    imageUrl: "https://example.com/algebra-textbook.jpg",
  },
   {
      id: 2,
      title: "Geometry Set",
      description: "A complete geometry set including compass, protractor, and ruler.",
      category: "Supplies",
      price: 19.99,
      imageUrl: "https://example.com/geometry-set.jpg",
  },
  {
    id: 3,
    title: "Calculus Workbook",
    description: "Practice problems and solutions for calculus students.",
    category: "Books",
    price: 29.99,
    imageUrl: "https://example.com/calculus-workbook.jpg",
  },
  {
    id: 4,
    title: "Physics Lab Kit",
    description: "A kit containing all necessary materials for physics experiments.",
    category: "Supplies",
    price: 59.99,
    imageUrl: "https://example.com/physics-lab-kit.jpg",
  }
];

export const plansMock = [
  {
    name: 'Simples',
    price: 'R$ 99',
    period: '/mês',
    description: 'Perfeito para começar sua jornada fitness',
    features: [
      'Acesso ao app mobile',
      '2 sessões por semana',
      'Suporte por email',
      'Acompanhamento básico',
    ],
    cta: 'Começar Agora',
    popular: false,
    bgColor: 'bg-zinc-800/30',
    borderColor: 'border-zinc-700',
  },
  {
    name: 'Ouro',
    price: 'R$ 199',
    period: '/mês',
    description: 'Ideal para resultados consistentes',
    features: [
      'Tudo do plano Simples',
      '4 sessões por semana',
      'Suporte prioritário',
      'Plano de treino personalizado',
      'Análise de progresso mensal',
      'Acesso a comunidade',
    ],
    cta: 'Escolher Plano',
    popular: true,
    bgColor: 'bg-gradient-to-b from-yellow-500/10 to-yellow-600/5',
    borderColor: 'border-yellow-500/50',
  },
  {
    name: 'Platinum',
    price: 'R$ 299',
    period: '/mês',
    description: 'Programa completo com máxima dedicação',
    features: [
      'Tudo do plano Ouro',
      'Sessões ilimitadas',
      'Suporte 24/7',
      'Consultoria nutricional',
      'Avaliação física mensal',
      'Acesso a webinars exclusivos',
      'Plano de nutrição personalizado',
    ],
    cta: 'Contrate Agora',
    popular: false,
    bgColor: 'bg-zinc-800/40',
    borderColor: 'border-zinc-600',
  },
];

export const testimonials = [
  {
    id: 1,
    name: "João Silva",
    role: "Estudante de Engenharia",
    message: "Essa plataforma me ajudou a organizar meus projetos e evoluir muito mais rápido.",
  },
  {
    id: 2,
    name: "Maria Souza",
    role: "Pesquisadora",
    message: "Excelente para acompanhar progresso acadêmico e encontrar oportunidades.",
  },
  {
    id: 3,
    name: "Carlos Lima",
    role: "Desenvolvedor",
    message: "O marketplace é incrível, encontrei projetos muito interessantes.",
  },
];
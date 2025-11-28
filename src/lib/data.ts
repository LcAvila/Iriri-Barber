// Dados reais da Iriri Barbearia Club
// Imagens da pasta public/assets/Fotos

export interface Store {
  id: string;
  name: string;
  location: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  trinxUrl: string;
  mapUrl: string;
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  clientFeedback: string;
  clientName: string;
  rating: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientPhoto?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Barbershop {
  id: string;
  name: string;
  history: string;
  foundedYear: number;
  stores: Store[];
}

// Dados reais da Iriri Barbearia Club
export const barbershop: Barbershop = {
  id: "iriri-barbearia-club",
  name: "Iriri Barbearia Club",
  history: `A Iriri Barbearia Club é uma barbearia com mais de 20 anos de tradição no Rio de Janeiro, unindo experiência, estilo e atitude em um ambiente pensado para quem leva o visual a sério.

Mais do que cortar cabelo e fazer a barba, a Iriri entrega uma experiência completa: resenha, cuidado, atenção aos detalhes e um time de barbeiros que é referência na região. Cada corte é tratado como único, respeitando o estilo e a personalidade de cada cliente.

Hoje a marca está presente nos principais shoppings da cidade, com unidades no Barra Shopping e no Madureira Shopping, sempre com o mesmo compromisso: atendimento de primeira, cortes modernos e uma vibe que faz você querer voltar.

Com mais de duas décadas de experiência, a Iriri se consolidou como referência em cuidados masculinos, oferecendo desde cortes clássicos até os estilos mais modernos, sempre com a qualidade e profissionalismo que se tornou nossa marca registrada.`,
  foundedYear: 2003,
  stores: [
    {
      id: "barra",
      name: "Unidade Barra Shopping",
      location: "Barra da Tijuca",
      address: "Barra Shopping - Av. das Américas, 4666 - Barra da Tijuca, Rio de Janeiro - RJ",
      phone: "(21) 3841-3883",
      whatsapp: "https://api.whatsapp.com/send?phone=5521971973589&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20um%20atendimento%2C%20por%20favor.",
      hours: "Segunda a Sábado: 10h às 22h | Domingo: 12h às 21h",
      trinxUrl: "https://wa.me/5521971973589",
      mapUrl: "https://maps.google.com/?q=Barra+Shopping+Rio+de+Janeiro",
      imageUrl: "/assets/Fotos/542267409_18353980753093583_2570518976869483188_n.jpg",
    },
    {
      id: "madureira",
      name: "Unidade Madureira Shopping",
      location: "Madureira",
      address: "Madureira Shopping - Estrada do Portela, 222, 2º piso, loja 288 - Madureira, Rio de Janeiro - RJ, CEP 21351-050",
      phone: "(21) 99514-9131",
      whatsapp: "https://api.whatsapp.com/send?phone=5521995149131&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20um%20atendimento%2C%20por%20favor.",
      hours: "Segunda a Sábado: 10h às 22h | Domingo: 12h às 21h",
      trinxUrl: "https://www.trinks.com/iriri-barbeariaclub-madureira",
      mapUrl: "https://maps.google.com/?q=Madureira+Shopping+Rio+de+Janeiro",
      imageUrl: "/assets/Fotos/547894354_1910434256184211_7285559037535928024_n.jpg",
    },
  ],
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Corte Fade com Degradê",
    description: "Degradê baixo com finalização impecável",
    imageUrl: "/assets/Fotos/548174611_1484443569556654_415259597469590057_n.jpg",
    clientFeedback: "Trabalho perfeito! Saí muito satisfeito com o resultado.",
    clientName: "Cliente Iriri",
    rating: 5,
  },
  {
    id: "2",
    title: "Corte Moderno com Risco",
    description: "Estilo moderno com risco lateral",
    imageUrl: "/assets/Fotos/548779558_18402789025184996_2038412771548643072_n.jpg",
    clientFeedback: "Melhor corte que já fiz! Super recomendo.",
    clientName: "Cliente Iriri",
    rating: 5,
  },
  {
    id: "3",
    title: "Corte Completo",
    description: "Atendimento completo na barbearia",
    imageUrl: "/assets/Fotos/550848570_18529209814061242_827291090710797903_n.jpg",
    clientFeedback: "Experiência completa! Ambiente top e profissionais qualificados.",
    clientName: "Cliente Iriri",
    rating: 5,
  },
  {
    id: "4",
    title: "Corte + Barba Premium",
    description: "Serviço completo de corte e barba",
    imageUrl: "/assets/Fotos/550860028_18403069942184996_4630706589568692475_n.jpg",
    clientFeedback: "Atendimento excepcional! Vale cada minuto.",
    clientName: "Cliente Iriri",
    rating: 5,
  },
  {
    id: "5",
    title: "Corte Social Moderno",
    description: "Estilo executivo com toque moderno",
    imageUrl: "/assets/Fotos/551517826_18403516324184996_7047288655518678024_n.jpg",
    clientFeedback: "Corte perfeito para o dia a dia profissional.",
    clientName: "Cliente Iriri",
    rating: 5,
  },
  {
    id: "6",
    title: "Degradê Premium",
    description: "Degradê com acabamento profissional",
    imageUrl: "/assets/Fotos/552444622_18404501122184996_4265848091295256204_n.jpg",
    clientFeedback: "Resultado incrível! Profissionais muito qualificados.",
    clientName: "Cliente Iriri",
    rating: 5,
  },
  {
    id: "7",
    title: "Corte Afro Estilizado",
    description: "Corte especializado em cabelos afro",
    imageUrl: "/assets/Fotos/552969004_18294260134249899_793642878314939675_n.jpg",
    clientFeedback: "A melhor barbearia para cabelo afro no Rio!",
    clientName: "Cliente Iriri",
    rating: 5,
  },
  {
    id: "8",
    title: "Corte Infantil Premium",
    description: "Atendimento especial para crianças",
    imageUrl: "/assets/Fotos/553358361_18531020410061242_729193098142920969_n.jpg",
    clientFeedback: "Meu filho adorou! Ambiente família e profissionais pacientes.",
    clientName: "Cliente Iriri",
    rating: 5,
  },
  {
    id: "9",
    title: "Barba + Degradê Clássico",
    description: "Combo completo com estilo clássico",
    imageUrl: "/assets/Fotos/554942274_18404819083184996_904041421327265286_n.jpg",
    clientFeedback: "Serviço impecável! Sempre volto aqui.",
    clientName: "Cliente Iriri",
    rating: 5,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Marcelo Santos",
    rating: 5,
    comment: "Mais de 20 anos de tradição fazem toda a diferença! Ambiente top, profissionais qualificados e resultado sempre impecável. Cliente fiel há anos!",
    date: "2024-11-15",
  },
  {
    id: "2",
    clientName: "Bruno Costa",
    rating: 5,
    comment: "A melhor barbearia do Rio! Atendimento premium, barbeiros especializados e aquele cuidado que faz você querer voltar sempre.",
    date: "2024-11-10",
  },
  {
    id: "3",
    clientName: "Felipe Rodrigues",
    rating: 5,
    comment: "Na Iriri, corte, resenha e estilo andam juntos! Experiência completa desde a recepção até o acabamento final.",
    date: "2024-11-05",
  },
  {
    id: "4",
    clientName: "Ricardo Lima",
    rating: 5,
    comment: "Estilo de verdade tem endereço certo: Iriri Barbearia Club! Profissionalismo e qualidade que fazem toda diferença.",
    date: "2024-10-28",
  },
  {
    id: "5",
    clientName: "Anderson Silva",
    rating: 5,
    comment: "Frequento a unidade do Barra Shopping e sempre saio satisfeito. Equipe nota 10 e ambiente aconchegante!",
    date: "2024-10-20",
  },
  {
    id: "6",
    clientName: "Carlos Eduardo",
    rating: 5,
    comment: "A unidade do Madureira é sensacional! Barbeiros especialistas e aquele acabamento na régua. Super recomendo!",
    date: "2024-10-15",
  },
];

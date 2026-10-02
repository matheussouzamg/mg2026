import { SiteConfig, CourseModule, ResultItem, TestimonialItem, FAQItem } from '../types';
import matheusPhoto from '../assets/images/regenerated_image_1790668243713.png';
import vslPoster from '../assets/images/vsl_video_poster_1790671127125.jpg';

export const initialSiteConfig: SiteConfig = {
  nome: 'Matheus Souza',
  instagram: '@matheussouza.ofc',
  instagramUrl: 'https://www.instagram.com/matheussouza.ofc/',
  whatsappNumber: '5511999999999',
  whatsappMessage: 'Olá, Matheus! Vi o treinamento de Micropigmentação Capilar e gostaria de saber mais informações.',
  checkoutUrl: '#oferta', // Substitua pelo seu link de checkout (Hotmart, Kiwify, Eduzz, etc.)
  videoVslUrl: '', // Deixe vazio para usar o player demonstrativo ou cole o link do seu vídeo (MP4 ou YouTube embed)
  videoPosterUrl: vslPoster,
  precoOriginal: 'R$ 997,00',
  precoOferta: 'R$ 297,00',
  precoParcelado: '12x de R$ 29,70',
  garantiaDias: 7,
  expertPhotoUrl: matheusPhoto,
  expertBio: 'Minha missão é ensinar pessoas a dominar a Micropigmentação Capilar através de um método prático, estruturado e focado na execução.',
};

export const courseModulesData: CourseModule[] = [
  {
    numero: 'MÓDULO 01',
    titulo: 'Introdução à Micropigmentação Capilar',
    descricao: 'Fundamentos essenciais da técnica, anatomia da pele do couro cabeludo, profundidade correta e biossegurança.',
    iconName: 'BookOpen',
    duracaoAprox: '4 aulas'
  },
  {
    numero: 'MÓDULO 02',
    titulo: 'Materiais e Equipamentos',
    descricao: 'A caneta dermógrafo, tipos de agulhas recomendadas, fontes, regulagem de voltagem e montagem da bancada de trabalho.',
    iconName: 'PenTool',
    duracaoAprox: '5 aulas'
  },
  {
    numero: 'MÓDULO 03',
    titulo: 'Preparação do Cliente',
    descricao: 'Anamnese completa, avaliação do tipo de calvície (escala Norwood), higienização e marcação prévia da área.',
    iconName: 'UserCheck',
    duracaoAprox: '3 aulas'
  },
  {
    numero: 'MÓDULO 04',
    titulo: 'Escolha e Aplicação dos Pigmentos',
    descricao: 'Colorimetria capilar aplicada: tonalidades para evitar degradação de cor (tons azulados/acinzentados) e diluição correta.',
    iconName: 'Palette',
    duracaoAprox: '4 aulas'
  },
  {
    numero: 'MÓDULO 05',
    titulo: 'Técnica Fio a Fio e Pontilhismo',
    descricao: 'Controle de pressão na mão, espaçamento uniforme entre os pontos e simulação realista dos folículos capilares.',
    iconName: 'Target',
    duracaoAprox: '6 aulas'
  },
  {
    numero: 'MÓDULO 06',
    titulo: 'Construção de Linha Frontal Natural',
    descricao: 'O grande segredo do acabamento: hairline suave, efeito degradê difuso, simetria facial e personalização para cada cliente.',
    iconName: 'Compass',
    duracaoAprox: '5 aulas'
  },
  {
    numero: 'MÓDULO 07',
    titulo: 'Preenchimento de Entradas e Áreas Calvas',
    descricao: 'Estratégias de preenchimento de coroa, densidade progressiva, entradas recessivas e transição com o cabelo existente.',
    iconName: 'Layers',
    duracaoAprox: '5 aulas'
  },
  {
    numero: 'MÓDULO 08',
    titulo: 'Acabamento e Naturalidade',
    descricao: 'Refinamento de detalhes, transições imperceptíveis e checagem de iluminação em diferentes ângulos para padrão de excelência.',
    iconName: 'Sparkles',
    duracaoAprox: '4 aulas'
  },
  {
    numero: 'MÓDULO 09',
    titulo: 'Cuidados Pós-Procedimento',
    descricao: 'Orientações de cicatrização, proteção solar, produtos recomendados e protocolo de manutenção para durabilidade máxima.',
    iconName: 'ShieldCheck',
    duracaoAprox: '3 aulas'
  },
  {
    numero: 'MÓDULO 10',
    titulo: 'Como Estruturar e Vender o Serviço',
    descricao: 'Posicionamento comercial, precificação estratégica do procedimento, captação de clientes e atendimento de alto padrão.',
    iconName: 'TrendingUp',
    duracaoAprox: '5 aulas'
  },
];

export const carouselResultsData: ResultItem[] = [];

export const galleryResultsData: ResultItem[] = [];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'dep-1',
    nome: '[Espaço Reservado para Aluno 1]',
    cidade: 'São Paulo - SP',
    depoimento: '"O método do Matheus me deu clareza total sobre como segurar a caneta, controlar a profundidade e fazer o degradê frontal com segurança."',
    resultado: 'Adicionou o serviço na sua barbearia/estética',
    avatarUrl: '',
    isPlaceholder: true
  },
  {
    id: 'dep-2',
    nome: '[Espaço Reservado para Aluno 2]',
    cidade: 'Belo Horizonte - MG',
    depoimento: '"Eu tinha receio de manchar ou errar a cor do pigmento. As aulas de colorimetria e materiais resolveram todas as minhas dúvidas práticas."',
    resultado: 'Realizou seus primeiros atendimentos com suporte',
    avatarUrl: '',
    isPlaceholder: true
  },
  {
    id: 'dep-3',
    nome: '[Espaço Reservado para Aluno 3]',
    cidade: 'Curitiba - PR',
    depoimento: '"A forma como o Matheus explica o passo a passo direto ao ponto faz toda a diferença para quem quer aprender com foco na execução."',
    resultado: 'Migrou para a estética capilar masculina',
    avatarUrl: '',
    isPlaceholder: true
  }
];

export const faqData: FAQItem[] = [
  {
    pergunta: 'Preciso já trabalhar com micropigmentação?',
    resposta: 'Não. O treinamento foi estruturado desde o absoluto zero até o nível avançado. Você aprenderá cada detalhe: desde os materiais e a empunhadura da caneta até a colorimetria e a execução na prática.'
  },
  {
    pergunta: 'O curso é online?',
    resposta: 'Sim, 100% online em alta definição. Você pode assistir às aulas no seu próprio ritmo, pausar, voltar e rever os detalhes da técnica quantas vezes forem necessárias.'
  },
  {
    pergunta: 'Tenho acesso pelo celular?',
    resposta: 'Sim! A plataforma é totalmente responsiva e compatível com smartphone, tablet, notebook ou computador de mesa, permitindo que você estude onde e quando quiser.'
  },
  {
    pergunta: 'Por quanto tempo terei acesso?',
    resposta: 'Você terá acesso completo durante o período estipulado na oferta (geralmente 1 ano ou vitalício conforme o plano adquirido), incluindo atualizações da técnica.'
  },
  {
    pergunta: 'O curso ensina desde o básico?',
    resposta: 'Sim. Todo o passo a passo é detalhado de maneira progressiva: fundamentos, biossegurança, preparação da pele, escolha de agulhas e pigmentos, até a realização completa do procedimento.'
  },
  {
    pergunta: 'Quais materiais preciso?',
    resposta: 'No Módulo 02 você terá uma lista completa e detalhada com recomendações dos melhores equipamentos: caneta dermógrafo, tipos de agulhas adequadas, pigmentos específicos para couro cabeludo e descartáveis essenciais.'
  },
  {
    pergunta: 'Como recebo acesso ao treinamento?',
    resposta: 'Assim que o pagamento for confirmado pela plataforma de checkout segura, os dados de login e acesso imediato serão enviados diretamente para o seu e-mail cadastrado.'
  },
  {
    pergunta: 'Existe suporte para dúvidas?',
    resposta: 'Sim. Você terá canal de suporte para tirar suas dúvidas sobre o conteúdo das aulas e aplicação prática das técnicas apresentadas no treinamento.'
  },
  {
    pergunta: 'Como funciona a garantia?',
    resposta: 'Você conta com 7 dias de garantia incondicional. Se por qualquer motivo você achar que o método não é para você, basta solicitar o reembolso na plataforma e 100% do seu valor será devolvido sem burocracia.'
  }
];

export const audiencePoints = [
  'Quer aprender Micropigmentação Capilar do zero à execução profissional',
  'Quer começar a trabalhar no mercado de estética masculina de alto padrão',
  'Já trabalha com beleza/tatuagem e quer adicionar um novo serviço de alta procura',
  'É barbeiro e quer aumentar significativamente o ticket médio do seu espaço',
  'Quer transformar uma habilidade em uma nova fonte de renda estruturada',
  'Quer aprender uma técnica com método organizado e acompanhamento passo a passo'
];

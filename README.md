# Academic Project

Plataforma em Next.js para acompanhamento acadêmico, apresentação de serviços, contato e um marketplace de conteúdos e materiais.

## Visão Geral

O projeto reúne:

- Página inicial com hero, depoimentos, business card e destaques do market.
- Marketplace com busca, filtros por categoria e valor, cards clicáveis e página de detalhes por produto.
- Área de serviços com planos e chamadas para ação.
- Páginas institucionais e de apoio, como contato, perfil, follow-up, settings e notificações.
- Integração de envio de email via API em `/api/contact`.
- Interface responsiva com Tailwind CSS v4 e animações com AOS.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS v4
- AOS para animações de entrada
- Axios para integrações HTTP
- Next Auth, next-intl, Nodemailer e Resend disponíveis no projeto
- lucide-react e react-icons para ícones

## Funcionalidades

### Home
- Hero com CTA para serviços e market
- Seção com cards do market em destaque
- Depoimentos em carrossel
- Card institucional da profissional
- Bloco de newsletter
- Botão flutuante do WhatsApp

### Market
- Listagem de produtos com cards modernos
- Imagem do produto no card
- Botão de detalhes que redireciona para `/market/[id]`
- Página de detalhes com apresentação do produto
- Filtro por busca
- Filtro por categoria
- Filtro por valor mínimo e máximo
- Sidebar flutuante no desktop

### Services
- Cards de planos com destaque visual para o mais popular

### Contact
- Formulário com envio para a rota `/api/contact`
- Canais extras: Instagram, WhatsApp, LinkedIn e download de apresentação

### Área privada
- Navbar com ações específicas para rotas privadas
- Aside com abertura/fechamento e comportamento responsivo
- Páginas: profile, followup, settings e notification

## Rotas Principais

- `/` página inicial
- `/market` listagem de produtos
- `/market/[id]` detalhes do produto
- `/services` serviços e planos
- `/contact` contato
- `/profile` perfil
- `/followup` acompanhamento
- `/settings` configurações
- `/notification` notificações
- `/api/contact` envio de email

## Estrutura do Projeto

```text
app/
  api/contact/route.ts
  contact/
  followup/
  market/
    page.tsx
    [id]/page.tsx
  notification/
  profile/
  services/
  settings/
  layout.tsx
  page.tsx
  globals.css
components/
  templates/
  ui/
contexts/
public/mocks/Mocks.ts
services/api.ts
```

## Dados Mockados

O projeto usa dados mockados em [public/mocks/Mocks.ts](public/mocks/Mocks.ts) para:

- usuários
- produtos do market
- planos de serviço
- depoimentos
- notificações
- conteúdos de detalhe

## API de Contato

A rota `/api/contact` envia email com [Resend](https://resend.com/).

### Variáveis necessárias

Crie um arquivo `.env.local` com:

```env
RESEND_API_KEY=sua_chave_resend
EMAIL_TO=destino@exemplo.com
```

Se essas variáveis não estiverem definidas, a rota de contato pode falhar ao enviar emails.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação

```bash
npm install
```

## Execução Local

```bash
npm run dev
```

O projeto roda em:

```text
http://localhost:4000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Observações

- O layout global aplica navbar, footer, provider de animação e botão flutuante do WhatsApp.
- A interface foi construída para ser responsiva e moderna, com foco em navegação por rotas e apresentação de conteúdo acadêmico.
- O market e suas páginas de detalhe usam o mesmo conjunto de dados, garantindo consistência de navegação.

## Licença

Projeto pessoal de uso acadêmico e demonstração.

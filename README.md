# 💈 Barbearia Elite - SaaS para Barbearias

Sistema moderno e animado para barbearias, começando com MVP focado em uma barbearia com duas lojas (Barra e Recreio), mas com arquitetura preparada para ser multi-tenant no futuro.

## 🚀 Tecnologias

- **React** + **TypeScript** + **Vite**
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes
- **Framer Motion** para animações
- **React Router** para rotas

## 📋 Funcionalidades

### Landing Page
- ✨ Hero section super animado com estatísticas
- 📖 Seção de história com timeline interativa
- 🖼️ Portfólio de trabalhos com modal de detalhes
- 📍 Cards das unidades (Barra e Recreio)
- 🔗 Integração com sistema Trinx para agendamentos
- 💬 Seção de depoimentos de clientes
- 📱 Design 100% responsivo

### Painel Administrativo (`/admin`)
- 🔐 Login simples (senha: `admin123`)
- 📝 Gerenciamento de portfólio
- 🏢 Gerenciamento de unidades
- ✏️ Edição da história da barbearia

## 🛠️ Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado (versão 18+)

### Instalação e Execução

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

O projeto estará disponível em `http://localhost:8080`

## ⚙️ Configurações Importantes

### Links da Trinx (Sistema de Agendamento)

Os links para o sistema Trinx estão configurados no arquivo `src/lib/data.ts`:

```typescript
stores: [
  {
    // ...
    trinxUrl: "https://trinx.com.br/barbearia-elite-barra", // ← Edite aqui
  },
  {
    // ...
    trinxUrl: "https://trinx.com.br/barbearia-elite-recreio", // ← Edite aqui
  }
]
```

### Editar Textos e Informações

Todos os dados mockados estão em `src/lib/data.ts`:
- **História da barbearia** - `barbershop.history`
- **Informações das unidades** - `barbershop.stores`
- **Itens do portfólio** - `portfolioItems`
- **Depoimentos** - `testimonials`

### Painel Admin

- **URL**: `/admin`
- **Senha padrão**: `admin123`
- Para alterar a senha, edite o arquivo `src/pages/Admin.tsx`, linha 21

## 🎨 Design System

O projeto utiliza um design system moderno com:
- **Cores principais**: Preto/cinza escuro + dourado premium
- **Gradientes**: Configurados em `src/index.css`
- **Animações**: Framer Motion para transições suaves
- **Componentes**: shadcn/ui totalmente customizados

Todas as cores e estilos estão centralizados em:
- `src/index.css` - Variáveis CSS
- `tailwind.config.ts` - Configurações do Tailwind

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Hero.tsx         # Seção hero da landing
│   ├── History.tsx      # Timeline da história
│   ├── Portfolio.tsx    # Grid de portfólio
│   ├── Stores.tsx       # Cards das unidades
│   ├── Testimonials.tsx # Depoimentos
│   ├── Footer.tsx       # Rodapé
│   └── ui/              # Componentes shadcn
├── pages/               # Páginas
│   ├── Index.tsx        # Landing page principal
│   ├── Admin.tsx        # Painel administrativo
│   └── NotFound.tsx     # Página 404
├── lib/
│   ├── data.ts          # Dados mockados (EDITE AQUI)
│   └── utils.ts         # Utilidades
└── index.css            # Design system
```

## 🔮 Preparação para Multi-Tenant

A estrutura de dados já está preparada para escalar:
- Interface `Barbershop` com suporte a múltiplas barbearias
- Cada `Store` pode pertencer a uma barbearia diferente
- Fácil adicionar campo `tenantId` ou `barbeariaId` no futuro

## 📝 Próximos Passos

Para transformar em SaaS completo:
1. Conectar a um backend (Supabase, Firebase, etc.)
2. Implementar autenticação real
3. Criar sistema de multi-tenancy
4. Adicionar upload de imagens
5. Implementar sistema de agendamento interno (opcional)

## 🎯 Notas Importantes

- Por enquanto, todos os dados são **mockados** (hardcoded)
- As imagens usam placeholders - substitua por imagens reais
- A autenticação é simplificada - implemente auth real antes de produção
- Links do WhatsApp e mapas precisam ser atualizados com dados reais

## 📧 Suporte

Para dúvidas ou sugestões sobre o projeto, consulte a documentação do Lovable.

---

**Desenvolvido com ❤️ usando Lovable**

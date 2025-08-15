# Automação de Testes - Automation Exercise

Projeto de testes automatizados para o site Automation Exercise utilizando WebdriverIO.

## Tecnologias Utilizadas

- **WebdriverIO** - Framework de automação
- **JavaScript (ES6+)** - Linguagem de programação
- **Mocha** - Framework de testes
- **Chai** - Biblioteca de assertivas
- **ChromeDriver** - Automação do navegador Chrome

## Estrutura do Projeto

```
├── test/
│   ├── specs/                    # Testes automatizados
│   │   ├── createAndDeleteUser.spec.js
│   │   └── searchProduct.spec.js
│   ├── pageobjects/              # Objetos de página
│   │   ├── baseUrl.js
│   │   ├── cickable.js
│   │   ├── inputForms.js
│   │   ├── genericData.js
│   │   ├── alertMessages.js
│   │   └── page.js
│   └── utils/                    # Utilitários
│       ├── data-generator.js
│       └── helpers.js
├── reports/                      # Relatórios de teste
├── wdio.conf.js                  # Configuração do WebdriverIO
└── package.json
```

## Funcionalidades Testadas

### ✅ Implementado
- **Registro e Exclusão de Usuário**: Teste completo do fluxo de cadastro de usuário no site, incluindo preenchimento de formulário e exclusão da conta criada.

### 📝 Em Desenvolvimento
- **Busca de Produtos**: Estrutura básica criada, aguardando implementação completa.

## Instalação

```bash
npm install
```

## Execução dos Testes

### Executar todos os testes
```bash
npm test
```

### Executar teste específico
```bash
npm run test:create-and-delete-user
```

### Executar em modo headless
```bash
npm run test:headless
```

## Visualizar Relatórios

```bash
npm run report
```

## Configurações

- **URL Base**: https://automationexercise.com
- **Navegador**: Chrome
- **Timeout**: 60 segundos por teste
- **Relatórios**: HTML Nice Reporter

## Padrões de Desenvolvimento

- **Page Object Model (POM)**: Separação de elementos da página em objetos reutilizáveis
- **Dados Dinâmicos**: Geração automática de dados para testes
- **Assertivas**: Utilização do Chai para validações



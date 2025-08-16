# 🧪 Test Automation Framework - Automation Exercise

> Framework de automação de testes para o site [Automation Exercise](https://automationexercise.com) utilizando WebdriverIO

[![Node.js](https://img.shields.io/badge/Node.js-18.x%20%7C%2020.x-green.svg)](https://nodejs.org/)
[![WebdriverIO](https://img.shields.io/badge/WebdriverIO-8.24.3-blue.svg)](https://webdriver.io/)
[![Mocha](https://img.shields.io/badge/Mocha-Test%20Framework-yellow.svg)](https://mochajs.org/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-orange.svg)](https://github.com/features/actions)

---

## 📋 Índice

- [📋 Índice](#-índice)
- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [🛠️ Tecnologias](#️-tecnologias)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Instalação](#-instalação)
- [⚙️ Configuração](#️-configuração)
- [🧪 Execução dos Testes](#-execução-dos-testes)
- [📊 Relatórios](#-relatórios)
- [🔧 Desenvolvimento](#-desenvolvimento)
- [🤝 Como Contribuir](#-como-contribuir)
- [📝 Casos de Teste](#-casos-de-teste)
- [❓ FAQ](#-faq)

---

## 🎯 Sobre o Projeto

Este projeto implementa testes automatizados para o site Automation Exercise, cobrindo funcionalidades críticas como:

- ✅ **Registro e exclusão de usuários**
- ✅ **Busca de produtos**
- ✅ **Gerenciamento de carrinho de compras**
- ✅ **Validação de quantidades**

O framework utiliza **Page Object Model (POM)** para manter o código organizado e reutilizável.

---

## 🛠️ Tecnologias

### **Core Framework**
- **[WebdriverIO](https://webdriver.io/)** - Framework de automação web
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript (18.x ou 20.x)
- **[Mocha](https://mochajs.org/)** - Framework de testes
- **[Chai](https://www.chaijs.com/)** - Biblioteca de assertivas

### **Browser & Drivers**
- **[ChromeDriver](https://chromedriver.chromium.org/)** - Driver do Chrome
- **[Chrome](https://www.google.com/chrome/)** - Navegador para execução

### **Relatórios**
- **[Allure Reports](https://docs.qameta.io/allure/)** - Relatórios detalhados
- **[HTML Nice Reporter](https://www.npmjs.com/package/wdio-html-nice-reporter)** - Relatórios HTML

### **CI/CD**
- **[GitHub Actions](https://github.com/features/actions)** - Pipeline de automação
- **[Ubuntu Latest](https://ubuntu.com/)** - Ambiente de execução

---

## 📁 Estrutura do Projeto

```
qa.automationexercise-web.webdriverio/
├── 📁 .github/
│   └── 📁 workflows/
│       ├── 📄 test-automation.yml      # Pipeline principal
│       └── 📄 manual-tests.yml         # Execução manual
├── 📁 test/
│   ├── 📁 specs/                       # Arquivos de teste
│   │   ├── 📄 createAndDeleteUser.spec.js
│   │   ├── 📄 searchProduct.spec.js
│   │   ├── 📄 addProducts.spec.js
│   │   ├── 📄 removeProducts.spec.js
│   │   └── 📄 quantityInCart.spec.js
│   ├── 📁 pageobjects/                 # Objetos de página (POM)
│   │   ├── 📄 page.js                  # Classe base
│   │   ├── 📄 baseUrl.js               # Configuração de URL
│   │   ├── 📄 simpleActions.js         # Ações simples
│   │   ├── 📄 inputForms.js            # Formulários
│   │   ├── 📄 clickable.js             # Elementos clicáveis
│   │   ├── 📄 alertMessages.js         # Mensagens de alerta
│   │   └── 📄 genericData.js           # Dados genéricos
│   └── 📁 utils/                       # Utilitários
├── 📁 reports/                         # Relatórios gerados
│   └── 📁 html/
├── 📄 wdio.conf.js                     # Configuração WebdriverIO
├── 📄 package.json                     # Dependências e scripts
├── 📄 .gitignore                       # Arquivos ignorados
└── 📄 README.md                        # Documentação
```

---

## 🚀 Instalação

### **Pré-requisitos**

- **Node.js** (versão 18.x ou 20.x)
- **npm** ou **yarn**
- **Git**

### **Passo a Passo**

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/qa.automationexercise-web.webdriverio.git
   cd qa.automationexercise-web.webdriverio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Verifique a instalação**
   ```bash
   npm run test:headless
   ```

### **Solução de Problemas**

#### **Erro: "chromedriver not found"**
```bash
npm install chromedriver --save-dev
```

#### **Erro: "Chrome not installed"**
- **Windows:** Baixe e instale o [Google Chrome](https://www.google.com/chrome/)
- **macOS:** `brew install --cask google-chrome`
- **Linux:** `sudo apt-get install google-chrome-stable`

#### **Erro: "Permission denied"**
```bash
# Windows (PowerShell como Administrador)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Linux/macOS
chmod +x node_modules/.bin/wdio
```

---

## ⚙️ Configuração

### **Configurações Principais**

- **URL Base:** `https://automationexercise.com`
- **Navegador:** Chrome
- **Timeout:** 60 segundos por teste
- **Modo Headless:** Disponível para CI/CD

### **Variáveis de Ambiente**

```bash
# .env (opcional)
BASE_URL=https://automationexercise.com
BROWSER=chrome
HEADLESS=true
TIMEOUT=60000
```

---

## 🧪 Execução dos Testes

### **Comandos Principais**

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `npm test` | Executa todos os testes | Desenvolvimento local |
| `npm run test:headless` | Executa em modo headless | CI/CD |
| `npm run test:ci` | Execução otimizada para CI | Pipeline |

### **Execução de Testes Específicos**

```bash
# Teste de registro de usuário
npm run test:create-and-delete-user

# Teste de busca de produtos
npm run test:search-product

# Teste de adicionar produtos
npm run test:add-products

# Teste de remover produtos
npm run test:remove-products

# Teste de quantidade no carrinho
npm run test:cart-quantity
```

### **Execução com Parâmetros**

```bash
# Executar com navegador visível
npx wdio run wdio.conf.js

# Executar com modo headless
npx wdio run wdio.conf.js --headless

# Executar teste específico
npx wdio run wdio.conf.js --spec test/specs/searchProduct.spec.js

# Executar com reporter específico
npx wdio run wdio.conf.js --reporter spec
```

---

## 📊 Relatórios

### **Relatório HTML**

```bash
# Gerar relatório
npm run test:headless

# Abrir relatório
npm run report
```

**Localização:** `reports/html/report.html`

### **Relatório Allure**

```bash
# Gerar relatório
npm run allure:generate

# Abrir relatório
npm run allure:open

# Servir relatório (recomendado)
npm run allure:serve
```

**Localização:** `allure-report/`

# Abrir relatório estático
npm run allure:open
```

---

## 📝 Casos de Teste

### **Implementados**

| ID | Nome | Status | Descrição |
|----|------|--------|-----------|
| TC-01 | Registro e Exclusão de Usuário | ✅ | Fluxo completo de cadastro e exclusão |
| TC-09 | Busca de Produtos | ✅ | Busca e validação de resultados |

### **Em Desenvolvimento**

| ID | Nome | Status | Descrição |
|----|------|--------|-----------|
| TC-12 | Adicionar Produtos ao Carrinho | 🚧 | Estrutura básica criada |
| TC-13 | Verificar Quantidade no Carrinho | 🚧 | Estrutura básica criada |
| TC-17 | Remover Produtos do Carrinho | 🚧 | Estrutura básica criada |

---

## ❓ FAQ

### **P: Como executar testes em paralelo?**
R: Configure `maxInstances` no `wdio.conf.js`:
```javascript
maxInstances: 5, // 5 testes simultâneos
```

### **P: Como adicionar novos navegadores?**
R: Adicione capabilities no `wdio.conf.js`:
```javascript
capabilities: [{
    browserName: 'firefox',
    // configurações do Firefox
}]
```

### **P: Como debugar testes?**
R: Use o modo não-headless e adicione `browser.pause()`:
```javascript
it('teste com debug', async () => {
    await browser.pause(5000); // pausa de 5 segundos
});
```

📖 [Documentação Completa dos Pipelines](GITHUB_ACTIONS_README.md)

---

## 📞 Suporte

- **Issues:** [GitHub Issues](https://github.com/seu-usuario/qa.automationexercise-web.webdriverio/issues)
- **Documentação:** [WebdriverIO Docs](https://webdriver.io/docs/)
- **Comunidade:** [WebdriverIO Discord](https://discord.gg/webdriverio)

---

     🏗️ Padrões de Desenvolvimento

**Desenvolvido com ❤️**



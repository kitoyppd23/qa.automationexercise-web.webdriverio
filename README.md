# 🚀 Automação de Testes - Automation Exercise

Projeto de **testes automatizados** para o site [Automation Exercise](https://automationexercise.com) utilizando **WebdriverIO**.

---

## 🛠 Tecnologias Utilizadas

- **WebdriverIO** → Framework de automação
- **JavaScript (ES6+)** → Linguagem de programação
- **Mocha** → Framework de testes
- **Chai** → Biblioteca de assertivas
- **ChromeDriver** → Automação do navegador Chrome

---

## 📂 Estrutura do Projeto

```
test/specs → Arquivos de testes automatizados.

test/pageobjects → Objetos de página no padrão POM.

test/utils → Funções auxiliares (geração de dados, helpers, etc.).

reports → Relatórios de execução.

wdio.conf.js → Configuração do WebdriverIO.

package.json → Dependências e scripts do projeto.


 📌 Funcionalidades Testadas

 ✅ Implementado
    Test Case 1: Registro e Exclusão de Usuário** → Fluxo completo de cadastro, preenchimento de formulário e exclusão da conta.
    Test Case 9: Busca de Produtos** → Busca por produtos, verificação do título "SEARCHED PRODUCTS" e validação dos resultados.

    📝 Em Desenvolvimento
    Test Case 13: Verificar Quantidade no Carrinho** → Estrutura básica criada, aguardando implementação.
    Test Case 12: Adicionar Produtos ao Carrinho** → Estrutura básica criada, aguardando implementação.
    Test Case 17: Remover Produtos do Carrinho** → Estrutura básica criada, aguardando implementação.




⚙️ Instalação

bash
npm install
```

---

    🚀 Execução dos Testes
    
     npm run:test

```

     Executar teste específico
npm run test:create-and-delete-user
npm run test:search-product
```

     Executar em modo headless
```bash
npm run test:headless
```

---

## 📊 Visualizar Relatórios

### Relatório HTML
```bash
npm run report
```

### Relatório Allure (Recomendado)
```bash
# Servir relatório dinâmico
npm run allure:serve

# Abrir relatório estático
npm run allure:open
```

## 🚀 GitHub Actions - CI/CD

Este projeto possui pipelines automatizados configurados no GitHub Actions:

### 📋 Workflows Disponíveis
- **Test Automation Pipeline**: Execução automática em push/PR
- **Manual Test Execution**: Execução sob demanda de suites específicas
- **Test Notifications**: Notificações no Slack (opcional)

### 📊 Relatórios Online
Após push para a branch `main`, o relatório Allure fica disponível em:
```
https://[seu-usuario].github.io/[seu-repo]/allure-report/
```

### 🔧 Configuração
1. **GitHub Pages**: Habilitar em Settings > Pages
2. **Secrets**: Configurar `SLACK_WEBHOOK_URL` (opcional)
3. **Branch Protection**: Recomendado para `main`

📖 [Documentação Completa dos Pipelines](GITHUB_ACTIONS_README.md)

---

## ⚙️ Configurações

- **URL Base**: https://automationexercise.com
- **Navegador**: Chrome
- **Timeout**: 60 segundos por teste
- **Relatórios**: HTML Nice Reporter

---

     🏗️ Padrões de Desenvolvimento

- **Page Object Model (POM)**: Separação de elementos da página em objetos reutilizáveis
- **Dados Dinâmicos**: Geração automática de dados para testes
- **Assertivas**: Utilização do Chai para validações



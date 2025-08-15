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
Registro e Exclusão de Usuário** → Fluxo completo de cadastro, preenchimento de formulário e exclusão da conta.

📝 Em Desenvolvimento
Busca de Produtos** → Estrutura criada, aguardando implementação.



⚙️ Instalação

bash
npm install


✅ Implementado
Registro e Exclusão de Usuário**: Teste completo do fluxo de cadastro de usuário no site, incluindo preenchimento de formulário e exclusão da conta criada.

 📝 Em Desenvolvimento
Busca de Produtos**: Estrutura básica criada, aguardando implementação completa.



 Executar todos os testes
bash
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



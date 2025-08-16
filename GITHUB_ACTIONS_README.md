# GitHub Actions - Pipeline de Automação

## 📋 Visão Geral

Este projeto possui pipelines automatizados no GitHub Actions para execução de testes e geração de relatórios Allure.

## 🚀 Workflows Disponíveis

### 1. **Test Automation Pipeline** (`.github/workflows/test-automation.yml`)

**Trigger:** Push/Pull Request para `main` ou `develop`

**Funcionalidades:**
- ✅ Executa testes em múltiplas versões do Node.js (18.x, 20.x)
- ✅ Instala dependências e Chrome
- ✅ Executa todos os testes em modo headless
- ✅ Gera relatórios Allure e HTML
- ✅ Faz deploy do relatório Allure para GitHub Pages (apenas na main)
- ✅ Salva artifacts para download

### 2. **Manual Test Execution** (`.github/workflows/manual-tests.yml`)

**Trigger:** Execução manual (workflow_dispatch)

**Funcionalidades:**
- ✅ Permite escolher suite de testes específica
- ✅ Execução sob demanda
- ✅ Gera relatórios personalizados
- ✅ Artifacts com retenção de 7 dias

### 3. **Test Notifications** (`.github/workflows/notifications.yml`)

**Trigger:** Após conclusão do pipeline principal

**Funcionalidades:**
- ✅ Notificações no Slack
- ✅ Status de sucesso/falha
- ✅ Links para relatórios

## ⚙️ Configuração

### 1. **Habilitar GitHub Pages**

1. Vá para `Settings` > `Pages`
2. Source: `Deploy from a branch`
3. Branch: `gh-pages`
4. Folder: `/ (root)`

### 2. **Configurar Secrets (Opcional)**

Para notificações no Slack:

1. Vá para `Settings` > `Secrets and variables` > `Actions`
2. Adicione: `SLACK_WEBHOOK_URL`

### 3. **Configurar Branch Protection (Recomendado)**

1. Vá para `Settings` > `Branches`
2. Adicione rule para `main`:
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging

## 📊 Acessando Relatórios

### Relatório Allure Online
```
https://[seu-usuario].github.io/[seu-repo]/allure-report/
```

### Artifacts do GitHub Actions
1. Vá para `Actions` > `Workflow runs`
2. Clique em uma execução
3. Role para baixo até `Artifacts`
4. Download dos relatórios

## 🎯 Como Usar

### Execução Automática
```bash
# Push para main ou develop
git push origin main
```

### Execução Manual
1. Vá para `Actions` > `Manual Test Execution`
2. Clique em `Run workflow`
3. Selecione a suite de testes
4. Clique em `Run workflow`

### Execução Local
```bash
# Todos os testes
npm run test:headless

# Teste específico
npm run test:search-product
```

## 🔧 Personalização

### Adicionar Novos Testes
1. Crie novo arquivo em `test/specs/`
2. Adicione script no `package.json`
3. Atualize workflow manual se necessário

### Modificar Configuração
- **Node.js versões:** Edite `matrix.node-version` no workflow
- **Retenção de artifacts:** Modifique `retention-days`
- **Notificações:** Ajuste canal e mensagem no Slack

### Variáveis de Ambiente
```yaml
env:
  CI: true
  NODE_ENV: production
  # Adicione suas variáveis aqui
```

## 📈 Monitoramento

### Badges (Opcional)
Adicione ao README.md:
```markdown
![Tests](https://github.com/[usuario]/[repo]/workflows/Test%20Automation%20Pipeline/badge.svg)
```

### Status Checks
- ✅ Todos os testes passaram
- ❌ Algum teste falhou
- ⏳ Pipeline em execução

## 🛠️ Troubleshooting

### Problemas Comuns

1. **Chrome não instala**
   - Verifique se o workflow está usando `ubuntu-latest`
   - Confirme os comandos de instalação do Chrome

2. **Relatório não gera**
   - Verifique se `allure-results/` existe
   - Confirme se `allure-commandline` está instalado

3. **GitHub Pages não funciona**
   - Verifique se GitHub Pages está habilitado
   - Confirme se o branch `gh-pages` foi criado

4. **Notificações não chegam**
   - Verifique se `SLACK_WEBHOOK_URL` está configurado
   - Confirme se o webhook está ativo

### Logs e Debug
1. Vá para `Actions` > `Workflow runs`
2. Clique na execução com problema
3. Clique no job que falhou
4. Analise os logs detalhados

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique os logs do GitHub Actions
2. Consulte a documentação do Allure
3. Abra uma issue no repositório

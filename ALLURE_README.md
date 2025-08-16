# Allure Reports - Documentação

## O que é o Allure Reports?

O Allure é um framework de relatórios que gera relatórios HTML interativos e detalhados para testes automatizados. Ele oferece uma visualização rica dos resultados dos testes, incluindo:

- 📊 Gráficos e estatísticas detalhadas
- 📸 Screenshots automáticos em caso de falha
- 🔍 Logs detalhados de cada passo
- 📋 Histórico de execuções
- 🏷️ Categorização de defeitos

## Como usar

### 1. Executar testes e gerar relatório

```bash
# Executar todos os testes
npm test

# Executar testes específicos
npm run test:search-product
npm run test:add-products
```

O relatório Allure será gerado automaticamente após a execução dos testes.

### 2. Visualizar relatórios

```bash
# Abrir relatório gerado (modo estático)
npm run allure:open

# Servir relatório em modo dinâmico (recomendado)
npm run allure:serve
```

### 3. Comandos úteis

```bash
# Gerar relatório manualmente
npm run allure:generate

# Limpar resultados antigos
rm -rf allure-results allure-report
```

## Estrutura de arquivos

```
projeto/
├── allure-results/          # Resultados brutos dos testes
├── allure-report/           # Relatório HTML gerado
├── .allurerc               # Configuração do Allure
└── wdio.conf.js            # Configuração do WebdriverIO
```

## Funcionalidades configuradas

- ✅ Captura automática de screenshots em falhas
- ✅ Logs detalhados de cada comando WebdriverIO
- ✅ Documentação dos testes (docstrings)
- ✅ Geração automática após execução
- ✅ Limpeza automática de relatórios antigos

## Dicas de uso

1. **Sempre use `npm run allure:serve`** para visualizar relatórios - é mais rápido e atualiza automaticamente
2. Os screenshots são salvos automaticamente em caso de falha
3. O relatório inclui logs de console para debug
4. Você pode adicionar anotações nos testes usando `@allure` tags

## Exemplo de teste com anotações Allure

```javascript
import { allure } from '@wdio/allure-reporter';

describe('Teste com Allure', () => {
    it('deve fazer login com sucesso', async () => {
        allure.addDescription('Teste de login com credenciais válidas');
        allure.addSeverity('critical');
        
        // ... código do teste
    });
});
```

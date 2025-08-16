export const config = {
    runner: 'local',

    specs: ['./test/specs/**/*.js'],
    exclude: [],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: process.argv.includes('--headless')
                ? ['--headless', '--disable-gpu', '--window-size=1920,1080']
                : []
        }
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://automationexercise.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['chromedriver'],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    reporters: [
        'spec',
        ['html-nice', {
            outputDir: './reports/html',         // pasta do relatório
            filename: 'report.html',             // nome do arquivo
            reportTitle: 'Resultados WebdriverIO',
            linkScreenshots: true,               // linkar screenshots no relatório
            showInBrowser: false,                // não abrir automaticamente
            collapseTests: false,
            useOnAfterCommandForScreenshot: true // captura automática em falha de comando
        }],
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
            addConsoleLogs: true,
            docstring: true
        }]
    ],

    beforeTest: function () {
        browser.maximizeWindow();
    },

    // Mantém o screenshot em falha de teste (complementa a opção do reporter)
    afterTest: async function (test, context, { passed }) {
        if (!passed) {
            await browser.takeScreenshot(); // o reporter linka automaticamente
        }
    },

    // Gera relatório Allure após a execução dos testes
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
};

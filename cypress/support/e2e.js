// cypress/support/e2e.js

// Ignora as chamadas para o Backtrace que estão falhando
beforeEach(() => {
  cy.intercept({
    method: 'POST',
    url: 'https://events.backtrace.io/api/**',
  }, {
    statusCode: 200,
    body: { status: 'ok' }, // Responde com sucesso para não travar o app
  });
});
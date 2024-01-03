document.addEventListener('DOMContentLoaded', () => {
    import('./scripts/checkout.js').then(module => {
        module.renderOrderSummary();
        module.renderPaymentSummary();
    });
});
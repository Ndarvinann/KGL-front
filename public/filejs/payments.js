document.addEventListener('DOMContentLoaded', ()=> {
  console.log('payments.js has loaded!'); // Confirm script loading

    // Prices per kg for different products
    const pricePerKg = {
      Beans: 3000,
      Maize: 2000,
      Peas: 2500,
      SoyBeans: 3500,
      Gnuts: 4000
    };
  
    // Set current date-time for Cash Sale
    const cashDateInput = document.getElementById('cashDate');
    if (cashDateInput) {
      const now = new Date();
      cashDateInput.value = now.toISOString().slice(0, 16);
    }
  
    // Function to calculate and fill Amount Paid
    function updateCashAmount() {
      const product = document.getElementById('cashProduct').value.trim();
      const tonnage = parseFloat(document.getElementById('cashTonnage').value);
      const amountField = document.getElementById('cashAmount');
  
      if (pricePerKg[product] && !isNaN(tonnage)) {
        amountField.value = Math.round(pricePerKg[product] * tonnage);
      } else {
        amountField.value = '';
      }
    }
  
    // Attach event listeners for Cash Sales
    const cashProductInput = document.getElementById('cashProduct');
    const cashTonnageInput = document.getElementById('cashTonnage');
  
    if (cashProductInput && cashTonnageInput) {
      cashProductInput.addEventListener('input', updateCashAmount);
      cashTonnageInput.addEventListener('input', updateCashAmount);
      console.log('Cash sales form element found!'); // Confirm form element is found
    }
  
    // Function to calculate and fill Credit Amount
    function updateCreditAmount() {
      const product = document.getElementById('creditProduct').value.trim();
      const tonnage = parseFloat(document.getElementById('creditTonnage').value.trim());
      const amountField = document.getElementById('creditAmount');
  
      if (pricePerKg[product] && !isNaN(tonnage)) {
        amountField.value = Math.round(pricePerKg[product] * tonnage);
      } else {
        amountField.value = '';
      }
    }
  
    // Attach event listeners for Credit Sales
    const creditProductInput = document.getElementById('creditProduct');
    const creditTonnageInput = document.getElementById('creditTonnage');
  
    if (creditProductInput && creditTonnageInput) {
      creditProductInput.addEventListener('input', updateCreditAmount);
      creditTonnageInput.addEventListener('input', updateCreditAmount);
    }
  });
   
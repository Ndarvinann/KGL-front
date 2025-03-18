  // Sample product data for autocomplete
  const productsInStock = ["Beans", "Maize", "Peas", "Soy-Beans", "Gnuts"];

  const productNameInput = document.getElementById('productName');
  const productList = document.getElementById('productList');

  productNameInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      productList.innerHTML = '';
      if (query) {
          const filteredProducts = productsInStock.filter(product => product.toLowerCase().includes(query));
          filteredProducts.forEach(product => {
              const option = document.createElement('option');
              option.value = product;
              productList.appendChild(option);
          });
      }
  });
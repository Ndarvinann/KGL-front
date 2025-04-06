
     // Auto-calculate markup
     document.getElementById('calculateMarkup').addEventListener('click', function() {
        const cost = parseFloat(document.getElementById('cost').value);
        if (!isNaN(cost)) {
            document.getElementById('priceToSell').value = (cost * 1.3).toFixed(0);
        }
    });    
        // Simple script to highlight low stock items
        document.addEventListener('DOMContentLoaded', function() {
            //find all input feilds with adjust as a class
            const stockInputs = document.querySelectorAll('.adjust-input');
            //loop through each input feild found.
            stockInputs.forEach(input => {
//event listener that triggers when the value changes
                input.addEventListener('change', function() {
                    //find the closest tr containing this input
                    const row = this.closest('tr');
                    //convert this value into an integer
                    const value = parseInt(this.value);
                    //find the badge within this row
                    const badge = row.querySelector('.badge-stock');
                    
                    // Remove all stock classes
                    //remove all the color coding and reset the appearance.
                    row.classList.remove('stock-high', 'stock-medium', 'stock-low');
                    badge.classList.remove('badge-high', 'badge-medium', 'badge-low');
                    
                    // Add appropriate class based on value
                    if (value <= 70) { //for values less than or equal to 70kg
                        row.classList.add('stock-low'); // mark this as low stock
                        badge.classList.add('badge-low');
                        //log
                        badge.textContent = value + ' kg (Low)'; //log the input value and kg(low)
                    } //repeat as above but for medium and high
                    else if (value <= 200) {
                        row.classList.add('stock-medium');
                        badge.classList.add('badge-medium');
                        badge.textContent = value + ' kg(Medium)';
                    } else {//notice that 201 is high?
                        row.classList.add('stock-high');
                        badge.classList.add('badge-high');
                        badge.textContent = value + ' kg(High)';
                    }
                });
            });
        });
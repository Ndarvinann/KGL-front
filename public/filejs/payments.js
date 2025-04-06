
        // Simple form validation and submission handling
        document.addEventListener('DOMContentLoaded', function() {
            // Cash sales form
            document.getElementById('cashSalesForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Cash sale recorded successfully!');
                this.reset();
            });
            
            // Credit sales form
            document.getElementById('creditSalesForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Credit sale recorded successfully!');
                this.reset();
            });
            
            // Auto-calculate amount based on tonnage (example for beans at 2000 UgX/kg)
            document.getElementById('cashTonnage').addEventListener('change', function() {
                const tonnage = parseFloat(this.value);
                if (!isNaN(tonnage)) {
                    document.getElementById('cashAmount').value = Math.round(tonnage * 2000);
                }
            });
        });
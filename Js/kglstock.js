let kglstore = {
    beans:100,
    maize : 200,
    cowPeas: 300,
};

function updateStock() {
    let produce = document.getElementById("produce").value;
    let newStock = document.getElementById('newStock').value;
    if(newStock !==""&&newStock>0){
        kglstore[produce] = parseInt(newStock);

        document.getElementById(produce +"Stock").textContent = newStock;
        alert(`stock updated successfully!`)}
        else {
            alert(`Please enter valid stock quantity!`);
        }
    }
//capture the whole form
let form = document.getElementById("procurementForm");

//let tableBod = document.getElementById("procuredTable").getElementsByTagName("tbody")[0];

let tableBody = document.querySelector("#procuredTable tbody")

// element.addEventListener("event", function)

form.addEventListener("submit", function(event){
  event.preventDefault()

  // Get form values
  const produceData = {
    produceName: document.getElementById("produceName").value,
    produceType: document.getElementById("produceType").value,
    dateTime: document.getElementById("dateTime").value,
    tonnage: document.getElementById("tonnage").value,
    cost: document.getElementById("cost").value,
    dealerName: document.getElementById("dealerName").value,
    branchName: document.getElementById("branchName").value,
    contact: document.getElementById("contact").value,
    priceToSell: document.getElementById("priceToSell").value

  }
    //add one to existing rows
    const rowCount =tableBody.rows.length +1;
 
    //add table row
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td>${rowCount}</td>
    <td>${produceData.produceName}</td>
    <td>${produceData.produceType}</td>
    <td>${produceData.dateTime}</td>
    <td>${produceData.tonnage}</td>
    <td>${produceData.cost}</td>
    <td>${produceData.dealerName}</td>
    <td>${produceData.branchName}</td>
    <td>${produceData.contact}</td>
    <td>${produceData.priceToSell}</td>
`
//append row to table
tableBody.appendChild(newRow); // add a child to the tableBody.

//clear form feilds aftter submission
document.getElementById("procureForm").reset();
});
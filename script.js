function Calculate() {
  const costPrice = parseFloat(document.getElementById("costPrice").value);
  const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);

  const profitorLoss = document.querySelector(".profitLoss");
  const profitLossPercentage = document.querySelector(".profitLossPercentage");
  const nothing = document.querySelector(".nothing");

  profitorLoss.innerHTML = `GH¢ 0.00`
  profitLossPercentage = `%`
  nothing.innerHTML = ""

  if (costPrice === "" || sellingPrice === "") {
    profitorLoss.innerHTML = `GH¢ 0.00`
    profitLossPercentage = `%`
    alert("Please fill in all fields");
    //nothing.innerHTML = "Please fill in all fields"
  }

  if (sellingPrice > costPrice) {
    const profit = sellingPrice - costPrice;
    const profitPercentage = (profit / costPrice) * 100;
    profitorLoss.innerHTML = `GH¢ ${profit.toFixed(2)}`;
    profitLossPercentage.innerHTML = `${profitPercentage.toFixed(2)}%`;
  }
}
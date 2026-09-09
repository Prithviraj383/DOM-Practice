document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.getElementById("calculateBtn");
  const amountInput = document.getElementById("amount");
  const interestInput = document.getElementById("interest");
  const yearsInput = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestPayment = document.getElementById("totalInterest");

  function calculateLoan() {
    const principal = parseFloat(amountInput.value);
    const interest = parseFloat(interestInput.value) / 100 / 12;
    const payments = parseFloat(yearsInput.value) * 12;

    if (isNaN(principal) || isNaN(interest) || isNaN(payments)) {
      alert("Please enter valid numbers");
      return;
    }

    // Calculate monthly payment
    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);

    if (isFinite(monthly)) {
      // Calculate total payment and interest
      const total = monthly * payments;
      const totalInterest = total - principal;

      monthlyPayment.innerHTML = monthly.toFixed(2)
      totalPayment.innerHTML = total.toFixed(2)
      totalInterestPayment.innerHTML = totalInterest.toFixed(2)
    } else {
      alert("Please check your numbers");
    }
  }
  calculateBtn.addEventListener("click", calculateLoan);
});

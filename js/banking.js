// add Bank event handler

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get the amount deposit
    const depositInput = document.getElementById("deposit-amount");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear input value
    depositInput.value = "";
  });

//******* */ handle withdraw event handler /* *******//

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmount = withdrawInput.value;
    const newWithdrawTotal = parseFloat(withdrawAmount);
    // console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawToal = document.getElementById("withdraw-total");
    const previousWitdrawText = withdrawToal.innerText;
    const previousWithdrawTotal = parseFloat(previousWitdrawText);
    const newWithdrawAmount = previousWithdrawTotal + newWithdrawTotal;

    withdrawToal.innerText = newWithdrawAmount;

    //update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;

    balanceTotal.innerText = newBalanceTotal;

    //clear input value
    withdrawInput.value = "";
  });

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const newDepositAmount = parseFloat(depositInputText);
    // console.log(newDepositAmount);

    // set total amount
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousTotalDepositAmount = parseFloat(depositTotalText);
    const totalDepositAmount = previousTotalDepositAmount + newDepositAmount;
    depositTotal.innerText = totalDepositAmount;
    depositInput.value = '';
    // console.log(depositTotalText);

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const updatedBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = updatedBalanceTotal;
    // console.log(updatedBalanceTotal);
})


document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);
    console.log(newWithdrawAmount);

    // set total withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);
    const updatedWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = updatedWithdrawAmount;
    withdrawInput.value = '';

    // update balance amount
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const updateBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = updateBalanceTotal;
})
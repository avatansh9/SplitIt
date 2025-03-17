
const finalUser = () => {
    if (Users.length === 0) {
      alert("No users available!");
      return [];
    }

    const averageShare = totalsum / Users.length;

    let payers = [];
    let receivers = [];

    // Calculate balances and classify users
    Users.forEach((user) => {
      let balance = user.money - averageShare;
      if (balance > 0) {
        payers.push({ name: user.name, amount: balance }); // Users who give
      } else if (balance < 0) {
        receivers.push({ name: user.name, amount: -balance }); // Users who receive
      }
    });

    // Sort payers (descending) and receivers (ascending) for fair distribution
    payers.sort((a, b) => b.amount - a.amount);
    receivers.sort((a, b) => a.amount - b.amount);

    let transactions = [];

    // Process transactions
    while (payers.length > 0 && receivers.length > 0) {
      let payer = payers[0]; // Largest giver
      let receiver = receivers[0]; // Smallest receiver

      let amountToTransfer = Math.min(payer.amount, receiver.amount);

      transactions.push({
        from: payer.name,
        to: receiver.name,
        amount: amountToTransfer.toFixed(2),
      });

      // Update amounts
      payer.amount -= amountToTransfer;
      receiver.amount -= amountToTransfer;

      // Remove fully settled users
      if (payer.amount === 0) payers.shift();
      if (receiver.amount === 0) receivers.shift();
    }

    return transactions;
  };





<div className="mt-5 px-5">
    <h3 className="font-bold underline">Payment Settlements:</h3>
    <ul className="font-semibold mt-2">
        {finalUser()?.map((transaction, index) => (
            <li key={index} className="text-blue-600">
                {transaction.from} → {transaction.to}: Rs {transaction.amount}
            </li>
        ))}
    </ul>
</div>

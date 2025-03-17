import { useEffect, useState } from "react";
import { Button } from "../components/button";
import { InputBox } from "../components/InputBox2";
import { set } from "zod";

export const ButtonArray = () => {
  const [money, setAddMoney] = useState(0);
  const [totalmoney, setTotalMoney] = useState(0);
  const [Username, setUsername] = useState("");
  const [totalsum, setTotalSum] = useState(0);
  const [Users, setUsers] = useState([]);
  const [amountPerUser, setAmountPerUser] = useState(0);
  const [transactions, setTransactions] = useState([]);


  useEffect(() => {
    console.log("Total Money:", totalmoney);
  }, [totalmoney]);

  const handleAddMoney = () => {
    setTotalMoney(totalmoney + money); 
    setAddMoney(0);
  };

  const addusers = () => {
    const userExists = Users.some((user) => user.name === Username);
    if (userExists) {
      alert("Invalid user: User already exists!");
      return;
    }
    setUsers([...Users, { name: Username, money: totalmoney }]);
    console.log(...Users, { name: Username, money: totalmoney });
    setTotalSum(totalsum + totalmoney);
    setTotalMoney(0);
    setUsername("");
    setAmountPerUser(0);
    console.log("Total Sum:", totalsum + totalmoney);
    setTransactions([])
  };

  const updateUser = () => {
    setUsers([]);
    setTotalSum(0);
    setAmountPerUser(0);
  };

  const splitMoney = () => {
    if (Users.length === 0) {
        alert("No users to split money among.");
        return;
    }

    const transactionsList = finalUser(); 
    setTransactions(transactionsList); 
    setAmountPerUser(totalsum / Users.length); 
};

  const finalUser = () => {
    const averageShare = totalsum / Users.length;
    setAmountPerUser(averageShare)

    let payers = [];
    let receivers = [];

    Users.forEach((user) => {
      let balance = user.money - averageShare;
      if (balance > 0) {
        payers.push({ name: user.name, amount: balance }); 
      } else if (balance < 0) {
        receivers.push({ name: user.name, amount: -balance }); 
      }
    });

    payers.sort((a, b) => b.amount - a.amount);
    receivers.sort((a, b) => a.amount - b.amount);

    let transactions = [];

    while (payers.length > 0 && receivers.length > 0) {
      let payer = payers[0];
      let receiver = receivers[0]; 

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

  

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-start py-10 md:py-5`` mr-1">
          <div className=" w-1/2   size-20 mb-9 lg:w-1/2 lg:size-20 lg:mb-1">
            <InputBox
              label="Username:-"
              placeholder="Username"
              onchange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className=" w-1/2 md:ml-5 md:mb-9 lg:ml-0 lg:w-1/2 lg:mb-1 ">
            <InputBox
              label="Amount"
              placeholder="ADD MONEY"
              value={money}
              onchange={(e) => setAddMoney(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="flex  mb-10 px-8 xl:px-230 xl:mb-1 md:ml-8">
          <div className=" size-10">
            <Button label="ADD" onClick={handleAddMoney} />
          </div>
          <div className=" h-4 size-10  px-30 ">
            <Button label="Reset" onClick={() => setTotalMoney(0)} />
          </div>
          <div className="h-4 px-10">
            <Button label={String(totalmoney)} />
          </div>
        </div>

        <div className=" flex px-7 xl:mt-0  md:px-15 lg:px-15 xl:px-39 xl:mb-10">
          <div className="mr-3 md:mr-30">
            <Button label="Add User" value={Username} onClick={addusers} />
          </div>
          <div className="lg:px-9 ">
            <Button label="Reset User" onClick={updateUser} />
          </div>
        </div>
      </div>

      <div className="md:flex sm:py-3 px-2 sm:mt-1 mt-5 xl:px-25">
        <div className="px-35 sm:px-30 md:px-13 ">
          <Button label="Spilt Money" onClick={splitMoney} />
        </div>

        <div className="flex items-center bg-amber-500 underline  sm:py-2 sm:mr-60 md:mr-0 sm:mt-3 sm:ml-5 sm:px-5 lg:mt-1 md:mb-5 mr-10 rounded-3xl px-9 mt-4 ml-6 py-2 ">
          <div className="text-xl font-bold px-3">
            <h3>{"Per User split :- Rs " + amountPerUser.toFixed(2)}</h3>
          </div>
        </div>
      </div>

      <div className=" ml-1 mt-5 sm:ml-2 md:ml-8 md:mt-1 xl:px-23">
        <h3 className="font-bold ml-5 mr-65 underline sm:mr-30 md:mr-50 lg:mr-170  rounded-2xl px-4 py-1">
          Users and Their Money:
        </h3>
        <ul className="font-semibold ml-9 mt-2">
          {Users.map((user, index) => (
            <li key={index}>
              {index + 1}:- {user.name}: Rs {user.money.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div className="ml-10 mt-7 sm:ml-11 md:ml-17 md:mt-1 xl:px-23 xl:mt-10 lg:mt-10 md:mt-10">
  <h3 className="font-bold underline">Payment Settlements:</h3>
  {transactions.length > 0 ? (
    <ul className="font-semibold mt-2">
      {transactions.map((transaction, index) => (
        <li key={index} className="text-blue-600">
        {transaction.to} owe {transaction.from}: Rs {transaction.amount}
        </li>
      ))}
    </ul>
  ) : (<></>)}
</div>
    </>
  );
};

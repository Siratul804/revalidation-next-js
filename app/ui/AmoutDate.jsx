"use client";
import { useState, useEffect } from "react";

export default function AmooutDate() {
  const [dueAmount, setDueAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("amount"); // 'amount' or 'percentage'
  const [amountToPay, setAmountToPay] = useState(0);

  useEffect(() => {
    const calculateDiscount = () => {
      let finalAmount = 0;

      if (discountType === "amount") {
        finalAmount = dueAmount - discount;
      } else if (discountType === "percentage") {
        finalAmount = dueAmount - dueAmount * (discount / 100);
      }

      setAmountToPay(finalAmount > 0 ? finalAmount : 0); // Ensure amount to pay is not negative
    };

    calculateDiscount();
  }, [dueAmount, discount, discountType]);

  return (
    <>
      <div className="bg-white p-5 pb-[25vh] pt-[10vh] ">
        <h1 className="text-black">Amount & Date :</h1>
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4  ">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Discount Calculator
          </h2>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Due Amount:
              <input
                type="number"
                value={dueAmount}
                onChange={(e) => setDueAmount(parseFloat(e.target.value))}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Discount Type:
              <select
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="amount">Amount</option>
                <option value="percentage">Percentage</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Discount:
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value))}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-700 text-center ">
              <p>Amount to Pay: ${amountToPay.toFixed(2)}</p>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTransactions = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/transaction", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = Array.isArray(res.data)
        ? res.data
        : res.data.transactions || [];

      setTransactions(data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
      setTransactions([]); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Your Transactions
        </h1>

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : transactions.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow text-gray-500 text-center">
            No transactions yet. Add one to see it here.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
              >
x                <div className="mb-2">
                  <span className="font-semibold text-gray-700">Title: </span>
                  <span className="text-gray-900">{transaction.title}</span>
                </div>

                <div className="mb-2">
                  <span className="font-semibold text-gray-700">Amount: </span>
                  <span
                    className={`font-semibold ${
                      transaction.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.amount}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="font-semibold text-gray-700">
                    Category:{" "}
                  </span>
                  <span className="text-gray-600">
                    {transaction.category}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="font-semibold text-gray-700">Notes: </span>
                  <span className="text-gray-600">
                    {transaction.notes || "—"}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="font-semibold text-gray-700">Date: </span>
                  <span className="text-gray-600">
                    {transaction.date
                      ? new Date(transaction.date).toLocaleDateString()
                      : ""}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="font-semibold text-gray-700">Type: </span>
                  <span className="uppercase text-gray-600">
                    {transaction.type}
                  </span>
                </div>

                <div className="flex gap-2 mt-2">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md text-sm">
                    Edit
                  </button>
                  <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-md text-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowTransaction;

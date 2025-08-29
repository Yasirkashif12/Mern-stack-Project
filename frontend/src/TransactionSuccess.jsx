import React from "react";
import { CheckCircle2 } from "lucide-react"; 
import { Link } from "react-router-dom";

const TransactionSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Transaction Successful 🎉
        </h2>
        <p className="text-gray-600 mt-2">
          Your transaction has been created successfully.  
          You can view the details anytime from your dashboard.
        </p>

        <div className="mt-6 space-x-4">
          <Link
            to="/"
            className="bg-green-500 text-white px-5 py-2 rounded-xl shadow hover:bg-green-600 transition"
          >
            Go to Homepage
          </Link>
          <Link
            to="showtransaction"
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-xl shadow hover:bg-gray-300 transition"
          >
            View Transactions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionSuccess;

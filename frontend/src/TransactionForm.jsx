import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const TransactionForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("You are not logged in!");
        alert("You are not logged in!");
        setLoading(false);
        return;
      }

      const res = await axios.post(
        "http://localhost:5000/api/transaction",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Transaction Created Successfully!");
      reset();
      navigate("/transactionsuccess");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Error creating transaction");
        alert(error.response.data.message || "Error creating transaction");
      } else {
        toast.error("Network or server error");
        alert("Network or server error");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Transaction
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("title", { required: "Please Enter the title" })}
            type="text"
            placeholder="Enter Title"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

          <input
            {...register("amount", { required: "Please enter the amount" })}
            type="number"
            placeholder="Enter Amount"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}

          <select
            {...register("type", { required: "Please select the type" })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Type --</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}

          <input
            {...register("date", { required: "Please Enter the date" })}
            type="date"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}

          <select
            {...register("category", { required: "Please select the category" })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Category --</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="transport">Transport</option>
            <option value="bills">Bills</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

          <textarea
            {...register("notes", {
              required: "Please Enter the note",
              minLength: { value: 5, message: "Please Enter valid length" },
            })}
            placeholder="Enter Notes..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.notes && <p className="text-red-500 text-sm">{errors.notes.message}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;

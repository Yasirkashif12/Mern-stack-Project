import mongoose from "mongoose";

const transcationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ['income', 'expense'], 
      required: true,
    },
    
    category:{ 
    type: String , // Food, Salary, Bills, etc.
    required:true,
    },
    notes:{
      type:String,
      default:"",
    },
    
    date: {
      type: Date,                  
      default: Date.now,           
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transcations", transcationSchema);

export default Transaction;

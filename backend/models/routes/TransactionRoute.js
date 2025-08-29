import express from "express";
import Transaction from "./Transaction.js"; 
import auth from "./AuthMiddleware.js";
const route = express.Router();

route.post('/transaction',auth, async (req, res) => {
    try {
       const { title, amount, type, category, notes } = req.body;
        const newTransaction = new Transaction({ title, amount, type,category,notes,userid:req.user.id });
        const saved = await newTransaction.save();
        return res.status(201).json({
            message: 'Transaction created successfully',
            saved
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Error creating transaction" });
    }
});

route.get('/transaction',auth, async (req, res) => {
    try {
const transactions = await Transaction.find({ userid: req.user.id }).sort({ date: -1 });
        return res.status(200).json({ transactions });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Error fetching transactions" });
    }
});
route.put('/transaction/:id',auth,async(req,res)=>{
    try {
        const {id}=req.params
        const{title,amount,type,category,notes}=req.body
const updated = await Transaction.findOneAndUpdate(
  { _id: id, userid: req.user.id },
  { title, amount, type,category,notes },
  { new: true }
);
if (!updated) {
  return res.status(404).json({ message: "Transaction not found" });
}
        res.status(200).json({
    message:"Transaction updated successfullly",
    updated
    })

    } catch (error) {
        console.log(error.message)
    }
})
route.delete('/transaction/:id',auth, async (req, res) => {
  try {
    const { id } = req.params;

const deleted = await Transaction.findOneAndDelete({
  _id: id,
  userid: req.user.id
});

    if (!deleted) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    return res.status(200).json({
      message: "Transaction deleted successfully",
      deleted
    });

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server error", detail: error.message });
  }
});

export default route;



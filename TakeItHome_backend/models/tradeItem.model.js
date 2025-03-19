import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  condition: { type: String, required: true },
  image: { type: String, required: true }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});



//Sambodhan_301431510
const Item = mongoose.model('Item', itemSchema);
export default Item;





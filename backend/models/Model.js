module.exports = mongoose.model('Medicine', new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number
}));
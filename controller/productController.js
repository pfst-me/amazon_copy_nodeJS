const products = require('../models/products');

exports.createOrUpdateProducts = async (req, res) => {
  try {
    const { _id, ...productsData } = req.body;
    const query = _id ? { _id: mongoose.Types.ObjectId(_id) } : {};

    await products.findOneAndUpdate(query, productsData, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });

    res
      .status(201)
      .json({ success: true, message: 'Producted added successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Network error on updating products.' });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const data = await products.find();
    res.status(200).json({ message: '', data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Network error' });
  }
};

const products = require('../models/products');
const mongoose = require('mongoose');

exports.createOrUpdateProducts = async (req, res) => {
  try {
    const { _id, ...productsData } = req.body;
    let query = {};

    if (_id) {
      if (!mongoose.isValidObjectId(_id)) {
        return res.status(400).json({
          success: false,
          message: 'invalid _id provided',
        });
      }
      query = { _id: new mongoose.Types.ObjectId(_id) };
    } else {
      const newProduct = new products(productsData);
      await newProduct.save(newProduct);

      return res.status(201).json({
        success: true,
        message: 'Producted created successfully.',
      });
    }

    await products.findOneAndUpdate(query, productsData, {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    });

    res.status(201).json({
      success: true,
      message: 'Producted updated successfully.',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Network error on updating products.' });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    const skip = (pageNumber - 1) * pageSize;

    const searchFilter = search
      ? {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { details: { $regex: search, $options: 'i' } },
          ],
        }
      : {};

    const data = await products.find(searchFilter).skip(skip).limit(pageSize);

    const totalRecordCount = await products.countDocuments();
    res
      .status(200)
      .json({ message: '', data: data, totalRecord: totalRecordCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Network error' });
  }
};

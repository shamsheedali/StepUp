import Product from "../modal/productModal.js";

const addProduct = async (req, res) => {
  const {
    productName,//
    description,//
    price,//
    category,//
    brand,
    newArrival,
    stock,
    images,
    variants,
  } = req.body;

  if (!variants || variants.length === 0) {
    return res
      .status(400)
      .json({ message: "At least one variant is required" });
  }

  try {
    const product = new Product({
      productName,
      description,
      price,
      category,
      brand,
      newArrival,
      stock,
      images,
      variants,
    });
    await product.save();
    res
      .status(201)
      .json({ message: "Product with variants added successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
};

export { addProduct };

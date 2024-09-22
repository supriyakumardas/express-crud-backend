const products = require("../models/products");

const createProduct = async (req, res) => {
    try {
          
            const product = new products(req.body);
            const result = await product.save();
            if (result) {
                return res.status(201).json({ message: "Product created successfully.", result },)
            }
        
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong,please try again later." })
    }
}

const getAllProductsByUserId = async(req,res)=>{
    try {
        const {userId} = req.params;
        const product = await products.find({userId});
        return res.status(200).json({ message: "Success.", product },)


    } catch (error) {
        return res.status(500).json({ message: "Something went wrong,please try again later." })

    }
}

const getProductsById = async(req,res)=>{
    try {
        const {_id} = req.params;
        const product = await products.findById(_id);
        if(product){
            return res.status(200).json({ message: "Success.", product },)

        }else{
            return res.status(404).json({ message: "Product doesn't exist." },)

        }


    } catch (error) {
        return res.status(500).json({ message: "Something went wrong,please try again later." })

    }
}


const updateProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        const isExist = await products.findById(_id);
        if (isExist) {
          
                const result = await products.findByIdAndUpdate(_id, req.body, { new: true })
                if (result) {
                    return res.status(200).json({ message: "Product updated successfully.", result },)
                }
            
        } else {
            return res.status(404).json({ message: "Product doesn't exist." },)
        }

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong,please try again later." })
    }
}



const deleteProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        const isExist = await products.findById(_id);
        if (isExist) {

            const result = await products.findByIdAndDelete(_id)
            if (result) {
                return res.status(200).json({ message: "Product deleted successfully.", result },)
            }

        } else {
            return res.status(404).json({ message: "Product doesn't exist." },)
        }

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong,please try again later." })
    }
}




module.exports = {
    createProduct,
    updateProduct,
    getAllProductsByUserId,
    deleteProduct,
    getProductsById
}
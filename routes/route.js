const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware.js');

// Updated the correct path for seller controller js
const {
    sellerRegister,
    sellerLogIn
} = require('../controllers/sellerController.js');

const {
    productCreate,
    getProducts,
    getProductDetail,
    searchProductbyCategory,
    getSellerProducts,
    updateProduct,
    deleteProduct,
    deleteProducts,
    deleteProductReview,
    deleteAllProductReviews,
    addReview,
    getInterestedCustomers,
    getAddedToCartProducts,
} = require('../controllers/productController.js');

const {
    customerRegister,
    customerLogIn,
    getCartDetail,
    cartUpdate
} = require('../controllers/customerController.js');

// Added missing API for order
const {
    newOrder,
    getOrderedProductsByCustomer,
    getOrderedProductsBySeller
} = require('../controllers/orderController.js');


router.post('/SellerRegister', sellerRegister);
router.post('/SellerLogin', sellerLogIn);

router.post('/ProductCreate', productCreate);
router.get('/getSellerProducts/:id', getSellerProducts);
router.get('/getProducts', getProducts);
router.get('/getProductDetail/:id', getProductDetail);
router.get('/getInterestedCustomers/:id', getInterestedCustomers);
router.get('/getAddedToCartProducts/:id', getAddedToCartProducts);

router.put('/ProductUpdate/:id', updateProduct);
router.put('/addReview/:id', addReview);

router.get('/searchProduct/:key', searchProductbyCategory);
router.get('/searchProductbyCategory/:key', searchProductbyCategory);
router.get('/searchProductbySubCategory/:key', searchProductbyCategory);

router.delete('/DeleteProduct/:id', deleteProduct);
router.delete('/DeleteProducts/:id', deleteProducts);
router.delete ('/deleteProductReview/:id', deleteProductReview);
router.put ('/deleteAllProductReviews/:id', deleteAllProductReviews);

router.post('/CustomerRegister', customerRegister);
router.post('/CustomerLogin', customerLogIn);
router.get('/getCartDetail/:id', getCartDetail);
router.put('/CustomerUpdate/:id', cartUpdate);

router.post('/newOrder', newOrder);
// Updated the target method from getOrderedProductsBySeller to getOrderedProductsByCustomer
router.get('/getOrderedProductsByCustomer/:id', getOrderedProductsByCustomer);
router.get('/getOrderedProductsBySeller/:id', getOrderedProductsBySeller);

// Added this line to export the router
module.exports = router
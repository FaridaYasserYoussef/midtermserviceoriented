const express = require('express');
const router = express.Router();
const {getBooks,createBook, getBookById, deleteBook, updateBook}= require("./Controllers/bookController");
const {getCustomers,createCustomer, getCustomerById, deleteCustomer, updateCustomer}= require("./Controllers/customerController");
const {getPurchases, createPurchase, getPurchaseById, deletePurchase, updatePurchase}= require("./Controllers/purchaseController");
const {createAuthor, deleteAuthor, updateAuthor, getAuthors, getAuthorById} = require('./Controllers/authorController');
const {createStationary, deleteStationary, updateStationary, getStationary, getStationaryById} = require('./Controllers/StationaryController');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get("/books", getBooks);
router.post("/bookCreate", createBook);
router.post("/books/getBook", getBookById);
router.delete("/books/deleteBook", deleteBook);
router.put("/books/updateBook", updateBook);

router.get("/customers", getCustomers);
router.post("/customerCreate", createCustomer);
router.post("/customers/getCustomer", getCustomerById);
router.delete("/customers/deleteCustomer", deleteCustomer);
router.put("/customers/updateCustomer", updateCustomer);

router.get("/purchases", getPurchases);
router.post("/purchasesCreate", createPurchase);
router.post("/purchases/getPurchases", getPurchaseById);
router.delete("/purchases/deletePurchases", deletePurchase);
router.put("/purchases/updatePurchases", updatePurchase);

router.get("/authors", getAuthors);
router.post("/authorCreate", createAuthor);
router.post("/authors/getAuthors", getAuthorById);
router.delete("/authors/deleteAuthor", deleteAuthor);
router.put("/authors/updateAuthor", updateAuthor);

router.get("/authors", getStationary);
router.post("/authorCreate", createStationary);
router.post("/authors/getAuthors", getStationaryById);
router.delete("/authors/deleteAuthor", deleteStationary);
router.put("/authors/updateAuthor", updateStationary);

module.exports = router;

const { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductByName } = require('../controllers/product');
const { getUsers, createUser, updateUser, deleteUser, getUserByName, getUserById } = require('../controllers/user');

const router = require('express').Router();


// router.get('/', getUsers)
// router.get('/u/', getUserByName)
// router.get('/u/:id', getUserById)

// router.get('/p', getProducts)
// router.get('/p/:id', getProductById)

// router.post('/u/', createUser)
// router.post('/p/', createProduct)

// router.put('/u/:id', updateUser)
// router.put('/p/:id', updateProduct)

// router.delete('/u/:id', deleteUser)
// router.delete('/p/:id', deleteProduct)


// Shorthand Tech
// router.get('/u/', getUserByName)
// router.post('/u/', createUser)
router.route('/u/').get(getUsers).post(createUser)
router.route('/p/').get(getProductByName).post(createProduct)

// router.put('/u/:id', updateUser)
// router.delete('/u/:id', deleteUser)
router.route('/u/:id').put(updateUser).delete(deleteUser)
router.route('/p/:id').put(updateProduct).delete(deleteProduct)



module.exports = router;
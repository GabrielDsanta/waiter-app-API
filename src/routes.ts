import path from 'node:path'
import { Router } from "express";
import { ListCategories } from "./services/categories/list-categories";
import { CreateCategory } from "./services/categories/create-category";
import { CreateProducts } from "./services/products/create-products";
import { ListProducts } from "./services/products/list-products";
import multer from "multer"
import { ListProductsByCategory } from './services/categories/list-products-by-category';
import { ListOrders } from './services/orders/list-orders';
import { CreateOrder } from './services/orders/create-order';
import { UpdateOrder } from './services/orders/update-order';
import { CancelOrder } from './services/orders/cancel-order';

export const router = Router()

export const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'))
        },
        filename(req, file, callback){
            callback(null, `${Date.now()}-${file.originalname}`)
        }
    })
})

router.get('/categories', ListCategories)
router.post('/categories', CreateCategory)
router.get('/products', ListProducts)
router.post('/products', upload.single('image'), CreateProducts)
router.get('/categories/:id/products', ListProductsByCategory)
router.get('/orders', ListOrders)
router.post('/orders', CreateOrder)
router.patch('/orders/:id', UpdateOrder)
router.delete('/orders/:id', CancelOrder)

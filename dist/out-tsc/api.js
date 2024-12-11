import express from 'express';
import productsData from './mocks';
const router = express.Router();
router.get('/products', (req, res) => {
    res.json(productsData);
});
router.get('/order', (req, res) => {
    // Обработка запроса на оформление заказа
    res.json({ message: 'Заказ оформлен успешно' });
});
export default router;
//# sourceMappingURL=api.js.map
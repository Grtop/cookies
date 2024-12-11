import express, { Request, Response } from 'express';
import productsData from './mocks';

const router = express.Router();

router.get('/products', (req: Request, res: Response) => {
  res.json(productsData);
});

router.get('/order', (req: Request, res: Response) => {
  // Обработка запроса на оформление заказа
  res.json({ message: 'Заказ оформлен успешно' });
});

export default router;

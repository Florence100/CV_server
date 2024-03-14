import express from 'express';
import PdfController from '../controllers/pdfController.js';

const Router = express.Router;
const router = new Router();

router.get('/createPDF', PdfController.createPDF);

export default router;
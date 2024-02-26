import PdfService from '../service/pdfService.js';

class PdfController {
    async createPDF (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

        PdfService.createPDF(req, res, next).then(buffer => {
            res.end(buffer)
        })
    }
}

export default new PdfController();
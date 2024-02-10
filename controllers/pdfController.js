import PdfService from '../service/pdfService.js';

class PdfController {
    createPDF (req, res) {
        try {
            res.header('Access-Control-Allow-Origin', '*')
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            res.status(200).json('SERVER IS WORKING')
            console.log(res);
            PdfService.createPDF()
            return res
        } catch(e) {
            res.status(500).json(e);
        }
    }
}

export default new PdfController();
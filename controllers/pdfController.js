import PdfService from '../service/pdfService.js';

class PdfController {
    createPDF (req, res) {
        try {
            res.header('Access-Control-Allow-Origin', '*')
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            res.status(200).json('SERVER IS WORKING')
            PdfService.createPDF().then(buffer => {
                res.end(buffer);
                console.log('buffer', buffer)
            })
        } catch(e) {
            res.status(500).json(e);
        }
    }
}

export default new PdfController();
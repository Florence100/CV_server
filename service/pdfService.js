import puppeteer from 'puppeteer';

class PdfService {
    async createPDF(req, res) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        // const website_url = 'http://127.0.0.1:5501/';
        const website_url = process.env.CLIENT_URL;
        await page.goto(website_url, { waitUntil: 'networkidle0' });
        await page.emulateMediaType('screen');
        const buffer = await page.pdf({
            path: 'CV.pdf',
            margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
            printBackground: true,
            format: 'A4',
        });
        
        await browser.close();
        // res.end(buffer);
        console.log('OK!!')
        return buffer;
    }
}

export default new PdfService();
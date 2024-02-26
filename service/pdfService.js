import puppeteer from 'puppeteer';

class PdfService {
    async createPDF(req, res, next) {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const website_url = process.env.CLIENT_URL;
        await page.goto(website_url, { waitUntil: 'networkidle0' });
        await page.addStyleTag({content: '.download-pdf {display: none;} .article.last {padding-top: 10px;} .email:hover {background: green;}'})
        await page.emulateMediaType('screen');
        const buffer = await page.pdf({
            margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
            printBackground: true,
            format: 'A4',
        });
        await browser.close();
        return buffer;
    }
}

export default new PdfService();
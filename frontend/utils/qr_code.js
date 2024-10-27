import QRCode from 'qrcode';
import fs from 'fs';

// URL of your website
const url = 'https://t.me/guided_adventures_bot';

// Generate QR code and save it as an image file
QRCode.toFile('website_qr.png', url, {
    color: {
        dark: '#000000',  // Dark color of QR code
        light: '#FFFFFF'   // Light background color
    },
    width: 300  // Set the size of the QR code
}, (err) => {
    if (err) throw err;
    console.log('QR code generated and saved as website_qr.png');
});

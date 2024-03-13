function generateQRCode() {
    const inputValue = document.getElementById('text-input').value.trim();

    if (inputValue !== '') {
        document.getElementById('qrcode').innerHTML = '';
        const qrcode = new QRCode(document.getElementById('qrcode'), {
            text: inputValue,
            width: 128,
            height: 128
        });
    }
}

function downloadQRCode() {
    const qrCodeContainer = document.getElementById('qrcode');

    if (qrCodeContainer.innerHTML !== '') {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const qrCodeImage = qrCodeContainer.querySelector('img');
        const borderSize = 5;
        canvas.width = qrCodeImage.width + 2 * borderSize;
        canvas.height = qrCodeImage.height + 2 * borderSize;

        context.fillStyle = '#fff';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(qrCodeImage, borderSize, borderSize);

        const downloadLink = document.createElement('a');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.download = 'qrcode.png';

        downloadLink.click();
    }
}

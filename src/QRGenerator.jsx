import React from 'react';
import QRCode from 'react-qr-code';

const QRGenerator = () => {
    // const url = "https://github.com/";
    const url = "https://pagina-web-nu-two.vercel.app/registro";

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Escanea para más información</h2>
            <QRCode value={url} size={256} />
        </div>
    );
};

export default QRGenerator;

import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { QrReader } from 'react-qr-reader';
import './qrscan.css';
import '../bootstrap/bootstrap.min.css';
import Qr from '../img/qr.png';


const QRScanner = () => {
    const [result, setResult] = useState('');
    const [scanActive, setScanActive] = useState(false);

    const handleScan = data => {
        if (data) {
            setResult(data);
            setScanActive(false); // Stop scanning once result is obtained
        }
    };

    const handleError = err => {
        console.error(err);
    };

    const startScan = () => {
        setScanActive(true);
    };

    const clearResult = () => {
        setResult('');
    };

    const handleFileChange = event => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setResult(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Container style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'200px'}}>

            <div className='row'>
                <div className='mb-3 d-flex justify-content-center align-content-center'>
                    <div className='qrbox col-5 col-lg-3 d-flex justify-content-center align-content-center'><img src={Qr} style={{ height:'40%', width: '50%', marginTop:'50px' }} /></div>
                </div>
                <br />
                <div className='d-flex justify-content-center align-content-center'>
                    <Button variant="primary" className='scanBtn col-5 col-lg-3 p-2' onClick={startScan}>
                        Scan QR Code
                    </Button>
                </div>

                <div className='d-flex justify-content-center align-content-center'>
                    <span className='mt-4'>Lorem ipsum dolor sit amet consectetur.</span>
                </div>

            </div>



            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
                    <br />

                    <br />
                    {scanActive && (
                        <QrReader
                            delay={300}
                            onError={handleError}
                            onScan={handleScan}
                            style={{ width: '100%' }}
                        />
                    )}
                    <div style={{ marginTop: '20px' }}>
                        {result && (
                            <div>
                                <p>Scanned Result: {result}</p>
                                <Button variant="secondary" onClick={clearResult}>
                                    Clear
                                </Button>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default QRScanner;

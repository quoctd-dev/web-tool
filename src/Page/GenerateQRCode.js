import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import {Button} from "@mui/material";

function GenerateQRCode() {
    const [url, setUrl] = useState("");
    const [submittedUrl, setSubmittedUrl] = useState("");

    const handleGenerate = () => {
        if (url.trim() !== "") {
            setSubmittedUrl(url);
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h1>🔗 QR Code Generator</h1>
            <input
                type="text"
                placeholder="Nhập link website..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ width: "300px", padding: "10px", borderRadius: "8px" }}
            />
            <br />
            <Button
                onClick={handleGenerate}
                variant="contained"
                color="primary"
                sx={{
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    border: 0,
                    borderRadius: 8,
                    boxShadow: '0 4px 10px rgba(33, 203, 243, .3)',
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    transition: '0.3s',
                    '&:hover': {
                        boxShadow: '0 6px 16px rgba(33, 203, 243, .5)',
                        background: 'linear-gradient(45deg, #1E88E5 30%, #00ACC1 90%)',
                    },
                }}
            >
                🌟 Tạo mã QR
            </Button>
            {submittedUrl && (
                <div style={{ marginTop: "30px" }}>
                    <QRCodeCanvas value={submittedUrl} size={256} />
                    <p>📎 Link: {submittedUrl}</p>
                </div>
            )}
        </div>
    );
}

export default GenerateQRCode;

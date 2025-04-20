import React from 'react';
import { Grid, Button, Box } from '@mui/material';

export default function Home() {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <a href={"/qrcode"}><Button variant="outlined" color="primary">🏠 QR Code</Button></a>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="secondary">ℹ️ About</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="success">📞 Contact</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

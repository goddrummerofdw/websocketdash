import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 1234;


app.use(express.static(__dirname));

app.get('*', (req, res) => {
    const indexPath = process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production'
        ? join(__dirname, 'index.html')
        : join(__dirname, '..', '..', 'index.html');

    console.log(indexPath, 'This is indexpathladlksjdka')
    req.body
    res.sendFile(indexPath);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

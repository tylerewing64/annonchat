import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/user_route';

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

app.use(cors());

app.use('/api' ,router);
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

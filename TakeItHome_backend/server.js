import 'dotenv/config'; // Load environment variables
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.route.js';
import tradeItemRoutes from './routes/TradeItem.route.js';

const app = express();

// Connect to MongooseDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/trade', tradeItemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const mongoose = require('mongoose');

async function testConnection() {
  try {
    await mongoose.connect('mongodb://localhost:27017/KGL');
    console.log('✅ MongoDB connected successfully!');
    
    const result = await mongoose.connection.db.admin().ping();
    console.log('Ping result:', result);
    
    await mongoose.disconnect();
  } catch (err) {
    console.error('❌ Connection failed:', err);
  }
}

testConnection();
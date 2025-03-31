const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json());

// الاتصال بقاعدة البيانات
mongoose.connect('mongodb://localhost/world-capitals', { useNewUrlParser: true, useUnifiedTopology: true });

// نموذج المستخدم
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model('User', UserSchema);

// تسجيل حساب
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.send('تم إنشاء الحساب');
});

// تسجيل الدخول
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) res.send('تم تسجيل الدخول');
  else res.status(401).send('بيانات غير صحيحة');
});

// إرسال بريد إلكتروني
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post('/send-timer', (req, res) => {
  const { email, timerName, timerTime } = req.body;
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: `تذكير: ${timerName}`,
    text: `تذكيرك "${timerName}" سيبدأ في ${timerTime}`,
  };
  transporter.sendMail(mailOptions, (err) => {
    if (err) res.status(500).send('خطأ في الإرسال');
    else res.send('تم إرسال التذكير');
  });
});

app.listen(5000, () => console.log('الخادم يعمل على http://localhost:5000'));
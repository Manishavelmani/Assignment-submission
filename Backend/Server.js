const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); 
const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


mongoose.connect("mongodb://localhost:27017/house", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['student', 'teacher'] },
});


UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});


UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", UserSchema);


app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "⚠️ Email already registered" });
    }

    // ✅ Create and save new user
    const newUser = new User({ name, email, password, role });
    await newUser.save();

    res.status(201).json({ message: "✅ User registered successfully!" });
  } catch (error) {
    console.error("❌ Signup Error:", error);
    res.status(500).json({ message: "❌ Server error. Please try again." });
  }
});
const AssignmentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  studentId: { type: String, required: true },
  fileData: { type: String, required: true }, // Store file as Base64
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);


app.post("/submit-assignment", async (req, res) => {
  try {
    const { studentName, studentId, fileData } = req.body;

    if (!studentName || !studentId || !fileData) {
      return res.status(400).json({ message: "⚠️ All fields are required!" });
    }

    const newAssignment = new Assignment({ studentName, studentId, fileData });
    await newAssignment.save();

    res.status(201).json({ message: "✅ Assignment submitted successfully!" });
  } catch (error) {
    console.error("❌ Submission Error:", error);
    res.status(500).json({ message: "❌ Server error. Please try again." });
  }
});






const assiSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  fileName: String,
  fileData: String, 
});

const Assi = mongoose.model('Assi', assiSchema);


app.post('/upload', async (req, res) => {
  console.log("📥 Received Data:", req.body); 

  try {
      const newAssignment = new Assi(req.body);
      await newAssignment.save();
      res.status(201).json({ message: '✅ Assignment uploaded successfully!' });
  } catch (error) {
      console.error("❌ Upload Error:", error);
      res.status(400).json({ message: '❌ Error uploading assignment', error });
  }
});




app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

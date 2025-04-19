//1. dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});
const flash = require("connect-flash");

require("dotenv").config();
//import models here.(files from your models folder)
const Signup = require("./model/resetPassword");
const user = require("./model/signUp");
//2.instatiations
const app = express();
const PORT = 3002;

//import routes here
const authRoutes = require("./routes/authRoute");
const procurementRoutes = require("./routes/procurementRoute");
const managerRoutes = require("./routes/managerRoute");
const reportRoutes = require("./routes/reportRoute");
const paymentRoutes = require("./routes/paymentsRoute");
const resetPassword = require("./routes/resetPassword");
//const employee = require('./routes/employee')
//3.configurations
//connect mongoose
mongoose.connect(process.env.BASE, {});
mongoose.connection
  .on("open", () => {
    console.log("Mongoose is connected");
  })
  .on("error", (err) => {
    console.log(`connection error: ${err.message}`);
  });
// set the view engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//4.middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//passport configurations
//passport.use(Signup.createStrategy()); //get the filename from your models folder.
//passport.serializeUser(Signupmongoose.connect.serializeUser());
//passport.deserializeUser(Signup.deserializeUser());
// Local Strategy Configuration
passport.use(
  new localStrategy(
    {
      usernameField: "email", // Using email instead of username
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Incorrect password" });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
// Session Serialization
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
//express session configurations
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//flash messages Middleware
app.use((req, res, next) => {
  // expose data to all templates during a request cycle
  res.locals.success = req.flash("success"); //retrives flash messages from your passport routes
  res.locals.error = req.flash("error"); //retrives error notifications. they are automatically cleared after being read.
  res.locals.user = req.user || null; // all logedin users will be available in all tempaltes
  next(); //pass control to the next middleware.
});

passport.use(
  new localStrategy(
    {
      usernameField: "email", // if using email instead of username
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) return done(null, false);

        const isValid = await bcrypt.compare(password, user.password);
        isValid ? done(null, user) : done(null, false);
      } catch (err) {
        done(err);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
//5.routes
app.use("/", authRoutes);
app.use("/", reportRoutes);
app.use("/", managerRoutes);
app.use("/", procurementRoutes);
app.use("/", paymentRoutes);
//app.use('/' , employee)
app.use("/", resetPassword);
//app.use('/admin', require('./routes/adminAuth'));
//app.use('/admin/dashboard', require('./routes/adminDash'));

// Homepage
app.get("/", (req, res) => res.redirect("/login"));

//6. bootstrapping the server
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

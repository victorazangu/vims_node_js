import express, { Application } from "express";
import flash from "connect-flash";
import session from "express-session";
import passport from "./config/auth";
import cookieParser from "cookie-parser";
import path from "path";
import indexRouter from "./routes/index";
const app: Application = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

//default image and file locations
app.use("/files", express.static(path.join(__dirname, "../uploads")));

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));



//routes
app.use("/", indexRouter);

//session
app.use(
    session({
        secret: "Where all goes Right and uphill oh yeaaa",
        resave: true,
        saveUninitialized: false,
        name: "user-session",
        cookie: {
            maxAge: 3600000,
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate("session"));

app.use(flash());

app.use(function (req, res, next) {
    res.locals.messages = req.flash();
    next();
});

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});



// error handler
app.use(function (_req, res, err) {
    res.render("error");
    return err;
});


export default app;
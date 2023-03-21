import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/admins";
import bcrypt from "bcrypt";

passport.use(
    new LocalStrategy(function verify(username, password, cb) {
        User.findOne({
            attributes: [
                "admin_id",
                "first_name",
                "last_name",
                "email",
                "phone",
                "address_1",
                "address_2",
                "password",
                "profile",
                "gender",
                "isActive",
                "department",
                "designation",
            ],
            where: {
                email: username,
                isActive: true,
            },
        }).then((user) => {
            if (user) {
                const userData = JSON.parse(JSON.stringify(user, null, 2));
                bcrypt.compare(password, userData.password).then(function (result) {
                    if (result === false) {
                        return cb(null, false, {
                            message: "Incorrect username or password.",
                        });
                    }
                    return cb(null, user);
                });
            }
        });
    })
);

passport.serializeUser((user, cb) => {
    process.nextTick(function () {
        cb(null, user);
    });
});

passport.deserializeUser((user: any, cb) => {
    process.nextTick(function () {
        return cb(null, user);
    });
});

export default passport;
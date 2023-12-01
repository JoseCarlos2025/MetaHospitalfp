module.exports = (app) => {
    const teacherschool = require("../controllers/teacherschool.controller");
    const auth = require("../controllers/auth");

    const router = require("express").Router();

    router.get("/:schoolId/teachers", auth.isAuthenticated, teacherschool.getTeachersBySchool);

    router.post("/:schoolId/teachers",auth.isAuthenticated, teacherschool.addTeacherToSchool);

    app.use("/api/schools", router);
};
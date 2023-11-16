module.exports = app => {
    const user = require("../controllers/user.controller");
    const auth = require("../controllers/auth");

    var router = require("express").Router();

    router.post("/",user.create);

    router.post("/signin", auth.signin);

    router.get("/",auth.isAuthenticated,user.findAll);

    router.put("/:id",auth.isAuthenticated,user.update);

    router.delete("/:id",auth.isAuthenticated,user.delete);

    app.use("/api/users", router);
}
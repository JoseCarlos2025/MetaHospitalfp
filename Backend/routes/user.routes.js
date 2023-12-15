module.exports = app => {
  const user = require("../controllers/user.controller");
  const auth = require("../controllers/auth");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  router.post("/", user.create);
  router.post("/", upload.single('file'), user.create);

  router.post("/signin", auth.signin);

  router.get("/", auth.isAuthenticated, user.findAll);

  router.get("/user/:id", auth.isAuthenticated, user.findOne);

  router.get("/students", auth.isAuthenticated, user.findAllStudents);

  router.get("/teachers", auth.isAuthenticated, user.findAllTeachers);

  router.put("/:id", auth.isAuthenticated, upload.single('file'), (req, res) => {
    if (req.file) {
      // Handle updating with an image
      user.updatefile(req, res);
    } else {
      // Handle updating without an image
      user.update(req, res);
    }
  })

  router.delete("/:id", auth.isAuthenticated, user.delete);

  app.use("/api/users", router);
}
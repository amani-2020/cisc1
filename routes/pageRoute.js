const router = require("express").Router();
const pageModel = require("../model/pageModel");

router.get("/", (req, res) => {
  res.send("<h1>home</h1>");
});

router.get("/:key", async (req, res) => {
  let page = await pageModel.getPage(req.params.key);
  let menu = await pageModel.getMenu();
  //console.log(page[0]);
  if (page[0] !== undefined) {
    res.render("pageView", { page: page[0], menu: menu });
  } else {
    res.send(`<h1>${req.params.key} does not exist</h1>`);
  }
});

module.exports = router;

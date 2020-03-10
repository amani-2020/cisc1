const router = require("express").Router();
const pageModel = require("../model/pageModel");

router.get("/", async (req, res) => {
  getPageWithDeafualt(req, res);
});

router.get("/:key", async (req, res) => {
  getPageWithDeafualt(req, res);
});

async function getPageWithDeafualt(req, res) {
  if (req.params.key === undefined) {
    req.params.key = "home";
  }
  let page = await pageModel.getPage(req.params.key);
  let menu = await pageModel.getMenu();
  //console.log(page[0]);
  if (page[0] !== undefined) {
    res.render("pageView", { page: page[0], menu: menu });
  } else {
    req.params.key = "home";
    getPageWithDeafualt(req, res);
  }
}

// router.post();

module.exports = router;

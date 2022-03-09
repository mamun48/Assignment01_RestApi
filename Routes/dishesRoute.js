const expresss = require("express");

const dishRouter = expresss.Router();

//Dish router without id
dishRouter.get("/", (req, res) => {
  res.send("This is your all dishes");
});

dishRouter.post("/", (req, res) => {
  res.send(`Will add the dish with name: ${req.body.name} with details: ${req.body.description}`);
});

dishRouter.put("/", (req, res) => {
  res.send(`Some dishes are updated`);
});

dishRouter.delete("/", (req, res) => {
  res.send(`All the dishes are deleted`);
});

//dish router with id
dishRouter.get("/:id", (req, res) => {
  res.send(`Will send details of the dish: ${req.params.id}`);
});

dishRouter.post("/:id", (req, res) => {
  res.send(`Will add the dish with dish id: ${req.params.id}`);
});

dishRouter.put("/:id", (req, res) => {
  res.write('Updating the dish: '+ req.params.id + '\n');
  res.end('Will update the dish: '+ req.body.name +'with details: ' + req.body.description);
});

dishRouter.delete("/:id", (req, res) => {
  res.send(`Deleting dish ${req.params.id}`);
});


module.exports = dishRouter;

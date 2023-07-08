const ProductController = require("../controllers/product.controller");

module.exports = (app) =>{
    app.get("/api/products", ProductController.readAll);
    app.post("/api/products", ProductController.create);
    app.get("/api/products/:id", ProductController.findOne);
    app.put("/api/products/:id", ProductController.update);
    app.delete("/api/products/:id", ProductController.delete);
}
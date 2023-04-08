




class ProductManager {
    constructor() {
        this.productos = [];
    }

    addProduct({ title, description, price, thumbnail, stock }) {

        let id
        if (this.productos.length === 0) {
            id = 1;

        } else {
            let lastProducto = this.productos[this.productos.length - 1];
          
            id = lastProducto.id + 1;
        }

        let producto = { title, description, price, thumbnail, stock, id}
        this.productos.push(producto);

    }
    getProducts() {
/*         console.log(this.productos) */
        return this.productos

    }

    getProductById(id) {

    
        let productoId = this.productos.find((p) => p.id === id)
        console.log(productoId);
        
            if(!productoId){
                console.error("NOT FOUND");
                     
            }

            return this.productoId

    }

}


let producto = new ProductManager;
producto.addProduct({ title: "iphone", description: "iphone 13 mini", price: 1200, thumbnail: "img", stock: 2 });
producto.addProduct({ title: "iphone", description: "iphone 14", price: 1500, thumbnail: "img", stock: 5 });
producto.addProduct({ title: "iphone", description: "iphone 12 mini", price: 1000, thumbnail: "img", stock: 4 });


producto.getProducts()

producto.getProductById(2)
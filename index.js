
const fs = require('fs')
class ProductManager {
    constructor(path) {
        this.productos = [];
        this.path = path
        this.init(path)
    }
    init(path) {
        let file = fs.existsSync(path)
        if (!file) {
            fs.writeFileSync(path, '[]')
            console.log("archivo creado en: " + path)
            return 'archivo creado en path: ' + this.path
        } else {
            this.productos = JSON.parse(fs.readFileSync(path, 'UTF-8'))
            console.log('productos cargados')
            return 'productos cargados'
        }
    }

    addProduct({ title, description, price, thumbnail, stock }) {
        const existingProduct = this.productos.find((p) => p.description === description);
        if (existingProduct) {
            console.log('Error: el producto ya existe');
            return 'Error: el producto ya existe';
        }
        try {
            let data = { title, description, price, thumbnail, stock };
            if (this.productos.length > 0) {
                let next_id = this.productos[this.productos.length - 1].id + 1;
                data.id = next_id;
            } else {

                data.id = 1;
            }
            this.productos.push(data);
            let data_json = JSON.stringify(this.productos, null, 2);
            fs.writeFileSync(this.path, data_json);
            console.log('Id creado para el usuario: ' + data.id);
            return 'Id del usuario creado: ' + data.id;
        } catch (error) {
            console.log(error);
            return 'Error: no se pudo crear el usuario';
        }
    }

    getProducts() {
        console.log(this.productos)
        return this.productos
    }

    getProductsById(id) {
        let productoId = this.productos.find((p) => p.id === id)

        if (!productoId) {
            console.log("no se encontraron productos con ese ID")
        } else {
            console.log(productoId)
            return productoId
        }
    }

    updateProduct(id, data) {
        try {
            let productos = JSON.parse(fs.readFileSync(this.path, "utf-8"));
            let product = productos.find(product => product.id === id);
            if (product) {
                for (let prop in data) {
                    product[prop] = data[prop];
                }
                let data_json = JSON.stringify(productos, null, 2);
                fs.writeFileSync(this.path, data_json);
                console.log('producto actualizado correctamente: ' + id);
                return 'producto actualizado correctamente: ' + id;
            } else {
                console.log('error: producto no encontrado');
                return 'error: producto no encontrado';
            }
        } catch (error) {
            console.log(error);
            return 'error: actualizando producto';
        }
    }

   /*  deleteProduct(id) {
        try {
            this.productos = this.productos.filter(each => each.id !== id);
            let data_json = JSON.stringify(this.productos, null, 2);
            fs.writeFileSync(this.path, data_json);
            console.log('Usuario eliminado: ' + id);
            return 'Usuario eliminado: ' + id;
        } catch (error) {
            console.log(error);
            return 'Error: eliminando usuario';
        }
    } */
    deleteProduct(id) {
        try {
          const index = this.productos.findIndex((p) => p.id === id);
          if (index === -1) {
            throw new Error(`El producto con el ID ${id} no existe`);
          }
          this.productos.splice(index, 1);
          const data_json = JSON.stringify(this.productos, null, 2);
          fs.writeFileSync(this.path, data_json);
          console.log(`Producto eliminado: ${id}`);
          return `Producto eliminado: ${id}`;
        } catch (error) {
          console.log(error);
          return `Error: ${error.message}`;
        }
      }
      
   
}

function producto() {
    let producto = new ProductManager('./data/productos.json')
    producto.addProduct({ title: "Iphone", description: "iphone 13 mini", price: 1200, thumbnail: "img", stock: 2 })
    producto.addProduct({ title: "iphone", description: "iphone 12 mini", price: 1000, thumbnail: "img", stock: 4 });
    producto.addProduct({ title: "iphone", description: "iphone 11 ", price: 2000, thumbnail: "img", stock: 3 });


    producto.getProducts();
    producto.getProductsById(3) 
    producto.updateProduct(1, { title: 'samsung', description: 'samsung s22 ultra' }) 
    producto.updateProduct(2, { title: 'samsung', description: 'samsung s21 ' }) 
    producto.deleteProduct(3) 
    producto.deleteProduct(1) 
}

producto()
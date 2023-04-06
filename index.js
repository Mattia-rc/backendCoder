
class ProductManager{
    constructor(){
        this.productos = [];
    }

        getEvents(){
             console.log(this.productos) 
            return this.productos

        }

         getProductsByid(id){
            this.productos.find((p)=>p.id === id)

            console.log(this.productos);
            return this.productos
         }

    addProducts({title,description, price, thumbnail,stock}){  
        let id 
        if(this.productos.length===0){
            id = 1;
           
        }else{
            let lastProducto = this.productos[this.productos.length-1];
            lastProducto.id+1;
            id = lastProducto.id+1;
        }
        
     




        let producto = {title,description, price, thumbnail,stock, id};
        this.productos.push(producto); 
    }
}


let producto = new ProductManager;

producto.addProducts({title: "iphone", description: "iphone 13 mini", price: 1200, thumbnail:"img", stock: 2});
producto.addProducts({title: "iphone", description: "iphone 14", price: 1500, thumbnail:"img", stock: 5});
producto.addProducts({title: "iphone", description: "iphone 12 mini", price: 1000, thumbnail:"img", stock: 4});

producto.getEvents(); 
producto.getProductsByid(2)
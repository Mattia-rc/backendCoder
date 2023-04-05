/* class TicketManager {
    #gain
    constructor(){
        this.events = []
        this.#gain = 0.15
    }

    getEvents(){
        console.log(this.events)
        return this.events
    }
    addEvent({name, place, price,capacity,date}){
        capacity = capacity ?? 50
        let id = 0;
        if(this.events.length===0){
            id = 1;
        }else{
           let lastEvents =  this.events[this.events.length-1]
            lastEvents.id++ 
           id = lastEvents.id+ 1

        }
        price = price + this.#gain * price;
        let event = {name, place, price,capacity,date, id, participantes: []}
        this.events.push(event)
        console.log(this.event)
    }
}

let ticket = new TicketManager;


console.log(ticket.gain);

ticket.addEvent({name: "mattia",place:"italia",price:"1000",capacity:null,date: new Date('06/10/2023')})
ticket.addEvent({name: "pablo",place:"argf",price:"1000",capacity:"2",date: new Date('06/10/2023')})
ticket.addEvent({name: "facu",place:"españa",price:"1000",capacity:'2',date: new Date('06/10/2023')})
ticket.getEvents(); */

//find para encontrar id especifico

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class ProductManager{
    constructor(){
        this.productos = [];
    }

        getEvents(){
             console.log(this.productos) 
            return this.productos

        }

            getProductByID(){
                let productoID = 1
                this.productos.find(p=>p.id === productoID)
              /*   console.log(this.productos); */
                return this.productos

            }

    addProducts({title,description, price, thumbnail,stock}){  
        let id 
        if(this.productos.length===0){
            id = 1;
           
        }else{
            let lastProducto = this.productos[this.productos.length-1];
            lastProducto.id++;
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
/* producto.getProductByID(); */

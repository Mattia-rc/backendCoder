class TicketManager {
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
ticket.getEvents();
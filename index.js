class Coffee{
    constructor(obj={}){
    this.bean = obj.bean,
    this.method = obj.method,
    this.category = obj.category
    }
}




//class extend 
class Cafe extends Coffee {
    constructor(obj= {}){
        super(obj)
        this.name  = obj.name
    }
    
}

const detailCafe = new Cafe({
    bean : ['Gayo red honey','sidikalang',{robusta:'Kapal Tanker'}],
    method : 'Manual brewing',
    category: 'Arabica',
    name: 'Sevendays'
})

console.log(detailCafe);

class Location extends Cafe {
    constructor (obj = {}){
       super(obj)
        this.long = obj.long,
        this.lat = obj.lat
    }
}

const locationMap = new Location({
    bean : ['Gayo red honey','sidikalang',{robusta:'Kapal Tanker'}],
    method : 'Manual brewing',
    category: 'Arabica',
    name: 'Sevendays',
    long : '123',
    lat   : '23'
})  

console.log(locationMap);
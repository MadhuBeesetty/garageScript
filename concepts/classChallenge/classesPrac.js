// first class
class Building {
  constructor (floors,apt){
    this.floors = floors;
    this.apt = apt;
  }
  // a simple function for modification
  adding(){
    this.floors +=1;
}
}
// class 2
class Buildings {
  constructor (size,people){
    this.size = size;
    this.people = people;
  }
  experiment() {
    this.people = this.people/2;
  }
subtracting() {
  this.people =this.people-1;
}
}
//a special class customBuild derived from 'Buildings' class.
class customBuild extends Buildings{
  constructor (size,people,place){
    super(size,people);
    this.place = place;
  }
}
//passing values into classes
//below c and d are using same class 'custombuild' blueprint and creating two objects. 
const c = new customBuild("xxl",200,"sanjose");
const d = new customBuild("xl",500,"san frans")
const b = new Buildings("small",4);
const a = new Building(6,5);
c.experiment();
//a.adding();
//b.subtracting();
console.log(a);
console.log(b);
console.log(c);
console.log(d);

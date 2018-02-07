class Classapp {
  constructor(metric,color){
    this.element = document.createElement('div');
    document.body.appendChild(this.element);
    this.metric = metric;
    this.element.style.backgroundColor=color;
    this.draw();
    this.element.onclick=this.grow.bind(this);
  }
  grow(){
    this.metric += 10;
    this.draw();
   }
  draw(){
    this.element.style.width = this.metric*10+'px';
    this.element.style.height = '80px'
  }
};
const a = new Classapp(10,'red');
const b = new Classapp(20,'blue');


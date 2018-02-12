// toggle for just one box //
let bool = true;
  class Toggle {
    constructor(color,metric){
      this.element=document.createElement('div');
      document.body.appendChild(this.element);
      this.element.style.backgroundColor=color;
      this.draw();
      this.element.onclick=()=>{
        if(bool == true){
          bool = false;
        }else{
          bool = true;
        };
      this.change();
      };
    }
    draw(){
      this.element.style.width ='80px';
      this.element.style.height ='80px';
    }
      change(){
        if(bool == true){
        this.element.style.backgroundColor='green';
        }else{
          this.element.style.backgroundColor='red';
        }
      }
    }
      const a = new Toggle('green',8);
    this.element.onclick = a.change;

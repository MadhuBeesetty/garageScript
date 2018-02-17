// toggle for just one box //
import='./classes.css';
let bool = true;
  class Toggle {
    constructor(number){
      this.number=number;
      this.element=document.createElement('div');
      this.element.className='green';
      document.body.appendChild(this.element);
      this.element.onclick=()=>{
      this.element.change();
      };
    }
      change(){
        if(this.element.style.backgroundColor =='red'){
        this.element.style.backgroundColor='green';
        }else{
          this.element.style.backgroundColor='red';
        }
      }
    }
      const a = new Toggle('1');

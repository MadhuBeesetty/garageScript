
const send = (parameter) =>{
  const a = new XMLHttpRequest();
  a.open('GET', `/madhu?direction=${parameter}`);
  a.send();
}

document.getElementById("up").onclick=()=>{
  send('up');
}

document.getElementById("down").onclick=()=>{
  send('down');
}

document.getElementById("right").onclick=()=>{
  send('right');
}

document.getElementById("left").onclick=()=>{
  send('left');
}

const movement=()=>{
  const xhttp=new XMLHttpRequest();
  xhttp.open('GET','/moveUp');
  xhttp.onreadystatechange = ()=>{
    if(xhttp.responseText){
      const img=document.getElementById('img');
      img.style.marginTop=xhttp.responseText;
    }
  }
  xhttp.send();

  const xhttp1=new XMLHttpRequest();
  xhttp1.open('GET','/moveLeft');
  xhttp1.onreadystatechange = ()=>{
    if(xhttp1.responseText){
      const img=document.getElementById('img');
      img.style.marginLeft=xhttp1.responseText;
    }
  }
  xhttp1.send();
};
  window.setInterval(movement,1000);

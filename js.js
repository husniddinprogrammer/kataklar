 n=window.prompt('Shakllar sonini kiriting');
    document.write(`<div class="kataklar">`)
 for ( let i=1;i<=n;i++){
document.write(`<div id="a${i}">`,`${i}`,`</div>`);
 }
  document.write(`</div`)
 function bosdi() {
     let soni=document.getElementById('soni').value;
     let rangi=document.getElementById('rangi').value;
     document.getElementById(`a${soni}`).style.background=rangi;

 }
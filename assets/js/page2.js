

function Soumettre(){
    let ToDoToDo= document.getElementById('entrer').value;
    let li = document.createElement('li');
    let a = document.createTextNode(ToDoToDo);
    li.appendChild(a);

    if (ToDoToDo === ''){
        alert('vide, entrez un texte!!!')
    } else {
        document.getElementById('liste').appendChild(li);  
    }
    
    document.getElementById('entrer').value = '';
    let span= document.createElement('span');
    let dtxt = document.createTextNode('\u00D7');
    span.className = 'del';
    span.appendChild(dtxt);
    li.appendChild(span);

    for (let i = 0; i < del.length; i++){
        del[i].onclick = function(){
            let div = this.parentElement;          
            div.style.display = 'none';
        }
    }
}

// let myNodelist = document.getElementsByTagName('li');
 let myNodelist = document.getElementsByClassName('liste');
let i = '';
    for (let i = 0; i < myNodelist.length; i++){     
        let span = document.createElement('span'); 
        let dtxt = document.createTextNode('\u00D7');
        span.className = 'del';
        span.appendChild(dtxt);
        myNodelist[i].appendChild(span);
}

let del = document.getElementsByClassName('del');
    for (i = 0; i < del.length; i++){
        del[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = 'none';
        }
    } 
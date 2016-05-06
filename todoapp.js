//1. JS
// Variables
var ul = document.getElementById('lista'),
    tareaInput = document.getElementById('tareaInput')
    quitaTodo = document.getElementById('quitaTodo'),
    btnAgregarTarea = document.getElementById('btnAgregarTarea');

//2. JS 
// Se llama a la función, que todavía no se define
btnAgregarTarea.onclick = function () {
   agregaLi(ul);
};

//3. JS 
//Funciones: FUN FUN FUN!!!!
function agregaLi(haciaUl) {
  var MiTarea = tareaInput.value, // Grab the input text (the new 'task') 
      lista = document.createElement('li'), // Create a new list item to put inside the ul
      label = document.createElement('label'),//Crea 'label' (o sea, una etiqueta) para 'input'
      input = document.createElement('input'),// Crea un input sencillo
      enlace = document.createElement('a');// Crea enlace, para hacer clickable algo 
      contenido = document.createTextNode(MiTarea + ' '), // Create new textnode and give it the 'task'-text.
      btnQuitarTarea = document.createElement('button');// Create a button to remove the individual list items. More on this later.
        
    if (MiTarea.split(' ').join('').length === 0) {
        // Check for empty inputs (only spaces are not enough)
        alert('El campo está vacío');
        return false;
      }
      
  //EN ESTE PEDAZO DE CÓDIGO ESTÁ LA MAGIA

      // li > label > enlace.href=# > (input.type=checkbox) + (btnQuitarTarea)

  lista.appendChild(label); //Pone 'label' dentro de 'lista' 
  label.appendChild(enlace); // Pone 'enlace' adentro de 'label'
  enlace.appendChild(input); //Pone 'input' dentro de 'enlace' // desde acá no jala bien
  enlace.appendChild(contenido);//Escribe 'contenido' a 'enlace'

  input.setAttribute("type", "checkbox");//ESTA MALDITA COSA DEBERÍA DARLE EL ATRIBUTO CHECKBOX AL INPUT
  enlace.setAttribute("href", "#");
  
  btnQuitarTarea.className = 'quitarElemento'; // Add class to button for CSS
  btnQuitarTarea.innerHTML=("Eliminar tarea"); // Add text to the remove button + "<i class= fa fa-trash></i>" //SE ROMPIÓ MI FUNCIÓN :'(

  btnQuitarTarea.setAttribute('onclick', 'quitarElemento(this);'); //NO TENGO CLARO QUÉ HACE 'quitarElemento(this);'
  // Very important! Builds the onclick event that will trigger when a task is clicked. 
  //(We will create this function 'quitarElemento(this) later' //'quitarElemento(this);' se definirá después  

// ¿YA ESTÁ HECHA LA MAGIA?

//PON ATENCIÓN A ÉSTO
  label.appendChild(btnQuitarTarea); // Add the created removeThis button to the li **input**
 
  haciaUl.appendChild(lista); //Add the constructed li to the ul! DONE :)
}
// TERMINA FUNCIÓN PARA CREAR UN ELEMENTO li (CON COSAS DENTRO) Y AÑADIRLO A LA ul EN html



/*The removeThis-button has an onclick-event. 
This event will start the function quitarElemento(item): */
function quitarElemento(item){
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
}

/*This function has an item (the removeThis-button) that removes itself and his parent (the li-item). 
Add this function to your JavaScript code and we are almost finished! 
Last part is the remove all function! 
This one is easy and short:*/

quitaTodo.onclick = function () {
  ul.innerHTML = '';
};

/*CÓDIGO PARA HACER CHECK O UNCHECK EN UN CHECKBOX
function check() {
    document.getElementById("myCheck").checked = true;
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}
*/
/*CÓDIGO PARA LIMPIAR EL TEXTAREA LUEGO DE AÑADIR UN ELEMENTO
Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }
  
      <script>
    function myFunction() {
        var x = document.getElementById("myCheck");
        x.checked = true;
    }
    </script>

    

CÓDIGO DADO POR GRISSEL
function createTask(text) {
  var li = document.createElement('li');
  li.innerHTML = '<label><input type="checkbox" onclick="doneTask('+ taskId +');"> ' + 
           text + '</label>' +
           '<span class="glyphicon glyphicon-trash" onclick="deleteTask('+ taskId +');"></span>';
  li.setAttribute('id',taskId);
  taskId += 1;
  return li;
}


  */
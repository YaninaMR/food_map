
$(document).ready(function() {

  var distrito = Object.keys(data);           
    var $rests = $('#container-dishes');
    var $title = $('#title-restaurant');
      var did = localStorage.getItem("distrito");
      var cid = localStorage.getItem("categoria");
      var rid = localStorage.getItem("restaurante"); 
  //  for(i=0 ; i<distrito.length; i++){
      var categoria = Object.keys(data[distrito[did]]);

 //   for(k=0; k<categoria.length;k++){  
      var restaurantes =data[distrito[did]][categoria[cid]]["restaurants"];                   
          //   $rests.append($img);  
          
   //     for (j=0; j<restaurantes.length;j++ ){ 
           var imagenes = Object.keys(restaurantes[rid]); 
           $title.append(restaurantes[rid][imagenes[0]]);
         // $('#image').attr('src',restaurantes[j][imagenes[2]]);
             for (var i in restaurantes[rid][imagenes[5]]) {

                var $div = $('<div></div>');
                $rests.append($div);                
                var $idish = $('<img id="img-dish">'), $ndish = $('<p><i class="material-icons prefix">restaurant_menu</i></p>'),$cdish = $('<p><span>Costo:</span></p>');
                $idish.attr('src', '../assets/img/platos/' + restaurantes[rid][imagenes[5]][i].photo_dish );
                $div.append($idish);
                $div.append($ndish);
                $div.append($cdish);
                $ndish.append(restaurantes[rid][imagenes[5]][i].dishname);
                $cdish.append(restaurantes[rid][imagenes[5]][i].cost);  
                //   $ndish.append(restaurantes[0][imagenes[5]][i].dishname);
                //   $cdish.append(restaurantes[0][imagenes[5]][i].cost);
                console.log(restaurantes[rid][imagenes[5]][i].dishname);
                console.log(restaurantes[rid][imagenes[5]][i].photo_dish);
                console.log(restaurantes[rid][imagenes[5]][i].cost);
                }        
         ///   $img.attr('src','assets/img/'+ restaurantes[j][imagenes[2]]);
               //  console.log($rests.append($img)+ $img + $('#image').attr('src',photos));
              //  console.log(restaurantes[j][imagenes[2]]); 
  //      }
         
  //  }
  //}

  /*
  * Modal que materialize me da
  */
 // Puedes hacer uso de la base de datos a través de la variable `data`
// constantes para total de puntos tech y hse
  var TECH = 1800;
  var HSE = 1200;
 /* var $restaurants = $('.container-places');  
  var $ancor =  $('<a>link</a>'); 
  var $span =$('<span>hi</span>');
  var $img = $('<img id="image">');*/

 //  var distrito = Object.keys(data);
  
//    $restaurants.append($ancor).append($span).append($img);
    
//    $('#image').attr('src',"assets/img/Market 770.png"); 

              
              var $ancor =  $('<a>link</a>'); 
              var $span =$('<span>hi</span>');
            //  var $img = $('<img id="image">');
            //  $restaurants.append($ancor).append($span).append($img);
 $('.modal').modal();
 $('#add').click(function() {
    var name = $('.name').val();
    $('.name').val('');
    var phone = $('.phone').val();
    $('.phone').val('');
    var contenedor = $('#cont');
    contenedor.append('<div class="container contacto"><ul class="collection"><li class="collection-item avatar"><h5>' + name + '</h5><p>' + phone + '</p><a href="#!" class="secondary-content"><i class="material-icons basura">delete_forever</i></a></li></ul></div>');
     deleteContact();
  });
  
  function rm_accent(str) {
   var letter={'À':'A','Á':'A','È':'E','É':'E','Ì':'I','Í':'I','Ñ':'N','Ò':'O','Ó':'O','Ù':'U','Ú':'U','à':'a','á':'a','è':'e','é':'e','ì':'i','í':'i','ñ':'n','ò':'o','ó':'o','ù':'u','ú':'u','ý':'y'};
   var res='';
   for (var i=0;i<str.length;i++)
    {c=str.charAt(i);res+=letter[c]||c;}
   return res;}
  


  function deleteContact() {
    $('.basura').click(function() {
       $(this).parent().parent().parent().parent().remove();
    });
  }
    $('#search').keyup(function() {
     var nombre = rm_accent($.trim($(this).eq(0).val().toUpperCase()));
     $('.list-datos').hide();
     $('.list-datos').next().hide(); // otros datos  
       $('.list-datos').each(function() {
         var search = rm_accent($.trim($(this).text().toUpperCase()));
         if (search.indexOf(nombre) !== -1) {
                  $(this).show();
                  $(this).next().show();
           }
     });
      //  $('.list2');
 
     /* // $('.list').hide();  
       $('.names-rests').each(function() {
         var search = $(this).text().toUpperCase();
          if (search.indexOf(nombre) !== -1) {
                 // $(this).show();
                $(this).parent().parent().parent().show();
           }
       });  */

    });

});

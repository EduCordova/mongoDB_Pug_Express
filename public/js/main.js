$(document).ready(function(){




// });





$('#mybut').click(function (e) { 
  e.preventDefault();

});

function savegame() {
  $('#image').rcrop('destroy');
  $('#image').attr('src', '').hide();
  if (this.files && this.files[0]) {
      var reader = new FileReader();
      $(reader).on('load', function(e) {
        $('#image').attr('src', e.target.result);
      });
      reader.readAsDataURL(this.files[0]);

      // $('#image').rcrop({
      //   minSize : [200,200],
      //   preserveAspectRatio : true,
      //   });
  }

}

$('#image').on('load', function(e)  {
  $(this).css('height', '100%').show();
        $('#image').rcrop({
        minSize : [200,200],
        preserveAspectRatio : true,
        });
}).hide();

$('#imp').change(savegame);

$('#image').on('rcrop-changed', function(e) {
  var nuevaImagen = $(this).rcrop('getDataURL', 100,100);
  $('#image2').attr('src', nuevaImagen);
  console.log(nuevaImagen)


  // var arr = nuevaImagen.getAsBinary();
  // console.log(arr)

})
  })



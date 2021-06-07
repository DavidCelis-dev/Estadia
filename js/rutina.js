
var tablerutina;
function listar_rutina(){
     tablerutina = $("#tabla_rutina").DataTable({
       "ordering":true,   
       "bLengthChange":false,
       "searching": { "regex": false },
       "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
       "pageLength": 10,
       "destroy":true,
       "async": false ,
       "processing": true,
       "ajax":{
           "url":"../controlador/rutina/controlador_rutina_listar.php",
           type:'POST'
       },
       "order":[[1,'asc']],
       "columns":[
           {"defaultContent":""},
           {"data":"nombre"},
           /*{"data":"usu_nombre"},*/
           /*{"data":"instruc_rutina"},*/
           {"data":"imagen1",
                render: function(data,type,row){
                    return '<img src="../'+data+'" class="img-square m-r-10" style="width:80px;">';
                }
           },
           {"data":"imagen2",
                render: function(data,type,row){
                    return '<img src="../'+data+'" class="img-square m-r-10" style="width:80px;">';
                }
           },
          {"data":"imagen3",
                render: function(data,type,row){
                    return '<img src="../'+data+'" class="img-circle m-r-10" style="width:80px;">';
                }
           },
           {"data":"imagen4",
                render: function(data,type,row){
                    return '<img src="../'+data+'" class="img-circle m-r-10" style="width:150px;">';
                }
           },
           {"data":"imagen5",
                render: function(data,type,row){
                    return '<img src="../'+data+'" class="img-circle m-r-10" style="width:80px;">';
                }
           },
           {"defaultContent":"<button style='font-size:13px;' type='button' class='editar btn btn-primary'><i class='fa fa-edit'></i></button> </i></button>&nbsp;<button style='font-size:13px;' type='button' class='eliminar btn btn-danger'><i class='fa fa-trash'></i></button>"}
       ],

       "language":idioma_espanol,
       select: true
   });
   document.getElementById("tabla_rutina_filter").style.display="none";
   $('input.global_filter').on( 'keyup click', function () {
        filterGlobal();
    } );
    $('input.column_filter').on( 'keyup click', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
      });

    tablerutina.on( 'draw.dt', function () {
        var PageInfo = $('#tabla_rutina').DataTable().page.info();
        tablerutina.column(0, { page: 'current' }).nodes().each( function (cell, i) {
                cell.innerHTML = i + 1 + PageInfo.start;
            } );
        } );

}

function filterGlobal() {
    $('#tabla_rutina').DataTable().search(
        $('#global_filter').val(),
    ).draw();
}

function AbrirModalCategoria(){
  $("#modal_registro").modal({backdrop:'static',keyboard:false})
  $("#modal_registro").modal('show');
}

function listar_usuario_combo(){
    $.ajax({
        "url":"../controlador/rutina/controlador_combo_rutina_listar.php",
        type:'POST'
    }).done(function(resp){
        var data = JSON.parse(resp);
        var cadena="";
        if(data.length>0){
            for(var i=0; i < data.length; i++){
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            $("#nombre").html(cadena);
            $("#nombre_editar").html(cadena);
        }else{
            cadena+="<option value=''>NO SE ENCONTRARON REGISTROS</option>";
            $("#nombre").html(cadena);
            $("#nombre_editar").html(cadena);
        }
    })
}

function Registar_Rutina(){
  var usuario = $("#nombre").val();
  var instruccion = $("#txt_instruc").val();
  var titulo = $("#txt_titulo").val();
  var archivo = $("#gif").val();
  var descripcion = $("#txt_descripcion").val();
  var titulo2 = $("#txt_titulo2").val();
  var archivo2 = $("#gif2").val();
  var descripcion2 = $("#txt_descripcion2").val();
  var titulo3 = $("#txt_titulo3").val();
  var archivo3 = $("#gif3").val();
  var descripcion3 = $("#txt_descripcion3").val();
  var titulo4 = $("#txt_titulo4").val();
  var archivo4 = $("#gif4").val();
  var descripcion4 = $("#txt_descripcion4").val();
  var titulo5 = $("#txt_titulo5").val();
  var archivo5 = $("#gif5").val();
  var descripcion5 = $("#txt_descripcion5").val();
  var link1 = $("#txt_link1").val();
  var link2 = $("#txt_link2").val();
  var archivo6 = $("#audio").val();
  if(usuario.length==0 || instruccion.length==0 || titulo.length==0 || descripcion.length==0 || titulo2.length==0 || descripcion2.length==0 || titulo3.length==0 || descripcion3.length==0 || titulo4.length==0 || descripcion4.length==0 || titulo5.length==0 || descripcion5.length==0){
    return Swal.fire("Mesaje de advertencia","Algo anda mal","warning");
  }
  if (archivo.length==0 || archivo2.length==0 || archivo3.length==0 || archivo4.length==0 || archivo5.length==0 || archivo6.length==0) {
    return Swal.fire("Mesaje de advertencia","Debe seleccionar un archivo","warning");
  }
  var f = new Date();
  var extension = archivo.split('.').pop();
  var extension2 = archivo2.split('.').pop();
  var extension3 = archivo3.split('.').pop();
  var extension4 = archivo4.split('.').pop();
  var extension5 = archivo5.split('.').pop();
  var extension6 = archivo6.split('.').pop();
  var nombrearchivo = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension;
  var nombrearchivo2 = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension2;
  var nombrearchivo3 = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension3;
  var nombrearchivo4 = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension4;
  var nombrearchivo5 = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension5;
  var nombrearchivo6 = "AUDIO"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension6;


  var formData= new FormData();
  var foto = $("#gif")[0].files[0];
  var foto2 = $("#gif2")[0].files[0];
  var foto3 = $("#gif3")[0].files[0];
  var foto4 = $("#gif4")[0].files[0];
  var foto5 = $("#gif5")[0].files[0];
  var audio = $("#audio")[0].files[0];

  formData.append('usuario',usuario);
  formData.append('instruccion',instruccion);
  formData.append('titulo',titulo);
  formData.append('foto',foto);
  formData.append('descripcion',descripcion);
  formData.append('titulo2',titulo2);
  formData.append('foto2',foto2);
  formData.append('descripcion2',descripcion2);
  formData.append('titulo3',titulo3);
  formData.append('foto3',foto3);
  formData.append('descripcion3',descripcion3);
  formData.append('titulo4',titulo4);
  formData.append('foto4',foto4);
  formData.append('descripcion4',descripcion4);
  formData.append('titulo5',titulo5);
  formData.append('foto5',foto5);
  formData.append('audio',audio);
  formData.append('descripcion5',descripcion5);
  formData.append('link1',link1);
  formData.append('link2',link2);
  formData.append('nombrearchivo',nombrearchivo);
  formData.append('nombrearchivo2',nombrearchivo2);
  formData.append('nombrearchivo3',nombrearchivo3);
  formData.append('nombrearchivo4',nombrearchivo4);
  formData.append('nombrearchivo5',nombrearchivo5);
  formData.append('nombrearchivo6',nombrearchivo6);
  $.ajax({
    "url":"../controlador/rutina/controlador_rutina_registro.php",
    type:'post',
    data:formData,
    contentType:false,
    processData:false,
    success: function(respuesta){
      alert(respuesta);
      if(respuesta !=0){
        if(respuesta==1){
          $("#modal_registro").modal('hide');   
          tablerutina.ajax.reload();
          Swal.fire("Mensaje de confirmacion","Datos guardados correctamente","success");
        }else{
          
          Swal.fire("Mensaje de Advertencia","El usuario ya tiene rutina","warning");
        }
      
      }else{
        Swal.fire("Mensaje De Error","Lo sentimos, no se pudo completar el registro","error");
      }
   
    }
  });
  return false;
}

function LimpiarCampos(){
  $("#cbm_usu").val("");
  $("#gif").val("");
}
$('#tabla_rutina').on('click','.editar',function(){
    var data = tablerutina.row($(this).parents('tr')).data();
    if (tablerutina.row(this).child.isShown()){
        var data = tablerutina.row(this).data();
    } 
    
    $("#modal_editar").modal({backdrop:'static',keyboard:false})
    $("#modal_editar").modal('show');
    $("#txt_rutina_id").val(data.idRutina);
    $("#nombre_editar").val(data.nombre).trigger("change");
    $("#txt_instruc_editar_actual").val(data.instruc_rutina);
    $("#txt_instruc_editar_nuevo").val(data.instruc_rutina);
    $("#txt_titulo_editar_nuevo").val(data.titulo1);
    $("#txt_descripcion_editar_nuevo").val(data.descripcion1);
    $("#txt_titulo2_editar_nuevo").val(data.titulo2);
    $("#txt_descripcion2_editar_nuevo").val(data.descripcion2);
    $("#txt_titulo3_editar_nuevo").val(data.titulo3);
    $("#txt_descripcion3_editar_nuevo").val(data.descripcion3);
    $("#txt_titulo4_editar_nuevo").val(data.titulo4);
    $("#txt_descripcion4_editar_nuevo").val(data.descripcion4);
    $("#txt_titulo5_editar_nuevo").val(data.titulo5);
    $("#txt_descripcion5_editar_nuevo").val(data.descripcion5);
    $("#txt_link1_editar_nuevo").val(data.link1);
    $("#txt_link2_editar_nuevo").val(data.link2);
})

$('#tabla_rutina').on('click','.eliminar',function(){
    var data = tablerutina.row($(this).parents('tr')).data();
    if (tablerutina.row(this).child.isShown()){
        var data = tablerutina.row(this).data();
    }
    Swal.fire({
      title: 'Estas seguro de eliminar la rutina?',
      text: "Una vez eliminada no se prodra acceder a la rutina!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!' 
}).then((result) => {
  if (result.value) {
            $.ajax({
                "url":"../controlador/rutina/controlador_eliminar_rutina.php",
                type:'POST',
                data:{
                    idrutina:data.idRutina
                }
            }).done(function(resp){
                if(resp>0){
                    tablerutina.ajax.reload();
                    Swal.fire("Mensaje De Confirmacion","rutina eliminada","success");      
                }else{
                    Swal.fire("Mensaje De error","No se puede eliminar la rutina","error"); 
                }
            })
        }
    })
})


function Editar_Rutina(){
  var id = document.getElementById('txt_rutina_id').value;
  var instruccionnuevo = document.getElementById('txt_instruc_editar_nuevo').value;
  var titulonuevo = document.getElementById('txt_titulo_editar_nuevo').value;
  var descripcionnuevo = document.getElementById('txt_descripcion_editar_nuevo').value;
  var titulonuevo2 = document.getElementById('txt_titulo2_editar_nuevo').value;
  var descripcionnuevo2 = document.getElementById('txt_descripcion2_editar_nuevo').value;
  var titulonuevo3 = document.getElementById('txt_titulo3_editar_nuevo').value;
  var descripcionnuevo3 = document.getElementById('txt_descripcion3_editar_nuevo').value;
  var titulonuevo4 = document.getElementById('txt_titulo4_editar_nuevo').value;
  var descripcionnuevo4 = document.getElementById('txt_descripcion4_editar_nuevo').value;
  var titulonuevo5 = document.getElementById('txt_titulo5_editar_nuevo').value;
  var descripcionnuevo5 = document.getElementById('txt_descripcion5_editar_nuevo').value;
  var link1nuevo = document.getElementById('txt_link1_editar_nuevo').value;
  var link2nuevo = document.getElementById('txt_link2_editar_nuevo').value;
  
  $.ajax({
      url:'../controlador/rutina/controlador_rutina_editar.php',
      type:'POST',
      data:{
        id:id,
        instruccionnuevo:instruccionnuevo,
        titulonuevo:titulonuevo,
        descripcionnuevo:descripcionnuevo,
        titulonuevo2:titulonuevo2,
        descripcionnuevo2:descripcionnuevo2,
        titulonuevo3:titulonuevo3,
        descripcionnuevo3:descripcionnuevo3,
        titulonuevo4:titulonuevo4,
        descripcionnuevo4:descripcionnuevo4,
        titulonuevo5:titulonuevo5,
        descripcionnuevo5:descripcionnuevo5,
        link1nuevo:link1nuevo,
        link2nuevo:link2nuevo

      }
  }).done(function(resp){
    alert(resp);
      if(resp>0){
          if(resp==1){
            $("#modal_editar").modal('hide');
            tablerutina.ajax.reload();
            Swal.fire("Mensaje de confirmacion","Datos actualizados correctamente","success");
          }else{
            Swal.fire("Mensaje de Advertencia","La rutina ya existe","warning");
        }
        }else{
          Swal.fire("Mensaje de error","Algo anda mal","error")
        }
  })
}

function Editar_Gif(){
  var id = document.getElementById('txt_rutina_id').value;
  var archivo = document.getElementById('gif_editar').value;
  var f = new Date();
  var extension = archivo.split('.').pop();
  var nombrearchivo = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension;
  var formData= new FormData(); 
  var foto = $("#gif_editar")[0].files[0];
   if (archivo.length==0) {
    return Swal.fire("Mesaje de advertencia","Debe seleccionar","warning");
  } 
  formData.append('id',id);
  formData.append('foto',foto);
  formData.append('nombrearchivo',nombrearchivo);
  $.ajax({
    "url":"../controlador/rutina/controlador_rutina_editar_gif.php",
    type:'POST',
    data:formData,
    contentType:false,
    processData:false,
    success: function(respuesta){
      if(respuesta !=0){
          if(respuesta==1){
          $("#modal_editar").modal('hide');
          tablerutina.ajax.reload();
          Swal.fire("Mensaje de confirmacion","Gif actualizado correctamente","success");
      
          }      
      }
         
     }
    });
      return false;
}


function Editar_Gif2(){
  var id = document.getElementById('txt_rutina_id').value;
  var archivo = document.getElementById('gif2_editar').value;
  var f = new Date();
  var extension = archivo.split('.').pop();
  var nombrearchivo = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension;
  var formData= new FormData(); 
  var foto = $("#gif2_editar")[0].files[0];
   if (archivo.length==0) {
    return Swal.fire("Mesaje de advertencia","Debe seleccionar","warning");
  } 
  formData.append('id',id);
  formData.append('foto',foto);
  formData.append('nombrearchivo',nombrearchivo);
  $.ajax({
    "url":"../controlador/rutina/controlador_rutina_editar_gif2.php",
    type:'POST',
    data:formData,
    contentType:false,
    processData:false,
    success: function(respuesta){
      if(respuesta !=0){
          if(respuesta==1){
          $("#modal_editar").modal('hide');
          tablerutina.ajax.reload();
          Swal.fire("Mensaje de confirmacion","Gif actualizado correctamente","success");
      
          }      
      }
         
     }
    });
      return false;
}

function Editar_Gif3(){
  var id = document.getElementById('txt_rutina_id').value;
  var archivo = document.getElementById('gif3_editar').value;
  var f = new Date();
  var extension = archivo.split('.').pop();
  var nombrearchivo = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension;
  var formData= new FormData(); 
  var foto = $("#gif3_editar")[0].files[0];
   if (archivo.length==0) {
    return Swal.fire("Mesaje de advertencia","Debe seleccionar","warning");
  } 
  formData.append('id',id);
  formData.append('foto',foto);
  formData.append('nombrearchivo',nombrearchivo);
  $.ajax({
    "url":"../controlador/rutina/controlador_rutina_editar_gif3.php",
    type:'POST',
    data:formData,
    contentType:false,
    processData:false,
    success: function(respuesta){
      if(respuesta !=0){
          if(respuesta==1){
          $("#modal_editar").modal('hide');
          tablerutina.ajax.reload();
          Swal.fire("Mensaje de confirmacion","Gif actualizado correctamente","success");
      
          }      
      }
         
     }
    });
      return false;
}

function Editar_Gif4(){
  var id = document.getElementById('txt_rutina_id').value;
  var archivo = document.getElementById('gif4_editar').value;
  var f = new Date();
  var extension = archivo.split('.').pop();
  var nombrearchivo = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension;
  var formData= new FormData(); 
  var foto = $("#gif4_editar")[0].files[0];
   if (archivo.length==0) {
    return Swal.fire("Mesaje de advertencia","Debe seleccionar","warning");
  } 
  formData.append('id',id);
  formData.append('foto',foto);
  formData.append('nombrearchivo',nombrearchivo);
  $.ajax({
    "url":"../controlador/rutina/controlador_rutina_editar_gif4.php",
    type:'POST',
    data:formData,
    contentType:false,
    processData:false,
    success: function(respuesta){
      if(respuesta !=0){
          if(respuesta==1){
          $("#modal_editar").modal('hide');
          tablerutina.ajax.reload();
          Swal.fire("Mensaje de confirmacion","Gif actualizado correctamente","success");
      
          }      
      }
         
     }
    });
      return false;
}

function Editar_Gif5(){
  var id = document.getElementById('txt_rutina_id').value;
  var archivo = document.getElementById('gif5_editar').value;
  var f = new Date();
  var extension = archivo.split('.').pop();
  var nombrearchivo = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension;
  var formData= new FormData(); 
  var foto = $("#gif5_editar")[0].files[0];
   if (archivo.length==0) {
    return Swal.fire("Mesaje de advertencia","Debe seleccionar","warning");
  } 
  formData.append('id',id);
  formData.append('foto',foto);
  formData.append('nombrearchivo',nombrearchivo);
  $.ajax({
    "url":"../controlador/rutina/controlador_rutina_editar_gif5.php",
    type:'POST',
    data:formData,
    contentType:false,
    processData:false,
    success: function(respuesta){
      if(respuesta !=0){
          if(respuesta==1){
          $("#modal_editar").modal('hide');
          tablerutina.ajax.reload();
          Swal.fire("Mensaje de confirmacion","Gif actualizado correctamente","success");
      
          }      
      }
         
     }
    });
      return false;
}

function Editar_Audio(){
  var id = document.getElementById('txt_rutina_id').value;
  var archivo = document.getElementById('audio_editar').value;
  var f = new Date();
  var extension = archivo.split('.').pop();
  var nombrearchivo = "AUDIO"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension;
  var formData= new FormData(); 
  var foto = $("#audio_editar")[0].files[0];
   if (archivo.length==0) {
    return Swal.fire("Mesaje de advertencia","Debe seleccionar","warning");
  } 
  formData.append('id',id);
  formData.append('foto',foto);
  formData.append('nombrearchivo',nombrearchivo);
  $.ajax({
    "url":"../controlador/rutina/controlador_rutina_editar_audio.php",
    type:'POST',
    data:formData,
    contentType:false,
    processData:false,
    success: function(respuesta){
      if(respuesta !=0){
          if(respuesta==1){
          $("#modal_editar").modal('hide');
          tablerutina.ajax.reload();
          Swal.fire("Mensaje de confirmacion","Audio actualizado correctamente","success");
      
          }      
      }
         
     }
    });
      return false;
}
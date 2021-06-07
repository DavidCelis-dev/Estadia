
var tableclasifica;
function listar_clasificacion(){
     tableclasifica = $("#tabla_clasificacion").DataTable({
       "ordering":true,   
       "bLengthChange":false,
       "searching": { "regex": false },
       "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
       "pageLength": 10,
       "destroy":true,
       "async": false ,
       "processing": true,
       "ajax":{
           "url":"../controlador/clasificacion/controlador_clasificacion_listar.php",
           type:'POST'
       },
       "order":[[1,'asc']],
       "columns":[
           {"defaultContent":""},
           {"data":"clasifica_nombre"},
           {"data":"clasifica_estatus",
           render: function (data, type, row ) {
               if(data=='ACTIVADO'){
                   return "<span class='label label-success'>"+data+"</span>";                   
               }else{
                 return "<span class='label label-danger'>"+data+"</span>";                 
               }
             }
           },  
           {"defaultContent":"<button style='font-size:13px;' type='button' class='editar btn btn-primary'><i class='fa fa-edit'></i></button>"}
       ],

       "language":idioma_espanol,
       select: true
   });
   document.getElementById("tabla_clasificacion_filter").style.display="none";
   $('input.global_filter').on( 'keyup click', function () {
        filterGlobal();
    } );
    $('input.column_filter').on( 'keyup click', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
    });

    tableclasifica.on( 'draw.dt', function () {
        var PageInfo = $('#tabla_clasificacion').DataTable().page.info();
        tableclasifica.column(0, { page: 'current' }).nodes().each( function (cell, i) {
                cell.innerHTML = i + 1 + PageInfo.start;
            } );
        } );

}

function filterGlobal() {
    $('#tabla_clasificacion').DataTable().search(
        $('#global_filter').val(),
    ).draw();
}

function AbrirModalCategoria(){
  $("#modal_registro").modal({backdrop:'static',keyboard:false})
  $("#modal_registro").modal('show');
}

function Registrar_Clasificacion(){
  var clasificacion =$("#txt_clasificacion").val();
  var estatus       =$("#cbm_estatus").val();

  if(clasificacion.length==0 || estatus.length==0){
      return Swal.fire("Mensaje de advertencia","Llen los campos vacios","warning");
  }

  $.ajax({
      "url":"../controlador/clasificacion/controlador_clasificacion_registro.php",
      type:'POST',
      data:{
          clasificacion:clasificacion,
          estatus:estatus
      }
  }).done(function(resp){
      if(resp>0){
        if(resp==1){
          $("#modal_registro").modal('hide');
          listar_clasificacion();
          limpiarCampos();
          Swal.fire("Mensaje de confirmacion","Datos guardados correctamente","success");
        }else{
          limpiarCampos();
          Swal.fire("Mensaje de Advertencia","La clasificacion ya existe","warning");
      }
      }else{
        Swal.fire("Mensaje de error","Algo anda mal","error");
      }
  })


}

function limpiarCampos(){
  $("#txt_clasificacion").val("");
}

$('#tabla_clasificacion').on('click','.editar',function(){
    var data = tableclasifica.row($(this).parents('tr')).data();
    if (tableclasifica.row(this).child.isShown()){
        var data = tableclasifica.row(this).data();
    }
    
    $("#modal_editar").modal({backdrop:'static',keyboard:false})
    $("#modal_editar").modal('show');
    $("#txt_idclasificacion").val(data.clasifica_id);
    $("#txt_clasificacion_actual_editar").val(data.clasifica_nombre);
    $("#txt_clasificacion_nuevo_editar").val(data.clasifica_nombre);
    $("#cbm_estatus_editar").val(data.clasifica_estatus).trigger("change");
})

function Modificar_Clasificacion(){
  var id = $("#txt_idclasificacion").val();
  var clasificacionactual = $("#txt_clasificacion_actual_editar").val();
  var clasificacionnuevo = $("#txt_clasificacion_nuevo_editar").val();
  var estatus = $("#cbm_estatus_editar").val();

  if(id.length==0){
     return Swal.fire("Mensaje de Advertencia","El id del campo esta vacio","warning");
  }
   if(clasificacionnuevo.length==0){
      return Swal.fire("Mensaje de Advertencia","Debe ingresar una Categoria","warning");
  }

  $.ajax({
      url:'../controlador/clasificacion/controlador_clasificacion_editar.php',
      type:'POST',
      data:{
        id:id,
        clasificacionactual:clasificacionactual,
        clasificacionnuevo:clasificacionnuevo,
        estatus:estatus
      }
  }).done(function(resp){
      if(resp>0){
          if(resp==1){
            $("#modal_editar").modal('hide');
            listar_clasificacion();
            Swal.fire("Mensaje de confirmacion","Datos actualizados correctamente","success");
          }else{
            Swal.fire("Mensaje de Advertencia","La clasificacion ya existe","warning");
        }
        }else{
          Swal.fire("Mensaje de error","Algo anda mal","error")
        }
  })
}
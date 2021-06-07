var tablecategoria;
function listar_categoria(){
     tablecategoria = $("#tabla_categoria").DataTable({
       "ordering":true,   
       "bLengthChange":false,
       "searching": { "regex": false },
       "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
       "pageLength": 10,
       "destroy":true,
       "async": false ,
       "processing": true,
       "ajax":{
           "url":"../controlador/categoria/controlador_categoria_listar.php",
           type:'POST'
       },
       "order":[[1,'asc']],
       "columns":[
           {"defaultContent":""},
           {"data":"catego_nombre"},
           {"data":"catego_estatus",
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
   document.getElementById("tabla_categoria_filter").style.display="none";
   $('input.global_filter').on( 'keyup click', function () {
        filterGlobal();
    } );
    $('input.column_filter').on( 'keyup click', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
    });

    tablecategoria.on( 'draw.dt', function () {
        var PageInfo = $('#tabla_categoria').DataTable().page.info();
        tablecategoria.column(0, { page: 'current' }).nodes().each( function (cell, i) {
                cell.innerHTML = i + 1 + PageInfo.start;
            } );
        } );

}

function filterGlobal() {
    $('#tabla_categoria').DataTable().search(
        $('#global_filter').val(),
    ).draw();
}

function AbrirModalCategoria(){
  $("#modal_registro").modal({backdrop:'static',keyboard:false})
  $("#modal_registro").modal('show');
}

function Registro_Categoria(){
  var categoria = $("#txt_categoria").val();
  var estatus = $("#cbm_estatus").val();
  if (categoria.length==0){
    return Swal.fire("Mensaje de Advertencia","El campo categoria debe tener datos","warning");
  }

  $.ajax({
    url:'../controlador/categoria/controlador_categoria_registro.php',
    type:'post',
    data:{
      c:categoria,
      e:estatus
    }
  }).done(function(resp){
      if(resp>0){
        if(resp==1){
          $("#modal_registro").modal('hide');
          listar_categoria();
          LimpiarDatos();
          Swal.fire("Mensaje de confirmacion","Datos guardados correctamente","success");
        }else{
          LimpiarDatos();
        Swal.fire("Mensaje de Advertencia","La categoria ya existe","warning");
      }
    }
  })
}

function LimpiarDatos(){
    $("#txt_categoria").val("");
}

$('#tabla_categoria').on('click','.editar',function(){
    var data = tablecategoria.row($(this).parents('tr')).data();
    if (tablecategoria.row(this).child.isShown()){
        var data = tablecategoria.row(this).data();
    }
    
    $("#modal_editar").modal({backdrop:'static',keyboard:false})
    $("#modal_editar").modal('show');
    $("#txt_idcategoria").val(data.catego_id);
    $("#txt_categoria_actual_editar").val(data.catego_nombre);
     $("#txt_categoria_nuevo_editar").val(data.catego_nombre);
    $("#cbm_estatus_editar").val(data.catego_estatus).trigger("change");
})

$('#tabla_categoria').on('click','.eliminar',function(){
    var data = tablecategoria.row($(this).parents('tr')).data();
    if (tablecategoria.row(this).child.isShown()){
        var data = tablecategoria.row(this).data();
    }
    Swal.fire({
      title: 'Estas seguro de eliminar la categoria?',
      text: "Una vez eliminada no se prodra acceder a la categoria!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
}).then((result) => {
  if (result.value) {
            $.ajax({
                "url":"../controlador/categoria/controlador_eliminar_categoria.php",
                type:'POST',
                data:{
                    idcatego:data.catego_id
                }
            }).done(function(resp){
                if(resp>0){
                    tablecategoria.ajax.reload();
                    Swal.fire("Mensaje De Confirmacion","Categoria eliminada","success");      
                }else{
                    Swal.fire("Mensaje De error","No se puede eliminar la categoria","error"); 
                }
            })
        }
    })
})

function Modificar_Categoria(){
  var id = $("#txt_idcategoria").val();
  var categoriaactual = $("#txt_categoria_actual_editar").val();
  var categorianuevo = $("#txt_categoria_nuevo_editar").val();
  var estatus = $("#cbm_estatus_editar").val();

  if(id.length==0){
      return Swal.fire("Mensaje de Advertencia","El id del campo esta vacio","warning");
  }
   if(categorianuevo.length==0){
      return Swal.fire("Mensaje de Advertencia","Debe ingresar una Categoria","warning");
  }

  $.ajax({
      url:'../controlador/categoria/controlador_categoria_editar.php',
      type:'POST',
      data:{
        id:id,
        categoriaactual:categoriaactual,
        categorianuevo:categorianuevo,
        estatus:estatus
      }
  }).done(function(resp){
      if(resp>0){
         $("#modal_editar").modal('hide');
          if(resp==1){
              listar_categoria();
              Swal.fire("Mensaje de Confirmacion","Todo esta bien","success");
          }else{
             Swal.fire("Mensaje de Advertencia","La categoria ya existe","warning");
          }
       }else{
          Swal.fire("Mensaje de error","Algo anda mal","error");
       }
  })
}


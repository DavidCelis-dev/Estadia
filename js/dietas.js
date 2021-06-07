
var tabledietas;
function listar_dietas(){
     tabledietas = $("#tabla_dietas").DataTable({
       "ordering":true,   
       "bLengthChange":false,
       "searching": { "regex": false },
       "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
       "pageLength": 10,
       "destroy":true,
       "async": false ,
       "processing": true,
       "ajax":{
           "url":"../controlador/dietas/controlador_dietas_listar.php",
           type:'POST'
       },
       "order":[[1,'asc']],
       "columns":[
           {"defaultContent":""},
           {"data":"nombre"},
           /*{"data":"usu_nombre"},*/
           {"data":"titu_dieta"},
           {"defaultContent":"<button style='font-size:13px;' type='button' class='dietas btn btn-default' title='dietas'><i class='fa fa-eye'></i></button>&nbsp;"},
           {"defaultContent":"<button style='font-size:13px;' type='button' class='editar btn btn-primary'><i class='fa fa-edit'></i></button> </i></button>&nbsp;<button style='font-size:13px;' type='button' class='eliminar btn btn-danger'><i class='fa fa-trash'></i></button>"}
       ],

       "language":idioma_espanol,
       select: true
   });
   document.getElementById("tabla_dietas_filter").style.display="none";
   $('input.global_filter').on( 'keyup click', function () {
        filterGlobal();
    } );
    $('input.column_filter').on( 'keyup click', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
      });

    tabledietas.on( 'draw.dt', function () {
        var PageInfo = $('#tabla_dietas').DataTable().page.info();
        tabledietas.column(0, { page: 'current' }).nodes().each( function (cell, i) {
                cell.innerHTML = i + 1 + PageInfo.start;
            } );
        } );

}

$('#tabla_dietas').on('click','.dietas',function(){
    var data = tabledietas.row($(this).parents('tr')).data();
    if (tabledietas.row(this).child.isShown()){
        var data = tabledietas.row(this).data();
    }
    $("#modal_dietas").modal({backdrop:'static',keyboard:false})
    $("#modal_dietas").modal('show');
    $("#descripcion_ojo").val(data.descrip_dieta);
   
})

function filterGlobal() {
    $('#tabla_dietas').DataTable().search(
        $('#global_filter').val(),
    ).draw();
}

function AbrirModalDietas(){
  $("#modal_registro").modal({backdrop:'static',keyboard:false})
  $("#modal_registro").modal('show');
}

function listar_usuario_combo(){
    $.ajax({
        "url":"../controlador/dietas/controlador_combo_usuario_listar.php",
        type:'POST'
    }).done(function(resp){
        var data = JSON.parse(resp);
        var cadena="";
        if(data.length>0){
            for(var i=0; i < data.length; i++){
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            $("#usu").html(cadena);
            $("#usu_editar").html(cadena);
        }else{
            cadena+="<option value=''>NO SE ENCONTRARON REGISTROS</option>";
            $("usu").html(cadena);
            $("#usu_editar").html(cadena);
        }
    })
}

/*function listar_usuario_combo_editar(){
    $.ajax({
        "url":"../controlador/dietas/controlador_combo_usuario_listar.php",
        type:'POST'
    }).done(function(resp){
        var data = JSON.parse(resp);
        var cadena="";
        if(data.length>0){
            for(var i=0; i < data.length; i++){
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            $("#usu_editar").html(cadena);
        }else{
            cadena+="<option value=''>NO SE ENCONTRARON REGISTROS</option>";
            $("#usu_editar").html(cadena);
        }
    })
}*/


function Registrar_Dietas(){
    var usu =$("#usu").val();
    var titulo =$("#titulo").val();
    var descripcion =$("#descripcion").val();
    if(usu.length==0 || titulo.length==0 || descripcion.length==0){
        return Swal.fire("Mensaje De Advertencia","Llene los campos vacios","warning");
    }

   
    $.ajax({
        "url":"../controlador/dietas/controlador_dietas_registro.php",
        type:'POST',
        data:{
            usu:usu,
            titulo:titulo,
            descripcion:descripcion
        }
    }).done(function(resp){
      alert(resp);
        if(resp>0){
            if(resp==1){
                $("#modal_registro").modal('hide');
                    Swal.fire("Mensaje De Confirmacion","Datos correctamente, Nuevo Usuario Registrado","success");          
                    limpiarCampos();
                    tabledietas.ajax.reload();
               
            }else{
                limpiarCampos();
                Swal.fire("Mensaje De Advertencia","Lo sentimos, el nombre del usuario ya se encuentra en nuestra base de datos","warning");
            }
        }else{
              Swal.fire("Mensaje De Error","Lo sentimos, no se pudo completar el registro","error");
        }
    })


}

function limpiarCampos(){
  $("#usu").val("");
  $("#titulo").val("");
  $("#descripcion").val("");

}

$('#tabla_dietas').on('click','.editar',function(){
    var data = tabledietas.row($(this).parents('tr')).data();
    if (tabledietas.row(this).child.isShown()){
        var data = tabledietas.row(this).data();
    }
    
    $("#modal_editar").modal({backdrop:'static',keyboard:false})
    $("#modal_editar").modal('show');
    $("#txt_dieta_id").val(data.id_dieta);
    $("#usu_editar").val(data.usu_id).trigger("change");
   $("#titulo_editar").val(data.titu_dieta);
    $("#descripcion_editar").val(data.descrip_dieta);
})

$('#tabla_dietas').on('click','.eliminar',function(){
    var data = tabledietas.row($(this).parents('tr')).data();
    if (tabledietas.row(this).child.isShown()){
        var data = tabledietas.row(this).data();
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
                "url":"../controlador/dietas/controlador_eliminar_dietas.php",
                type:'POST',
                data:{
                    iddietas:data.id_dieta
                }
            }).done(function(resp){
                if(resp>0){
                    tabledietas.ajax.reload();
                    Swal.fire("Mensaje De Confirmacion","rutina eliminada","success");      
                }else{
                    Swal.fire("Mensaje De error","No se puede eliminar la rutina","error"); 
                }
            })
        }
    })
})

function Modificar_Dietas(){
    var usu =$("#usu_editar").val();
    var titulo =$("#titulo_editar").val();
    var descripcion =$("#descripcion_editar").val();
    if(usu.length==0 || titulo.length==0 || descripcion.length==0){
        return Swal.fire("Mensaje De Advertencia","Llene los campos vacios","warning");
    }

    $.ajax({
        "url":"../controlador/dietas/controlador_dietas_modificar.php",
        type:'POST',
        data:{
            usu:usu,
            titulo:titulo,
            descripcion:descripcion
        }
    }).done(function(resp){
        if(resp>0){
                listar_dietas();
                $("#modal_editar").modal('hide');
                Swal.fire("Mensaje De Confirmacion","Datos actualizados correctamente","success");            
                    tabledietas.ajax.reload();
                
        }else{
            Swal.fire("Mensaje De Error","Lo sentimos, no se pudo completar la actualizacion","error");
        }
    })


}
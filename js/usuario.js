 function VerificarUsuario(){
    var usu = $("#txt_usu").val();
    var con = $("#txt_con").val();

    if(usu.length==0 || con.length==0){
        return Swal.fire("Mensaje De Advertencia","Llene los campos vacios","warning");
    }
    $.ajax({
        url:'../controlador/usuario/controlador_verificar_usuario.php',
        type:'POST',
        data:{
            user:usu,
            pass:con
        }
    }).done(function(resp){
        if(resp==0){
            Swal.fire("Mensaje De Error",'Usuario y/o contrase\u00f1a incorrecta',"error");
        }else{
            var data= JSON.parse(resp);
            if(data[0][8]==='INACTIVO'){
                return Swal.fire("Mensaje De Advertencia","Lo sentimos el usuario "+usu+" se encuentra suspendido, comuniquese con el administrador","warning");
            }
            $.ajax({
                url:'../controlador/usuario/controlador_crear_session.php',
                type:'POST',
                data:{
                    idusuario:data[0][0],
                    user:data[0][1],
                    rol:data[0][7]
                }
            }).done(function(resp){
                let timerInterval
                Swal.fire({
                title: 'BIENVENIDO AL SISTEMA',
                html: 'Usted sera redireccionado en <b></b> milisegundos.',
                timer: 2000,
                timerProgressBar: true,
                onBeforeOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                        b.textContent = Swal.getTimerLeft()
                        }
                    }
                    }, 100)
                },
                onClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    location.reload();
                }
})
            })
           
        }
    })
}
var table;
function listar_usuario(){
     table = $("#tabla_usuario").DataTable({
       "ordering":true,   
       "bLengthChange":false,
       "searching": { "regex": false },
       "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
       "pageLength": 10,
       "destroy":true,
       "async": false ,
       "processing": true,
       "ajax":{
           "url":"../controlador/usuario/controlador_usuario_listar.php",
           type:'POST'
       },
       "columns":[
           {"data":"posicion"},
           {"data":"nombre"},
           {"data":"usu_nombre"},
           /*{"data":"usu_email"},*/
           {"data":"rol_nombre"},
           {"data":"usu_sexo",
                render: function (data, type, row ) {
                    if(data=='M'){
                        return "M";                   
                    }else{
                        return "F";                 
                    }
                }
           },
           {"data":"clasifica_nombre"},
           {"data":"catego_nombre"}, 
           {"defaultContent":"<button style='font-size:13px;' type='button' class='observaciones btn btn-default' title='observaciones'><i class='fa fa-eye'></i></button>&nbsp;"},
           {"data":"foto",
                render: function(data,type,row){
                    return '<img src="../'+data+'" class="img-circle m-r-10" style="width:50px;">';
                }
           },
           {"data":"usu_estatus",
             render: function (data, type, row ) {
               if(data=='ACTIVO'){
                   return "<span class='label label-success'>"+data+"</span>";                   
               }else{
                 return "<span class='label label-danger'>"+data+"</span>";                 
               }
             }
           },  
           {"defaultContent":"<button style='font-size:13px;' type='button' class='editar btn btn-primary'><i class='fa fa-edit'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='descativar btn btn-danger'><i class='fa fa-times'></i></button>&nbsp;<button style='font-size:13px;' type='button' class='activar btn btn-success'><i class='fa fa-check'></i></button> </i></button>&nbsp;<button style='font-size:13px;' type='button' class='eliminar btn btn-danger'><i class='fa fa-trash'></i></button>"}
       ],

       "language":idioma_espanol,
       select: true
   });
   document.getElementById("tabla_usuario_filter").style.display="none";
   $('input.global_filter').on( 'keyup click', function () {
        filterGlobal();
    } );
    $('input.column_filter').on( 'keyup click', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
    });

}

$('#tabla_usuario').on('click','.activar',function(){
    var data = table.row($(this).parents('tr')).data();
    if (table.row(this).child.isShown()){
        var data = table.row(this).data();
    }
    Swal.fire({
      title: 'Estas seguro de activar al usuario?',
      text: "Una vez activado el usuario tendra acceso al sitema!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, activar!'
}).then((result) => {
  if (result.value) {
            Modificar_Estatus(data.usu_id,'ACTIVO');
        }
    })
})

$('#tabla_usuario').on('click','.descativar',function(){
    var data = table.row($(this).parents('tr')).data();
    if (table.row(this).child.isShown()){
        var data = table.row(this).data();
    }
    Swal.fire({
      title: 'Estas seguro de descativar al usuario?',
      text: "Una vez desactivdo el usuario no tendra acceso al sitema!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desactivar!'
}).then((result) => {
  if (result.value) {
            Modificar_Estatus(data.usu_id,'INACTIVO');
        }
    })
})

$('#tabla_usuario').on('click','.editar',function(){
    var data = table.row($(this).parents('tr')).data();
    if (table.row(this).child.isShown()){
        var data = table.row(this).data();
    }
    $("#modal_editar").modal({backdrop:'static',keyboard:false})
    $("#modal_editar").modal('show');
    $("#txtidusuario").val(data.usu_id);
    $("#txtusu_editar").val(data.usu_nombre);
    $("#txt_email_editar").val(data.usu_email);
    $("#cbm_sexo_editar").val(data.usu_sexo).trigger("change");
    $("#cbm_clasifica_editar").val(data.clasifica_id).trigger("change");
    $("#cbm_cate_editar").val(data.catego_id).trigger("change");
    $("#txt_numero_editar").val(data.numero);
    $("#txt_observa_editar").val(data.usu_observa);
    $("#cbm_rol_editar").val(data.rol_id).trigger("change");
    $("#txt_nombre_editar").val(data.nombre);
})

$('#tabla_usuario').on('click','.observaciones',function(){
    var data = table.row($(this).parents('tr')).data();
    if (table.row(this).child.isShown()){
        var data = table.row(this).data();
    }
    $("#modal_observaciones").modal({backdrop:'static',keyboard:false})
    $("#modal_observaciones").modal('show');
    $("#txt_observaciones").val(data.usu_observa);
   
})

$('#tabla_usuario').on('click','.eliminar',function(){
    var data = table.row($(this).parents('tr')).data();
    if (table.row(this).child.isShown()){
        var data = table.row(this).data();

    }
    Swal.fire({
      title: 'Estas seguro de eliminar al usuario?',
      text: "Una vez eliminado el usuario no tendra acceso al sitema!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
}).then((result) => {
  if (result.value) {
            $.ajax({
                "url":"../controlador/usuario/controlador_eliminar_usuario.php",
                type:'POST',
                data:{
                    idusuario:data.usu_id
                }
            }).done(function(resp){
                if(resp>0){
                    table.ajax.reload();
                    Swal.fire("Mensaje De Confirmacion","Usuario eliminado","success");      
                }else{
                    Swal.fire("Mensaje De error","No se puede eliminar al usuario","error"); 
                }
            })
        }
    })
})

function Modificar_Estatus(idusuario,estatus){
    var mensaje ="";
    if(estatus=='INACTIVO'){
        mensaje="desactivo";
    }else{
        mensaje="activo";
    }
    $.ajax({
        "url":"../controlador/usuario/controlador_modificar_estatus_usuario.php",
        type:'POST',
        data:{
            idusuario:idusuario,
            estatus:estatus
        }
    }).done(function(resp){
        if(resp>0){
            Swal.fire("Mensaje De Confirmacion","El usuario se "+mensaje+" con exito","success")            
                .then ( ( value ) =>  {
              
                    table.ajax.reload();
                }); 
        }
    })


}

function filterGlobal() {
    $('#tabla_usuario').DataTable().search(
        $('#global_filter').val(),
    ).draw();
}


function AbrirModalRegistro(){
    $("#modal_registro").modal({backdrop:'static',keyboard:false})
    $("#modal_registro").modal('show');
    listar_combo_categoria();
    listar_combo_clasificacion();

    
}

function listar_combo_rol(){
    $.ajax({
        "url":"../controlador/usuario/controlador_combo_rol_listar.php",
        type:'POST'
    }).done(function(resp){
        var data = JSON.parse(resp);
        var cadena="";
        if(data.length>0){
            for(var i=0; i < data.length; i++){
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            $("#cbm_rol").html(cadena);
            $("#cbm_rol_editar").html(cadena);
        }else{
            cadena+="<option value=''>NO SE ENCONTRARON REGISTROS</option>";
            $("#cbm_rol").html(cadena);
            $("#cbm_rol_editar").html(cadena);
        }
    })
}

function listar_combo_categoria(){
    $.ajax({
        "url":"../controlador/usuario/controlador_combo_categoria_listar.php",
        type:'POST'
    }).done(function(resp){
        var data = JSON.parse(resp);
        var cadena="";
        if(data.length>0){
            for(var i=0; i < data.length; i++){
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            $("#cbm_catego").html(cadena);
            $("#cbm_cate_editar").html(cadena);
        }else{
            cadena+="<option value=''>NO SE ENCONTRARON REGISTROS</option>";
            $("#cbm_catego").html(cadena);
            $("#cbm_cate_editar").html(cadena);
        }
    })
}

function listar_combo_clasificacion(){
    $.ajax({
        "url":"../controlador/usuario/controlador_combo_clasificacion_listar.php",
        type:'POST'
    }).done(function(resp){
        var data = JSON.parse(resp);
        var cadena="";
        if(data.length>0){
            for(var i=0; i < data.length; i++){
                cadena+="<option value='"+data[i][0]+"'>"+data[i][1]+"</option>";
            }
            $("#cbm_clasifica").html(cadena);
            $("#cbm_clasifica_editar").html(cadena);
        }else{
            cadena+="<option value=''>NO SE ENCONTRARON REGISTROS</option>";
            $("#cbm_clasifica").html(cadena);
            $("#cbm_clasifica_editar").html(cadena);
        }
    })
}
function Registrar_Usuario(){
  var usuario = $("#txt_usu").val();
  var email = $("#txt_email").val();
  var contra = $("#txt_con1").val();
  var contra2 = $("#txt_con2").val();
  var sexo = $("#cbm_sexo").val();
  var clasifica = $("#cbm_clasifica").val();
  var catego = $("#cbm_catego").val();
  var numero = $("#txt_numero").val();
  var observa = $("#txt_observa").val();
  var archivo = $("#fotografia").val();
  var rol = $("#cbm_rol").val();
  var validaremail = $("#validar_email").val();
  var nombre = $("#txt_nombre").val();
  
  

    if(usuario.length==0 || email.length==0 || contra.length==0 || contra2.length==0 || sexo.length==0 || clasifica.length==0 || catego.length==0 || observa.length==0 || rol.length==0 || numero.length==0 || nombre.length==0){
    return Swal.fire("Mesaje de advertencia","Algo anda mal","warning");
  }

  if(contra != contra2){
        return Swal.fire("Mensaje De Advertencia","Las contraseñas deben coincidir","warning");        
    }

    if(validaremail=="incorrecto"){
        return Swal.fire("Mensaje De Advertencia","El formato de email es incorrecto","warning");
    }

  if(usuario.length==0 || email.length==0 || contra.length==0 || contra2.length==0 || sexo.length==0 || clasifica.length==0 || catego.length==0 || observa.length==0 || rol.length==0 || numero.length==0){
    return Swal.fire("Mesaje de advertencia","Algo anda mal","warning");
  }

  var f = new Date();
  var extension = archivo.split('.').pop();
  var nombrearchivo = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension;
  
  var formData= new FormData();
  var foto = $("#fotografia")[0].files[0];

  formData.append('usuario',usuario);
  formData.append('email',email);
  formData.append('contra',contra);
  formData.append('sexo',sexo);
  formData.append('clasifica',clasifica);
  formData.append('catego',catego);
  formData.append('numero',numero);
  formData.append('observa',observa);
  formData.append('rol',rol);
  formData.append('foto',foto);
  formData.append('nombrearchivo',nombrearchivo);
  formData.append('nombre',nombre);

  $.ajax({
    "url":"../controlador/usuario/controlador_usuario_registro.php",
    type:'post',
    data:formData,
    contentType:false,
    processData:false,
    success: function(respuesta){
      alert(respuesta);
      if(respuesta !=0){
        if(respuesta==1){
          $("#modal_registro").modal('hide');
            LimpiarRegistro();
            table.ajax.reload();
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

function Modificar_Usuario(){
    var idusuario = $("#txtidusuario").val();
    var sexo = $("#cbm_sexo_editar").val();
    var clasifica = $("#cbm_clasifica_editar").val();
    var catego = $("#cbm_cate_editar").val();
    var numero = $("#txt_numero_editar").val();
    var observaciones = $("#txt_observa_editar").val();
    var rol = $("#cbm_rol_editar").val();
    var email = $("#txt_email_editar").val();
    var validaremail = $("#validar_email_editar").val();
    var nombre = $("#txt_nombre_editar").val();
    if(idusuario.length==0 || sexo.length==0 || clasifica.length==0 || catego.length==0 || observaciones.length==0 || rol.length==0 || numero.length==0 || nombre.length==0){
        return Swal.fire("Mensaje De Advertencia","Llene los campos vacios","warning");
    }

     if(validaremail=="incorrecto"){
        return Swal.fire("Mensaje De Advertencia","El formato de email es incorrecto","warning");
    }

    $.ajax({
        "url":"../controlador/usuario/controlador_usuario_modificar.php",
        type:'POST',
        data:{
            idusuario:idusuario,
            sexo:sexo,
            clasifica:clasifica,
            catego:catego,
            numero,numero,
            observaciones:observaciones,
            rol:rol,
            email:email,
            nombre:nombre
        }
    }).done(function(resp){
        if(resp>0){
            TraerDatosUsuario();
                $("#modal_editar").modal('hide');
                Swal.fire("Mensaje De Confirmacion","Datos actualizados correctamente","success")            
                .then ( ( value ) =>  {
                    table.ajax.reload();
                });
        }else{
            Swal.fire("Mensaje De Error","Lo sentimos, no se pudo completar la actualizacion","error");
        }
    })


}

function LimpiarRegistro(){
    $("#txt_usu").val("");
    $("#txt_con1").val("");
    $("#txt_con2").val("");
    $("#txt_catego").val("");
    $("#txt_observa").val("");
    $("#txt_email").val("");
    $("#txt_numero").val("");
    $("#txt_nombre").val("");
}

function TraerDatosUsuario(){
    var usuario = $("#usuarioprincipal").val();
    $.ajax({
        "url":"../controlador/usuario/controlador_traerdatos_usuario.php",
        type:'POST',
        data:{
            usuario:usuario
        }
    }).done(function(resp){
        var data = JSON.parse(resp);
        if(data.length>0){
            $("#txtcontra_bd").val(data[0][2]);
            if(data[0][3]==="M"){
                $("#img_nav").attr("src","../Plantilla/dist/img/avatar5.png");
                $("#img_subnav").attr("src","../Plantilla/dist/img/avatar5.png");
                $("#img_lateral").attr("src","../Plantilla/dist/img/avatar5.png");
            }else{
                $("#img_nav").attr("src","../Plantilla/dist/img/avatar3.png");
                $("#img_subnav").attr("src","../Plantilla/dist/img/avatar3.png");
                $("#img_lateral").attr("src","../Plantilla/dist/img/avatar3.png");
            }
        }
    })
}

function AbrirModalEditarContra(){
    $("#modal_editar_contra").modal({backdrop:'static',keyboard:false})
    $("#modal_editar_contra").modal('show');
    $("#modal_editar_contra").on('shown.bs.modal',function(){
    $("#txtcontraactual_editar").focus();  
    })
}

function Editar_Contra(){
    var idusuario = $("#txtidprincipal").val();
    var contrabd = $("#txtcontra_bd").val();
    var contraescrita = $("#txtcontraactual_editar").val();
    var contranu = $("#txtcontranu_editar").val();
    var contrare = $("#txtcontrare_editar").val();
    if (contraescrita.length==0 || contranu.length==0 || contrare.length==0) {
        return Swal.fire("Mensaje de advertencia","Llene los campos vacios","warning");
    }

    if (contranu != contrare) {
        return Swal.fire("Mensaje de advertencia","Ingresar la misma clave","warning");
    }

    $.ajax({
        url:'../controlador/usuario/controlador_contra_modificar.php',
        type:'POST',
        data:{
            idusuario:idusuario,
            contrabd:contrabd,
            contraescrita:contraescrita,
            contranu:contranu
        }
    }).done(function(resp){
        if(resp>0) {
            if (resp==1) {
                    $("#modal_editar_contra").modal('hide');
                    LimpiarEditarContra();  
                    Swal.fire("Mensaje De Confirmacion","Contrase\u00f1a actualizada correctamente","success")            
                    .then ( ( value ) =>  {
                    TraerDatosUsuario();
                });
            }else{
                Swal.fire("Mensaje de error","La contrase\u00f1a no coincide","error");
            }

        }else{
            Swal.fire("Mensaje de error","No se pudo actualizar la contrase\u00f1a","error");
        }
    })
}

function LimpiarEditarContra(){
    $("#txtcontrare_editar").val("");
    $("#txtcontranu_editar").val("");
    $("#txtcontraactual_editar").val("");
}

function AbrirModalRestablecer(){
    $("#modal_restablecer_contra").modal({backdrop:'static',keyboard:false})
    $("#modal_restablecer_contra").modal('show');
    $("#modal_restablecer_contra").on('shown.bs.modal',function(){
        $("#txt_email").focus();  
    })
}

function Restablecer_Contra(){
    var email = $("#txt_email").val();
    if(email.length==0){
        return Swal.fire("Mensaje de Advertencia","Llene los campos vacios","warning");
    }
    var caracteres="abcdefghijklmnopqrstuvvxyzABCDEFGHIJKLMNOPQRsTUVWXYZ23456789";
    var contrasena ="";
    for(var i=0;i<6;i++){
        contrasena+=caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    }
    $.ajax({
        url:'../controlador/usuario/controlador_restablecer_contra.php',
        type:'POST',
        data:{
            email:email,
            contrasena:contrasena
        }
    }).done(function(resp){
        if(resp>0){
            if(resp==1){
                Swal.fire("Mensaje de Confirmaci&#243n","Su contrase&#241;a fue restablecida con exito al correo: "+email+"","success");
            }else{
                Swal.fire("Mensaje de Advertencia","El correo ingresado no se encuentro guardado","warning");
            }
        }else{
            Swal.fire("Mensaje de Error","No se pudo restablecer su contrase&#241;a","error");
        }
    })
}

function Editar_Foto(){
  var id = document.getElementById('txtidusuario').value;
  var archivo = document.getElementById('foto_editar').value;
  var f = new Date();
  var extension = archivo.split('.').pop();
  var nombrearchivo = "IMG"+f.getDate()+""+(f.getMonth()+1)+""+f.getFullYear()+""+f.getHours()+""+f.getMinutes()+""+f.getSeconds()+"."+extension;
  var formData= new FormData(); 
  var foto = $("#foto_editar")[0].files[0];
   if (archivo.length==0) {
    return Swal.fire("Mesaje de advertencia","Debe seleccionar","warning");
  } 
  formData.append('id',id);
  formData.append('foto',foto);
  formData.append('nombrearchivo',nombrearchivo);
  $.ajax({
    "url":"../controlador/usuario/controlador_usuario_editar_foto.php",
    type:'POST',
    data:formData,
    contentType:false,
    processData:false,
    success: function(respuesta){
      alert(respuesta);
      if(respuesta !=0){
          if(respuesta==1){
          $("#modal_editar").modal('hide');
          table.ajax.reload();
          Swal.fire("Mensaje de confirmacion","Gif actualizado correctamente","success");
      
          }      
      }
         
     }
    });
      return false;
}
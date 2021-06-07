<script type="text/javascript" src="../js/rutina.js?rev=<?php   echo time();?>"></script>
<div class="col-md-12">
    <div class="box box-warning box-solid">
        <div class="box-header with-border">
              <h3 class="box-title">Gestionar Rutinas</h3>

            <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
            </div>
              <!-- /.box-tools -->
        </div>
            <!-- /.box-header -->
            <div class="box-body">
               
            <div class="form-group">
                <div class="col-lg-10">
                    <div class="input-group">
                        <input type="text" class="global_filter form-control" id="global_filter" placeholder="Ingresar dato a buscar">
                        <span class="input-group-addon"><i class="fa fa-search"></i></span>
                    </div>
                </div>
                <div class="col-lg-2">
                    <button class="btn btn-danger" style="width:100%" onclick="AbrirModalCategoria()"><i class="glyphicon glyphicon-plus"></i>Nuevo Registro</button>
                </div>
            </div>
            <table id="tabla_rutina" class="display responsive nowrap" style="width:100%">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <!-- <th>Usuario</th> -->
                        <!-- <th>Instruccion</th> -->                        
                        <th>Imagen 1</th>
                        <th>Imagen 2</th>
                        <th>Imagen 3</th>
                        <th>Imagen 4</th>
                        <th>Imagen 5</th>
                        <th>Acci&oacute;n</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <!-- <th>Usuario</th> -->
                        <!-- <th>Instruccion</th>  -->                       
                        <th>Imagen 1</th>
                        <th>Imagen 2</th>
                        <th>Imagen 3</th>
                        <th>Imagen 4</th>
                        <th>Imagen 5</th>
                        <th>Acci&oacute;n</th>
                    </tr>
                </tfoot>
            </table>
            </div>
             
            <!-- /.box-body -->
    </div>
          <!-- /.box -->
</div>
<div class="modal lg" id="modal_registro" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title" style="text-align:center"><b>Registro De Rutinas </b></h4>
            </div>
            <div class="modal-body">
                <form method="POST" action="#" enctype="multipart/form-data" onsubmit="return false">
                    <div class="col-lg-12">
                        <label for="">Usuario</label>
                       <select class="js-example-basic-single" name="state" id="nombre" style="width:100%;">
                        </select><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Instruccion</label>
                        <textarea id="txt_instruc" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Titulo 1</label>
                        <input type="text" class="form-control" id="txt_titulo" placeholder="Ingrese Titulo"><br>
                    </div>
                    <div class="col-lg-12">
                        <label>Subir Rutina 1</label>
                        <input type="file" id="gif" accept="image/*">
                    </div>
                    <div class="col-lg-12">
                        <label for="">Descripcion1</label>
                        <textarea id="txt_descripcion" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Titulo 2</label>
                        <input type="text" class="form-control" id="txt_titulo2" placeholder="Ingrese Titulo"><br>
                    </div>
                    <div class="col-lg-12">
                        <label>Subir Rutina 2</label>
                        <input type="file" id="gif2" accept="image/*">
                    </div>
                    <div class="col-lg-12">
                        <label for="">Descripcion 2</label>
                        <textarea id="txt_descripcion2" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Titulo 3</label>
                        <input type="text" class="form-control" id="txt_titulo3" placeholder="Ingrese Titulo"><br>
                    </div>
                    <div class="col-lg-12">
                        <label>Subir Rutina 3</label>
                        <input type="file" id="gif3" accept="image/*">
                    </div>
                    <div class="col-lg-12">
                        <label for="">Descripcion 3</label>
                        <textarea id="txt_descripcion3" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Titulo 4</label>
                        <input type="text" class="form-control" id="txt_titulo4" placeholder="Ingrese Titulo"><br>
                    </div>
                    <div class="col-lg-12">
                        <label>Subir Rutina 4</label>
                        <input type="file" id="gif4" accept="image/*">
                    </div>
                    <div class="col-lg-12">
                        <label for="">Descripcion 4</label>
                        <textarea id="txt_descripcion4" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Titulo 5</label>
                        <input type="text" class="form-control" id="txt_titulo5" placeholder="Ingrese Titulo"><br>
                    </div>
                    <div class="col-lg-12">
                        <label>Subir Rutina 5</label>
                        <input type="file" id="gif5" accept="image/*">
                    </div>
                    <div class="col-lg-12">
                        <label for="">Descripcion 5</label>
                        <textarea id="txt_descripcion5" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label>Subir Audio</label>
                        <input type="file" id="audio" accept="audio/*">
                    </div>
                    <div class="col-lg-12">
                        <label for="">Link 1</label>
                        <input type="text" class="form-control" id="txt_link1" placeholder="Ingrese link calentamiento" disabled><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Link 2</label>
                        <input type="text" class="form-control" id="txt_link2" placeholder="Ingrese link relajación" disabled><br>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="Registar_Rutina()"><i class="fa fa-check"><b>&nbsp;Registrar</b></i></button>
                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-close"><b>&nbsp;Cerrar</b></i></button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="modal_editar" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title" style="text-align:center"><b>Editar Rutina</b></h4>
                </div>
            <div class="modal-body">
                <form method="POST" action="#" enctype="multipart/form-data" onsubmit="return false">
                    <div class="col-lg-12" hidden>
                        <label for="">Usuario</label>
                        <input type="text" id="txt_rutina_id" hidden>
                       <select class="js-example-basic-single" name="state" id="nombre_editar" style="width:100%;">
                        </select><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Instruccion</label><br>
                        <textarea id="txt_instruc_editar_nuevo" rows="5" class="form-control" style="resize: none;"></textarea><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Titulo1</label>
                        <input type="text" class="form-control" id="txt_titulo_editar_nuevo" placeholder="Ingrese Titulo"><br>
                    </div>  
                    <div class="col-lg-10">
                        <label>Actualizar Rutina 1</label>
                        <input type="file" id="gif_editar" accept="image/*" class="form-control-file">
                    </div>
                    <div class="col-lg-2">
                        <label>&nbsp;</label><br>
                        <button class="btn btn-success" onclick="Editar_Gif()">Actualizar</button>
                    </div>
                    <br>
                    <div class="col-lg-12">
                        <label for="">Descripcion 1</label>
                        <textarea id="txt_descripcion_editar_nuevo" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Titulo 2</label>
                        <input type="text" class="form-control" id="txt_titulo2_editar_nuevo" placeholder="Ingrese Titulo"><br>
                    </div>
                    <div class="col-lg-10">
                        <label>Actualizar Rutina 2</label>
                        <input type="file" id="gif2_editar" accept="image/*" class="form-control-file">
                    </div>
                    <div class="col-lg-2">
                        <label>&nbsp;</label><br>
                        <button class="btn btn-success" onclick="Editar_Gif2()">Actualizar</button>
                    </div><br>
                    <div class="col-lg-12">
                        <label for="">Descripcion 2</label>
                        <textarea id="txt_descripcion2_editar_nuevo" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Titulo 3</label>
                        <input type="text" class="form-control" id="txt_titulo3_editar_nuevo" placeholder="Ingrese Titulo"><br>
                    </div>
                    <div class="col-lg-10">
                        <label>Actualizar Rutina 3</label>
                        <input type="file" id="gif3_editar" accept="image/*" class="form-control-file">
                    </div>
                    <div class="col-lg-2">
                        <label>&nbsp;</label><br>
                        <button class="btn btn-success" onclick="Editar_Gif3()">Actualizar</button>
                    </div><br>
                    <div class="col-lg-12">
                        <label for="">Descripcion 3</label>
                        <textarea id="txt_descripcion3_editar_nuevo" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Titulo 4</label>
                        <input type="text" class="form-control" id="txt_titulo4_editar_nuevo" placeholder="Ingrese Titulo"><br>
                    </div>
                    <div class="col-lg-10">
                        <label>Actualizar Rutina 4</label>
                        <input type="file" id="gif4_editar" accept="image/*" class="form-control-file">
                    </div>
                    <div class="col-lg-2">
                        <label>&nbsp;</label><br>
                        <button class="btn btn-success" onclick="Editar_Gif4()">Actualizar</button>
                    </div><br>
                    <div class="col-lg-12">
                        <label for="">Descripcion 4</label>
                        <textarea id="txt_descripcion4_editar_nuevo" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Titulo 5</label>
                        <input type="text" class="form-control" id="txt_titulo5_editar_nuevo" placeholder="Ingrese Titulo"><br>
                    </div>
                    <div class="col-lg-10">
                        <label>Actualizar Rutina 5</label>
                        <input type="file" id="gif5_editar" accept="image/*" class="form-control-file">
                    </div>
                    <div class="col-lg-2">
                        <label>&nbsp;</label><br>
                        <button class="btn btn-success" onclick="Editar_Gif5()">Actualizar</button>
                    </div><br>
                    <div class="col-lg-12">
                        <label for="">Descripcion 5</label>
                        <textarea id="txt_descripcion5_editar_nuevo" rows="5" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-10">
                        <label>Actualizar Audio</label>
                        <input type="file" id="audio_editar" accept="audio/*" class="form-control-file">
                    </div>
                    <div class="col-lg-2">
                        <label>&nbsp;</label><br>
                        <button class="btn btn-success" onclick="Editar_Audio()">Actualizar</button>
                    </div><br><br>
                    <div class="col-lg-12">
                        <label for="">Link 1</label>
                        <input type="text" class="form-control" id="txt_link1_editar_nuevo" placeholder="Ingrese link calentamiento" disabled><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Link 2</label>
                        <input type="text" class="form-control" id="txt_link2_editar_nuevo" placeholder="Ingrese link relajación" disabled><br>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="Editar_Rutina()"><i class="fa fa-check"><b>&nbsp;Modificar</b></i></button>
                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-close"><b>&nbsp;Cerrar</b></i></button>
            </div>
        </div>
    </div>
</div>

<script>
$(document).ready(function() {
    listar_rutina(); 
    listar_usuario_combo();
    $('#nombre').select2();
    $('#nombre_editar').select2();
    $("#modal_registro").on('shown.bs.modal',function(){
    $("#nombre").focus();  
    })
} );
    /*$("#cbm_cate").change(function(){
        var idcategoria = $("#cbm_cate").val();
        listar_usuario_combo(idcategoria);

    })
*/
$('.box').boxWidget({
    animationSpedd : 500,
    collapseTrigger: '[data-widget="collapse"]',
    removeTrigger  : '[data-widget="remove"]',
    collapseIcon   : 'fa-minus',
    expandIcon     : 'fa-plus',
    removeIcon     : 'fa-times'
})

document.getElementById("gif").addEventListener("change", () => {
     var fileName = document.getElementById("gif").value; 
     var idxDot = fileName.lastIndexOf(".") + 1; 
     var extFile = fileName.substr(idxDot, fileName.length).toLowerCase(); 
     if (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="gif"){  
     }else{ 
      Swal.fire("Mensaje de Advertenvia!","Solo se aceptan archivos GIF - Usted subio un archivo ."+extFile,"warning");
      document.getElementById("gif").value=""; 
     } 
});

document.getElementById("gif_editar").addEventListener("change", () => {
     var fileName = document.getElementById("gif_editar").value; 
     var idxDot = fileName.lastIndexOf(".") + 1; 
     var extFile = fileName.substr(idxDot, fileName.length).toLowerCase(); 
     if (extFile=="jpg" || extFile=="jpeg" || extFile=="png" || extFile=="gif"){  
     }else{ 
      Swal.fire("Mensaje de Advertenvia!","Solo se aceptan archivos GIF - Usted subio un archivo ."+extFile,"warning");
      document.getElementById("gif_editar").value=""; 
     } 
});
</script>

<script type="text/javascript" src="../js/usuario.js?rev=<?php echo time(); ?>"></script>
<script type="text/javascript" src="../js/contrasenas.js?rev=<?php echo time(); ?>"></script>
<div class="col-md-12">
    <div class="box box-warning box-solid">
        <div class="box-header with-border">
            <h3 class="box-title">BIENVENIDO AL CONTENIDO DEL USUARIO</h3>

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
                    <button class="btn btn-danger" style="width:100%" onclick="AbrirModalRegistro()"><i class="glyphicon glyphicon-plus"></i>Nuevo Registro</button>
                </div>
            </div>
            <div class="col-lg-12 table-responsive">
                <table id="tabla_usuario" class="display responsive nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                           <!--  <th>Email</th> -->
                            <th>Rol</th>
                            <th>Sexo</th>
                            <th>Clasificacion</th>
                            <th>Grupo de Trabajo</th>
                            <th style="text-align: center">Observaciones</th>
                            <th>Foto</th>
                            <th>Estatus</th>
                            <th>Acci&oacute;n</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <!-- <th>Email</th> -->
                            <th>Rol</th>
                            <th>Sexo</th>
                            <th>Clasificacion</th>
                            <th>Grupo de Trabajo</th>
                            <th style="text-align: center">Observaciones</th>
                            <th>Foto</th>
                            <th>Estatus</th>
                            <th>Acci&oacute;n</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->
</div>
<form autocomplete="false" onsubmit="return false">
    <div class="modal fade" id="modal_registro" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><b>Registro De Usuario</b></h4>
                </div>
                <div class="modal-body">
                    <div class="col-lg-6">
                        <label for="">Correo</label>
                        <input type="text" class="form-control" id="txt_usu" placeholder="Ingrese usuario"><br>
                    </div>
                    <div class="col-lg-6">
                        <label for="">Correo(contraseña)</label>
                        <input type="text" class="form-control" id="txt_email" placeholder="Ingrese email"><br>
                        <label for="" id="emailOk" style="color:red;"></label>
                        <input type="text" id="validar_email" hidden>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Nombre</label>
                        <input type="text" class="form-control" id="txt_nombre" placeholder="Ingrese nombre"><br>
                    </div>
                    <div class="col-lg-12">
                        <label>Generar contraseña</label>
                        <div id="result" contenteditable="true" spellcheck="false"></div>
                        <div class="text-right">
                            <a href="javascript:void(0);" id="btn">Generar clave</a>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Contrase&ntilde;a</label>
                        <input type="password" class="form-control" id="txt_con1" placeholder="Ingrese contrase&ntilde;a"><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Repita la Contrase&ntilde;a</label>
                        <input type="password" class="form-control" id="txt_con2" placeholder="Repita contrase&ntilde;a"><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Sexo</label>
                        <select class="js-example-basic-single" name="state" id="cbm_sexo" style="width:100%;">
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select><br><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Clasificacion</label>
                        <select class="js-example-basic-single" name="state" id="cbm_clasifica" style="width:100%;">
                        </select><br><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Categoria</label>
                        <select class="js-example-basic-single" name="state" id="cbm_catego" style="width:100%;">
                        </select><br><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Numero</label>
                        <input type="text" class="form-control" id="txt_numero" placeholder="Ingrese numero telefonico" onkeypress="return soloNumeros(event)"><br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Observaciones</label>
                        <textarea id="txt_observa" rows="10" class="form-control" style="resize: none;"></textarea>
                    </div>
                    <div class="col-lg-12">
                        <label>foto</label>
                        <input type="file" id="fotografia" accept="image/*">
                    </div>
                    <div class="col-lg-12">
                        <label for="">Rol</label>
                        <select class="js-example-basic-single" name="state" id="cbm_rol" style="width:100%;">
                        </select><br><br>
                    </div>
                    <!-- <div class="col-lg-12">
                        <div class="callout callout-danger" style="display: none;">
                        </div>
                    </div>    --> 
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="Registrar_Usuario()"><i class="fa fa-check"><b>&nbsp;Registrar</b></i></button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-close"><b>&nbsp;Cerrar</b></i></button>
                </div>
            </div>
        </div>
    </div>
</form>

<form autocomplete="false" onsubmit="return false">
    <div class="modal fade" id="modal_editar" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><b>Editar Usuario</b></h4>
                </div>
                <div class="modal-body">
                    <form method="POST" action="#" enctype="multipart/form-data" onsubmit="return false">
                        <div class="col-lg-12">
                            <input type="text" id="txtidusuario" hidden>
                            <label for="">Correo</label>
                            <input type="text" class="form-control" id="txtusu_editar" placeholder="Ingrese usuario" disabled><br>
                        </div>
                        <div class="col-lg-12">
                            <label for="">Correo(contraseña)</label>
                            <input type="text" class="form-control" id="txt_email_editar" placeholder="Ingrese email"><br>
                            <label for="" id="emailOk_editar" style="color:red;"></label>
                            <input type="text" id="validar_email_editar" hidden>
                        </div>
                        <div class="col-lg-12">
                            <label for="">Nombre</label>
                            <input type="text" class="form-control" id="txt_nombre_editar" placeholder="Ingrese nombre"><br>
                        </div>

                        <div class="col-lg-12">
                            <label for="">Contrase&ntilde;a</label>
                            <input type="password" class="form-control" id="txt_con1" placeholder="Ingrese contrase&ntilde;a"><br>
                        </div>

                        <div class="col-lg-12">
                            <label for="">Sexo</label>
                            <select class="js-example-basic-single" name="state" id="cbm_sexo_editar" style="width:100%;">
                                <option value="M">MASCULINO</option>
                                <option value="F">FEMENINO</option>
                            </select><br><br>
                        </div>
                        <div class="col-lg-12">
                            <label for="">Clasificacion</label>
                            <select class="js-example-basic-single" name="state" id="cbm_clasifica_editar" style="width:100%;">
                            </select><br><br>
                        </div>
                        <div class="col-lg-12">
                            <label for="">Categoria</label>
                            <select class="js-example-basic-single" name="state" id="cbm_cate_editar" style="width:100%;">
                            </select><br><br>
                        </div>
                        <div class="col-lg-12">
                            <label for="">Numero</label>
                            <input type="text" class="form-control" id="txt_numero_editar" placeholder="Ingrese numero telefonico" onkeypress="return soloNumeros(event)"><br>
                        </div>
                        <div class="col-lg-12">
                            <label for="">Observaciones</label>
                            <textarea id="txt_observa_editar" rows="10" class="form-control" style="resize: none;"></textarea>
                        </div>
                        <div class="col-lg-10">
                            <label>Actualizar Foto</label>
                            <input type="file" id="foto_editar" accept="image/*" class="form-control-file">
                        </div>
                        <div class="col-lg-2">
                            <label>&nbsp;</label><br>
                            <button class="btn btn-success" onclick="Editar_Foto()">Actualizar foto</button>
                        </div>
                        <div class="col-lg-12">
                            <label for="">Rol</label>
                            <select class="js-example-basic-single" name="state" id="cbm_rol_editar" style="width:100%;">
                            </select><br><br>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="Modificar_Usuario()"><i class="fa fa-check"><b>&nbsp;Modificar</b></i></button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-close"><b>&nbsp;Cerrar</b></i></button>
                </div>
            </div>
        </div>
    </div>
</form>
<div class="modal fade" id="modal_observaciones" role="dialog">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"><b>Observaciones</b></h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <textarea class="form-control" id="txt_observaciones" rows="10" disabled></textarea>
                    </div> 
                </div>   
            </div>
        </div>
    </div>
</div>    
<script>
    $(document).ready(function () {
        listar_usuario();
        listar_combo_categoria();
        listar_combo_rol();
        listar_combo_clasificacion();
        $('.js-example-basic-single').select2();
        $("#modal_registro").on('shown.bs.modal', function () {
            $("#txt_usu").focus();
        })
    });

    document.getElementById('txt_email').addEventListener('input', function () {
        campo = event.target;
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(campo.value)) {
            $(this).css("border", "");
            $("#emailOk").html("");
            $("#validar_email").val("correcto");
        } else {
            $(this).css("border", "1px solid red");
            $("#emailOk").html("Email incorrecto");
            $("#validar_email").val("incorrecto");
        }
    });

    document.getElementById('txt_email_editar').addEventListener('input', function () {
        campo = event.target;
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(campo.value)) {
            $(this).css("border", "");
            $("#emailOk_editar").html("");
            $("#validar_email_editar").val("correcto");
        } else {
            $(this).css("border", "1px solid red");
            $("#emailOk_editar").html("Email incorrecto");
            $("#validar_email_editar").val("incorrecto");
        }
    });

    $('.box').boxWidget({
        animationSpedd: 500,
        collapseTrigger: '[data-widget="collapse"]',
        removeTrigger: '[data-widget="remove"]',
        collapseIcon: 'fa-minus',
        expandIcon: 'fa-plus',
        removeIcon: 'fa-times'
    })
</script>

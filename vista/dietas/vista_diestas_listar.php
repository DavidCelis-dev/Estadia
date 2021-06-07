<script type="text/javascript" src="../js/dietas.js?rev=<?php   echo time();?>"></script>


<div class="col-md-12">
    <div class="box box-warning box-solid">
        <div class="box-header with-border">
              <h3 class="box-title">Gestionar Diestas</h3>

            <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
            </div>
              <!-- /.box-tools -->
        </div>
            <!-- /.box-header -->
            <div class="box-body">
            <form method="POST" action="#" enctype="multipart/form-data" onsubmit="return false">   
            <div class="form-group">
                <div class="col-lg-10">
                    <div class="input-group">
                        <input type="text" class="global_filter form-control" id="global_filter" placeholder="Ingresar dato a buscar">
                        <span class="input-group-addon"><i class="fa fa-search"></i></span>
                    </div>
                </div>
                <div class="col-lg-2">
                    <button class="btn btn-danger" style="width:100%" onclick="AbrirModalDietas()"><i class="glyphicon glyphicon-plus"></i>Nuevo Registro</button>
                </div>
            </div>
            <div class="col-lg-12 table-responsive">
            <table id="tabla_dietas" class="display responsive nowrap" style="width:100%">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <!-- <th>Usuario</th>  -->                       
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Acci&oacute;n</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <!-- <th>Usuario</th> -->                        
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Acci&oacute;n</th>
                    </tr>
                </tfoot>
            </table>
        </div>
            </div>
            </form> 
            <!-- /.box-body -->
    </div>
          <!-- /.box -->
</div>
<div class="modal lg" id="modal_registro" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title" style="text-align:center"><b>Registro De Dietas</b></h4>
            </div>
            <div class="modal-body">
                <div class="col-lg-12">
                    <label for="">Usuario</label>
                   <select class="js-example-basic-single" name="state" id="usu" style="width:100%;">
                    </select><br>
                </div>
                <div class="col-lg-12">
                    <label for="">Titulo</label>
                    <input type="text" class="form-control" id="titulo" placeholder="Ingrese Titulo"><br>
                </div>
                <div class="col-lg-12">
                    <label for="">Descripcion</label><br>
                    <textarea name="descripcion" id="descripcion" rows="10" class="form-control" style="resize: none;"></textarea><br>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="Registrar_Dietas()"><i class="fa fa-check"><b>&nbsp;Registrar</b></i></button>
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
                <div class="col-lg-12" hidden>
                    <input type="text" id="txt_dieta_id" hidden>
                    <label for="">Usuario</label>
                   <select class="js-example-basic-single" name="state" id="usu_editar" style="width:100%;">
                    </select><br>
                </div>
                <div class="col-lg-12">
                    <label for="">Titulo</label>
                    <input type="text" class="form-control" id="titulo_editar" placeholder="Ingrese Titulo"><br>
                </div>
                <div class="col-lg-12">
                    <label for="">Descripcion</label><br>
                    <textarea id="descripcion_editar" rows="10" class="form-control" style="resize: none;"></textarea><br>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="Modificar_Dietas()"><i class="fa fa-check"><b>&nbsp;Editar</b></i></button>
                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-close"><b>&nbsp;Cerrar</b></i></button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modal_dietas" role="dialog">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title"><b>Dietas</b></h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <textarea class="form-control" id="descripcion_ojo" rows="10" disabled></textarea>
                    </div> 
                </div>   
            </div>
        </div>
    </div>
</div>    

<script>
$(document).ready(function() {
    listar_dietas(); 
    listar_usuario_combo();
    $('#usu').select2();
    $('#usu_editar').select2();
    $("#modal_registro").on('shown.bs.modal',function(){
    $("#usu").focus();  
    })
} );

$('.box').boxWidget({
    animationSpedd : 500,
    collapseTrigger: '[data-widget="collapse"]',
    removeTrigger  : '[data-widget="remove"]',
    collapseIcon   : 'fa-minus',
    expandIcon     : 'fa-plus',
    removeIcon     : 'fa-times'
})


</script>

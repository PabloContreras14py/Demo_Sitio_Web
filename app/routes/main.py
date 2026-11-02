from flask import Blueprint, render_template

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def inicio():
    return render_template('inicio/inicio.html')

@main_bp.route('/productos')
def productos():
    return render_template('productos/producto.html')

@main_bp.route('/nosotros')
def nosotros():
    return render_template('nosotros/nosotros.html')
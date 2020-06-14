<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="novelas">
<xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html></xsl:text>
    <html lang="es">
        <head>
            <title>Harry Potter</title>

            <meta name="description" content="Web que contiene información de interés aacerca de la saga Harry Potter" />
            <meta name="keywords" content="Harry Potter, novelas, peliculas" />
            <meta name="author" content="Carmen Vigo Rodríguez (UO264045)" />

            <link rel="stylesheet" type="text/css" href="../style.css" />
            <link rel="stylesheet" type="text/css" href="../navbar.css" />
        </head>
        <body>
            <header>
                <h1>Bienvenido</h1>
                <h2>al Mágico Universo de Harry Potter</h2>
            </header>
            <nav>
            <ul>
                <li><a title="Inicio" accesskey="I" tabindex="1" href="../inicio.html">Inicio</a></li>
                <li><a title="Novelas" accesskey="N" tabindex="2" href="XML/saga-harrypotter.html">Novelas y Películas</a></li>
                <li class="dropdown"><a title="Juegos" accesskey="J" tabindex="3" href="#">Juegos </a>
                    <ul class="dropdown-content">
                        <li><a title="SopaLetras" accesskey="S" tabindex="4" href="../sopadeletras.html">Sopa Hechizada</a></li>
                        <li><a title="QuienDijoQue" accesskey="Q" tabindex="5" href="../juegofrases.html">Quién dijo qué</a></li>
                    </ul>
                </li>
                <li class="dropdown"><a title="Visita" accesskey="V" tabindex="6" href="#">Visita Guiada</a>
                    <ul class="dropdown-content">
                        <li><a title="DatosVisita" accesskey="D" tabindex="7" href="../ruta.html">Información</a></li>
                        <li><a title="Precio" accesskey="P" tabindex="8" href="../rutaPrecio.html">Precio</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
            <aside>
                <object type="text/html" data="../aside.html" width="450" height="1400"></object>
            </aside>
            <main>
            <xsl:for-each select="novela">
                <section id="{@id}">
                    <h3><xsl:value-of select="titulo"/></h3>
                    <div class="grid-container">
                        <div class="grid-item">
                            <img src="{portada}" alt="{titulo}"/>
                        </div>
                        <div class="grid-item">
                            <h4>Datos de Interés</h4>
                            <dl>
                                <dt>Posición en la Saga</dt>
                                <dd><xsl:value-of select="posicion"/></dd>

                                <dt>Autora</dt>
                                <dd><xsl:value-of select="autora"/></dd>

                                <dt>Datos de la Novela:</dt>
                                    <dt>Páginas</dt>
                                    <dd><xsl:value-of select="datosNovela//paginas"/></dd>
                                    <dt>Publicación</dt>
                                    <dd><xsl:value-of select="datosNovela//publicacion"/></dd>
                                    <dt>Editorial</dt>
                                    <dd><xsl:value-of select="datosNovela//editorial"/></dd>
                                    <dt>Puntuación</dt>
                                    <dd><xsl:value-of select="datosNovela//puntuacion"/></dd>
                                
                                <dt>Datos de la Película</dt>
                                    <dt>Duración</dt>
                                    <dd><xsl:value-of select="datosPelicula//duracion"/></dd>
                                    <dt>Estreno</dt>
                                    <dd><xsl:value-of select="datosPelicula//estreno"/></dd>
                                    <dt>Estrellas</dt>
                                    <dd><xsl:value-of select="datosPelicula//estrellas"/></dd>
                               
                            </dl>
                        </div>
                        <div class="grid-item">
                            <p><xsl:value-of select="sinopsis"/></p>
                        </div>
                    </div>
                </section>
            </xsl:for-each>
            </main>
            <footer>
                <object type="text/html" data="footer.html" width="1500" height="200"></object>
            </footer>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>
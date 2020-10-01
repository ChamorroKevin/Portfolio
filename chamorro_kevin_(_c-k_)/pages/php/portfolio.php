<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>ChamorroKevin/portefolio.fr</title>
	<link rel="stylesheet" href="../../css/core_ck.css">
	<link rel="stylesheet" href="../../css/portefolio.css">






</head>

<body>




	<!------------------------------------------------ start header ---------------------------------------------------------------->

	<?php 
  include('../../include/header.php')
  ?>

	<!------------------------------------------------------- end header ------------------------------------------------------------------------>


	<!---------------------------------------------------- start backgroundfall ----------------------------------------------------------------->


	<?php 
  include('../../include/backgroundfall.php')
  ?>
	<!---------------------------------------------------- end backgroundfall ----------------------------------------------------------------->



	<!------------------------------------------------------- start t ------------------------------------------------------------------------>

	<h1 class="t">Dérniers Projets</h1>
	<!------------------------------------------------------- end t --------------------------------------------------------------------------->

	<!------------------------------------------------------- start Carousel -------------------------------------------------------------------->






	<div class="container" style="margin-top: 10vw;">
		<div class="carousel">
			<div class="carousel-prev">◀</div>
			<div class="carousel-next">▶</div>
			<ul class="carousel-pagination">
				<li class="carousel-bullet"></li>
				<li class="carousel-bullet"></li>
				<li class="carousel-bullet"></li>

			</ul>
			<ul class="carousel-container">
				<li class="carousel-item">
					<div class="item-1"></div>
				</li>
				<li class="carousel-item">
					<div class="item-2"></div>
				</li>
				<li class="carousel-item">
					<div class="item-3"></div>
				</li>
			</ul>
		</div>
	</div>



	<!---------------------------------------------------- end Carousel ------------------------------------------------------------------------->

	<!------------------------------------------------------- start t ------------------------------------------------------------------------>

	<h1 class="t">Tout Mes Projets</h1>
	<!------------------------------------------------------- end t --------------------------------------------------------------------------->

	<!---------------------------------------------------- start gallery ----------------------------------------------------------------------->




	<div class="row">

		<a class="lightbox" href="#photo01">
			<figure class="photo01">
				<p>Julien Vignolo: <br> Musicien</p>
			</figure>
		</a>

		<div class="lightbox-target" id="photo01">

			<div class="container">
				<img src="../../img/JulienVignolo.png">
				<a class="lightbox-close" href="#">X</a>
				<a class="lightbox-visit" href="../../../vignolo_julien_(_v-j_)/html/acceuil_jv.html" target="blank">Visitez
					le
					!</a>

			</div>

		</div>

		<a class="lightbox" href="#photo02">
			<figure class="photo02">
				<p>Baillard Christel:<br> Thérapeute</p>
			</figure>
		</a>

		<div class="lightbox-target" id="photo02">
			<div class="container">
				<img src="../../img/BaillardChristel.png">
				<a class="lightbox-close" href="#">X</a>
				<a class="lightbox-visit" href="../../../baillard_christel_(_b-c_)/html/Baillard_Christel_acceuil.html"
					target="blank">Visitez le
					!</a>
			</div>

		</div>

		<a class="lightbox" href="#photo03">
			<figure class="photo03">
				<p>Work In Progress</p>
			</figure>
		</a>

		<div class="lightbox-target" id="photo03">
			<div class="container">
				<img src="../img/Work_In_Progress.png">
				<a class="lightbox-close" href="#">X</a>
				<a class="lightbox-visit" href="#">en cours...</a>
			</div>
		</div>

	</div>

	<!---------------------------------------------------- end gallery ----------------------------------------------------------------->



	<!---------------------------------------------------- start footer ----------------------------------------------------------------->

	<?php 
  include('../../include/footer.php')
  ?>

	<!---------------------------------------------------- end footer ----------------------------------------------------------------->








	<script type="text/javascript" src="../../js/portfolio.js"></script>
</body>

</html>
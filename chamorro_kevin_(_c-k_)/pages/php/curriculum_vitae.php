<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>ChamorroKevin/curriculumvitae.fr</title>

	<link rel="stylesheet" href="../../css/core_ck.css">
	<link rel="stylesheet" href="../../css/curriculum_vitae.css">


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

	<!------------------------------------------------------- start cv -------------------------------------------------------------------->

	<div class=" container_cv">
		<!--page header-->
		<div class="page-header">
			<h1>Chamorro Kévin</h1>
			<h1 style="margin-top:0;font-size: 1.5rem;color:white;letter-spacing: 10px;">Développeur web<br>front end &
				back
				end</h1>

		</div>
		<!--end of page header-->

		<!--start of nav menu-->
		<nav>
			<ul class="showing">
				<li class="nav-item"><a href="#">Profil</a></li>
				<li class="nav-item"><a href="#techskillsh3id">Compétences</a></li>
				<li class="nav-item"><a href="#educationsectionh3id">Diplômes</a></li>
				<li class="nav-item"><a href="#employmentsectionh3id">Éxperiences</a></li>
				<li class="nav-item"><a href="#hobbiessectionh3id">Social</a></li>

			</ul>
			<div class="handle"></div>
		</nav>
		<!--end of nav menu-->


		<!--start of main content-->
		<div class="main-content">
			<!--svg-->


			<!--end of brain svg-->
			<div class="profilesectiondiv" id="profileid">
				<section class="sectiontitle">
					<h3><em>PROFIL</h3>
					<p id="techskillsh3id">Ancien militaire dans la Marine Nationale,
						j'ai passé un bac professionnel en maintenance industriel tout
						en m'engageant dans la réserve opérationnelle pour y servir mon pays.
						Je désirais m'engager directement après le bac mais un accident
						m’a obligé à changer mes projets d’avenir. Suite à cela, j’ai travaillé
						un an et demi dans le civil. Temps durant lequel j'ai œuvré dans le
						bâtiment puis dans la vente. Durant cette période, j’ai réalisé que
						mon engouement pour l’informatique, présente depuis toujours s’intensifiée,
						j’ai donc décidé de tenter ma chance dans cette branche qui me
						tenait à cœur le développement informatique. Passionné de Hardware
						et de Software, j'ai toujours voulu m'investir dans cette voie.
						Je suis aujourd’hui titulaire d'un BTS en développement web.
				</section>

			</div>

			<div class="skillssectiondiv" id="techskills">
				<section class="sectiontitle">
					<h3 style="font-size: 0.8rem;">COMPÉTENCES</h3>
					<div class="firstchart">
						<svg width="100" height="100" stroke-linecap="round">
							<circle id="innerc1" r="35" cx="50" cy="50" />
							<circle class="expertp" id="outerc1" r="40" cx="50" cy="50" />
						</svg>
						<p class="expertp level">Débutant</p>
						<p class="expertp">php, my sql, wordPress </p>


					</div>
					<div class="secondchart">
						<svg width="100" height="100" stroke-linecap="round">
							<circle id="innerc2" r="35" cx="50" cy="50" />
							<circle id="outerc2" r="40" cx="50" cy="50" />
						</svg>
						<p class="expertp level">Compétent</p>
						<p class="expertp"> css3, JS,prestashop </p>
					</div>
					<div class="thirdchart">
						<svg width="100" height="100" stroke-linecap="round">
							<circle id="innerc3" r="35" cx="50" cy="50" />
							<circle id="outerc3" r="40" cx="50" cy="50" />
						</svg>
						<p class="level" id="expertcircle">Expert</p>
						<p class="expertp1" id="educationsectionh3id">html5,travail d'équipe</p>
					</div>
				</section>
			</div>

			<div>
				<h3>dîplomes</h3>
				<section class="timeline">
					<ul>
						<li>
							<div>
								<time>2016</time>
								<br> -PMM
								(Préparation Militaire Marine nationale)<br>
								-PSC1
								(brevet de
								Secourisme)<br>
								-BEP maintenance
								des équipements
								industriels<br>
								-Brevet elémentaire
								fusillier de réserve
								(marine nationale)

							</div>
						</li>
						<li>
							<div>
								<time>2017</time>
								<br>-SST
								(Sauveteur Secouriste
								du Travail)<br>
								-Formation médiation
								par les pairs<br>
								-Bac professionnel
								Maintenance des
								équipements
								industriels
							</div>
						</li>
						<li>
							<div>
								<time>2018</time>
								<br>-Brevet
								élémentaire
								de matelotage

							</div>
						</li>

						<li>
							<div>
								<time id="employmentsectionh3id">2020</time>
								<br>-BTS
								développeur web
								et web mobile (DWWM)

							</div>
						</li>



					</ul>
				</section>
			</div>

			<div class="experience">
				<h3 style="font-size: 0.8rem;">Éxperiences</h3>
				<div class="jobholder">
					<div class="job1">
						<p class="jobyear">
							2015 / 2016 : Stages apprentissage <br>
							au service technique de Carrefour Vitrolles <br>
							& <br>
							Fusillier de la réserve opérationnelle <br>
							de la marine nationnale à Ajaccio </p>
						<ul class="listeddetails1">
							<p>Être réserviste et passer le bac en parallèle m'a appris les
								bases du travail en entreprise ainsi que le travail d’équipe.</p>

						</ul>
					</div>
					<div class="job2">
						<p class="jobyear">
							2017 / 2018 : vendeur logistique chez IKEA Vitrolles
						</p>

						<ul class="listeddetails2">
							<p>éÉtant alaise avec les autres, ce travail dans
								la vente m'a montré comment gérer des stocks et l’approvisionnement
								et le contact avec le client.</p>

						</ul>
					</div>

					<div class="job1">
						<p class="jobyear">


							2018 / 2019 : Quartier maître de la flotte (Marine Nationale)</p>

						<ul class="listeddetails3">
							<p>Cette expérience m'a permis de savoir réagir en toute circonstance,
								et gérer une équipe. Elle m’a surtout appris à devenir quelqu’un de
								fiable et rigoureux.</p>

							<li id="hobbiessectionh3id"></li>
						</ul>
					</div>

				</div>
				</section>
			</div>


		</div>
	</div>

	</div>



	</div>
	</div>
	<a href="#" download target="_blank" style="color:white">
		<img src="../../img/download_icon.png"
			style="background: black; border-radius: 10rem;margin-top:5vw; height:3rem;width: 4rem; ">Télécharger
		le
		cv</a></img>


	<!---------------------------------------------------- end cv ----------------------------------------------------------------->

	<!---------------------------------------------------- start footer ----------------------------------------------------------------->
	<?php 
  include('../../include/footer.php')
  ?>

	<!---------------------------------------------------- end footer ----------------------------------------------------------------->






</body>

</html>
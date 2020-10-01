<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Contact</title>
	<link rel="stylesheet" href="../../css/contactpage.css" />
	<link rel="stylesheet" href="../../css/core_ck.css" />
	<link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
</head>

<body>


	<?php 
  include('../../include/header.php')
  ?>


	<section id="contact">

		<h1 class="section-header">Contact</h1>

		<div class="contact-wrapper">

			<!---------------- 

    
      ----------------->

			<form class="form-horizontal" role="form" method="post" action="../../include/contactbrain.php">

				<div class="form-group">
					<div class="col-sm-12">
						<input type="text" class="form-control" id="name" placeholder="  Votre nom" name="name" value=""
							required>
					</div>
				</div>

				<div class=" form-group">
					<div class="col-sm-12">
						<input type="email" class="form-control" id="email" placeholder="  Votre e-mail" name="mail" value="">
					</div>
				</div>

				<textarea class="form-control" rows="10" placeholder="  Votre message" name="message" required></textarea>

				<button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
					<div class="button">
						<i class="fa fa-paper-plane"></i>
					</div>

				</button>

			</form>

			<!---------------- 

     
    
      ----------------->

			<div class="direct-contact-container">

				<ul class="contact-list">
					<li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Marseille |
								France</span></i></li>

					<li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"
								style="margin-left:2vw"><a href="tel:0615166468"
									title="apellez moi">06.15.16.64.68</a></span></i></li>

					<li class="list-item"><i class="fa fa-envelope fa-2x" style="margin-left:4vw"><span
								class="contact-text gmail"><a href="mailto:#" title="Send me an email"
									style="margin-left:-3vw">Chamorrokevin3803@gmail.com</a></span></i></li>

				</ul>

				<hr>
				<ul class="social-media-list">
					<li><a href="https://github.com/ChamorroKevin" target="_blank" class="contact-icon">
							<i class="fa fa-github"></i></a>
					</li>
					<li><a href="https://twitter.com/ChamorroKvin1" target="_blank" class="contact-icon">
							<i class="fa fa-twitter" aria-hidden="true"></i></a>
					</li>
					<li><a href="https://www.facebook.com/profile.php?id=100055263980203" target="_blank"
							class="contact-icon">
							<i class="fa fa-facebook" aria-hidden="true"></i></a>
					</li>
					<li><a href="https://codepen.io/Kevin3803" target="_blank" class="contact-icon">
							<i class="fa fa-codepen" aria-hidden="true"></i></a>
					</li>
					<li><a href="https://www.linkedin.com/in/kevin-chamorro-5a20b81ab/" target="_blank" class="contact-icon">
							<i class="fa fa-linkedin" aria-hidden="true"></i></a>
					</li>
				</ul>
				<hr>

				<div class="copyright">© 2020 chamorrokevin. All Rights Reserved.</div>

			</div>

		</div>

	</section>


</body>

</html>



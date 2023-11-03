// JavaScript Document



jQuery(document).ready(function($) {

	// ______________ Commun ________________________

	$('.Bt_Voir_Plus').click( function(e){

		e.preventDefault();

		$('.SRP_Liste_Images').addClass('Tout_Voir');
		$(this).hide();

	});

	// ______________ Formulaire : Bouton Newsletter  ________________________

	$Case_Newsletter = $('#Form_Bartoux .Newsletter input');
	$Zone_Newsletter = $('#Form_Bartoux .Zone_Newsletter');

	function MAJ_Case_Newsletter() {

		if ( $Case_Newsletter.is(":checked") ) {
			$Zone_Newsletter.slideDown();
			$Zone_Newsletter.find('.Pays select').prop('required',true);
			$Zone_Newsletter.find('.Langue select').prop('required',true);

		} else {
			$Zone_Newsletter.slideUp();
			$Zone_Newsletter.find('.Pays select').val('').prop('required',false);
			$Zone_Newsletter.find('.Langue select').val('').prop('required',false);
		}
	}

	$Case_Newsletter.click( function(e){ MAJ_Case_Newsletter(); });
	MAJ_Case_Newsletter(); // à l'initalisation au cas où la case est encore coché suite au rafraichissement de la page

	// ______________ Archive Artistes ________________________

	// affiche une oeuvre de l'artiste au survol

	/*
	$('.Liste_Artistes a').hover( function(e){

		SRC = $(this).attr('data-src');

		$('.Zone_Apercu_Artiste').html('<img class="img-fluid" src="'+SRC+'">');

	},function(e){

		$('.Zone_Apercu_Artiste').html('');

	});
	*/

	$('.menu_vue_liste_artiste a').click( function(e){

		e.preventDefault();

		const $this = $(this);

		const Vue_Grille = $this.parent().hasClass('vue_grille');

		$('.menu_vue_liste_artiste a').removeClass('active');
		$this.addClass('active');

		$('.Zone_Liste_Artistes').toggleClass('Vue_Grille',Vue_Grille).toggleClass('Vue_Liste',!Vue_Grille);

	});


	// ______ Arrange l'affichage de l'entete

	// En mode Smartphone : Déplace la zone 'Recherche et Langue' sous le menu

	$('.navbar-toggler').click( function(e){

		$("#mini_menu_bas > div").appendTo(".srp-top-menu .navbar-collapse").show();

		$("#PolyLang_Switcher").prependTo(".srp-top-menu .navbar-collapse").show();

		$("#mini_menu_haut > form").appendTo(".srp-top-menu .navbar-collapse").addClass('recherche_ouverte');
	});


	// ______________ Archive Oeuvres ________________________
	$('.js-share-page').click( function(e){

		e.preventDefault();

		var shareData = {
			url: $(this).attr('href'),
			title: $(this).attr('data-title'),
		};

		if(navigator) {
			navigator.share(shareData);
		}

	});

	// ______________ Suppression click droit ________________________
	$('img').bind('contextmenu', function(e) {
		return false;
	});

  	// ______________ Ouverture modal (Réalité augmentée) ________________________
  	$(document).on('click', '#js-modal-qrcode', function (e) {
		if(e.target.id === 'js-modal-qrcode') {
			$(this).removeClass('is-active');
		}
	});

	$('.js-qrcode').on('click', function (e) {
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			console.log('bug');
			return;
		}
		e.preventDefault();

		let modal = $('#js-modal-qrcode');

		modal.addClass('is-active');
	});

});

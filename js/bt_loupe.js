
// JS pour alterner la loupe et le champ Recherche


jQuery(document).ready(function($) { 
	
	// ______ Recherche 
	$('.alterne_loupe .bt_loupe').click( function(e) { 
		$(this).parent().addClass('recherche_ouverte');
		$(this).parents('nav').addClass('menu_avec_recherche_ouverte');
	}); 
	
 
});

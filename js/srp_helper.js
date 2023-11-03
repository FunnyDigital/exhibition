// 
// SRP  - Helper 

jQuery.noConflict();

jQuery(document).ready(function($) {
	
	//  Etend_le_lien_interne : Simule Click du lien contenu dans la zone
	$('.Etend_le_lien_interne').click( function(e) {
		
		//console.log('ici',$(this).find('a'));
		$this = $(this);
		
		$Lien = $this.find('a').first();
		
		URL = $Lien.attr('href');
		
		if (URL[0]=='#') {
			// Ancre
			$this.off('click')
			$Lien.trigger('click');
		} else {
			window.location.href = URL;
		}	 
	}); 
	  
	
 	$('.BS_C_JS').on('show.bs.collapse', function () {
		$(this).prev('.Lien_Categorie').addClass("Collapse_Ouvert").removeClass("Collapse_Ferme"); 
	});
	
 	$('.BS_C_JS').on('hide.bs.collapse', function () {
		$(this).prev('.Lien_Categorie').addClass("Collapse_Ferme").removeClass("Collapse_Ouvert"); 
	});	
	
 
});
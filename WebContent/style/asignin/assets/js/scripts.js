
jQuery(document).ready(function() {
	
    $("input:not(:submit)").val("");
    /*
        Fullscreen background
    */
    $.backstretch([
		"../../style/images/backgrounds/2.jpg"
		, "../../style/images/backgrounds/3.jpg"
		, "../../style/images/backgrounds/1.jpg"
	], { duration: 3000, fade: 750 });
    
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
        $help = $(".help-block");
        $help.parent().removeClass("has-error");
        $help.html("");
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});

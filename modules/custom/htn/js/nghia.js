/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.nghia = {
    attach: function (context, settings) {
      // Code here
			
			//Set video
			$('.field-name-field-material .field-items .field-item').html('<video width="560" height="310" controls><source src="http://localhost/htn/sites/default/files/samplevideo_1280x720_1mb.mp4" type="video/mp4"></video>');
			
			//Click window to close video
			$(window).click(function(e) {
				$('.field-name-field-material').fadeOut();
			});
			
			//Append image arrow to header
			$('#block-block-1').append('<div class="wrap-img-arrowheader"><div class="img-arrowheader"></div></div>');
			
			//Append image logo to header
			$('#block-block-1').append('<div class="img-logo"></div>');
			
			//Append text to bottom
			$('.field-name-body .field-items .field-item').append('<div id="text-bottom">© bản quyền 2016 thuộc về tân hiệp phát</div>');
			
			//Click arrow
			$('.img-arrowheader').click(function(e){
				$('#block-block-1 .block-wrapper').css('top','0');
				$('.wrap-img-arrowheader').css('top','46px');
			});
			
			//Click button play
			$('#play-now').click(function(e){
				$('body').animate({backgroundColor: "red";backgroundImage: "none"});
			});
		}
  };  
})(jQuery, Drupal, this, this.document);
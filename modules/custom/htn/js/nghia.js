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
			
			//boolean menuba
			var checkmenu = true;
			
			//Set video
			$('.front .field-name-field-material .field-items .field-item').html('<video width="560" height="310" controls><source src="http://localhost/htn/sites/default/files/samplevideo_1280x720_1mb.mp4" type="video/mp4"></video>');
			
			//Click window to close video
			$(window).click(function(e) {
				$('.front .field-name-field-material').fadeOut();
			});
			
			//Append image arrow to header
			$('#block-block-1').append('<div class="wrap-img-arrowheader"><div class="img-arrowheader"></div></div>');
			
			//Click arrow
			$('.img-arrowheader').click(function(e){
				//Check status menu
				if(checkmenu){
					openmenu();
				}else{
					closemenu();
				}
			});
			
			//Open menu
			function openmenu(){
				$('#block-block-1 .block-wrapper').css('top','0');
				$('.wrap-img-arrowheader').css('top','46px');
				checkmenu = false;
			}
			
			//Close menu
			function closemenu(){
				$('#block-block-1 .block-wrapper').css('top','-46px');
				$('.wrap-img-arrowheader').css('top','0');
				checkmenu = true;
			}
			
			//Append mask of radio
			//$('.page-node-add-gaming #edit-field-gender-und .form-item').append('<label for="edit-field-gender-und-female" id="check-radio"></label>');
			$('.page-node-add-gaming #edit-field-gender-und .form-item:nth-child(1)').append('<label for="edit-field-gender-und-female" id="check-radio"></label>');
			$('.page-node-add-gaming #edit-field-gender-und .form-item:nth-child(2)').append('<label for="edit-field-gender-und-male" id="check-radio"></label>');
		
			//Append button back
			$('.page-node-add-gaming #edit-actions').append('<input id="button-back" type="button" >');
			
			//Back 
			$('#button-back').click(function(e){
				window.history.back();
			});
			
			//Append image add avatar
			$('#edit-field-gaming-image #edit-field-gaming-image-und-0-ajax-wrapper .form-item').append('<label id="img-upload-file" for="edit-field-gaming-image-und-0-upload"></label>');
			
			console.log(context);
			//Upload image
			$('#edit-field-gaming-image-und-0-upload').change(function() {
					//Submit upload
					//$('#edit-field-gaming-image-und-0-upload-button').trigger("click");
					//$('#edit-field-gaming-image-und-0-upload-button').click();
					
					//Show button next
					$('.page-node-add-gaming .layout-center .layout-3col .layout-3col__full .node-form .step-up-picture ~ #edit-actions #edit-next').css('display','inline-block');
			});
			
			
		}
  };  
})(jQuery, Drupal, this, this.document);
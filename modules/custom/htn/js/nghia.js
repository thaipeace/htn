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
				$('#block-block-1 .block-wrapper').animate({
					top:0
				},1000,function(){
					
				});
				$('.wrap-img-arrowheader').animate({
					top:'46px'
				},1000,function(){
					
				});
				checkmenu = false;
			}
			
			//Close menu
			function closemenu(){
				$('#block-block-1 .block-wrapper').animate({
					top:'-46px'
				},1000,function(){
					
				});
				$('.wrap-img-arrowheader').animate({
					top:0
				},1000,function(){
					
				});
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
			
			//Append image head 
			$('.male div:nth-child(1) #edit-field-gaming-image div:nth-child(1) .form-item').append('<div id="img-head"></div>');
			$('.female div:nth-child(1) #edit-field-gaming-image div:nth-child(1) .form-item').append('<div id="img-head"></div>');
			
			console.log(context);
			//Upload image
			$('#edit-field-gaming-image-und-0-upload').change(function() {
					//Upload image
					event.preventDefault();
					$(this).next('input[type="submit"]').mousedown();
					
					//Hide button add
					$(this).css('display','none');
				
					//Show button next
					$('.page-node-add-gaming .node-form .step-up-picture ~ #edit-actions #edit-next').css('display','inline-block');
			
					//Set style when upload
					$('.page-node-add-gaming .node-form .step-up-picture ~ #edit-actions').css('margin-top','333px','important');
					
			});
			
			//Append button
			$('.step-select-situation ~ .situa .fresh').append('<input type="button" id="fresh-play" name="play" value="CHƠI NGAY">');
			$('.step-select-situation ~ .situa .hot').append('<input type="button" id="hot-play" name="play" value="CHƠI NGAY">');
		
			//Click button play
			$('#fresh-play').click(function(e){
				//Select item option
				$('#edit-field-situation-und').val('fresh').change();
				//alert($('#edit-field-situation-und option:selected').text());
				
				//Auto next when click
				$('#edit-next').click();
			});
			
			$('#hot-play').click(function(e){
				$('#edit-field-situation-und').val('hot').change();
				
				//Auto next when click
				$('#edit-next').click();
			});
			
			//Mask auto fadeout
			$('.step-select-situation ~ #edit-field-situation').fadeOut(3000);
			
			//Hide another item
			$('.step-select-case-1 ~ .form-item-field-case1 label:nth-child(1)').css('display','none');
			$('.step-select-case-1 ~ #edit-field-case1-selected').css('display','none');
		
			//Append mask radio question
			$('.step-select-case-1 ~ .form-item-field-case1 #edit-field-case1 div:nth-child(1)').append('<label for="edit-field-case1-a" id="question-radio"></label>');
			$('.step-select-case-1 ~ .form-item-field-case1 #edit-field-case1 div:nth-child(2)').append('<label for="edit-field-case1-b" id="question-radio"></label>');
			$('.step-select-case-1 ~ .form-item-field-case1 #edit-field-case1 div:nth-child(3)').append('<label for="edit-field-case1-c" id="question-radio"></label>');
		}
  };  
})(jQuery, Drupal, this, this.document);
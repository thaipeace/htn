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
				},250,function(){
					
				});
				$('.wrap-img-arrowheader').animate({
					top:'46px'
				},250,function(){
					
				});
				checkmenu = false;
			}
			
			//Close menu
			function closemenu(){
				$('#block-block-1 .block-wrapper').animate({
					top:'-46px'
				},250,function(){
					
				});
				$('.wrap-img-arrowheader').animate({
					top:0
				},250,function(){
					
				});
				checkmenu = true;
			}
			
			//Append mask of radio
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
			$('.step-select-case-2 ~ .form-item-field-case2 label:nth-child(1)').css('display','none');
			$('.step-select-case-2 ~ #edit-field-case2-selected').css('display','none');
			$('.step-select-case-3 ~ .form-item-field-case3 label:nth-child(1)').css('display','none');
			$('.step-select-case-3 ~ #edit-field-case3-selected').css('display','none');
			$('.step-complete ~ .form-type-textfield').css('display','none');
			$('.step-complete ~ #edit-field-background-video').css('display','none');
			$('.step-complete ~ #edit-actions #edit-submit').attr('value','');
		
			//Append mask radio question
			$('.step-select-case-1 ~ .form-item-field-case1 #edit-field-case1 .form-item').append('<label class="mask-select" id="question-radio"></label>');
			$('#edit-field-case1-a ~ .mask-select').attr('for','edit-field-case1-a');
			$('#edit-field-case1-b ~ .mask-select').attr('for','edit-field-case1-b');
			$('#edit-field-case1-c ~ .mask-select').attr('for','edit-field-case1-c');
			
			$('.step-select-case-2 ~ .form-item-field-case2 #edit-field-case2 .form-item').append('<label class="mask-select" id="question-radio"></label>');
			$('#edit-field-case2-aa ~ .mask-select').attr('for','edit-field-case2-aa');
			$('#edit-field-case2-ab ~ .mask-select').attr('for','edit-field-case2-ab');
			$('#edit-field-case2-ac ~ .mask-select').attr('for','edit-field-case2-ac');
			$('#edit-field-case2-ba ~ .mask-select').attr('for','edit-field-case2-ba');
			$('#edit-field-case2-bb ~ .mask-select').attr('for','edit-field-case2-bb');
			$('#edit-field-case2-bc ~ .mask-select').attr('for','edit-field-case2-bc');
			$('#edit-field-case2-ca ~ .mask-select').attr('for','edit-field-case2-ca');
			$('#edit-field-case2-cb ~ .mask-select').attr('for','edit-field-case2-cb');
			$('#edit-field-case2-cc ~ .mask-select').attr('for','edit-field-case2-cc');
			
			$('.step-select-case-3 ~ .form-item-field-case3 #edit-field-case3 .form-item').append('<label class="mask-select" id="question-radio"></label>');
			$('#edit-field-case3-aaa ~ .mask-select').attr('for','edit-field-case3-aaa');
			$('#edit-field-case3-aab ~ .mask-select').attr('for','edit-field-case3-aab');
			$('#edit-field-case3-aac ~ .mask-select').attr('for','edit-field-case3-aac');
			$('#edit-field-case3-aba ~ .mask-select').attr('for','edit-field-case3-aba');
			$('#edit-field-case3-abb ~ .mask-select').attr('for','edit-field-case3-abb');
			$('#edit-field-case3-abc ~ .mask-select').attr('for','edit-field-case3-abc');
			$('#edit-field-case3-aca ~ .mask-select').attr('for','edit-field-case3-aca');
			$('#edit-field-case3-acb ~ .mask-select').attr('for','edit-field-case3-acb');
			$('#edit-field-case3-acc ~ .mask-select').attr('for','edit-field-case3-acc');
			$('#edit-field-case3-baa ~ .mask-select').attr('for','edit-field-case3-baa');
			$('#edit-field-case3-bab ~ .mask-select').attr('for','edit-field-case3-bab');
			$('#edit-field-case3-bac ~ .mask-select').attr('for','edit-field-case3-bac');
			$('#edit-field-case3-bba ~ .mask-select').attr('for','edit-field-case3-bba');
			$('#edit-field-case3-bbb ~ .mask-select').attr('for','edit-field-case3-bbb');
			$('#edit-field-case3-bbc ~ .mask-select').attr('for','edit-field-case3-bbc');
			$('#edit-field-case3-bca ~ .mask-select').attr('for','edit-field-case3-bca');
			$('#edit-field-case3-bcb ~ .mask-select').attr('for','edit-field-case3-bcb');
			$('#edit-field-case3-bcc ~ .mask-select').attr('for','edit-field-case3-bcc');
			$('#edit-field-case3-caa ~ .mask-select').attr('for','edit-field-case3-caa');
			$('#edit-field-case3-cab ~ .mask-select').attr('for','edit-field-case3-cab');
			$('#edit-field-case3-cac ~ .mask-select').attr('for','edit-field-case3-cac');
			$('#edit-field-case3-cba ~ .mask-select').attr('for','edit-field-case3-cba');
			$('#edit-field-case3-cbb ~ .mask-select').attr('for','edit-field-case3-cbb');
			$('#edit-field-case3-cbc ~ .mask-select').attr('for','edit-field-case3-cbc');
			$('#edit-field-case3-cca ~ .mask-select').attr('for','edit-field-case3-cca');
			$('#edit-field-case3-ccb ~ .mask-select').attr('for','edit-field-case3-ccb');
			$('#edit-field-case3-ccc ~ .mask-select').attr('for','edit-field-case3-ccc');
			
			//Css 
			$('.female #edit-field-case3-aca').parents('#edit-field-case3').css('margin-top','26px');
			$('.female #edit-field-case3-baa').parents('#edit-field-case3').css('margin-top','26px');
			$('.female #edit-field-case3-bca').parents('#edit-field-case3').css('margin-top','0px');
			$('.female #edit-field-case3-caa').parents('#edit-field-case3').css('margin-top','-18px');
			$('.female #edit-field-case3-cba').parents('#edit-field-case3').css('margin-top','-17px');
			$('.female #edit-field-case3-cca').parents('#edit-field-case3').css('margin-top','-37px');
			$('.male #edit-field-case3-aba').parents('#edit-field-case3').css('margin-top','65px');
			$('.male #edit-field-case3-aaa').parents('#edit-field-case3').css('margin-top','64px');
			$('.male #edit-field-case3-bca').parents('#edit-field-case3').css('margin-top','64px');
			$('.male #edit-field-case3-caa').parents('#edit-field-case3').css('margin-top','-18px');
			$('.male #edit-field-case3-cba').parents('#edit-field-case3').css('margin-top','27px');
			$('.male #edit-field-case3-cca').parents('#edit-field-case3').css('margin-top','-17px');
			$('.female #edit-field-case2-bc').parent().css('top','20px');
			$('.female #edit-field-case3-caa').parent().css('top','40px');
			$('.female #edit-field-case3-cba').parent().css('top','37px');
			$('.female #edit-field-case3-cbb').parent().css('top','30px');
			$('.female #edit-field-case3-cca').parent().css('top','57px');
			$('.female #edit-field-case3-ccb').parent().css('top','50px');
			$('.female #edit-field-case3-ccc').parent().css('top','24px');
			$('.male #edit-field-case3-bbb').parent().css('top','23px');
			$('.male #edit-field-case3-bca').parent().css('top','-15px');
			$('.male #edit-field-case3-bcb').parent().css('top','-6px');
			$('.male #edit-field-case3-bcc').parent().css('top','-19px');
			$('.male #edit-field-case3-caa').parent().css('top','42px');
			$('.male #edit-field-case3-cab').parent().css('top','32px');
			$('.male #edit-field-case3-cac').parent().css('top','6px');
			$('.male #edit-field-case3-cba').parent().css('top','18px');
			$('.male #edit-field-case3-cbb').parent().css('top','10px');
			$('.male #edit-field-case3-cbc').parent().css('top','-8px');
			$('.male #edit-field-case3-cca').parent().css('top','38px');
			$('.male #edit-field-case3-ccb').parent().css('top','30px');
			$('.male #edit-field-case3-ccc').parent().css('top','3px');
			
			
			//Case of video
			var nameclass = $('article.node-gaming').attr('class');
			
			if(nameclass){
				var arraynameclass = [];
			
				arraynameclass = nameclass.split(" ");
				
				if(arraynameclass[2] == "male" && arraynameclass[3] == "fresh"){
					$('article.node-gaming .field-name-field-gaming-image .field-items .field-item').append('<div class="male-fresh-img" id="img-bodyvideo"></div>');
				}else{
					if(arraynameclass[2] == "male" && arraynameclass[3] == "hot"){
						$('article.node-gaming .field-name-field-gaming-image .field-items .field-item').append('<div class="male-hot-img" id="img-bodyvideo"></div>');
					}else{
						if(arraynameclass[2] == "female" && arraynameclass[3] == "fresh"){
							$('article.node-gaming .field-name-field-gaming-image .field-items .field-item').append('<div class="female-fresh-img" id="img-bodyvideo"></div>');
						}else{
							if(arraynameclass[2] == "female" && arraynameclass[3] == "hot"){
								$('article.node-gaming .field-name-field-gaming-image .field-items .field-item').append('<div class="female-hot-img" id="img-bodyvideo"></div>');
							}
						}
					}
				}
			}
			
			$('.fconnect a').text('');
			
			//Append video
			var srcvideo = $('article.node-gaming .field-name-field-background-video .field-items .field-item').text();
			
			$('article.node-gaming .field-name-field-background-video .field-items .field-item').html('<video id="video-complete" width="100%" height="100%" ><source src="'+srcvideo+'" type="video/mp4"></video>');
			
			$('article.node-gaming .field-name-field-gaming-image .field-items .field-item').append('<div id="button-playvideo"></div>');
			
			//Click button play video
			$('#button-playvideo').click(function(e){
				$('#video-complete').get(0).play();
				
				$(this).fadeOut(500);
				
				$('#img-bodyvideo').css('z-index','-1');
				
				$('article.node-gaming .field-name-field-gaming-image .field-items .field-item img').css('z-index','-1');
			});
			
			//Prepend button close
			$('.step-story-choose-gender ~ .intro').prepend('<div class="close-intro"></div>');
			
			//Click button close
			$('.close-intro').click(function(e) {
				$('.step-story-choose-gender ~.intro').fadeOut();
				
				$('.step-story-choose-gender ~.login').css('display','block');
			});
			
			//Append mask radio 
			$('.page-node-add-story #edit-field-gender-und .form-item:nth-child(1)').append('<label for="edit-field-gender-und-female" id="check-radio"></label>');
			$('.page-node-add-story #edit-field-gender-und .form-item:nth-child(2)').append('<label for="edit-field-gender-und-male" id="check-radio"></label>');
			
			//Prepend button close
			$('.step-story-choose-gender ~ .login').prepend('<div class="close-login"></div>');
		
			//Click button close
			$('.close-login').click(function(e) {
				$('#mask-choose-gender').fadeOut();
				$('.step-story-choose-gender ~.login').fadeOut();
			});
			
			//Append tag br
			$('.step-story-choose-gender ~ .login .close-login ~ a').before($('<br />'));
			
			//Get class
			var classstepstorychoosegender = $('.step-story-choose-gender').attr('class');
			
			if(classstepstorychoosegender){
				$('.step-story-choose-gender ~ #edit-field-gender').before($('<div id="mask-choose-gender"></div>'));
			}
			
			$('.page-node-add-story #field-name-add-more-wrapper').append('<input id="button-back-fill-name" type="button" >');
			
			//Back 
			$('#button-back-fill-name').click(function(e){
				window.history.back();
			});
		
			//Get class case 1
			var classstepstoryfillcase1 = $('.step-story-fill-case-1').attr('class');
			
			if(classstepstoryfillcase1){
				//Append
				$('.step-story-fill-case-1 ~ #edit-field-case1-selected').before($('<div id="mask-case-1"></div>'));
				$('.step-story-fill-case-1 ~ #edit-field-case1-selected ~ #edit-actions').before($('<div id="story-main"></div>'));
				
				$('#story-main').append('<div id="story-main-left"></div>');
				
				$('.page-node-add-story .step-story-fill-case-1 ~ h4:first-of-type').appendTo('#story-main-left');
				$('.page-node-add-story .step-story-fill-case-1 ~ div:nth-of-type(4)').appendTo('#story-main-left');
				$('.page-node-add-story .step-story-fill-case-1 ~ h4:last-of-type').appendTo('#story-main-left');
				$('.page-node-add-story .step-story-fill-case-1 ~ div:nth-of-type(4)').appendTo('#story-main-left');
				$('.page-node-add-story .step-story-fill-case-1 ~ div:nth-of-type(4)').appendTo('#story-main-left');
				
				$('#story-main').prepend('<div class="close-storymain"></div>');
				$('#edit-field-case1-selected').prepend('<div class="number-question"></div>');
				$('#edit-field-case1-selected .number-question').html('1/3');
				
				$('#story-main').append('<div id="story-main-right"></div>');
				
				//Click button close
				$('.close-storymain').click(function(e) {
					$('#story-main').fadeOut();
					$('#mask-case-1').fadeOut();
				});
				
				$('.page-node-add-story #field-case1-selected-add-more-wrapper').append('<input id="button-back" type="button" >');
				
				//Back 
				$('#button-back').click(function(e){
					window.history.back();
				});
			}
			
			//Get class case 2
			var classstepstoryfillcase2 = $('.step-story-fill-case-2').attr('class');
			
			if(classstepstoryfillcase2){
				//Append
				$('#edit-field-case2-selected').prepend('<div class="number-question"></div>');
				$('#edit-field-case2-selected .number-question').html('2/3');
				
				$('.page-node-add-story #field-case2-selected-add-more-wrapper').append('<input id="button-back" type="button" >');
				
				//Back 
				$('#button-back').click(function(e){
					window.history.back();
				});
			}
			
			//Get class case 3
			var classstepstoryfillcase3 = $('.step-story-fill-case-3').attr('class');
			
			if(classstepstoryfillcase3){
				//Append
				$('#edit-field-case3-selected').prepend('<div class="number-question"></div>');
				$('#edit-field-case3-selected .number-question').html('3/3');
				
				$('.page-node-add-story #field-case3-selected-add-more-wrapper').append('<input id="button-back" type="button" >');
				
				//Back 
				$('#button-back').click(function(e){
					window.history.back();
				});
				
				//AppendTo slogan
				$('.step-story-fill-case-3 ~ .slogan').appendTo('#field-case3-selected-add-more-wrapper');
			}
			
			//Get class case summary
			var classstepstoryfillcasesummary = $('.step-story-summary').attr('class');
			
			if(classstepstoryfillcasesummary){
				$('.step-story-summary ~ #edit-actions').before($('<div id="wrapper-center-summary"></div>'));
				
				$('.step-story-summary ~ .story').appendTo('#wrapper-center-summary');
			}
			
			//Get class case complete
			var classstepstoryfillcasecmplete = $('.step-story-complete').attr('class');
			
			if(classstepstoryfillcasecmplete){
				$('.step-story-complete ~ .intro').before($('<div id="mask-complete"></div>'));
				
				$('.step-story-complete ~ .intro').prepend('<div class="close-intro"></div>');
				
				//Click close button popup
				$('.step-story-complete ~ .intro .close-intro').click(function(e){
					$('.step-story-complete ~ .intro').fadeOut();
					$('.step-story-complete ~ #mask-complete').fadeOut();
				});
				
				//Append
				$('.step-story-complete ~ #mask-complete ~ .intro').before($('<div id="popup-share"></div>'));
				
				$('.step-story-complete ~ #popup-share').append('<div class="close-share"></div>');
				
				//Click button share
				$('.fb-share-button').click(function(e){
					var hrefshare = $('.fb-share-button').attr('data-href');
					
					FB.ui({
						method: 'share',
						href: hrefshare,
					}, function(response){
						if (response && !response.error_code) {
							$('.step-story-complete ~ #mask-complete').fadeIn(100);
							
							$('.step-story-complete ~ #popup-share').css('display','block');
							
            } else {
              
            }
					});
				});
				
				//Click button home
				$('.step-story-complete ~ .links').click(function(e){
					//var hrefhome = $('.step-story-complete ~ .links a').attr('href');
					
					$('.step-story-complete ~ #edit-actions #edit-submit').click();
				});
				
				//Css
				$('.step-story-complete').parent().css({
					'margin':'0 auto',
					'width':'305px',
					'position':'relative',
					'height':'200px'
				});
			}
			
			//Get class female
			var classnodestoryfemale = $('.female.node-story').attr('class');
			
			if(classnodestoryfemale){
				$('.female.node-story .field-name-body .field-items .field-item').prepend('<div class="logo-haytuoi"></div>');
			
				$('.female.node-story .field-name-body .field-items').prepend('<div class="close-intro"></div>');
			
				//Click close button popup
				$('.female.node-story .field-name-body .field-items .close-intro').click(function(e){
					$('.female.node-story .field-name-body').fadeOut();
				});
				
				//Append image body
				$('.female.node-story .field-name-body .field-items').append('<div class="body-female"></div>');
				
				//Append to
				$('.female.node-story .field-name-field-gaming-image .field-items .field-item img').appendTo('.female.node-story .field-name-body .field-items');
			
				//Click button share
				$('.fb-share-button').click(function(e){
					var hrefshare = $('.fb-share-button').attr('data-href');
					
					FB.ui({
						method: 'share',
						href: hrefshare,
					}, function(response){});
				});
			}
			
			//Get class male
			var classnodestorymale = $('.male.node-story').attr('class');
			
			if(classnodestorymale){
				$('.male.node-story .field-name-body .field-items .field-item').prepend('<div class="logo-haytuoi"></div>');
			
				$('.male.node-story .field-name-body .field-items').prepend('<div class="close-intro"></div>');
			
				//Click close button popup
				$('.male.node-story .field-name-body .field-items .close-intro').click(function(e){
					$('.male.node-story .field-name-body').fadeOut();
				});
				
				//Append image body
				$('.male.node-story .field-name-body .field-items').append('<div class="body-male"></div>');
				
				//Append to
				$('.male.node-story .field-name-field-gaming-image .field-items .field-item img').appendTo('.male.node-story .field-name-body .field-items');
				
				//Click button share
				$('.fb-share-button').click(function(e){
					var hrefshare = $('.fb-share-button').attr('data-href');
					
					FB.ui({
						method: 'share',
						href: hrefshare,
					}, function(response){});
				});
			}
		}
  };  
})(jQuery, Drupal, this, this.document);
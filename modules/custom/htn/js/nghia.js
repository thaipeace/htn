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
			//Check status login
			var classnamebody = $('body').attr('class');
			
			//boolean menuba
			var checkmenu = true;
			
			//Set text play-now
			$('.front #play-now a').text('NHÀO DZÔ !!');
			
			//Append button
			$('#edit-actions').append('<input id="edit-next-replace" type="button" value="TIẾP TỤC" >');
			
			$('#edit-next-replace:last-of-type').click(function(e){
				$('#edit-next').trigger('click');
			});
			
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
			
			$('#block-block-1 .block-wrapper').css('top','-51px');
			$('.wrap-img-arrowheader').css('top','46px');
			
			//Auto slide up in 3s
			setTimeout(function(){
				closemenu();
			},3000);
			
			//Open menu
			function openmenu(){
				$('#block-block-1 .block-wrapper').animate({
					top:'-51px'
				},250,function(){
					
				});
				$('.wrap-img-arrowheader').animate({
					top:'46px'
				},250,function(){
					
				});
				$('#block-block-3 .block-wrapper a').animate({
					top:'3px'
				},250,function(){
					
				});
				$('.logged-in #block-block-3').animate({
					top:'14px'
				},250,function(){
					
				});
				checkmenu = false;
			}
			
			//Close menu
			function closemenu(){
				$('#block-block-1 .block-wrapper').animate({
					top:'-97px'
				},250,function(){
					
				});
				$('.wrap-img-arrowheader').animate({
					top:0
				},250,function(){
					
				});
				$('#block-block-3 .block-wrapper a').animate({
					top:'-41px'
				},250,function(){
					
				});
				$('.logged-in #block-block-3').animate({
					top:'-18px'
				},250,function(){
					
				});
				checkmenu = true;
			}
			
			//$('#block-block-3 .block-wrapper a').text('');
			
			//Append mask of radio
			$('.page-node-add-gaming #edit-field-gender-und .form-item:nth-child(1)').append('<label for="edit-field-gender-und-female" id="check-radio"></label>');
			$('.page-node-add-gaming #edit-field-gender-und .form-item:nth-child(2)').append('<label for="edit-field-gender-und-male" id="check-radio"></label>');
		
			//Append button back
			$('.page-node-add-gaming #edit-actions').append('<input id="button-back" type="button" >');
			
			//Back 
			$('#button-back:last-of-type').click(function(e){
				window.history.back();
			});
			
			//Append image head 
			$('.male div:nth-child(1) #edit-field-gaming-image div:nth-child(1) .form-item').append('<div id="img-head"></div>');
			$('.female div:nth-child(1) #edit-field-gaming-image div:nth-child(1) .form-item').append('<div id="img-head"></div>');
			
			//Upload image
			$('#edit-field-gaming-image-und-0-upload').change(function(event) {
					//Upload image
					event.preventDefault();
					$(this).next('input[type="submit"]').mousedown();
					
					//Hide button add
					$(this).css('display','none');
				
					//Show button next
					$('.page-node-add-gaming .node-form .step-up-picture ~ #edit-actions #edit-next').css('display','inline-block');
			
					//Set style when upload
					$('.page-node-add-gaming .node-form .step-up-picture ~ #edit-actions').css('margin-top','286px','important');
			});
			
			//Append button
			$('.step-select-situation ~ .situa .fresh').append('<input type="button" id="fresh-play" name="play" value="TẠO VIDEO">');
			$('.step-select-situation ~ .situa .hot').append('<input type="button" id="hot-play" name="play" value="TẠO VIDEO">');
		
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
			$('.step-select-case-1 ~ .form-item-field-case1 #edit-field-case1 .form-item label.option').before('<label class="mask-select" id="question-radio"></label>');
			$('#edit-field-case1-a').siblings('.mask-select').attr('for','edit-field-case1-a');
			$('#edit-field-case1-b').siblings('.mask-select').attr('for','edit-field-case1-b');
			$('#edit-field-case1-c').siblings('.mask-select').attr('for','edit-field-case1-c');
			
			$('.step-select-case-2 ~ .form-item-field-case2 #edit-field-case2 .form-item label.option').before('<label class="mask-select" id="question-radio"></label>');
			$('#edit-field-case2-aa').siblings('.mask-select').attr('for','edit-field-case2-aa');
			$('#edit-field-case2-ab').siblings('.mask-select').attr('for','edit-field-case2-ab');
			$('#edit-field-case2-ac').siblings('.mask-select').attr('for','edit-field-case2-ac');
			$('#edit-field-case2-ba').siblings('.mask-select').attr('for','edit-field-case2-ba');
			$('#edit-field-case2-bb').siblings('.mask-select').attr('for','edit-field-case2-bb');
			$('#edit-field-case2-bc').siblings('.mask-select').attr('for','edit-field-case2-bc');
			$('#edit-field-case2-ca').siblings('.mask-select').attr('for','edit-field-case2-ca');
			$('#edit-field-case2-cb').siblings('.mask-select').attr('for','edit-field-case2-cb');
			$('#edit-field-case2-cc').siblings('.mask-select').attr('for','edit-field-case2-cc');
			
			$('.step-select-case-3 ~ .form-item-field-case3 #edit-field-case3 .form-item label.option').before('<label class="mask-select" id="question-radio"></label>');
			$('#edit-field-case3-aaa').siblings('.mask-select').attr('for','edit-field-case3-aaa');
			$('#edit-field-case3-aab').siblings('.mask-select').attr('for','edit-field-case3-aab');
			$('#edit-field-case3-aac').siblings('.mask-select').attr('for','edit-field-case3-aac');
			$('#edit-field-case3-aba').siblings('.mask-select').attr('for','edit-field-case3-aba');
			$('#edit-field-case3-abb').siblings('.mask-select').attr('for','edit-field-case3-abb');
			$('#edit-field-case3-abc').siblings('.mask-select').attr('for','edit-field-case3-abc');
			$('#edit-field-case3-aca').siblings('.mask-select').attr('for','edit-field-case3-aca');
			$('#edit-field-case3-acb').siblings('.mask-select').attr('for','edit-field-case3-acb');
			$('#edit-field-case3-acc').siblings('.mask-select').attr('for','edit-field-case3-acc');
			$('#edit-field-case3-baa').siblings('.mask-select').attr('for','edit-field-case3-baa');
			$('#edit-field-case3-bab').siblings('.mask-select').attr('for','edit-field-case3-bab');
			$('#edit-field-case3-bac').siblings('.mask-select').attr('for','edit-field-case3-bac');
			$('#edit-field-case3-bba').siblings('.mask-select').attr('for','edit-field-case3-bba');
			$('#edit-field-case3-bbb').siblings('.mask-select').attr('for','edit-field-case3-bbb');
			$('#edit-field-case3-bbc').siblings('.mask-select').attr('for','edit-field-case3-bbc');
			$('#edit-field-case3-bca').siblings('.mask-select').attr('for','edit-field-case3-bca');
			$('#edit-field-case3-bcb').siblings('.mask-select').attr('for','edit-field-case3-bcb');
			$('#edit-field-case3-bcc').siblings('.mask-select').attr('for','edit-field-case3-bcc');
			$('#edit-field-case3-caa').siblings('.mask-select').attr('for','edit-field-case3-caa');
			$('#edit-field-case3-cab').siblings('.mask-select').attr('for','edit-field-case3-cab');
			$('#edit-field-case3-cac').siblings('.mask-select').attr('for','edit-field-case3-cac');
			$('#edit-field-case3-cba').siblings('.mask-select').attr('for','edit-field-case3-cba');
			$('#edit-field-case3-cbb').siblings('.mask-select').attr('for','edit-field-case3-cbb');
			$('#edit-field-case3-cbc').siblings('.mask-select').attr('for','edit-field-case3-cbc');
			$('#edit-field-case3-cca').siblings('.mask-select').attr('for','edit-field-case3-cca');
			$('#edit-field-case3-ccb').siblings('.mask-select').attr('for','edit-field-case3-ccb');
			$('#edit-field-case3-ccc').siblings('.mask-select').attr('for','edit-field-case3-ccc');
			
			$('.mask-select').click(function(e){
				$('#edit-next-replace').css('display','block');
			});
			
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
			
			$('article.node-gaming .field-name-field-background-video .field-items .field-item').html('<video id="video-complete" width="100%" height="100%"><source src="'+srcvideo+'" type="video/mp4"></video>');
			
			$('article.node-gaming .field-name-field-gaming-image .field-items .field-item').append('<div id="button-playvideo"></div>');
			
			//Click button play video
			$('#button-playvideo').click(function(e){
				$('#video-complete').get(0).play();
				
				$(this).fadeOut(500);
			});
			
			//Replay
			$('#video-complete').bind('ended',function(){
				$('#button-playvideo').fadeIn(100);
			});
			
			//Prepend button close
			$('.step-story-choose-gender ~ .intro').prepend('<div class="close-intro"></div>');
			
			$('.step-story-choose-gender ~ .login a').text('');
			
			//Click button close
			$('.close-intro').click(function(e) {
				$('.step-story-choose-gender ~ .intro').fadeOut();
				
				if(classnamebody.split(" ")[2] == "logged-in"){
					$('.step-story-choose-gender ~ #mask-choose-gender').fadeOut();
				}else{
					$('.step-story-choose-gender ~.login').css('display','block');
				}
			});
			
			//Append mask radio 
			$('.page-node-add-story #edit-field-gender-und .form-item:nth-child(1)').append('<label for="edit-field-gender-und-female" id="check-radio"></label>');
			$('.page-node-add-story #edit-field-gender-und .form-item:nth-child(2)').append('<label for="edit-field-gender-und-male" id="check-radio"></label>');
			
			/*
			//Prepend button close
			$('.step-story-choose-gender ~ .login').prepend('<div class="close-login"></div>');
		
			//Click button close
			$('.close-login').click(function(e) {
				$('#mask-choose-gender').fadeOut();
				$('.step-story-choose-gender ~.login').fadeOut();
			});*/
			
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
				
				$('.step-story-fill-case-3 ~ #edit-field-case3-selected input').keyup(function(){
						var textinput = $(this).val();
						
						$('.step-story-fill-case-3 ~ #edit-field-case3-selected #field-case3-selected-add-more-wrapper .slogan #c').text(textinput);
				});
				
			}
			
			//Get class case summary
			var classstepstoryfillcasesummary = $('.step-story-summary').attr('class');
			
			if(classstepstoryfillcasesummary){
				$('.step-story-summary ~ #edit-actions').before($('<div id="wrapper-center-summary"></div>'));
				
				$('.step-story-summary ~ .story').appendTo('#wrapper-center-summary');
				
				$('.step-story-summary ~ #edit-actions #edit-submit').attr('value','GỬI CÂU CHUYỆN');
			}
			
			//Get class case complete
			var classstepstoryfillcasecmplete = $('.page-story-thanks').attr('class');
			
			if(classstepstoryfillcasecmplete){
				$('.page-story-thanks .intro').before($('<div id="mask-complete"></div>'));
				
				$('.page-story-thanks #mask-complete ~ .intro').prepend('<div class="close-intro"></div>');
				
				//Click close button popup
				$('.page-story-thanks .intro .close-intro').click(function(e){
					$('.page-story-thanks .intro').fadeOut();
					$('.page-story-thanks #mask-complete').fadeOut();
				});
				
				//Append
				$('.page-story-thanks #mask-complete ~ .intro').before($('<div id="popup-share"></div>'));
				
				$('.page-story-thanks #mask-complete ~ #popup-share').append('<div class="close-share"></div>');
				
				//Click button share
				$('.fb-share-button').click(function(e){
					//var hrefshare = $('.fb-share-button').attr('data-href');
					
					$('.page-story-thanks #mask-complete').fadeIn(100);
							
					$('.page-story-thanks #popup-share').css('display','block');
					
				});
				
				//Click close button popup
				$('.page-story-thanks #popup-share .close-share').click(function(e){
					$('.page-story-thanks #mask-complete').fadeOut();
					$('.page-story-thanks #popup-share').fadeOut();
				});
				
				//Click button home
				$('.page-story-thanks .links').click(function(e){
					var hrefhome = $('.page-story-thanks .links a').attr('href');
					
					location = hrefhome;
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
				});
			}
			
			$('.step-choose-gender ~ #edit-field-gender').before('<div id="mask-choose-gender"></div>');
			
			$('.step-choose-gender ~ .intro').css('display','none');
			
			//$('.step-choose-gender ~ .login').prepend('<div class="close-login"></div>');
			
			if(classnamebody.split(" ")[2] == "logged-in"){
				$('.step-choose-gender ~ #mask-choose-gender').fadeOut();
			}else{
				$('.step-choose-gender ~ .login .close-login ~ a').before($('<br />'));
				$('.step-choose-gender ~ .login').css('display','block');
			}
			
			/*
			$('.step-choose-gender ~ .login .close-login').click(function(e){
				$('.step-choose-gender ~ #mask-choose-gender').fadeOut();
				$('.step-choose-gender ~ .login').fadeOut();
			});*/
			
			//Get class lib media
			var classmedia = $('.page-thu-vien').attr('class');
			
			if(classmedia){
				//Append some item
				$('.page-thu-vien .view-media-library .view-content .views-row .views-field-field-gaming-image .field-content').append('<div class="background-main"></div>');
				
				$('.page-thu-vien .view-media-library .view-content .views-row .views-field-field-gaming-image .field-content').append('<div class="body-background"></div>');
				
				$('.page-thu-vien .views-field-body-1').siblings('.views-field-body').children().prepend('<div class="title-haytuoinhu">HÃY TƯƠI NHƯ</div>');
				
				//Get url page
				var urlpagethuvien = window.location.href;
				
				var urlfirst = urlpagethuvien.split("&");
				
				var urlsecond = urlfirst[0].split("?");
				
				if(urlsecond[1] == "type=story"){
					$('.page-thu-vien .view-media-library .views-exposed-form .clearfix').prepend('<div class="tab-top"><input type="button" value="XEM VIDEO" class="seevideo"><input type="button" value="XEM CÂU CHUYỆN" class="seestory active"></div>');
				}else{
					if(urlsecond[1] == "type=gaming"){
						$('.page-thu-vien .view-media-library .views-exposed-form .clearfix').prepend('<div class="tab-top"><input type="button" value="XEM VIDEO" class="seevideo active"><input type="button" value="XEM CÂU CHUYỆN" class="seestory"></div>');
					}else{
						$('.page-thu-vien .view-media-library .views-exposed-form .clearfix').prepend('<div class="tab-top"><input type="button" value="XEM VIDEO" class="seevideo active"><input type="button" value="XEM CÂU CHUYỆN" class="seestory"></div>');
					}
				}
				
				//Click button tab-top
				$('.seevideo').click(function(e){
					$('#edit-type-wrapper #edit-type').val('gaming').change();
					
					$('#edit-submit-media-library').trigger('click');
				});
				
				$('.seestory').click(function(e){
					$('#edit-type-wrapper #edit-type').val('story').change();
					
					$('#edit-submit-media-library').trigger('click');
				});
				
				//Enter when search
				$('.page-thu-vien .view-media-library #edit-field-name-value-wrapper input[type=text]').bind("enterKey",function(e){
					$('#edit-submit-media-library').trigger('click');
				});
				
				$('.page-thu-vien .view-media-library #edit-field-name-value-wrapper input[type=text]').keyup(function(e){
					if(e.keyCode == 13){
						$(this).trigger("enterKey");
					}
				});
				
				//Append mask 
				$('.page-thu-vien .view-media-library').append('<div class="mask-view"><div class="video-mask-wrapper"><div class="close-button"></div><div class="video-main"></div><div id="body-video"></div><img id="face-video" src="" ></div>');
				
				var maskviewchitiet = '<div class="mask-view-chitiet">'
																+'<div class="chitiet-wrapper">'
																	+'<div class="close-chitiet"></div>'
																	+'<div class="chitiet-content">'
																	+'</div>'
																	+'<div id="chitiet-body"></div>'
																	+'<img id="chitiet-face" src="" width="100" height="115" >'
																+'</div>'
															+'</div>';
				
				$('.page-thu-vien .view-media-library').append(maskviewchitiet);
				
				$('.page-thu-vien .view-media-library .fresh').parent().siblings('.mask-view-chitiet').css('display','none');
				
				//Array color
				var back = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#e67e22"];
				
				//Get first char in name
				for(var i = 1; i<= 8;i++){
					var rand = back[Math.floor(Math.random() * back.length)];
					
					$('.page-thu-vien .view-media-library .view-content .views-row:nth-child('+i+').fresh').append('<div id="view-play" class="play-'+i+'"></div>');
					$('.page-thu-vien .view-media-library .view-content .views-row:nth-child('+i+').hot').append('<div id="view-play" class="play-'+i+'"></div>');
					
					//Get link video
					
					if($('.page-thu-vien .view-media-library .view-content .views-row:nth-child('+i+').fresh .views-field-picture .field-content').children().size() == 0 || $('.page-thu-vien .view-media-library .view-content .views-row:nth-child('+i+').hot .views-field-picture .field-content').children().size() == 0){
						$('.page-thu-vien .view-media-library .view-content .views-row:nth-child('+i+').fresh .views-field-picture .field-content').html($('.page-thu-vien .view-media-library .view-content .views-row:nth-child('+i+') .views-field-field-name .field-content').text()[0]);
						$('.page-thu-vien .view-media-library .view-content .views-row:nth-child('+i+').hot .views-field-picture .field-content').html($('.page-thu-vien .view-media-library .view-content .views-row:nth-child('+i+') .views-field-field-name .field-content').text()[0]);
						
						$('.page-thu-vien .view-media-library .view-content .views-row:nth-child('+i+').fresh .views-field-picture .field-content').css({
						  'font-size': '25px',
							'font-weight': 'bold',
							'text-align': 'center',
							'margin-top': '11px',
							'text-transform':'uppercase',
							'color':rand
						});
						
						$('.page-thu-vien .view-media-library .view-content .views-row:nth-child('+i+').hot .views-field-picture .field-content').css({
						  'font-size': '25px',
							'font-weight': 'bold',
							'text-align': 'center',
							'margin-top': '11px',
							'text-transform':'uppercase',
							'color':rand
						});
					}
					
					//Click button-play
					$('.play-'+i).click(function(e){
						//Get gender to set image body
						var genderclick = $(this).parent().attr("class").split(" ");
						
						if(genderclick[genderclick.length-2] == "male"){
							$('#body-video').removeClass().addClass('body-male-video');
							
							$('#face-video').removeClass().addClass('face-male-video');
						}else{
							if(genderclick[genderclick.length-2] == "female"){
								$('#body-video').removeClass().addClass('body-female-video');
								
								$('#face-video').removeClass().addClass('face-female-video');
							}
						}
						
						//Get gender to set image face
						var genderfaceclick = $(this).siblings('.views-field-field-gaming-image').children();
						
						$('#face-video').attr('src',$('img',genderfaceclick).attr('src'));
						
						//HTML video and link all of case
						var linkvideo = $(this).siblings('div:nth-child(3)').text();
						
						$('.page-thu-vien .view-media-library .mask-view .video-mask-wrapper .video-main').html('<video width="660" height="370" controls><source src="'+linkvideo+'"></video>');
						
						$('.mask-view').fadeIn();
					});
					
					//Append button chitiet
					$('.page-thu-vien .view-media-library .view-content .views-row-'+i+' .views-field-body').append('<a id="chitiet-click" class="xemchitiet-'+i+'">xem chi tiết ►</a>');
				
					//Click xem chi tiet
					$('.xemchitiet-'+i).click(function(e){
						var chitietclass = $(this).parents('.views-row').attr('class').split(" ");
						
						var linkimage = $(this).parent().siblings('.views-field-field-gaming-image').children();
						
						//Add body click chi tiet
						if(chitietclass[chitietclass.length-2] == "male"){
							$('#chitiet-face').removeClass('chitiet-face-female').addClass('chitiet-face-male');
							$('#chitiet-body').removeClass('chitiet-body-female').addClass('chitiet-body-male');
						}else{
							if(chitietclass[chitietclass.length-2] == "female"){
								$('#chitiet-face').removeClass('chitiet-face-male').addClass('chitiet-face-female');
								$('#chitiet-body').removeClass('chitiet-body-male').addClass('chitiet-body-female');
							}
						}
						
						$('#chitiet-face').attr('src',$('img', linkimage).attr('src'));
						
						$('.chitiet-content').html('<div class="logo-haytuoi"></div>'+$(this).parent().siblings('.views-field-body-1').html());
						
						$('.mask-view-chitiet').css('display','block');
					});
				}
				
				$('.video-mask-wrapper .close-button').click(function(e){
					$('.mask-view').fadeOut();
				});
				
				$('.close-chitiet').click(function(e){
					$('.mask-view-chitiet').fadeOut();
				});
				
				$('.chitiet-content .fb-share-button').click(function(e){
					var hrefshare = $('.chitiet-content .fb-share-button').attr('data-href');
				});
			}
			
			//Get class page profile
			var classpagecanhan = $('.page-trang-ca-nhan').attr('class');
				
			if(classpagecanhan){
				$('.view-id-game_summary div:first-of-type.view-grouping .view-grouping-content h3').text('VIDEO ĐÃ CHƠI');
				$('.view-id-game_summary div:nth-child(2).view-grouping .view-grouping-content h3').text('CÂU CHUYỆN ĐÃ GỬI');
				
				$('.view-id-game_summary div:first-of-type.view-grouping .views-row .views-field-field-gaming-image .field-content').append('<div id="body-profile-game"></div>');
				
				$('.view-id-game_summary div:nth-child(2).view-grouping .views-row .views-field-field-gaming-image .field-content').append('<div class="body-background"></div>');
			
				$('.view-id-game_summary .views-field-body-1').siblings('.views-field-body').children().prepend('<div class="title-haytuoinhu">HÃY TƯƠI NHƯ</div>');
			
				//Append mask 
				$('.page-trang-ca-nhan .view-game-summary').append('<div class="mask-view"><div class="video-mask-wrapper"><div class="close-button"></div><div class="video-main"></div><div id="body-video"></div><img id="face-video" src="" ></div>');
				
				var maskviewchitiet = '<div class="mask-view-chitiet">'
																+'<div class="chitiet-wrapper">'
																	+'<div class="close-chitiet"></div>'
																	+'<div class="chitiet-content">'
																	+'</div>'
																	+'<div id="chitiet-body"></div>'
																	+'<img id="chitiet-face" src="" width="100" height="115" >'
																+'</div>'
															+'</div>';
				
				$('.page-trang-ca-nhan .view-game-summary').append(maskviewchitiet);
				
				//Count child
				var countchild = $('.view-id-game_summary div:first-of-type.view-grouping .view-grouping-content').children().length;
			
				for(var i = 1;i<=countchild-1;i++){
					$('.view-id-game_summary div:first-of-type.view-grouping .views-row-'+i).append('<div id="view-game" class="view-game-'+i+'"></div>');
				
					//Click button-play
					$('.view-game-'+i).click(function(e){
						//Get gender to set image body
						var genderprofilegame = $(this).parent().attr('class').split(" ");
					
						if(genderprofilegame[genderprofilegame.length-2] == "male"){
							$('#body-video').removeClass().addClass('body-male-video');
							
							$('#face-video').removeClass().addClass('face-male-video');
						}else{
							if(genderprofilegame[genderprofilegame.length-2] == "female"){
								$('#body-video').removeClass().addClass('body-female-video');
								
								$('#face-video').removeClass().addClass('face-female-video');
							}
						}
						
						//Get gender to set image face
						var genderfaceclick = $(this).siblings('.views-field-field-gaming-image').children();
						
						$('#face-video').attr('src',$('img',genderfaceclick).attr('src'));
						
						//HTML video and link all of case
						var linkvideo = $(this).siblings('div:nth-child(2)').text();
						
						$('.mask-view .video-mask-wrapper .video-main').html('<video width="660" height="370" controls><source src="'+linkvideo+'"></video>');
						
						$('.mask-view').fadeIn();
						
					});
				}
				
				var countchildstory = $('.view-id-game_summary div:nth-child(2).view-grouping .view-grouping-content').children().length;
				
				for(var i = 1;i<=countchildstory-1;i++){
					//Append button chitiet
					$('.view-id-game_summary .views-row-'+i+' .views-field-body').append('<a id="chitiet-click" class="xemchitiet-'+i+'">xem chi tiết ►</a>');
					
					//Click xem chi tiet
					$('.xemchitiet-'+i).click(function(e){
						var chitietclass = $(this).parents('.views-row').attr('class').split(" ");
						
						var linkimage = $(this).parent().siblings('.views-field-field-gaming-image').children();
						
						//Add body click chi tiet
						if(chitietclass[chitietclass.length-2] == "male"){
							$('#chitiet-face').removeClass('chitiet-face-female').addClass('chitiet-face-male');
							$('#chitiet-body').removeClass('chitiet-body-female').addClass('chitiet-body-male');
						}else{
							if(chitietclass[chitietclass.length-2] == "female"){
								$('#chitiet-face').removeClass('chitiet-face-male').addClass('chitiet-face-female');
								$('#chitiet-body').removeClass('chitiet-body-male').addClass('chitiet-body-female');
							}
						}
						
						$('#chitiet-face').attr('src',$('img', linkimage).attr('src'));
						
						$('.chitiet-content').html('<div class="logo-haytuoi"></div>'+$(this).parent().siblings('.views-field-body-1').html());
						
						$('.mask-view-chitiet').css('display','block');
					});
				}
				
				$('.video-mask-wrapper .close-button').click(function(e){
					$('.mask-view').fadeOut();
				});
				
				$('.close-chitiet').click(function(e){
					$('.mask-view-chitiet').fadeOut();
				});
				
			}
		}
  };  
})(jQuery, Drupal, this, this.document);
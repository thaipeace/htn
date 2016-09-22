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
			$('.field-name-field-material .field-items .field-item').html('<video width="560" height="310" controls><source src="http://localhost/htn/sites/default/files/samplevideo_1280x720_1mb.mp4" type="video/mp4"></video>');
    }
  };  
})(jQuery, Drupal, this, this.document);
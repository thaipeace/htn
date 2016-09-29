/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.services = {
    attach: function (context, settings) {
      $('#fb-share-button').click(function() {
        FB.ui({
          method: 'share',
          display: 'popup',
          href: 'http://localhost/htn/thai-1474449168',
        }, function(response){});
      });
    }
  };  
})(jQuery, Drupal, this, this.document);
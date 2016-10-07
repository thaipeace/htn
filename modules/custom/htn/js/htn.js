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
      
      // Slide in profile
      $('.view-id-game_summary .view-content .view-grouping')
              .append('<div class="row right">')
              .prepend('<div class="row left">');
      
      $('.view-id-game_summary .view-content .view-grouping .row').click(function(){
        var iw = 310;
        var runw = $(this).parent().find('.view-grouping-content');
        
        $($(this).parent().find('.row')).show();
        if ($(this).hasClass('right')) {
          runw.animate({'left':(parseInt(runw.css('left')) - iw) + 'px'}, 100, 'linear', function(){
            (Math.abs(parseInt(runw.css('left'))) >= ($('.views-row', runw).length - 3) * iw)?$(this).hide():$(this).show();
          }.bind(this));
        }else {
          runw.animate({'left':(parseInt(runw.css('left')) + iw) + 'px'}, 100, 'linear', function(){
            (Math.abs(parseInt(runw.css('left'))) === 0)?$(this).hide():$(this).show();
          }.bind(this));
        }
      });
      
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
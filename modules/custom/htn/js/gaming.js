/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.gmaing = {
    attach: function (context, settings) {
      
      if ($('#gaming-node-form').length > 0) {

        // Fill from fake case
        $("input[name=field_case1]:radio").change(function () {
          $('#edit-field-case1-selected-und-0-value').val($(this).val());
        });
        $("input[name=field_case2]:radio").change(function () {
          $('#edit-field-case2-selected-und-0-value').val($(this).val());
        });
        $("input[name=field_case3]:radio").change(function () {
          $('#edit-field-case3-selected-und-0-value').val($(this).val());
        });
    
      }
      
    }
  };

})(jQuery, Drupal, this, this.document);
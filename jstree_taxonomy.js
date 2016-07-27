/**
 * @file
 * main.js
 *
 * Provides general enhancements and js functionalities.
 */

var Drupal = Drupal || {};
(function ($,Drupal) {
  Drupal.behaviors.jstree_taxonomy = {
    attach: function (context, settings) {
			var data = JSON
			$('#jstree_taxonomy').jstree({
				'core' : {
		    	'data' : JSON.parse(Drupal.settings.jstree_taxonomy.taxonomy_tree_json)
		    }
		  });
    }
  };
})(jQuery,Drupal);
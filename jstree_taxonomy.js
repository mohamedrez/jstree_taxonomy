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
		  }).bind("select_node.jstree", function (e, data) {
			    var href = data.node.a_attr.href;
			    document.location.href = href;
			});
    }
  };
})(jQuery,Drupal);
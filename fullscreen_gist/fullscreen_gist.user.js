/* global jQuery */

jQuery(document).ready(function() {
  // Create class to style gists
  jQuery("<style type='text/css'> .mega-big-gist {position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 100;} </style>").appendTo("head");

  // Add button to gist files
  jQuery('.file-box .meta .file-actions .button-group').append('<li><a href="#" class="file-actions-button tooltipped downwards permalink make-mega-big"><span class="octicon octicon-gist"></span></li>');

  // Add event listener so button click expands and regular sizes the gist files
  jQuery('.file-box').on('click', '.make-mega-big', function(e) {
    e.preventDefault();
    jQuery(this).parents('.file-box').toggleClass('mega-big-gist');
  }
  );
});

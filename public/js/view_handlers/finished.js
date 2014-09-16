(function($, WIMR){
  WIMR.dialog.registerTemplateCallback('finished', function($el){
    $el.find('a.start-over').click(function(e){
      e.preventDefault();
      WIMR.dialog.showTemplate('search_form');
    })
  });
})(jQuery, WIMR);
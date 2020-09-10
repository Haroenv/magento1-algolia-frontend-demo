algolia.registerHook('beforeInstantsearchStart', function (search) {
  search.addWidget(
    algoliaBundle.instantsearch.widgets.hits({
      container: '#custom-second-hits',
    })
  );
  return search;
});

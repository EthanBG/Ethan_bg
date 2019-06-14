function inject(name){
  var link = document.querySelector('link[rel="import"]');
  var content = link.import;
  var element = content.querySelector('#'+name);
  document.body.appendChild(element.cloneNode(true));
}

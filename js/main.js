(function(){
    var tag = document.getElementById('main-tag');
    var features = document.getElementById('main-FEATURED');
    // https://api.github.com/repos/yhjyang1/yhjyang1.github.io/git/trees/master
    fetch('https://api.github.com/repos/yhjyang1/yhjyang1.github.io/contents/features').then(function(response) {
        return response.json();
      }).then(function(d){
        tag.innerHTML = d.length;
    });
}())
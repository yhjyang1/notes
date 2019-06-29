(function(){
    var prefix = 'https://api.github.com';
    var repos = document.getElementById('repos');
    fetch(prefix + '/users/yhjyang1/repos?' + 'type=owner&sort=updated').then(function(response) {
        return response.json();
      }).then(function(d){
          for (var i = 0; i < d.length; i++) {
              var data = d[i];
              var name = data.name;
              var homepage = data.homepage;
              var description = data.description;
              var html_url = data.html_url;
              var li = document.createElement('li');
              li.innerHTML = "<div class='item-list-item-content'>\
              <div class='flex-items-center'>\
                <svg class='svg1' viewBox='0 0 12 16' version='1.1' width='12' height='16' aria-hidden='true'><path fill-rule='evenodd' d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z'></path></svg>\
                <a href="+(homepage || html_url)+" class='text-bold flex-auto'>\
                  <span title="+name+">" + name + "</span>\
                </a>\
              </div>\
              <p class='pinned-item-desc'>"+description+
              "</p>\
            </div>";
              li.className = 'list-item';
              repos.appendChild(li);
          }
    });
}())
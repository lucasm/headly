// get date & time

// function formatDate(date){
//   var year = date.getYear()
//   if(year < 1900){
//     year += 1900
//   }
//   var month = date.getMonth()+1
//   var day = date.getDate()
//   var hour = date.getHours()
//   var minutes = date.getMinutes()
//   if(minutes < 10){
//     minutes = '0' + minutes
//   }
//   return year + '/' + month + '/' + day + ' ' + hour + ':' +minutes
// }


// 'load entries' é só mudar a função

function loadEntries(url,id) {
  var blogDiv = document.getElementById(id)
  feednami.load(url,function(res) {
    // blogDiv.removeChild(blogDiv.querySelector('.loading'))
    var entries = res.feed.entries
    var added = 0;
    for(var i = 0; i < entries.length && added < 2; i++) {
      var entry = entries[i]

      // get images

      // if (entry.mediaGroup) {
      //   var img = new Image();
      //   img.src = entry.mediaGroup[0].content[0].url;
      //   blogDiv.appendChild(img);
      // }
      // if (entry.mediaGroup) {
      //   var figure = document.createElement('figure')
      //   figure.setAttribute('class','img')
      //   figure.innerHTML = '<img src="'+entry.mediaGroup[0].content[0].url+'">'
      //   blogDiv.appendChild(figure)
      // }

      if(entry.title.indexOf('PR:') == -1) {
        added++
        var div = document.createElement('li')
        div.setAttribute('class','entry')
        div.innerHTML = '<a href="'+entry.link+'" target="_blank" rel="external noopener">'+entry.title+'</a>'
        // show data & time
        // <p class="date">'+formatDate(new Date(entry.pubdate_ms))+'</p>'
        blogDiv.appendChild(div)
      }

    }
  })
}

// for podcasts (dont removed for lately review)

function loadEpisodes(url,id){
  var podDiv = document.getElementById(id)
  feednami.load(url,function(res){
    podDiv.removeChild(podDiv.querySelector('.loading'))
    var entries = res.feed.entries
    for(var i = 0; i < entries.length && i < 3; i++){
      var entry = entries[i]
      var div = document.createElement('div')
      div.setAttribute('class','entry')
      div.innerHTML = 
        '<p class="title"><a href="'
          + entry.link
          + '" target="_blank">'
          + entry.title
          + '</a></p><p class="date">'
          + formatDate(new Date(entry.pubdate_ms))
          + '</p><p class="audio-container"><audio preload="none" controls><source src="'
          + entry.enclosures[0].url
          + '"></audio></p>'
      podDiv.appendChild(div)
    }
  })
}

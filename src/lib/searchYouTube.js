var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(function(data) {
      callback(data.items);
    })
    .fail(function() {
      console.log(key, query, max);
      console.log('request failed');
    });
};

window.searchYouTube = searchYouTube;

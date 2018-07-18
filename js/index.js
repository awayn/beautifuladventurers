var feed = new Instafeed({ 
  get: 'tagged',
  tagName: 'awayn',
  clientId: 'abc780cd9c1c4c97904c0964488a81ea',
  resolution: 'standard_resolution',
  links: false,
  //template: '<a href="{{link}}"><img src="{{image}}" /><span>{{caption}}</span></a>',
  accessToken: '145849047.ba4c844.97b3e688ae214c72a1653e6dca87537d'  
});

feed.run();




        function getMultipleTags (tags) {
            var feeds = [];
            for (var i=0, len=tags.length; i < len; i++) {
                feeds.push(new Instafeed({
                    // rest of your options
                    get: 'tagged',
                    tagName: tags[i],
                    target: "instafeed-" + tags[i]
                }));
            }
            return feeds;
        }

        // get multiple tags
        var myTags = getMultipleTags(['glass', 'wood', 'rock']);
        // run each instance
        for(var i=0, len=myTags.length; i < len; i++) {
            myTags[i].run();
        }

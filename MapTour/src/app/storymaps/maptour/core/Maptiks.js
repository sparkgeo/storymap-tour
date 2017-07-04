define(["dojo/topic"],
  function(topic){
    topic.subscribe("maptour-ready", function(){
      require(['maptiks'], function (mapWrapper) {
        if (!app.map.maptiks) {
          var container = app.map.container; // the current map div
          var maptiksSet = app.data.getWebAppData().values.hasOwnProperty('maptiks');
          var maptiksTrackcode = maptiksSet ? app.data.getWebAppData().values.maptiks.maptiksTrackcode : 'c311cf16-ad79-42b1-97f9-f433be6c8b00';
          var maptiksId = maptiksSet ? app.data.getWebAppData().values.maptiks.maptiksId : 'test';
          var maptiksMapOptions = {
            extent: app.map.extent,
            maptiks_trackcode: maptiksTrackcode,
            maptiks_id: maptiksId + ":" + app.map.id
          };
          mapWrapper(container, maptiksMapOptions, app.map);
          topic.publish("maptiks-ready");
        }
      });
    });
  }
);
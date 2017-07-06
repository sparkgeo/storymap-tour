define(["dojo/topic"],
  function(topic){
    topic.subscribe("maptour-ready", function(){
      require(["maptiks"], function (mapWrapper) {
        if (app.data.getWebAppData().values.maptiks) { // if maptiks parameters entered in builder
          var container = app.map.container; // the current map div
          var maptiksMapOptions = {
            maptiks_trackcode: app.data.getWebAppData().values.maptiks.maptiksTrackcode, // from Builder Maptiks settings
            maptiks_id: app.data.getWebAppData().values.maptiks.maptiksId + ":" + app.map.id // from Builder Maptiks settings, ID:tabname
          };
          mapWrapper(container, maptiksMapOptions, app.map);
        }
        topic.publish("maptiks-ready", mapWrapper);
      });
    });
  }
);
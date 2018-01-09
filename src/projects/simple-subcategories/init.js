(function(exports) {
    'use strict';
    
    //initialize the app
    var settings = {
        Model: JSONMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "./assets/model.json",
        showSearch: true,
        displayButtons:true
    };

    exports.app = new App(settings);
}(window));

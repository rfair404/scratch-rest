// This is the actual scratch extension part
(function(ext) {
    var api_base = '';

    //callback for when base is set
    ext.set_api_base = function(api_base, value) {
        this.api_base = value;
    };
    ext.get_api_base = function() {
        return this.api_base;
    };
    ext._get = function(url) {
        //make a general get method later
    };
    ext.discover_routes = function(callback) {
    // Make an AJAX call to a given REST API and discover the available routes
        $.ajax({
            url: this.get_api_base(),
            dataType: 'json',
            success: function(ret){
                console.log(ret);
                callback(ret);
            }
        });
    };
    var descriptor = {
        blocks: [
            // ['h', 'Enable REST API', 'start'],
            [' ', 'Set %m.api_base to %s', 'set_api_base', 'api_base', 'https://'],
            ['R', 'Discover API Routes', 'discover_routes'],
        ],
        menus : {
          api_base: ['api_base', 'api_namespace', 'api_endpoint'],
        },
        url: 'http://rfair404.github.io/WP-REST-API-FOR-SCRATCHX'
        // Link to extension documentation, homepage, etc.
    };

    // Register the extension
    ScratchExtensions.register('scratch-rest', descriptor, ext);

})({});

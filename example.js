// This is the actual scratch extension part
(function(ext) {
    var api_base = '';

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {
    };

    // Status reporting code
    // Return any message to be displayed as a tooltip.
    // Status values: 0 = error (red), 1 = warning (yellow), 2 = ready (green)
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.callback = function( value ){
        return value;
    };

    ext.start = function() {
        return true;
    };

    //callback for when base is set
    ext.set_api_base = function(api_base, value) {
        this.api_base = value;
        console.log('setting api base to ' + value);
    };
    ext.get_api_base = function() {
        console.log('the api base is ' + this.api_base);
        return this.api_base;
    };
    ext._get = function(url) {
        //make a general get method later
    };
    ext.discover_routes = function(callback) {
    // Make an AJAX call to a given REST API and discover the available routes
    console.log( 'probing ' + this.get_api_base );
        $.ajax({
            url: this.get_api_base(),
            dataType: 'json',
            success: function(ret){
                callback(ret.name);
            }
        });
    };
    var descriptor = {
        blocks: [
            // ['h', 'Enable REST API', 'start'],
            [' ', 'Set %m.api_base to %s', 'set_api_base', 'api_base', 'https://example.com'],
            ['R', 'Discover API Routes', 'discover_routes'],
        ],
        menus : {
          api_base: ['api_base', 'api_namespace', 'api_endpoint'],
        },
        url: 'https://rfair404.github.io/scratch-rest'
        // Link to extension documentation, homepage, etc.
    };

    // Register the extension
    ScratchExtensions.register('scratch-rest', descriptor, ext);

})({});

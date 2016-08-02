// This is the actual scratch extension part
(function(ext) {
    // Register the extension
    ScratchExtensions.register('scratch-rest', descriptor, ext);
    var descriptor = {
        blocks: [
            // ['h', 'Enable REST API', 'start'],
            [' ', 'Set %m.api_base to %s', 'set_api_base', 'api_base', 'http://rest-api-demo.q21.co/wp-json/'],
            ['R', 'Discover API Routes', 'discover_routes'],
        ],
        menus : {
          api_base: ['api_base', 'api_namespace', 'api_endpoint'],
        },
        url: 'http://rfair404.github.io/WP-REST-API-FOR-SCRATCHX'
        // Link to extension documentation, homepage, etc.
    };
})({});

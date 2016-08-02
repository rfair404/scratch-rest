// This is the actual scratch extension part
(function(ext) {
    var api_base = '';
    var api_namespace = '';
    var api_collection = '';
    var api_url = '';
    var current_collection = Object;

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
        // console.log('setting api base to ' + value);
    };
    //callback for when namespace is set
    ext.set_api_namespace = function(api_namespace, value) {
        this.api_namespace = value;
        // console.log('setting api namespace to ' + value);
    };
    //callback for when collection is set
    ext.set_api_collection = function(api_collection, value) {
        this.api_collection = value;
        // console.log('setting api collection to ' + value);
    };

    ext.get_api_url = function() {
        this.api_url = this.api_base + '/' + this.api_namespace + '/' + this.api_collection;
        // console.log('the api url route is ' +  this.api_url);
        return this.api_url;
    };

    ext._get = function(url) {
        //make a general get method later
    };
    ext.get_collection = function( callback ) {
    // Make an AJAX call to a given REST API
    // console.log( 'probing ' + this.get_api_url() );
        $.ajax({
            url: this.get_api_url(),
            dataType: 'json',
            success: function( ret ){
                this.current_collection = ret;
                //console.log(ret);
                // callback(ret);
            }
        });
    };

    ext.get_item_from_collection = function( pos, callback ){
        // console.log( 'grabbing ' + pos + ' of ' + this.current_collection() );
        console.log( this.current_collection[pos] );
        callback(this.current_collection[pos]);
    };

    var descriptor = {
        blocks: [
            // ['h', 'Enable REST API', 'start'],
            [' ', 'Set %m.api_base to %s', 'set_api_base', 'api_base', 'https://demo.wp-api.org/wp-json'],
            [' ', 'Set %m.api_namespace to %s', 'set_api_namespace', 'api_namespace', 'wp/v2'],
            [' ', 'Set %m.api_collection to %s', 'set_api_collection', 'api_collection', 'posts'],
            [' ', 'Get Collection', 'get_collection'],
            ['r', 'Get item %m.collection of Collection', 'get_item_from_collection', 0],

        ],
        menus : {
          api_base: ['api_base', 'api_namespace', 'api_collection'],
          collection: [0,1,2,3,4],
        },
        url: 'https://rfair404.github.io/scratch-rest'
        // Link to extension documentation, homepage, etc.
    };

    // Register the extension
    ScratchExtensions.register('scratch-rest', descriptor, ext);

})({});

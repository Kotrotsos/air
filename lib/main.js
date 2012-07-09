
$(function() {

    // Let's load a generic utility class. It's empty tho.
    require(["util"], function(util) {
        console.log(util.init());
    });

    require.ready(function () {
        //start app
        //do DOM stuff...
    });

    /* In order to just load a script file- do the following.
    require(["some/script.js"], function () {
        //do stuff once it is loaded
    });
    */

});
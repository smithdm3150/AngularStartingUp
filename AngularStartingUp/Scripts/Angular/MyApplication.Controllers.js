var MyNamespace = MyNamespace || {};
//
(function() {
    MyNamespace.MyClass = function(width, height) {
        // private variables
        var dimensions = {
            width: width,
            height: height
        };

        // private methods
        // creating getWidth and getHeight
        // to prevent access by reference to dimensions
        var getWidth = function() {
            return dimensions.width;
        };
        var getHeight = function() {
            return dimensions.height;
        };
        // public API
        return {
            getWidth: getWidth,
            getHeight: getHeight
        };
    };

});
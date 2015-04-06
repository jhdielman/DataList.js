var DataList = function (elements, options) {

    var original = [],
        keys = [],
        values = {},
        defaults = {
            key: null,
            sortBy: null,
            limit: null
        };

    //***********************************
    // Initialization
    //***********************************
    init();

    //***********************************
    // Define prooperties
    //***********************************
    Object.defineProperty(this, 'length', {
        get: function () { return elements.length; }
    });

    Object.defineProperty(this, 'original', {
        get: function () { return original; }
    });

    Object.defineProperty(this, 'keys', {
        get: function () { return keys; }
    });

    Object.defineProperty(this, 'values', {
        get: function () { return elements; }
    });

    //***********************************
    // Public API
    //***********************************
    this.sort = function (by) {

    };

    this.find = function (by) {

    };

    this.findByKey = function (key) {

    };

    this.elementAt = function (index) {

    };

    this.getIndex = function (element) {

    };

    this.getKey = function (element) {

    };

    this.addElement = function (element) {

    }

    //***********************************
    // Private functions
    //***********************************
    function init() {

        options = extend(defaults, options);

        setKey(options.key);

        if (elements.length) {
            for (var i = 0, j = elements.length; i < j; i++) {
                var element = elements[i];
                original.push(element);
                if (options.key && element[options.key]) {
                    keys.push(options.key);
                    values[options.key] = element;
                }
            }
        }
    }

    function setKey(key) {

        if (elements.length) {
            var element = element[0];

            if (key && element[key]) { options.key = k; return; }

            console.warn('"' + key + '" is not a valid `key` for ' + this.toString());

            if (element['id']) { options.key = 'id'; return; }
            if (element['Id']) { options.key = 'Id'; return; }
            if (element['ID']) { options.key = 'ID'; return; }

            console.info('Setting `key` to "' + options.key + '"');
        }
    }

    // Recursive object extend
    function extend(a, b) {
        var c = b || {};

        for (var prop in a) {
            var a_val = a[prop], b_val = b[prop];
            if (typeof a_val === 'object') {
                c[prop] = extend(a_val, b_val);
            } else {
                c[prop] = b_val || a_val;
            }
        }

        return c;
    }
}
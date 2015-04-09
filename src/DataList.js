var DataList = function (elements, options) {

    var original = [],
        keys = [],
        kvps = {},
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

    Object.defineProperty(this, 'isEmpty', {
        get: function () { return !!elements.length; }
    });

    Object.defineProperty(this, 'isSimpleList', {
        get: function () { return !!options.key; }
    });

    //***********************************
    // Public API
    //***********************************
    this.sort = function (by) {

    };

    this.find = function (by) {

    };

    this.get = function (keys) {

        var k = keys,
            v = null;

        if (Array.isArray(keys)) {
            v = [];
            for (var i = 0, j = keys.length; i < j; i++) {
                v.push(kvps[keys[i]]);
            }
            return v;
        } else {
            v = kvps[k];
            if (v) { return v; }
        }
    };

    this.elementAt = function (index) {
        var k = keys[index];
        if (k) { return kvps[k]; }
    };

    this.index = function (element) {
        var i = null;
        if (this.isSimpleList) {
            i = elements.indexOf(element);
        } else {
            var k = element[options.key];
            i = keys.indexOf(k);
        }

        if (i >= 0) { return i; }
        else { return null; }
    };

    this.key = function (element) {
        if (this.isSimpleList) {
            return this.index(element);
        } else {
            return element[options.key];
        }
    };

    this.add = function (elements) {

    };

    this.remove = function (elements) {

    };

    this.contains = function (search, key) {

    };

    this.hasKey = function (key) {

    };

    this.hasKeys = function (keys) {

    };

    this.hasValue = function (element) {

    };

    this.hasValues = function (elements) {

    };

    this.clear = function () {
        elements = [];
        keys = [];
        kvps = {};
    };

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
                    keys.push(element[options.key]);
                    kvps[options.key] = element;
                }
            }
        }
    }

    function setKey(key) {

        if (elements.length) {
            var element = element[0];

            if (key && element[key]) { options.key = k; return; }

            console.warn('"' + key + '" is not a valid `key` for DataList');

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
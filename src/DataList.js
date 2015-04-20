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
        get: function () { return !elements.length; }
    });

    Object.defineProperty(this, 'isSimpleList', {
        get: function () { return !options.key; }
    });

    //***********************************
    // Public API
    //***********************************
    this.sort = function (by) {

        if (this.isSimpleList) {
            elements.sort();
        } else {
            by = by || options.key;
            keys.sort(function (a, b) {
                var valA = kvps[a][by],
                    valB = kvps[b][by];
                if (valA < valB) { return -1; }
                if (valA > valB) { return 1; }
                return 0;
            });
        }
    };

    this.find = function (criteria) {
        var v = [];
        criteria = criteria || {};

        if (this.isSimpleList) {
            for (var i = 0, j = elements.length; i < j; i++) {
                var element = elements[i];
                
            }
        } else {
            
            for (var i = 0, j = elements.length; i < j; i++) {

            }
        }
    };

    this.get = function (key) {

        var isArr = Array.isArray(key),
            items = this.isSimpleList ? elements : kvps;

        if (isArr && key.length > 0) {
            var v = [];
            for (var i = 0, j = key.length; i < j; i++) {
                v.push(items[key[i]]);
            }
            return v;
        } else {
            var k = isArr ? key[0] : key;
            return items[k];
        }
    };

    this.elementAt = function (index) {

        if (this.isSimpleList) {
            return elements[index];
        } else {
            return kvps[keys[index]];
        }
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

        options = options || {};
        options = extend(defaults, options);

        setKey(options.key);

        if (elements.length) {
            for (var i = 0, j = elements.length; i < j; i++) {
                var element = elements[i];
                original.push(element);
                if (options.key && element[options.key]) {
                    var k = element[options.key];
                    keys.push(k);
                    kvps[k] = element;
                }
            }
        }
    }

    function setKey(key) {

        if (elements.length) {
            var element = elements[0],
                defaultKeys = ['id', 'Id', 'ID'];

            if (key && element[key]) { options.key = key; return; }

            console.warn('"' + key + '" is not a valid `key` for DataList');

            for (var i = 0, j = defaultKeys.length; i < j; i++) {
                var k = defaultKeys[i];
                if (element[k]) {
                    console.info('Setting `key` to "' + k + '"');
                    options.key = k;
                    return;
                }
            }
        }
    }

    function logKeySetting() {

        
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
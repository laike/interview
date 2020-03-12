(function(window) {
    function jQuery(selector) {
        return new jQuery.fn.init(selector)
    }
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        css() {
            console.log('css')
        },
        html() {
            console.log('html')
        }
    };
    //构造函数init
    var init = jQuery.fn.init = function(selector) {

        let slice = Array.prototype.slice,
            i, len;
        let dom = slice.call(document.querySelectorAll(selector));
        len = dom ? dom.length : 0;
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len;
        this.selector = selector;
    }
    init.prototype = jQuery.fn
    window.$ = jQuery;
})(window)
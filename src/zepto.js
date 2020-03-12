(function(window) {
    let zepto = {},
        $;
    class Z {
        constructor(dom, selector) {
            let i, len = dom ? dom.length : 0;
            for (i = 0; i < len; i++) this[i] = dom[i];
            this.length = len;
            this.selector = selector;
        }
    }
    zepto.Z = (dom, selector) => {
        return new Z(dom, selector)
    }

    zepto.init = (selector) => {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector));
        return zepto.Z(dom, selector);
    }
    $ = (selector) => {
        return zepto.init(selector)
    }
    $.fn = {
        constructor: zepto.Z,
        css() {
            console.log('css')
        },
        html() {
            console.log('html')
        }
    }
    zepto.Z.prototype = Z.prototype = $.fn;

    //暴露出来
    window.$ = $;
})(window)
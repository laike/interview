(function(window) {
    //callback hell 实现方式
    function loadImg(url, callback, fail) {
        var img = new Image();
        img.src = url;
        img.onload = function() {
            callback()
                // document.body.removeChild(img);
        }
        img.onerror = function() {
            fail();
        }
        document.body.appendChild(img)
    }

    function loadPromise(url) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.src = url;
            img.onload = function() {
                resolve(img)
                    // document.body.removeChild(img);
            }
            img.onerror = function() {
                reject();
            }
            document.body.appendChild(img)
        })

    }
    var rs1 = loadPromise('https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png')
    var rs2 = loadPromise('https://www.baidu.com/img/pc_1c6e30772d5e4103103bd460913332f9.png')

    rs1.then(function(img) {
            console.log('第一个图片加载完成')
            return rs2;
        }).then(function(img) {
            console.log('第二章图片加载完成')
        }).catch(function(ex) {
            console.log(ex)
        }).finally(function() {
            console.log('finaly')
        })
        //待全部完成之后，统一执行success
    Promise.all([rs1, rs2]).then(data => {
            console.log(data[0])
            console.log(data[1])
        })
        //只要有一个完成，就执行success
    Promise.race([rs1, rs2]).then(data => {
        console.log(data)
    })
})(window)
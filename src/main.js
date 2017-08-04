let urlVar = {
    url: function (...string) {
        let re = {};
        for (let i in string) {
            let regexp = new RegExp('[?|&]' + string[i] + '=' + '([^&;]+?)(&|#|;|$)');
            re[i] = decodeURIComponent((regexp.exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
            if (string.length == 1) return re[i];
        }
        return re;
    },
    str: function (url, ...string) {
        let re = {};
        for (let i in string) {
            let regexp = new RegExp('[?|&]' + string[i] + '=' + '([^&;]+?)(&|#|;|$)');
            re[i] = decodeURIComponent((regexp.exec(url) || [, ""])[1].replace(/\+/g, '%20')) || null;
            if (string.length == 1) return re[i];
        }
        return re;
    }
}
module.exports = urlVar;
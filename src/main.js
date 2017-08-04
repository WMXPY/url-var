export default {
    url: function (string) {
        let regexp = new RegExp('[?|&]' + string + '=' + '([^&;]+?)(&|#|;|$)');
        return decodeURIComponent((regexp.exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    },
    str: function (url, string) {
        let regexp = new RegExp('[?|&]' + string + '=' + '([^&;]+?)(&|#|;|$)');
        return decodeURIComponent((regexp.exec(url) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }
}
'use strict';
var arr = [];
var PortraitY = /** @class */ (function () {
    function PortraitY(a, b) {
        this.img = '';
        this.url = '';
        this.img = a;
        this.url = b;
        arr.push(this);
    }
    PortraitY.prototype.attributes = function () {
        return "  <figure class=\"col-md-3 zoom\">\n                    <a href=\"" + this.url + "\" data-size=\"781x1172\">\n                      <img src=\"" + this.img + "\" class=\"img-fluid\">\n                    </a>\n                  </figure>";
    };
    return PortraitY;
}());
var display1 = new PortraitY('https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(58).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(58).jpg');
new PortraitY('https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(61).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(61).jpg');
new PortraitY('https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(62).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(62).jpg');
new PortraitY('https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(60).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(60).jpg');
var PortraitX = /** @class */ (function () {
    function PortraitX(a, b) {
        this.img = '';
        this.url = '';
        this.img = a;
        this.url = b;
        arr.push(this);
    }
    PortraitX.prototype.attributes = function () {
        return "  <figure class=\"col-md-4 zoom\">\n                   <a href=\"" + this.url + "\" data-size=\"781x1172\">\n                    <img src=\"" + this.img + "\" class=\"img-fluid \">\n                   </a>\n                </figure>";
    };
    return PortraitX;
}());
var display2 = new PortraitX('https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(66).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(66).jpg');
new PortraitX('https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(70).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(70).jpg');
new PortraitX('https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(74).jpg', 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(74).jpg');
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    document.getElementById('result').innerHTML += "" + i.attributes();
    document.getElementById('result2').innerHTML += "" + i.attributes();
    document.getElementById('result3').innerHTML += "" + i.attributes();
}

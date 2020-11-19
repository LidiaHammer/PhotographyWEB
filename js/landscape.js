'use strict';
var arr2 = [];
var Landscape = /** @class */ (function () {
    function Landscape(a, b) {
        this.img = '';
        this.url = '';
        this.img = a;
        this.url = b;
        arr2.push(this);
    }
    Landscape.prototype.attributes = function () {
        return "  <figure class=\"col-md-4 zoom\">\n        <a href=\"" + this.url + "\" data-size=\"781x1172\">\n                    <img src=\"" + this.img + "\" class=\"img-fluid \">\n                </a></figure>";
    };
    return Landscape;
}());
var display3 = new Landscape('./img/l2.jpg', 'https://images.unsplash.com/photo-1568621346536-41a6028b5d45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80');
new Landscape('./img/l3.jpg', 'https://images.unsplash.com/photo-1594336422928-3ad23550ab95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80');
new Landscape('./img/l4.jpg', 'https://images.unsplash.com/photo-1573906131709-a0f675abfe80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80');
new Landscape('./img/l7.jpg', 'https://images.unsplash.com/photo-1567986096906-186c34943cc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1191&q=80');
new Landscape('./img/l5.jpg', 'https://images.unsplash.com/photo-1548780977-74a1f9089b9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1191&q=80');
new Landscape('./img/l6.jpg', 'https://images.unsplash.com/photo-1563287109-8d5142c8e711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80');
new Landscape('./img/l2.jpg', 'https://images.unsplash.com/photo-1568621346536-41a6028b5d45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80');
new Landscape('./img/l4.jpg', 'https://images.unsplash.com/photo-1573906131709-a0f675abfe80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80');
new Landscape('./img/l7.jpg', 'https://images.unsplash.com/photo-1567986096906-186c34943cc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1191&q=80');
for (var _i = 0, arr2_1 = arr2; _i < arr2_1.length; _i++) {
    var i = arr2_1[_i];
    document.getElementById('result').innerHTML += "" + i.attributes();
    document.getElementById('result2').innerHTML += "" + i.attributes();
}

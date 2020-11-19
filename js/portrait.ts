'use strict';

let arr = [];

class PortraitY {
    img = '';
    url = '';

    constructor(a, b) {
        this.img = a;
        this.url = b;

        arr.push(this);
    }

    attributes() {
        return `  <figure class="col-md-3 zoom">
                    <a href="${this.url}" data-size="781x1172">
                      <img src="${this.img}" class="img-fluid">
                    </a>
                  </figure>`
                  ;
  }

}
let display1 = new PortraitY(
    'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(58).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(58).jpg',
);
new PortraitY(
    'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(61).jpg',
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(61).jpg',
);
new PortraitY(
  'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(62).jpg',
  'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(62).jpg',
);
new PortraitY(
  'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(60).jpg',
  'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(60).jpg',
);

class PortraitX {
  img = '';
  url = '';

  constructor(a, b) {
      this.img = a;
      this.url = b;

      arr.push(this);
  }

  attributes() {
      return `  <figure class="col-md-4 zoom">
                   <a href="${this.url}" data-size="781x1172">
                    <img src="${this.img}" class="img-fluid ">
                   </a>
                </figure>`
                ;
  }
}

let display2 = new PortraitX(
  'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(66).jpg',
  'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(66).jpg',
);
new PortraitX(
  'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(70).jpg',
  'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(70).jpg',
);
new PortraitX(
'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(74).jpg',
'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(74).jpg',
);

for (let i of arr) {
    document.getElementById('result').innerHTML += `${i.attributes()}`;
    document.getElementById('result2').innerHTML += `${i.attributes()}`;
    document.getElementById('result3').innerHTML += `${i.attributes()}`;
}
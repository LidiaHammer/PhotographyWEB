let awards: Array<any> = [];

class Award {
  title:string;
  description:string;
  institution:string;
  link:string;
  img:string;

  constructor(title, description, institution, link, img){
    this.title = title;
    this.description = description;
    this.institution = institution;
    this.link = link;
    this.img = img;

    awards.push(this)
  }
  
  displayAwards(){
    return  `        
    <div class="col-lg-6">
        <div class="card my-4 border-0">
            <img class="card-img-top w-100" style="object-fit:scale-down" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="${this.img}" data-holder-rendered="true">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text ">${this.description}</p>
                <div>
                    <small class="text-muted"><a href= ${this.link} class="text-muted"><i class="fas fa-link"></i> ${this.institution}</a></small>    
                </div>
            </div>
        </div>
    </div>`
  }

}

let award1 = new Award(
  "Fine Art Photography Award",
  "I was awarded the Fine Art Photography Award.",
  "Fine Art Photography",
  "https://fineartphotoawards.com/",
  "./img/award1.jpg"
)

let award2 = new Award(
  "Vienna International Photo Award",
  "This one means a lot to me, because it was given by may hometown. <i class='fas fa-heart'></i>",
  "FotoFestival Wien",
  "https://www.fotofestival-wien.com/vienna-photo-award",
  "./img/award2.jpg"
)

let award3 = new Award(
  "Sony World Photography awards",
  "2020 National & Regional Awards for Austria. How cool is that? ",
  "World Photography organisation",
  "https://www.worldphoto.org/sony-world-photography-awards/national-award/austria",
  "./img/award3.jpg"
)

let award4 = new Award(
  "Yet Another Award",
  "Photography is my passion. I am glad that people can see how much I love it.",
  "International Foto Nerds Unite (IFNU)",
  "https://www.worldphoto.org/sony-world-photography-awards/national-award/austria",
  "./img/award4.jpg"
)


console.table(awards)

for (let i in awards){
  $("#awards").append(awards[i].displayAwards())
  //console.log("beep")
}





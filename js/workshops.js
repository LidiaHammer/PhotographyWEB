let workshops = [];
class Workshop {
    constructor(image, name, description, date, time, duration, price) {
        this.image = image;
        this.name = name;
        this.description = description;
        this.date = date;
        this.time = time;
        this.duration = duration;
        this.price = price;
        workshops.push(this);
    }
    render() {
        return `
        <div class="card">
            <img class="card-img" src="${this.image}">
            <div class="card-body">
                <h5 class="text-center card-title">${this.name}</h5>
                <p class="text-center">${this.description}</p>
                <ul>
                    <li><b>Date:</b> ${this.date}, ${this.time}</li>
                    <li><b>Duration:</b> ${this.duration}h</li>
                    <li><b>Price:</b> ${this.price}€</li>
                </ul>
            </div>
            <div class="card-footer text-center">
                <button type="button" class="btn btn-success">Book</button>
            </div>
        </div>`;
    }
}
let test0 = new Workshop("./img/camerabasics.jpg", "Camera Basics", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!", "2020-11-02", "13:00", 2, 100);
let test1 = new Workshop("./img/portraitphotography.jpg", "Portrait Photography", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!", "2020-11-03", "10:00", 5, 300);
let test2 = new Workshop("./img/landscapephotography.jpg", "Landscape Photography", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!", "2020-11-01", "08:00", 8, 450);
let test3 = new Workshop("./img/lightpainting.jpg", "Lightpainting", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias!", "2020-11-05", "18:00", 3, 250);
// import { workshoplist } from "workshoplist"
// for (let i in workshoplist){
//       let tmp = new Workshop(workshoplist[i].image, workshoplist[i].name, workshoplist[i].description, workshoplist[i].date, workshoplist[i].time, workshoplist[i].duration, workshoplist[i].price);
// }
function printContent(arr) {
    for (let i in arr) {
        let data = arr[i].render();
        $("#content").append(`
        <div class="col-lg-3 col-md-6 col-12 p-3" id="${i}"> 
            ${data}
        </div>`);
    }
}
printContent(workshops);
// workshops_by_date = workshops.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
// workshops_by_price = workshops.sort((a, b) => Number(b.price) - Number(a.price));
$(document).ready(function () {
    $("#bydate").on("click", sortByDate);
    $("#bydate2").on("click", sortByDate);
    function sortByDate() {
        $("#content").html("");
        printContent(workshops.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time)));
    }
    $("#byprice").on("click", sortByPrice);
    $("#byprice2").on("click", sortByPrice);
    function sortByPrice() {
        $("#content").html("");
        printContent(workshops.sort((a, b) => Number(a.price) - Number(b.price)));
    }
});

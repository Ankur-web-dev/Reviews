const reviews = [{
    id: 1, 
    img: "https://i.ibb.co/3pMKFtp/circle-cropped.png",
    fullName: "Ankur Khattri",
    job: "Frontend Developer",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum beatae reprehenderit totam ducimus quam similique optio dolor itaque, tempora facilis perferendis maxime asperiores illum fugit commodi necessitatibus et possimus sit!"
}, {
    id: 2,
    img: "https://i.ibb.co/nrPJGLt/circle-cropped-copy.png",
    fullName: "Ayush Khattri",
    job: "Software Engineer",
    info: "Lorem ipsum, dolor sit amet consectetur optio dolor itaque, tempora facilis perferendis maxime  fugit commodi necessitatibus et possimus sit!"
}, {
    img:"https://i.ibb.co/SnMMMbj/flora.png",
    id: 3,
    fullName: "Flora Vineza",
    job: "Sales Rep",
    info: "Lorem ipsum, dolor sit amet consectetur ducimus quam maxime asperiores illum fugit commodi necessitatibus et possimus sit!"
}, {
    img:"https://i.ibb.co/7pcpfDr/bansal.png",
    id: 4,
    fullName: "Shubham Agarwal",
    job: "Businessman",
    info: "Lorem ipsum. Eum beatae reprehenderit totam ducimus quam similique optio dolor itaque, tempora facilis perferendis maxime asperiores illum fugit commodi necessitatibus et possimus sit!"
}];

//Select Items
const img = document.getElementById('img1');
const fullName = document.getElementById('fullName');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.nxt-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item

let currentItem = 0;

//load initial item

window.addEventListener('DOMContentLoaded', function(){
    showPerson();
})

//show person

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    fullName.textContent = item.fullName;
    job.textContent = item.job;
    info.textContent = item.info;
}

//next person navigation
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

//previous person navigation
prevBtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// random person navigation
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})

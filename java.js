// const data = [
//     {title: "بر بحر", description: "بودكاست يتناول قصص مثيرة", img: "https://via.placeholder.com/150"},
//     {title: "منبت", description: "نظرة على الحياة والتفكير", img: "https://via.placeholder.com/150"},
//     {title: "عيب", description: "مناقشة مواضيع مجتمعية", img: "https://via.placeholder.com/150"},
//     {title: "دُمْ تَك", description: "بودكاست عن الموسيقى", img: "https://via.placeholder.com/150"},
//     {title: "ماتريوشكا", description: "قصص وحكايات عالمية", img: "https://via.placeholder.com/150"},

// ];

// function generateGrid() {
//     const grid = document.getElementById("grid");
//     data.forEach((item, index) => {
//         const div = document.createElement("div");
//         div.className = "box";
//         div.innerHTML = `<img src="${item.img}" alt="${item.title}"><h3>${item.title}</h3>`;
//         div.onclick = () => openPopup(item.title, item.description);
//         grid.appendChild(div);
//     });
// }

// function openPopup(title, description) {
//     document.getElementById("popup-title").innerText = title;
//     document.getElementById("popup-description").innerText = description;
//     document.getElementById("popup").style.display = "flex";
// }

// function closePopup() {
//     document.getElementById("popup").style.display = "none";
// }

// generateGrid();

document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        let target = +counter.getAttribute('data-target');
        let start = 0;
        let speed = target / 100; // التحكم في سرعة العد

        let updateCounter = () => {
            if (start < target) {
                start += speed;
                counter.innerText = Math.ceil(start);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target; // تثبيت الرقم عند الهدف النهائي
            }
        };

        updateCounter();
    });
});


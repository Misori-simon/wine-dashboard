let index = 1;

let ctx = document.getElementById('myChart');

let tab = {
    objClassName: "tab-item",
    controlClassName: "tab",
    activeClass: " active-tab",
    displayValue: "flex"
}

let slide = {
    objClassName: "slide-item",
    controlClassName: "disc",
    activeClass: " active-disc",
    displayValue: "block"
}

let wineData = {
      labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      title: {
        text: "Total Sales & Demand Volume",
        fontSize: 20,
        display: true
      },
      wines: [
            {
                label: 'Total Sales',
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgb(75, 192, 192)',
                data: [0, 10, 30, 32, 65, 70, 420, 600],
                fill: false
            },
            {
                label: 'Demand Volume',
                borderColor: 'rgb(75, 75, 192)',
                backgroundColor: 'rgb(75, 75, 192)',
                data: [0, 10, 10, 59, 15, 5, 70, 20, ],
                fill: false
            }
        ]
    }

mediaScreenChange()

makeChart()

function mediaScreenChange() {
    if (window.innerWidth < 768) {
    console.log('Media Query Matched!')
    showObJ(index, ...Object.values(tab));
    showObJ(index, ...Object.values(slide));
  } else {
    resetObjs(tab.objClassName)
    resetObjs(slide.objClassName)
  }
}

window.addEventListener("resize", mediaScreenChange)


function currentObj(index, type) {
    if(type == 'tab') {
        showObJ(index, ...Object.values(tab));
    } else {
        showObJ(index, ...Object.values(slide));
    }
}

function showObJ(index, objClassName, controlClassName, activeClass, displayValue) {
    let i;
    let objs = document.getElementsByClassName(objClassName);
    let objControls = document.getElementsByClassName(controlClassName);

    if (index > objs.length) {index = 1}
    if (index < 1) {index = objs.length}
    for (i = 0; i < objs.length; i++) {
        objs[i].style.display = "none";
    }
    for (i = 0; i < objControls.length; i++) {
        objControls[i].className = objControls[i].className.replace(activeClass, "");
    }
    objs[index-1].style.display = displayValue;
    objControls[index-1].className += activeClass;
}

function resetObjs(objClassName) {
    let tabs = document.getElementsByClassName(objClassName);
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "unset";
    }
}

function openNav() {
    document.getElementById("mobile-nav").style.width = "100%"
}

function closeNav() {
    document.getElementById("mobile-nav").style.width = "0"
}

function makeChart() {
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: wineData.labels,
            datasets: wineData.wines
        },
        options: {
            plugins: {
                title: {
                    display: wineData.title.display,
                    text: wineData.title.text,
                    font: {
                        size: wineData.title.fontSize,
                    },
                },
            },
        },

    });
}
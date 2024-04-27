const btnFilters = document.querySelectorAll(".filter-btn");


btnFilters.forEach((btnFilter) =>{
    
    btnFilter.addEventListener("click", ()=>{ 
        btnFilter.classList.add("active")
    })
})


const btnAll = document.getElementById("all-btn");
const reactAll = document.getElementById("react-btn");
const jsAll = document.getElementById("js-btn");
const nextAll = document.getElementById("next-btn");

const classAll = document.querySelectorAll(".all");



btnAll.addEventListener('click', ()=>{
    classAll.forEach((classUnd)=>{
        classUnd.classList.remove("hidden")
    })  
});

jsAll.addEventListener("click", () => {
    
    classAll.forEach((classUnd) => {
        classUnd.classList.add("hidden")
        if (classUnd.classList.contains("js")) {
             classUnd.classList.remove("hidden")
             classUnd.classList.add("js");  
        }
  });
});

reactAll.addEventListener("click", () => {
  classAll.forEach((classUnd) => {
    classUnd.classList.add("hidden");
    if (classUnd.classList.contains("react")) {
      classUnd.classList.remove("hidden");
      classUnd.classList.add("react");
    }
  });
});

nextAll.addEventListener("click", () => {
  classAll.forEach((classUnd) => {
    classUnd.classList.add("hidden");
    if (classUnd.classList.contains("next")) {
      classUnd.classList.remove("hidden");
      classUnd.classList.add("next");
    }
  });
});





document.querySelector("#open-popup").addEventListener("click",function(){
    document.querySelector(".pop").classList.add("active");
  });
  document.querySelector(".pop .close-button").addEventListener("click",function(){
    document.querySelector(".pop").classList.remove("active");
  });
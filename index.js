document.getElementById("navburger").addEventListener("click", function(){
  document.getElementById("navmenu").style.width = "75%";
});

document.getElementById("navclose").addEventListener("click", function(){
  document.getElementById("navmenu").style.width = "0";
});


var projectCards = new Vue({
  el: '#project-cards',
  data: {
    products : [
      {
        id : 1,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "60 mL",
        price : "70,000",
        discountPrice : "40,000",
        link : "https://www.tokopedia.com/"
      },
      {
        id : 2,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "60 mL",
        price : "70,000",
        discountPrice : "50,000",
        link : "https://www.tokopedia.com/",
      },
      { id : 3, 
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "70,000",
        discountPrice : "",
        link : "https://www.tokopedia.com/",
      },
      { id : 4,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "70,000",
        discountPrice : "",
        link : "https://www.tokopedia.com/",
      },
      { id : 5,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "70,000",
        discountPrice : "",
        link : "https://www.tokopedia.com/",
      }
    ]    
  }
})

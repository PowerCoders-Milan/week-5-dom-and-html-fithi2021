function getAttributes() {
   
   
   var id_value = document.getElementsByTagName("A")[0].getAttribute("id");
   document.getElementsByTagName("p")[1].innerHTML = `The value of the id attribute is: ${id_value} ` ;

   var type_value = document.getElementsByTagName("A")[0].getAttribute("type");
   document.getElementsByTagName("p")[2].innerHTML = `The value of the type attribute is : ${ type_value}`;

   var hreflang_value = document.getElementsByTagName("A")[0].getAttribute("hreflang");
   document.getElementsByTagName("p")[3].innerHTML = `The value of the hreflang attribute is: ${ hreflang_value} `;

   var rel_value = document.getElementsByTagName("A")[0].getAttribute("rel");
   document.getElementsByTagName("p")[4].innerHTML = `The value of the rel attribute is: ${ rel_value}`;

   
   var target_value = document.getElementsByTagName("A")[0].getAttribute("target");
   document.getElementsByTagName("p")[5].innerHTML = `The value of the target attribute is: ${target_value}`;


   var href_value = document.getElementsByTagName("A")[0].getAttribute("href");
   document.getElementsByTagName("p")[6].innerHTML = `The value of the href attribute of the link: ${href_value}`;

   
}

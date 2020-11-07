$(document).ready(
  function(){

    $( "#btn" ).click(function() {
      appendElemt();

    });


    $(".container").keypress(function(event){
      if (event.which == 13) {
        appendElemt();
      }
    });




  }
)

function appendElemt(){

 var impText =$("#area-text").val();
 var ul = document.getElementById("list");
 var li = document.createElement("li");
 var bottone = document.createElement("button");
 bottone.innerHTML = '<span><i class="fas fa-times-circle"></i></span>'
 li.appendChild(document.createTextNode(impText));
 $(bottone).click(function() {
 		$(li).remove();
 	})

 ul.appendChild(li);
 li.appendChild(bottone);

}

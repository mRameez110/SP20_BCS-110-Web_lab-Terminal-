// $(function() {
//   $("#load").click(function() {
//     $.get('https://dummyjson.com/posts?limit=10&skip=10', function(response) {
//       console.log(response);
//       $("#result").empty();
//       $("#result").append(response.json());
//     });
//   });
// });


$(function() {
  $("#load").click(function() {
    $.get('https://dummyjson.com/posts', function(response) {
      console.log(response);
      $("#result").empty();
      // $("#result").append(response.json());
      $("#result").append(response.json());
    });
  });
});


// $(function() {

//   $.ajax({
//     url: "https://dummyjson.com/docs/posts",
//     type: "get",
    
//     success: function(response) {
//       console.log(response);
//       $("#result").empty();
//       $("#result").append(response);
//     },
  
//     error: function(err) {
//       console.log("Data not fetch");
//     }
//   });
// });



$(function() {
  $("#load").click(function() {
    $.get('https://dummyjson.com/posts?limit=10&skip=10', function(response) {
      console.log(response);
      $("#result").empty();
      $("#result").text(response);
      // $("#result").append(response.json());
    });
  });
});

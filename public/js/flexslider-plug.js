const arr1 = ["#myModal1", "#myModal2", "#myModal3", "#myModal4"];
const arr2 = ["myModal1", "myModal2", "myModal3", "myModal4"];
$(document).ready(function() {
    /*        $("#myModal1").on("shown.bs.modal", function(e) {
      console.log("куку");
      $(window).trigger("resize");
      document.getElementById("myModal1").style.transition =
        "opacity 0.3s linear";
    });
    $("#myModal1").on("hidden.bs.modal", function(e) {
      document.querySelector(".modal-dialog").style.transition =
        "transform 0.3s ease-out";
      console.log("hidden");
    });*/
    arr1.forEach(function(e, i) {
        $(e).on("shown.bs.modal", function(e) {
            console.log(e, i);
            $(window).trigger("resize");
            document.getElementById(arr2[i]).style.transition =
                "opacity 0.3s linear";
        });
        $(e).on("hidden.bs.modal", function() {
            document.querySelector(".modal-dialog").style.transition =
                "transform 0.3s ease-out";
            console.log("hidden");
        });
    });
});

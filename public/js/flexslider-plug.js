const arr1 = ["#myModal1", "#myModal2", "#myModal3", "#myModal4"];
const arr2 = ["myModal1", "myModal2", "myModal3", "myModal4"];
$(document).ready(function() {
    arr1.forEach(function(e, i) {
        $(e).on("shown.bs.modal", function(e) {
            $(window).trigger("resize");
            document.getElementById(arr2[i]).style.transition =
                "opacity 0.3s linear";
        });
    });
});

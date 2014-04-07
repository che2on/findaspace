  $(document).ready(function () {
$("#submit").click(function(){
    $.ajax({
        type: "POST",
        url: "/submitspace", //process to mail
        data: $('#form1').serialize(),
        success: function(msg){
            $("#thanks").html(msg) //hide button and show thank you
            $("#form-content").modal('hide'); //hide popup  
        },
        error: function(){
            alert("failure");
        }
    });
});
});
var api = require('car-registration-api-uk');
window.$ = window.jQuery = require('jquery');

$(init);
function init()
{
   $("#btnSearch").bind("click",btnSearch_click);
}

function btnSearch_click()
{
   var reg = $("#reg").val();
   api.CheckCarRegistrationUK(reg,"*** your username here ***",function(data){
      $("#output").html(data.Description);
   });
}

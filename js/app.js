//掌上订单-微信版 

// 弹出拟态框
function showModal(id){
  $(id).addClass("in");
}
$(".close-btn").click(function(){
  $(this).closest(".mask").removeClass("in");
})
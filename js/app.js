//掌上订单-微信版 

// 弹出拟态框
function showModal(id){
  $(id).addClass("in");
}
$(".close-btn").click(function(){
  $(this).closest(".mask").removeClass("in");
})

// 订单成功提交

 $(document).on('click','#confirm-title-ok-cancel', function () {
 	
 	$.modal({
      text: '<div class="success-dialog"><h1>您的订单已成功提交!</h1><h6>我们将尽快处理，请耐心等待。</h6></h1></div>',
      buttons: [
        {
    	  text: '<span class="unimportance-color">继续逛逛</span>'
        },
        {
          text: '<span class="warning-color">查看订单</span>',
          onClick: function() {
            $.alert('你点击了查看订单！')
          }
        },
      ]
    })
  });


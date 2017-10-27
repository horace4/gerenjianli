var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop:true,
    onSlideChangeEnd: function(swiper){
        var slideAry=swiper.slides;
        var curIn=swiper.activeIndex;//当前展示的这个活动区域
        total=slideAry.length;
        var targetId='page';
        switch (curIn){
            case 0:
            targetId+=total-2;
            break;
            case (total-1):
            targetId+=1;
            break;
            default:
            targetId+=curIn;
        }
        console.log(slideAry);
         //给当前的活动块设置Id即可,还要把其余的移除
         [].forEach.call(slideAry,function (item,index){
             if(curIn===index){
                 item.id=targetId;
                 return;
             }
             item.id='';
         });
      
      }
     
});
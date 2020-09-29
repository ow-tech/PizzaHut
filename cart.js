function getLocation(){
    let location = prompt('Where is convenient location for Delivery');
    if (location == ''){
        swal({
            title: 'Location is a Must',
            text:'Please Enter Your Location !!!\n By clicking ok Button Again',
            icon:'error'});
    }else{
        swal({
            title: "Good job!. Order Completed",
            text: `Your order will be delivered to ${location} in about 1 hour. inclusive of Delivery cost`,
            icon: "success",
            });}

};
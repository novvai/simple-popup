document.addEventListener("DOMContentLoaded", function(event) { 
    let popup = new SimplePopup('./popup.html', {TITLE:"Web Dev", CONTENT:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id urna sapien. Suspendisse accumsan velit quis lectus mattis posuere. Morbi quis dapibus purus, a pellentesque risus. Vestibulum sed nunc justo. Phasellus pellentesque consequat orci id vulputate. Nulla eu arcu sed erat laoreet imperdiet at vitae nunc. Sed sed accumsan risus, non bibendum massa. Nullam eget sem tristique, blandit ligula et, faucibus augue. Praesent a est ac justo aliquet finibus. Vestibulum fringilla porta ipsum, at semper nisi aliquet quis. Praesent convallis nunc eu sem malesuada rhoncus. Sed pulvinar, erat vitae euismod tempor, nisi risus suscipit odio, ac dignissim enim nunc sodales lectus."});
    popup.make();
    popup.render();
    let el = document.querySelector('.openModal');
    el.addEventListener('click', ()=>{
        popup.render();
    })
});


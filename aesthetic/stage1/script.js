var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  '<img src=" https://media.tumblr.com/78a9d3eae59a2a3ed8531b482bdc5a4f/tumblr_inline_mgzkontwjP1rxsw83.gif"></img> <b><center>Chúc mừng sinh nhật Quỳnh như nha 🍨 :> </b><br>Hãy cho mình biết ngày hôm nay của bạn như nào?<br>',
    'Mình có thứ này muốn cho bạn xem, bạn có muốn xem không?',
  'khi nào bạn muốn xem thì vào link này nhé mình để nó <a href="fb.com/13thall">ở đây</a> *đeo tai nghe vaooo',
  'tạm biệt nha mình đi chơi đây...',
  'được rồi đừng nhắn nữa :))',
  'Bye',
  ':))'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="https://scontent.fmel16-1.fna.fbcdn.net/v/t39.30808-6/359034088_1414333139360082_437272561717016683_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TP2thoACIZAQ7kNvgFA6gzR&_nc_ht=scontent.fmel16-1.fna&oh=00_AYDfMRwX8hm0-Va7IZxYlZjmgtNRYjHIARgHVumwfsh7AQ&oe=6694A030" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
          if(Fake[i] == null)
      {
        $('<div class="message new"><figure class="avatar"><img src="https://scontent.fmel16-1.fna.fbcdn.net/v/t39.30808-6/359034088_1414333139360082_437272561717016683_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TP2thoACIZAQ7kNvgFA6gzR&_nc_ht=scontent.fmel16-1.fna&oh=00_AYDfMRwX8hm0-Va7IZxYlZjmgtNRYjHIARgHVumwfsh7AQ&oe=6694A030" /></figure>' +'...' + '</div>').appendTo($('.mCSB_container')).addClass('new');
       return;
      }
    $('<div class="message new"><figure class="avatar"><img src="https://scontent.fmel16-1.fna.fbcdn.net/v/t39.30808-6/359034088_1414333139360082_437272561717016683_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TP2thoACIZAQ7kNvgFA6gzR&_nc_ht=scontent.fmel16-1.fna&oh=00_AYDfMRwX8hm0-Va7IZxYlZjmgtNRYjHIARgHVumwfsh7AQ&oe=6694A030" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}
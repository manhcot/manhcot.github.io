# Tôi đã hack mọi thứ ở trong trường từ cấp 2 cho đến cấp 3....

**đây là bài viết tóm tắt, không phải bài phân tích sâu vào
kĩ thuật.**
**credit: bạn hoàng anh được dịch và chia sẻ lại bởi manhcot**
```Nếu tôi chỉnh sửa gì đó , Tôi sẽ trở thành học sinh giỏi hay tôi sẽ trở thành học sinh tồi và thực sự công bằng liệu có tồn tại không ?```
## Trường cấp hai.
Trở về thời khi tôi còn học sinh cấp 2 khi tôi vẫn đang còn tập chơi game bangbang trên zingme với một ít hiểu biết về hacking.
vào một ngày đẹp trời, bạn của tôi mời tôi đến thư viện để đọc sách,tôi thấy trong thư viện đó là chiếc máy tính dành cho học sinh và giáo viên sử dụng công cộng và tôi đã sử dụng máy đó, tôi đã kiểm tra lịch sử và đã thấy tài khoản giáo viên, tôi đã vào website của nhà trường (thành thật mà nói rằng ở thời điểm đó, tôi rất cay cú vì tôi thường xuyên nhận tin nhắn từ giao viên rằng tôi chưa làm bài tập T_T)
Tôi biết website quản lý học sinh là [XXX] và giáo viên thường vô tình lưu tài khoản và mật khẩu của họ trên trình duyệt.
Với tài khoản được hiển thị là thầy giáo (tên thầy giáo người đang dạy tôi)
Và mật khẩu được che bởi dấu *********
![](https://github.com/VHAE04/Mylife_hacking/blob/main/images/passhide.PNG?raw=true)
Và với một chút hiểu biết F12, tôi đã mở command panel và thay đổi tag html type="password" thành type="text" để đọc mật khẩu và có thể truy cập vào tài khoản của giáo viên.
![](https://github.com/VHAE04/Mylife_hacking/blob/main/images/passshow.PNG?raw=true)
Nhưng đặc biệt là tài khoản của thầy giáo có ít đặc quyền hơn với tài khoản nhà trường hoặc admin 
![](https://github.com/VHAE04/Mylife_hacking/blob/main/images/teacher.PNG?raw=true)
nhưng truy cập vào tài khoản của thầy giáo tôi có thêm nhiều manh mối về những tài khoản khác cũng như là tài khoản admin tôi đã thử bruteforce, và bằng một cách nào đó tôi đã hack được 2 tài khoản quản trị viên của website bằng kĩ thuật bruteforce. và tôi đã có thể truy cập vào tài khoản admin đó (công cụ mà tôi đã tạo để bruteforce được code bằng autoit và cũng là ngôn ngữ lập trình đầu tiên mà tôi học)
![](https://github.com/VHAE04/Mylife_hacking/blob/main/images/admin.PNG?raw=true)
Ở đây tôi có đầy đủ đặc quyền để chỉnh sửa điểm học bạ hay gửi một loạt tin nhắn đến các phụ huynh, học sinh hay giáo viên, và tôi có thể xem những thông tin mật của nhà trường và nhiều hơn nữa.......
Sau đó, Tôi đã gửi email cho giáo viên của tôi về tài khoản của họ đã bị lộ và tôi đột nhiên được mời lên phòng ban giám hiệu để uống nước và bị nhắc nhở về hành vi hack tài khoản giáo viên trong trường ._..
ps Nếu bạn thường xuyên đọc báo, bạn sẽ thấy bài này: [https://zingnews.vn/loi-khai-9x-nhan-1700-tin-con-ong-ba-hoc-ngu-nhu-bo-post685735.html](https://zingnews.vn/loi-khai-9x-nhan-1700-tin-con-ong-ba-hoc-ngu-nhu-bo-post685735.html)
## Trường cấp ba.
Vào đầu lớp 11 tôi biết nhà trường quản lý các học sinh qua ứng dụng XXX và ban đầu mọi người được cấp tài khoản là số điện thoại và mật khẩu là dạng chuỗi với 6 số ngẫu nhiên. Và trong đầu tôi nảy lên ý tưởng sử dụng kĩ thuật bruteforce thông qua api của ứng dụng ngay tại ngay tại số điện thoại chủ nhiệm của tôi và tôi đã tiếp tục làm thế để tấn công vào api của ứng dụng và lấy hết thông tin của các giáo viên cũng như là lấy tài khoản ban giám hiệu.
![](https://github.com/VHAE04/Mylife_hacking/blob/main/images/app.jpg?raw=true)
![](https://github.com/VHAE04/Mylife_hacking/blob/main/images/data_api_app.PNG?raw=true)
Website của trường tôi được tạo dựa trên nền tảng nukeviet và đây cũng là lần đầu tiên tôi tạo một PoC về lỗ hổng 0-day xss của nukeviet và khai thác nó và chiếm quyền điều khiển website của trường ( bởi vì bài viết này khá dàu nên bài viết sau tôi sẽ đi sâu vào lỗ hổng 0-day xss trên nukeviet này).
ps : bạn có thể vào website [thptvietnambalan-hanoi.edu.vn](http://thptvietnambalan-hanoi.edu.vn) trượt xuống dưới cùng và nhấn tổ hợp ctrl+a để nhìn thấy bí mật ở dưới cùng website
![](https://github.com/VHAE04/Mylife_hacking/blob/main/images/secret.PNG?raw=true)
....Tôi sẽ viết thềm về tấn công máy tính cục bộ cũng như hack router wifi,camera...trong trường cấp ba

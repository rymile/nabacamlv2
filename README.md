# nabacamlv2
해설의 개인과제 파일을 사용했고, 예제 강의를 바탕으로 lv2과제를 수행하였습니다.

회원가입: localhost:3000/api/users/users<br>
로그인: localhost:3000/api/auth/auth 

게시물과 댓글은 로그인을 해야 작성이 가능합니다.<br><br>
조회는 로그인과 상관없이 가능합니다.<br><br>
한번 로그인하면 해당 로그인 정보가 계속 남아있습니다.<br><br>
그래서 로그아웃하려면 쿠키를 삭제하고 서버를 재시작합니다.

게시물 작성
localhost:3000/api/post

게시물 수정
localhost:3000/api/post/postid

게시물 삭제
localhost:3000/api/post/postid

댓글 작성
localhost:3000/api/post/postid

댓글 조회
localhost:3000/api/comment/postid

댓글 수정
localhost:3000/api/comment/commentid

댓글 삭제
localhost:3000/api/comment/commentid

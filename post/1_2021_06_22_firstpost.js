import React from 'react';

const markdown = `
### 나만의 블로그를 만들어보았다!! 으하하하

나만의 블로그를 한번 만들어보았다.. 메인화면은 포트폴리오의 화면으로 구상하였고. 이제 좀 지나면서 차츰차츰 하나하나 늘려나갈 것이다.

글을쓰는 방식은 Markdown형식을 사용한다. 이게 편하기 때문이다.

aws의 s3를 통해 배포를 진행하고, cloudFront에서 https를 지원받은 후 route s5에서 도메인을 설정했다.

프론트단만 있으니 파일만 추가하고 명령어 하나만 입력하면 업로드가 된다!!

하.. 이 블로그를 통해서 경력을 쌓는 Front-end 개발자가 되고싶다.. 무엇보다 <b>취업</b>하고싶다 ㅋㅋㅋㅠㅠ

오늘의 썸네일인 고양이를 보고 나의 첫 글을 마무리 하겠다...

![고먐미](https://user-images.githubusercontent.com/71314689/122957307-c3f72b00-d3bc-11eb-8411-4864c4f27618.jpeg)

~~~js
console.log("hello!! hansolbangul world!!");
~~~

`;

export const body = markdown;

export const title = '나만의 첫 블로그 게시!!';

export const date = '2021-06-22';

export const tag = ['일상'];

export const thumbnail =
    'https://user-images.githubusercontent.com/71314689/122957307-c3f72b00-d3bc-11eb-8411-4864c4f27618.jpeg';

export const count = 2;

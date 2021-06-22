import React from 'react';

const markdown = `
### 나만의 블로그를 만들어보았다!! 으하하하

나만의 블로그를 한번 만들어보았다.. 메인화면은 포트폴리오의 화면으로 구상하였고. 이제 좀 지나면서 차츰차츰 하나하나 늘려나갈 것이다.

글을쓰는 방식은 Markdown형식을 사용한다. 이게 편하기 때문이다.

근데 지금 매우 불편한 상태이다.. 간단하게 내가 한 글쓰기 방식을 보자면

react.js로 만들어진 페이지에 js파일을 통해 markdown문서를 불러와 읽어들이는 것인데, 지금 이게 github에 deploy되어있어서 문서를 추가할때마다 github저장소에 add, commit, push를 한 다음에 마지막에 deploy까지 해줘야한다...

역시... 사람은 머리가 좋아야하는데 이 배포방식은 안좋은거 같다.. 다른 방식을 찾아봐야지....

프론트단만 있으니 파일만 추가하면 알아서 업데이트 해주면 좋을 것 같은데... 어디서 찾아야하지?

왠지 이렇게 매번 복잡하게 글을쓰다보면 어느순간부터 귀찮아서 안쓸거 같은데 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ

하.. 이 블로그를 통해서 경력을 쌓는 Front-end 개발자가 되고싶다.. 무엇보다 <b>취업</b>하고싶다 ㅋㅋㅋㅠㅠ

`;

export const body = markdown;

export const title = 'hello';

export const date = '2021-06-22';

export const tag = ['html', 'css'];

export const thumbnail =
    'https://user-images.githubusercontent.com/71314689/122886155-a903c700-d37a-11eb-9968-7ec6540a0896.png';

export const count = 1;

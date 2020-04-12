# Todo App

## Project Stack

- React
- Redux-thunk
- styled-components
- axios
- node.js

## 실행 방법

1. 프로젝트 clone 혹은 download
2. yarn 설치
   ```cmd
   yarn install
   ```
3. 서버 실행

   ```cmd
   node ./servers/server.js
   ```

4. 프로젝트 실행
   ```cmd
   yarn start
   ```

## 기능 소개

### 할 일 조회

- 실행 후 초기 화면
- 상태, 내용, 작성일, 수정일 및 삭제와 수정 버튼이 테이블 형태로 표기
- 먼저 할 일(참조)은 '@먼저 할 일 내용' 의 형태로 내용 밑에 표기

![todolist](/images/todolist.png?raw=true)

### 할 일 추가

- 할 일 추가 시, 먼저 할 일(참조) 선택 가능
- 먼저 할 일 선택하지 않아도 할 일 추가 가능
- 먼저 할 일의 목록은 이전에 등록되어 있는 할 일 목록이다

![addtodo](/images/add.gif?raw=true)

### 할 일 수정

- 할 일 수정시, 모달 열림
- 수정 폼에 선택한 할 일의 내용과 먼저 할 일 표기
- 수정 폼의 먼저 할 일 목록에는 선택한 해당 할 일은 포함하지 않는다

![modifytodo](/images/modify.gif?raw=true)

### 할 일 삭제

- 할 일 삭제 전, 삭제 확인
- 삭제한 할 일이 다른 할 일의 먼저 할 일로 등록 되어 있을 경우, 먼저 할 일 목록에서도 삭제

![deletetodo](/images/delete.gif?raw=true)

### 할 일 상태 변경

- 완료 <-> 미완료 변경
- 상태 변경하려는 할 일의 먼저 할 일이 모두 완료 상태가 아닐 경우, 상태 변경 불가

![toggletodo](/images/toggle.gif?raw=true)

### 페이지네이션

- 1페이지당, 5개의 할 일 목록 표시 (표시 할 갯수는 코드 상에서 변경)

![paginationtodo](/images/pagination.gif?raw=true)

### 검색

- 내용, 작성일, 수정일 검색 가능
- 완료 여부 검색할 경우, 완료 혹은 미완료로 작성시 검색 가능

![searchtodo](/images/search.gif?raw=true)

### 정렬

- 상태, 내용, 작성일, 수정일 오름차순 및 내림차순
- 검색 중인 경우에도 정렬 가능

![sorttodo](/images/sort.gif?raw=true)

### 백업

- 등록 되어있는 할 일 목록을 './todo.json' 형태로 저장

![downloadtodo](/images/download.gif?raw=true)

### 복원

- json 파일 형태로 되어있는 할 일 목록을 복원

![uploadtodo](/images/upload.gif?raw=true)

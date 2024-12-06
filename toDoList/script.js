document.addEventListener("DOMContentLoaded", () => { //DOM이 로드되면 실행
    const listform = document.getElementById("listform"); //할일 리스트의 <from> 요소를 저장하는 변수 
    const todoList = document.getElementById("todoList"); //추가한 할일 목록 요소 <ul>이 저장되는 변수
    const textInput = document.getElementById("textInput"); //텍스트 입력하는 요소 <input>이 저장되는 변수
    
    // 추가기능
    listform.addEventListener("submit", (e) => { //submit 버튼을 누르면 실행
        e.preventDefault(); //페이지 새로고침 방지

        const todoText = textInput.value.trim(); // 할 일을 가져오고 공백제거
        if(todoText === "") return; // 텍스트 창이 비어있으면 실행 X

        const li = document.createElement("li"); // 새로운 <li>요소 생성

        li.innerHTML = `
            <span>${todoText}</span>
            <button class="deleteButton">x</button>
        `; //<li>에 HTML 내용 추가

        todoList.appendChild(li); //새록 생성된 <li>을 <ul>목록에 추가
        textInput.value = ""; //입력 필드 초기화

        });

    // 삭제기능
    todoList.addEventListener("click", (e)=>{ // 클릭했을때
        if (e.target.classList.contains("deleteButton")){ // 삭제버튼을 클릭했다면
            e.target.parentElement.remove(); // 삭제 버튼의 부모인 <li> 요소를 삭제
        }
    });
});

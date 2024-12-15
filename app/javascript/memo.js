function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //「投稿ボタンをクリックした」という現象を無効化
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    // フォームに入力された内容をサーバー側に送信します。
  });
 };
 
 window.addEventListener('turbo:load', post);
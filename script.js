let currentUser = "usuario";

function showPage(id){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

for(let i=0;i<8;i++){
  const s = document.createElement("img");
  s.src = "https://via.placeholder.com/60";
  s.className = "story";
  stories.appendChild(s);
}

function editUser(){
  const n = prompt("Nuevo nombre");
  if(n){
    currentUser = n.toLowerCase();
    username.innerText = "@" + currentUser;
  }
}

avatarInput.addEventListener("change", e=>{
  const r = new FileReader();
  r.onload = ()=> avatar.src = r.result;
  r.readAsDataURL(e.target.files[0]);
});

function createPost(){
  if(!postText.value && !postImage.files[0]) return;

  const post = document.createElement("div");
  post.className="card";
  let likes = 0;

  post.innerHTML = `
    <b>@${currentUser}</b>
    <p>${postText.value}</p>
    <div class="actions">
      <span class="like">🤍 0</span>
      <span class="com">💬</span>
    </div>
    <div class="comments"></div>
  `;

  post.querySelector(".like").onclick = function(){
    likes++;
    this.innerText = "❤️ " + likes;
  };

  post.querySelector(".com").onclick = function(){
    const c = prompt("Comentario");
    if(c){
      const p = document.createElement("p");
      p.innerText = currentUser + ": " + c;
      post.querySelector(".comments").appendChild(p);
    }
  };

  feed.prepend(post);
  postText.value="";
  postImage.value="";
}

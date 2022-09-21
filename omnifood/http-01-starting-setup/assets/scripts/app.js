const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form=document.querySelector('.myForm');
const fetchBtn=document.querySelector('.fetch_btn');
form.addEventListener('click',createPost);
fetchBtn.addEventListener('click',fetchPosts);
function sendHttpRequest(method, url,body) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json'
        xhr.onload = function () {
            resolve(xhr.response);
        }
        xhr.send(JSON.stringify(body));

    });
    return promise;

}

async function fetchPosts() {
    const posts = await sendHttpRequest("GET", 'https://jsonplaceholder.typicode.com/posts');
    for (const post of posts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl);
    }
}
async function createPost(e)
{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const userId=Math.random();
    const post={
        title,
        body:content,
        userId
    }
    sendHttpRequest('POST','https://jsonplaceholder.typicode.com/posts');
}






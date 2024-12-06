// Dynamically set the account name
document.getElementById("account-name").textContent = pageData.accountName;

// Dynamically populate the posts
const postsContainer = document.getElementById("posts-container");
pageData.posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <a href="${post.link}" target="_blank">
            <img src="${post.image}" alt="Post Image" />
        </a>
    `;
    postsContainer.appendChild(postElement);
});

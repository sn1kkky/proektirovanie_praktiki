document.addEventListener("DOMContentLoaded", () => {
    const newsArray = [];
    const newsContainer = document.getElementById("newsContainer");
    const addNewsButton = document.getElementById("addNewsButton");
    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".close-button");
    const openModalButton = document.querySelector(".add-button");
    const errorMessage = document.getElementById("errorMessage");

    const newsTitleInput = document.getElementById("newsTitle");
    const newsTextInput = document.getElementById("newsText");

    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    const addNews = () => {
        const title = newsTitleInput.value.trim();
        const text = newsTextInput.value.trim();

        if (title === "" || text === "") {
            errorMessage.textContent = "Все поля должны быть заполнены.";
            return;
        } else if (title.length < 8) {
            errorMessage.textContent = "Минималка 8 символов в названии.";
            return;
        } else if (text.length > 300) {
            errorMessage.textContent = "Максималка 300 символов в тексте.";
            return;
        }

        const newsItem = {
            title,
            text,
        };
        newsArray.push(newsItem);

        newsTitleInput.value = "";
        newsTextInput.value = "";
        errorMessage.textContent = "";
        renderNews();

        modal.style.display = "none";
    };

    const renderNews = () => {
        newsContainer.innerHTML = "";
        newsArray.forEach(news => {
            const newsElement = document.createElement("div");
            newsElement.classList.add("news-item");

            newsElement.innerHTML = `
                <h3 class="h3">${news.title}</h3>
                <p class="news-item__p">${news.text}</p>
            `;

            newsContainer.appendChild(newsElement);
        });
    };

    addNewsButton.addEventListener("click", addNews);

    document.addEventListener("keydown", (event) => {
        if (event.key === "b" || event.key === "B" || event.key === "и" || event.key === "И") {
            document.body.style.backgroundColor = "#333";
            document.body.style.color = "#fff";
        } else if (event.key === "w" || event.key === "W" || event.key === "ц" || event.key === "Ц") {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
        }
    });
});

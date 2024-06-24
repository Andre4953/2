document.addEventListener("DOMContentLoaded", function() {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });
    }

    // Load Articles
    const articles = [
        {
            title: "ConvoHub Spoiler",
            date: "2024-06-23",
            summary: "On April 13th, 2024 we started programming ConvoHub and on June 22nd, 2024 we spoiled it for the first time in our Discord server",
            text: "The project manager (Andre) has been wanting an app for several months where there are no errors, where support finally responds quickly, where the security of the members is the highest priority, etc. And then on April 13, 2024, he had the idea: Why doesn't he program such an app himself? And so the Alpha v0.0.0.1 was released in just one day for internal testing purposes. Andre didn't like this yet and is now working with 3 other developers and 2 designers on an app that offers something similar to Discord but only better and with more security.",
            imageUrl: "Images/ConvoHubSpoiler.png"
        }
    ];

    const articlesContainer = document.getElementById("articles");
    if (articlesContainer) {
        articles.forEach((article, index) => {
            const articleElement = createArticleElement(article, index);
            articlesContainer.appendChild(articleElement);
        });
    } else {
        console.error("Error: 'articles' element not found.");
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollToTopBtn) {
        window.addEventListener("scroll", function() {
            scrollToTopBtn.style.display = window.pageYOffset > 300 ? "block" : "none";
        });

        scrollToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Modal functionality
    const modal = document.getElementById("modal");
    const closeModal = modal.querySelector(".close");
    const modalText = modal.querySelector("#modalText");

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = "none";
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Helper functions
    function createArticleElement(article, index) {
        const articleElement = document.createElement("article");

        articleElement.innerHTML = `
            <img src="${article.imageUrl}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p class="meta"><i class="fas fa-calendar-alt"></i> Published on: <time datetime="${article.date}">${new Date(article.date).toLocaleDateString('en-US')}</time></p>
            <p>${article.summary}</p>
            <a href="#" class="btn read-more-btn" data-index="${index}">Read more...</a>
        `;

        articleElement.querySelector('.read-more-btn').addEventListener('click', function(event) {
            event.preventDefault();
            populateModal(article);
            modal.style.display = "block";
        });

        return articleElement;
    }

    function populateModal(article) {
        modal.querySelector("#modalTitle").textContent = article.title;
        modal.querySelector("#modalDate").textContent = `Published on: ${new Date(article.date).toLocaleDateString('en-US')}`;
        modalText.innerHTML = `<p>${article.text}</p>`;
    }
});
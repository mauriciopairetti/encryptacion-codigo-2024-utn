
        const themeToggle = document.getElementById("themeToggle");
        const body = document.body;

        // Alternar entre modos oscuro y claro
        themeToggle.addEventListener("click", () => {
            if (body.classList.contains("dark-mode")) {
                body.classList.replace("dark-mode", "light-mode");
            } else {
                body.classList.replace("light-mode", "dark-mode");
            }
        });
   
let htmlElement = document.documentElement
            let toggleThemeElement = document.getElementById('toggletheme')
            
            toggleThemeElement.addEventListener('click', function () {
                let theme = htmlElement.getAttribute('data-bs-theme')
                if (theme === 'light') {
                    htmlElement.setAttribute('data-bs-theme', 'dark');
                    toggleThemeElement.innerHTML = "<i class=\"bi bi-brightness-high-fill\"></i>"
                } else {
                    htmlElement.setAttribute('data-bs-theme', 'light');
                    toggleThemeElement.innerHTML = "<i class=\"bi bi-moon-fill\"></i>"
                }
            })
# Theme Toggle (Light/Dark Mode) for Bootstrap 5

![Example](https://github.com/roby27/bootstrap-5-light-dark-mode-switcher/blob/main/example.jpg?raw=true "Example")

## Usage

Declare data-bs-theme in HTML tag

```
<html data-bs-theme="light">
```

Add JS to your project

```
let htmlElement = document.documentElement;
let toggleThemeElement = document.getElementById("toggletheme");

toggleThemeElement.addEventListener("click", function () {
  let theme = htmlElement.getAttribute("data-bs-theme");
  if (theme === "light") {
    htmlElement.setAttribute("data-bs-theme", "dark");
    toggleThemeElement.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  } else {
    htmlElement.setAttribute("data-bs-theme", "light");
    toggleThemeElement.innerHTML = '<i class="bi bi-moon-fill"></i>';
  }
});
```

Add toggle button to your html

```
<button id="toggletheme" class="btn"><i class="bi bi-moon-fill"></i></button>
```

You can check the example for the result.

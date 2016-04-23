var main_aside = document.getElementById("main_aside");

function toggle_menu(elem)
{
	if (elem.classList.contains("active"))
	{
		elem.classList.remove("active");
		main_aside.classList.add("invisible");
		main_aside.style.width = "40px";
	}
	else
	{
		elem.classList.add("active");
		main_aside.classList.remove("invisible");
		main_aside.style.width = "200px";
	}
}

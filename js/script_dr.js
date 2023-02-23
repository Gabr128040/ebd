function  menu() {
				if (document.getElementsByClassName("nav")[0].style.display == 'none') {
								document.getElementsByClassName("nav")[0].style.display = 'block'
							document.getElementById("header-menu").innerText = 'close'
				}
				else {
						document.getElementsByClassName("nav")[0].style.display = 'none'
						document.getElementById("header-menu").innerText = 'menu'		
				}
}

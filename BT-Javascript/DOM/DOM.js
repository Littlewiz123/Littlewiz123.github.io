// Câu 1. function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor() {
	let p1 = document.getElementById("p1");
	let p2 = document.getElementById("p2");
	let p3 = document.getElementById("p3");
	p1.style.color = "green";
	p2.style.color = "yellow";
	p3.style.color = "red";
	return;
}
changeColor();

// Câu 2. function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
function changeBgColor(color) {
	let body = document.getElementsByTagName("body");
	body[0].style.backgroundColor = color;
	return body;
}
// changeBgColor("red")

/* Câu 3. function copyContent(paragraph1, paragraph2): Thay đổi nội dung của đoạn văn paragraph1 
thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào có thể là id của 2 đoạn văn). */
function copyContent(paragraph1, paragraph2) {
	if(typeof(paragraph1) == 'string' && typeof(paragraph2) == 'string') {
		if (paragraph1.length == 2 && paragraph2.length == 2) {
			let p1 = document.getElementById(paragraph1);
			let p2 = document.getElementById(paragraph2);
			p1.innerHTML = p2.innerHTML;
			return;
		}
		else if (paragraph1 == document.getElementById("p1").innerHTML && paragraph2 == document.getElementById("p2").innerHTML) {
			paragraph1 = paragraph2;
			document.getElementById("p1").innerHTML = paragraph1;
			return;
		}
		else {
			return false;
		}
	} else {
		return false;
	}
}

// Câu 4. function changeFontSize(x): Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
function changeFontSize(x) {
	x += "px";
	let p1 = document.getElementById("p1");
	let p2 = document.getElementById("p2");
	let p3 = document.getElementById("p3");
	p1.style.fontSize = x;
	p2.style.fontSize = x;
	p3.style.fontSize = x;
	return;
}

/* Câu 5. function increaseFontSize(paragraph): Tăng kích thước font chữ của đoạn văn mong muốn 
(paragraph, tham số truyền vào có thể là id đoạn văn) lên 1 pixel so với kích thước hiện tại, 
kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() 
hoặc dùng window.getComputedStyle). */
function increaseFontSize(paragraph) {
	if (typeof(paragraph) == 'string') {
		if (paragraph.length > 2) {
			switch(paragraph) {
				case document.getElementById("p1").innerHTML :
					let p1 = document.getElementById("p1");
					let computedFontSize1 = window.getComputedStyle(p1).fontSize;
					if (parseInt(computedFontSize1) < 30) {
						p1.style.fontSize = (parseInt(computedFontSize1) + 1) + "px";
						return p1.style.fontSize;
					}
					else {
						return alert("Fontsize paragraph không tăng được nữa");
					}
					break;
				case document.getElementById("p2").innerHTML :
					let p2 = document.getElementById("p2");
					let computedFontSize2 = window.getComputedStyle(p2).fontSize;
					if (parseInt(computedFontSize2) < 30) {
						p2.style.fontSize = (parseInt(computedFontSize2) + 1) + "px";
						return p2.style.fontSize;
					}
					else {
						return alert("Fontsize paragraph không tăng được nữa");
					}
					break;
				case document.getElementById("p3").innerHTML :
					let p3 = document.getElementById("p3");
					let computedFontSize3 = window.getComputedStyle(p3).fontSize;
					if (parseInt(computedFontSize3) < 30) {
						p3.style.fontSize = (parseInt(computedFontSize3) + 1) + "px";
						return p3.style.fontSize;
					}
					else {
						return alert("Fontsize paragraph không tăng được nữa");
					}
					break;
				default:
					return false;
					break;
			}
		}
		else if (paragraph.length == 2) {
			let para = document.getElementById(paragraph);
			let computedFontSize = window.getComputedStyle(para).fontSize;
			if (parseInt(computedFontSize) < 30) {
				para.style.fontSize = (parseInt(computedFontSize) + 1) + "px";
				return para.style.fontSize;
			}
			else {
				return alert("Fontsize paragraph không tăng được nữa");
			}
		}
	}
	else {
		return false;
	}
}

/* Câu 6. function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn 
(paragraph, tham số truyền vào có thể là id đoạn văn) xuống 1 pixels so với kích thước hiện tại, 
kích thước giảm xuống không vượt quá 10 pixels. */
function decreaseFontSize(paragraph) {
	if (typeof(paragraph) == 'string') {
		if (paragraph.length > 2) {
			switch(paragraph) {
				case document.getElementById("p1").innerHTML :
					let p1 = document.getElementById("p1");
					let computedFontSize1 = window.getComputedStyle(p1).fontSize;
					if (parseInt(computedFontSize1) > 10) {
						p1.style.fontSize = (parseInt(computedFontSize1) - 1) + "px";
						return p1.style.fontSize;
					}
					else {
						return alert("Fontsize paragraph không giảm được nữa");
					}
					break;
				case document.getElementById("p2").innerHTML :
					let p2 = document.getElementById("p2");
					let computedFontSize2 = window.getComputedStyle(p2).fontSize;
					if (parseInt(computedFontSize2) > 10) {
						p2.style.fontSize = (parseInt(computedFontSize2) - 1) + "px";
						return p2.style.fontSize;
					}
					else {
						return alert("Fontsize paragraph không giảm được nữa");
					}
					break;
				case document.getElementById("p3").innerHTML :
					let p3 = document.getElementById("p3");
					let computedFontSize3 = window.getComputedStyle(p3).fontSize;
					if (parseInt(computedFontSize3) > 10) {
						p3.style.fontSize = (parseInt(computedFontSize3) - 1) + "px";
						return p3.style.fontSize;
					}
					else {
						return alert("Fontsize paragraph không giảm được nữa");
					}
					break;
				default:
					return false;
					break;
			}
		}
		else if (paragraph.length == 2) {
			let para = document.getElementById(paragraph);
			let computedFontSize = window.getComputedStyle(para).fontSize;
			if (parseInt(computedFontSize) > 10) {
				para.style.fontSize = (parseInt(computedFontSize) - 1) + "px";
				return para.style.fontSize;
			}
			else {
				return alert("Fontsize paragraph không giảm được nữa");
			}
		}
	}
	else {
		return false;
	}
}
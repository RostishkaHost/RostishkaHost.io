function squarew(){
	var a = parseFloat(document.getElementById('LengthA').value),
		b = parseFloat(document.getElementById('WidthB').value),
		s = (a * b),
		p = (a * 2 + b * 2);

		document.getElementById('1'). value = p;

		document.getElementById('2').value = s; 

		document.getElementById('result').value = s;
}
// Функція котра при нажатті на кнопку буде змінювати колір тексту	
function getOptionColor() {
    var objColor = document.getElementById("ColorSelect");
	document.getElementById("student").style.color = objColor.options[objColor.selectedIndex].value;
}
// Функція котра при нажатті на кнопку буде змінювати розмір тексту
function getOptionFont() {
    var objFont = document.getElementById("FontSelect");
	document.getElementById("student").style.fontSize = objFont.options[objFont.selectedIndex].value;
}

var ph = /(\+375)\s?[\s\(]?(29|33|44|25)[\s\)]?\s?([0-9]{3})[\s-]?([0-9]{2})[\s-]?([0-9]{2})/;
var str = prompt("Введите мобильный номер телефона в формате, например +375 44 1140907");
if(str.match(ph) != null){
	var arr = str.match(ph).slice(1);
	alert("Мобильный номер телефона: " + arr.join(""));
}
else{
	alert("Ошибка.Проверьте введенные данные.Номер не обнаружен!");
}



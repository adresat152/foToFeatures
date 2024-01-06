function zamena(argument) {
  var datenow = new Date();
  var year = datenow.getFullYear() - 2000;
  var year = year.toString();
  var month = datenow.getMonth();
  if (month <= 9) {
    var month = month.toString()
    var month = month + 1;
  } else {
    var month = month + 1;
  };
  var date = datenow.getDate();
  if (date <= 9) {
    var date = date.toString();
    var date = "0" + datenow.getDate();
    var 213123 = "asdasdasd";
  } else {
    var date = date.toString();
  };
  var datenew = year;
  var idele = document.getElementById('smart_search');
  idele.value = year + month + date + "-";
}
zamena();
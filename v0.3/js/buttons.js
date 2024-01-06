const field = document.querySelector('#admin_bundle_order_form_orderCrmComment_comment'); // Находим поле и создаем переменную
const btn = "btn";
const btnprimary = "btn-primary"
var idButtons = [
  "NDZButton",
  "PozButton",
  "OcenkaButton",
  "TimeButton",
  "TelButton"
  ];
var nameButtons = [
  "Недозвон",
  "Отс. Поз",
  "Оценка",
  "Опоздание",
  "Передача номера"
  ];
var macros = [
  "кл ндз, кур на месте, пуш, ждет макс времени",
  "поз. отсутствует, кл согл на зз без этой поз",
  "уточнение низкой оценки. кл ндз",
  "зз будет передан с опозданием - привезут примерно в XX:XX, кл готов ждать",
  "Кл согл на передачу прямого номера"
  ];
for (var i = 0; i < idButtons.length; i++) {
  var button = document.createElement('button');
  button.id = idButtons[i];
  button.innerHTML = nameButtons[i];
  button.classList.add(btn,btnprimary);
  button.style.margin="15px";
  document.body.appendChild(button);
}
var NDZButton = document.querySelector('#NDZButton');
NDZButton.style.marginLeft="500px";
NDZButton.addEventListener('click', function() {
        field.value = macros[0];
      });
var PozButton = document.querySelector('#PozButton');
PozButton.addEventListener('click', function() {
        field.value = macros[1];
      });
var OcenkaButton = document.querySelector('#OcenkaButton');
OcenkaButton.addEventListener('click', function() {
        field.value = macros[2];
      });
var TimeButton = document.querySelector('#TimeButton');
TimeButton.addEventListener('click', function() {
        field.value = macros[3];
      });
var TelButton = document.querySelector('#TelButton');
TelButton.addEventListener('click', function() {
        field.value = macros[4];
      });
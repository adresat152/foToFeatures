const PoleField = document.getElementById('admin_bundle_order_form_orderCrmComment');
const field = document.querySelector('#admin_bundle_order_form_orderCrmComment_comment');
const SelecetMaxTimePole = document.querySelector('#admin_bundle_order_form_planed_customer_arrival_time'); // Находим поле и создаем переменную
//var maxTimePole = SelecetMaxTimePole.value;
//var maxTimePole = maxTimePole.substring(11);
const btn = "btn";
const btnprimary = "btn-info"
var GrandButtons = [
  "NDZButton",
  "PozButton",
  "OcenkaButton",
  "TimeButton",
  "TelButton"
  ];
// Дочерние кнопки NDZ
var SoonButtonsNDZ = [
  "TenMinutes",
  "MaxTime",
  "TimesUp"
  ];
// Дочерник кнопки Poz
var SoonButtonsPoz = [
  "ClientPlus",
  "ClientMinus",
  "Zamena"
  ];
var nameButtons = [
  "Недозвон 📞",
  "Отс. Поз ❌",
  "Оценка 👍",
  "Опоздание ⏳",
  "Передача номера 🗿"
  ];
var macros = [
  "кл ндз, кур на месте, пуш, ждет 10 минут",
  "кл ндз, кур на месте, пуш, ждет максимальное время "/* + maxTimePole*/,
  "кл ндз, время вышло, зз отмена",
  " - поз. отсутствует, кл согл на зз без этой поз",
  " - поз. отсутствует, кл зз неактуален",
  " - поз. отсутствует, кл хочет заменить на ",
  "уточнение низкой оценки. кл ндз",
  "зз будет передан с опозданием - привезут примерно в XX:XX, кл готов ждать",
  "Кл согл на передачу прямого номера"
  ];

//Создаем Div с id Group
var divBtnGroup = document.createElement('div');
divBtnGroup.classList.add('btn-group')
divBtnGroup.role = 'group';
divBtnGroup.id = 'Group';
PoleField.appendChild(divBtnGroup);
var divBtnGroupTarget = document.getElementById('Group'); // Это помещает созданный див в переменную

// Цикл создания двух дивов в которые мы поместим Кнопки со стрелками вниз
for (var i = 1; i <= 2; i++) {
  var divBtnGroup$ = document.createElement('div');
  divBtnGroup$.classList.add('btn-group')
  divBtnGroup$.role = 'group';
  divBtnGroup$.id = 'Group'+i;
  divBtnGroupTarget.appendChild(divBtnGroup$);
};
// Выбираем два дива с Group 1 и 2
var divBtnGroupTarget1 = document.getElementById('Group1');
var divBtnGroupTarget2 = document.getElementById('Group2');
// Цикл создания кнопок всех с проверкой на NDZ и POZ
for (var i = 0; i < GrandButtons.length; i++) {
  var button = document.createElement('button');
  button.id = GrandButtons[i];
  // Если кнопка NDZ
  if (button.id == GrandButtons[0]) {
    button.id = 'btnGroupDrop1';
    button.type = 'button';
    button.role = 'group';
    button.setAttribute('data-bs-toggle', 'dropdown');
    button.setAttribute('aria-expanded', 'false');
    button.classList.add(btn,btnprimary, 'dropdown-toggle');
    button.innerHTML = nameButtons[i];
    divBtnGroupTarget1.appendChild(button);
  } else {
    //Если кнопка Poz
    if (button.id == GrandButtons[1]) {
      button.id = 'btnGroupDrop2';
      button.type = 'button';
      button.role = 'group';
      button.setAttribute('data-bs-toggle', 'dropdown');
      button.setAttribute('aria-expanded', 'false');
      button.classList.add(btn,btnprimary, 'dropdown-toggle');
      button.innerHTML = nameButtons[i];
      divBtnGroupTarget2.appendChild(button);
    } else {
      // Если любая другая кнопка
      button.type = 'button';
      button.innerHTML = nameButtons[i];
      button.classList.add(btn,btnprimary);
      divBtnGroupTarget.appendChild(button);
    }
  }
}


// Цикл создания UL
for (var i = 1; i <= 2; i++) {
  var ul$ = document.createElement('ul');
  ul$.classList.add('dropdown-menu');
  ul$.setAttribute('aria-label', 'btnGroupDrop1');
  ul$.id = 'ul'+i;
  var divBtnGroupTarget$ = document.getElementById('Group'+i);
  divBtnGroupTarget$.appendChild(ul$);
}
//Цикл создания li, а после <a> с проверкой куда их поместить
for (var i = 1; i <= 2; i++) {
  var ul$ = document.getElementById('ul'+i);
  var li$ = document.createElement("li");
  li$.id = 'li'+i;
  ul$.appendChild(li$);
  // Если li1
  if (li$.id == 'li1') {
    // Цикл создания <a> и вытаскивания из переменной значение кнопок
    for (var b = 0; b < SoonButtonsNDZ.length; b++) {
      var li$ = document.getElementById('li'+i)
      var a$ = document.createElement('a');
      a$.classList.add('dropdown-item');
      a$.innerHTML = SoonButtonsNDZ[b];
      a$.id = SoonButtonsNDZ[b];
      li$.appendChild(a$);
    }
    // Если не li1
  } else {
    // Цикл создания <a> и вытаскивания из переменной значение кнопок
    for (var b = 0; b < SoonButtonsPoz.length; b++) {
      var li$ = document.getElementById('li'+i)
      var a$ = document.createElement('a');
      a$.classList.add('dropdown-item');
      a$.innerHTML = SoonButtonsPoz[b];
      a$.id = SoonButtonsPoz[b];
      li$.appendChild(a$);
    }
  }
}
var TenMinutes = document.querySelector('#TenMinutes');
TenMinutes.addEventListener('click', function() {
        field.value = macros[0];
      });
var MaxTime = document.querySelector('#MaxTime');
MaxTime.addEventListener('click', function() {
        field.value = macros[1];
      });
var TimesUp = document.querySelector('#TimesUp');
TimesUp.addEventListener('click', function() {
        field.value = macros[2];
      });
var ClientPlus = document.querySelector('#ClientPlus');
ClientPlus.addEventListener('click', function() {
        field.value = field.value + macros[3];
      });
var ClientMinus = document.querySelector('#ClientMinus');
ClientMinus.addEventListener('click', function() {
        field.value = field.value + macros[4];
      });
var Zamena = document.querySelector('#Zamena');
Zamena.addEventListener('click', function() {
        field.value = field.value + macros[5];
      });
var OcenkaButton = document.querySelector('#OcenkaButton');
OcenkaButton.addEventListener('click', function() {
        field.value = macros[6];
      });
var TimeButton = document.querySelector('#TimeButton');
TimeButton.addEventListener('click', function() {
        field.value = macros[7];
      });
var TelButton = document.querySelector('#TelButton');
TelButton.addEventListener('click', function() {
        field.value = macros[8];
      });
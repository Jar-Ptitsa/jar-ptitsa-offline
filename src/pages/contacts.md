---
templateKey: contacts
principal:
  image: /img/uploads/1.png
  description: Дорогие друзья, если у вас есть вопросы к руководству школы, а
    также пожелания, предложения или замечания, я и члены бюро с готовностью
    ответят вам лично, в письменном виде или по телефону.
  signature: Татьяна Шартэ, директор
  tabs:
    - tab_label: Задать вопрос
      form_name: question
      formInputs:
        - inputLabel: Имя
          inputType: text
          required: "true"
        - inputLabel: Телефон
          inputType: phone
          required: "true"
        - inputLabel: Email
          inputType: enail
          required: "true"
        - inputLabel: Ваш вопрос
          inputType: text
          required: "true"
    - tab_label: Пробный урок
      form_name: free_lesson
      formInputs:
        - inputLabel: Имя
          inputType: text
          required: "true"
        - inputLabel: Телефон
          inputType: phone
          required: "true"
        - inputLabel: Email
          inputType: enail
          required: "true"
    - tab_label: Обратный звонок
      form_name: callback
      formInputs:
        - inputLabel: Имя
          inputType: text
          required: "true"
        - inputLabel: Телефон
          inputType: phone
          required: "true"
title: Адреса и контакты
email: jarptitsa.france@gmail.com
telephones:
  - phone: +33 (0)6 29 02 17 85
  - phone: +33 (0)6 35 33 81 25
address:
  title: Наши Адреса
  address:
    - title: Офис
      street: 31 Avenue du Centre
      city: Montigny-le-Bretonneux
      zip: "78180"
      country: France
      coords: 48.78497573023895, 2.0456221142433177
      steps:
        - image: /img/uploads/hohloma.png
    - country: France
      zip: "78180"
      city: Montigny-le-Bretonneux
      street: 6 avenue Erik Satie
      title: Детский сад и начальная школа
      coords: 48.76394262037385, 2.030581785406726
      steps:
        - title: Автобусы (SQYBus)
          options:
            - option: '**№ 419** - остановка "Erik Satie"'
          image: /img/uploads/hohloma.png
    - title: Воскресный клуб
      street: 3 Chemin des Solitaires
      city: Montigny-le-Bretonneux
      zip: "78180"
      country: France
      coords: 48.76349172164362, 2.016172810536841
      steps:
        - title: Автобусы (SQYBus)
          options:
            - option: "**№ 414** - остановка \"Collège St-François d'Assise\""
          image: /img/uploads/hohloma.png
routes:
  title: Как добраться до Montigny-le-Bretonneux
  steps:
    - title: Электрички
      options:
        - option: "**RER C**"
        - option: "**Paris-Montparnasse** - Saint Quentin en Yvelines. (Montigny le
            Bretonneux)"
        - option: "**Paris-La Défense** - Saint Quentin en Yvelines (Montigny le
            Bretonneux)"
---

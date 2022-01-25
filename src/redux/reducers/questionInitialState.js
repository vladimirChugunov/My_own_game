const questionsInitialState = {
  Music: [
    {
      id: 1,
      question: 'Единственный российский певец, победивший на конкурсе "Евровидение"?',
      answer: 'билан',
      cost: '200',
      category: 'Музыка',
      categoryName: 'Music',
      visible: true,
    },
    {
      id: 2,
      question: 'С латинского языка название этого инструмента переводится как "дуновение".',
      answer: 'флейта',
      cost: '400',
      category: 'Музыка',
      categoryName: 'Music',
      visible: true,
    }, 
    {
      id: 3,
      question: 'Какая звезда 80-х признана Книгой рекордов Гиннеса самой продаваемой певицей всех времен?',
      answer: 'Мадонна',
      cost: '600',
      category: 'Музыка',
      categoryName: 'Music',
      visible: true,
    }, 
    {
      id: 4,
      question: 'Известный рэпер, который был застрелен в своей машине',
      answer: 'тупак',
      cost: '800',
      category: 'Музыка',
      categoryName: 'Music',
      visible: true,
    }, 
    {
      id: 5,
      question: 'Автор цитаты: "Now, everybody from the 313. Put your motherfuckin\' hands up and follow me!"',
      answer: 'эминем',
      cost: '1000',
      category: 'Музыка',
      categoryName: 'Music',
      visible: true,
    },
  ],
  Riddles: [
    {
      id: 1,
      question: 'Что за обедом нужнее всего?',
      answer: 'рот',
      cost: '200',
      category: 'Загадки',
      categoryName: 'Riddles',
      visible: true,
    },
    {
      id: 2,
      question: 'Каким гребнем нельзя расчесывать голову?',
      answer: 'петушиным',
      cost: '400',
      category: 'Загадки',
      categoryName: 'Riddles',
      visible: true,
    },
    {
      id: 3,
      question: 'Кто под проливным дождем не намочит волосы?',
      answer: 'лысый',
      cost: '600',
      category: 'Загадки',
      categoryName: 'Riddles',
      visible: true,
    },
    {
      id: 4,
      question: 'Как написать слово «мышеловка» пятью буквами?',
      answer: 'кошка',
      cost: '800',
      category: 'Загадки',
      categoryName: 'Riddles',
      visible: true,
    },
    {
      id: 5,
      question: 'Что есть только у слонов, и ни у каких других животных больше нет?',
      answer: 'Слонята',
      cost: '1000',
      category: 'Загадки',
      categoryName: 'Riddles',
      visible: true,
    },
  ],
  BlackBox: [
    {
      id: 1,
      question: 'Что является столицей Австралии?',
      answer: 'Канберра',
      cost: '200',
      category: 'Кот в мешке',
      categoryName: 'BlackBox',
      visible: true,
    },
    {
      id: 2,
      question: 'Какая планета находится ближе всего к Солнцу?',
      answer: 'Меркурий',
      cost: '400',
      category: 'Кот в мешке',
      categoryName: 'BlackBox',
      visible: true,
    },
    {
      id: 3,
      question: 'Какое стихийное бедствие измеряется по шкале Рихтера?',
      answer: 'Землетрясение',
      cost: '600',
      category: 'Кот в мешке',
      categoryName: 'BlackBox',
      visible: true,
    },
    {
      id: 1,
      question: 'Что является национальным животным Шотландии?',
      answer: 'Единорог',
      cost: '800',
      category: 'Кот в мешке',
      categoryName: 'BlackBox',
      visible: true,
    },
    {
      id: 1,
      question: 'Что является национальным животным Шотландии?',
      answer: 'Единорог',
      cost: '1000',
      category: 'Кот в мешке',
      categoryName: 'BlackBox',
      visible: true,
    },
  ],
  Films: [
    {
      id: 1,
      question: 'Из какого фильма персонаж Нео?',
      answer: 'матрица',
      cost: '200',
      category: 'Фильмы',
      categoryName: 'Films',
      visible: true,
    },
    {
      id: 2,
      question: 'Лысый главарь с пафосными цитатами. Любит машины и семью.',
      answer: 'Торетто',
      cost: '400',
      category: 'Фильмы',
      categoryName: 'Films',
      visible: true,
    },
    {
      id: 3,
      question: 'Сколько в фильме было официальных жен у Джордана Белфорта (фильм "Волк с Уолл Стрит")?',
      answer: '2',
      cost: '600',
      category: 'Фильмы',
      categoryName: 'Films',
      visible: true,
    },
    {
      id: 4,
      question: 'Фамилия актера, сыгравшего дракона в трилогии фильмов про хоббитов?',
      answer: 'Камбербэтч',
      cost: '800',
      category: 'Фильмы',
      categoryName: 'Films',
      visible: true,
    },
    {
      id: 5,
      question: 'Имя актера, сыгравшего Гектора в фильме "Троя"?',
      answer: 'Эрик',
      cost: '1000',
      category: 'Фильмы',
      categoryName: 'Films',
      visible: true,
    },
  ]
};

export default questionsInitialState


// const questionsInitialState = {
//   Oleg: [
//     {
//       id: 1,
//       question: 'Сколько у Олега котов?',
//       answer: '1',
//       cost: '200',
//       category: 'Олег',
//       categoryName: 'Oleg',
//       visible: true,
//     },
//     {
//       id: 2,
//       question: 'На каких языках программирования пишет Олег?',
//       answer: 'На всех',
//       cost: '400',
//       category: 'Олег',
//       categoryName: 'Oleg',
//       visible: true,
//     },
//     {
//       id: 3,
//       question: 'Сколько Олег работает в Эльбрусе?',
//       answer: '164 дня',
//       cost: '600',
//       category: 'Олег',
//       categoryName: 'Oleg',
//       visible: true,
//     },
//     {
//       id: 4,
//       question: 'На каком языке программирования не писал Олег?',
//       answer: 'Scratch',
//       cost: '800',
//       category: 'Олег',
//       categoryName: 'Oleg',
//       visible: true,
//     },
//     {
//       id: 5,
//       question: 'Любимая еда Олега?',
//       answer: 'Карааге Дон',
//       cost: '1000',
//       category: 'Олег',
//       categoryName: 'Oleg',
//       visible: true,
//     },
//   ],
//   Lena: [
//     {
//       id: 1,
//       question: 'Какое настроение сейчас у Лены?',
//       answer: 'narmalna',
//       cost: '200',
//       category: 'Лена',
//       categoryName: 'Lena',
//       visible: true,
//     },
//     {
//       id: 2,
//       question: 'Любимое название для переменной у Лены?',
//       answer: 'pew pow',
//       cost: '400',
//       category: 'Лена',
//       categoryName: 'Lena',
//       visible: true,
//     },
//     {
//       id: 3,
//       question: 'Любимый язык?',
//       answer: 'CSS',
//       cost: '600',
//       category: 'Лена',
//       categoryName: 'Lena',
//       visible: true,
//     },
//     {
//       id: 4,
//       question: 'Что сделает Лена если не будете отдыхать на выходных?',
//       answer: 'Покусает',
//       cost: '800',
//       category: 'Лена',
//       categoryName: 'Lena',
//       visible: true,
//     },
//     {
//       id: 5,
//       question: 'Какая любимая еда у Лены?',
//       answer: 'Съедобная',
//       cost: '1000',
//       category: 'Лена',
//       categoryName: 'Lena',
//       visible: true,
//     },
//   ],
//   Nadya: [
//     {
//       id: 1,
//       question: 'Что больше всего любит Надя?',
//       answer: 'Офферы',
//       cost: '200',
//       category: 'Надя',
//       categoryName: 'Nadya',
//       visible: true,
//     },
//     {
//       id: 2,
//       question: 'Сколько месяцев Надя работает в Эльбрусе?',
//       answer: '9',
//       cost: '400',
//       category: 'Надя',
//       categoryName: 'Nadya',
//       visible: true,
//     },
//     {
//       id: 3,
//       question: 'Настоящие ли кудряшки у Нади?',
//       answer: 'Да',
//       cost: '600',
//       category: 'Надя',
//       categoryName: 'Nadya',
//       visible: true,
//     },
//     {
//       id: 4,
//       question: 'Любимая традиция Нади в Эльбрусе?',
//       answer: 'Спасибо',
//       cost: '800',
//       category: 'Надя',
//       categoryName: 'Nadya',
//       visible: true,
//     },
//     {
//       id: 5,
//       question: 'Как отреагирует Надя, если ей наступят на ногу?',
//       answer: 'Наступит в ответ',
//       cost: '1000',
//       category: 'Надя',
//       categoryName: 'Nadya',
//       visible: true,
//     },
//   ],
//   Yura: [
//     {
//       id: 1,
//       question: 'Какой никнейм у Юры?',
//       answer: 'Zzaaf',
//       cost: '200',
//       category: 'Юра',
//       categoryName: 'Yura',
//       visible: true,
//     },
//     {
//       id: 2,
//       question: 'В каком году Юра пришел в Эльбрус?',
//       answer: '2020',
//       cost: '400',
//       category: 'Юра',
//       categoryName: 'Yura',
//       visible: true,
//     },
//     {
//       id: 3,
//       question: 'Какие языки программирования знает Юра?',
//       answer: 'JavaScript',
//       cost: '600',
//       category: 'Юра',
//       categoryName: 'Yura',
//       visible: true,
//     },
//     {
//       id: 4,
//       question: 'В каком году Юра переехал в СПб?',
//       answer: '2017',
//       cost: '800',
//       category: 'Юра',
//       categoryName: 'Yura',
//       visible: true,
//     },
//     {
//       id: 5,
//       question: 'Какое максимальное количество километров проехал Юра на велике за 1 заезд?',
//       answer: '100км',
//       cost: '1000',
//       category: 'Юра',
//       categoryName: 'Yura',
//       visible: true,
//     },
//   ]
// };

// export default questionsInitialState
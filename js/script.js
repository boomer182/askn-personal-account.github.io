// const notificationsButton = document.querySelector('.header__notifications');
// const notificationsPopup = document.querySelector('.notifications-popup');
// const closePopupButton = document.querySelector('.notifications-popup__close');

// // Функция для позиционирования попапа под кнопкой уведомлений
// const positionNotificationsPopup = () => {
//     const buttonRect = notificationsButton.getBoundingClientRect();
//     notificationsPopup.style.left = `${buttonRect.left - 390}px`;
//     notificationsPopup.style.top = `${buttonRect.bottom + 5}px`; // Отступ от кнопки в 10px
// };

// // Функция для отображения уведомлений
// const showNotificationsPopup = () => {
//     positionNotificationsPopup(); // Позиционируем попап при его открытии
//     notificationsPopup.style.display = 'block';
// };

// // Функция для скрытия уведомлений
// const hideNotificationsPopup = () => {
//     notificationsPopup.style.display = 'none';
// };

// // Обработчик клика по кнопке уведомлений
// notificationsButton.addEventListener('click', () => {
//     // Если окно уведомлений скрыто, показываем его
//     if (notificationsPopup.style.display === 'none' || notificationsPopup.style.display === '') {
//         showNotificationsPopup();
//     } else {
//         hideNotificationsPopup();
//     }
// });

// // Обработчик клика по кнопке закрытия
// closePopupButton.addEventListener('click', () => {
//     hideNotificationsPopup();
// });

// // Функция для форматирования времени
// const formatTime = (date) => {
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     return `${hours}:${minutes}`;
// };

// // Функция для добавления нового уведомления
// const addNotification = (message) => {
//     const content = document.querySelector('.notifications-popup__content');
//     const notificationElement = document.createElement('div');
//     notificationElement.className = 'notification';
  
//     // Получаем текущее время и форматируем его
//     const time = formatTime(new Date());
  
//     // Формируем структуру уведомления с сообщением и временем
//     notificationElement.innerHTML = `
//         <div class="notification-message">${message}</div>
//         <div class="notification-time">${time}</div>
//     `;
  
//     content.appendChild(notificationElement);
// };

// // Пример добавления нового уведомления
// addNotification('Новое сообщение от менеджера');
// addNotification('Новое сообщение от менеджера');

// // Позиционируем попап при изменении размеров окна
// window.addEventListener('resize', () => {
//     if (notificationsPopup.style.display === 'block') {
//         positionNotificationsPopup();
//     }
// });


// Функции для отображения/скрытия уведомлений (универсальные)
const showPopup = (popup) => {
    popup.style.display = 'block';
};

const hidePopup = (popup) => {
    popup.style.display = 'none';
};

// Обработчики для ПК версии
const initDesktopHandlers = () => {
    const notificationsButton = document.querySelector('.header__notifications');
    const notificationsPopup = document.querySelector('.notifications-popup');
    const closePopupButton = document.querySelector('.notifications-popup__close');

    // Функция для позиционирования попапа под кнопкой уведомлений (только для ПК версии)
    const positionNotificationsPopup = () => {
        const buttonRect = notificationsButton.getBoundingClientRect();
        notificationsPopup.style.left = `${buttonRect.left - 390}px`;
        notificationsPopup.style.top = `${buttonRect.bottom + 5}px`;
    };

    // Обработчик клика по кнопке уведомлений (ПК версия)
    notificationsButton.addEventListener('click', () => {
        if (notificationsPopup.style.display === 'none' || notificationsPopup.style.display === '') {
            positionNotificationsPopup();
            showPopup(notificationsPopup);
        } else {
            hidePopup(notificationsPopup);
        }
    });

    // Обработчик клика по кнопке закрытия (ПК версия)
    closePopupButton.addEventListener('click', () => {
        hidePopup(notificationsPopup);
    });

    // Позиционируем попап при изменении размеров окна (ПК версия)
    window.addEventListener('resize', () => {
        if (notificationsPopup.style.display === 'block') {
            positionNotificationsPopup();
        }
    });
};

// Обработчики для мобильной версии
const initMobileHandlers = () => {
    const notificationsButtonPhone = document.querySelector('.header__notifications_phone');
    const notificationsPopupPhone = document.querySelector('.notifications-popup_phone');
    const closePopupButtonPhone = document.querySelector('.notifications-popup__close_phone');

    // Обработчик клика по кнопке уведомлений (мобильная версия)
    notificationsButtonPhone.addEventListener('click', () => {
        if (notificationsPopupPhone.style.display === 'none' || notificationsPopupPhone.style.display === '') {
            showPopup(notificationsPopupPhone);
        } else {
            hidePopup(notificationsPopupPhone);
        }
    });

    // Обработчик клика по кнопке закрытия (мобильная версия)
    closePopupButtonPhone.addEventListener('click', () => {
        hidePopup(notificationsPopupPhone);
    });
};

// Функция для определения и инициализации нужной версии (мобильная или ПК)
const initHandlers = () => {
    const isMobile = window.matchMedia('(max-width: 712px)').matches;

    if (isMobile) {
        initMobileHandlers();
    } else {
        initDesktopHandlers();
    }
};

// Инициализация нужных обработчиков при загрузке страницы
initHandlers();

// Обновляем обработчики при изменении размеров окна
window.addEventListener('resize', initHandlers);

// Функция для форматирования времени (для обеих версий)
const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

// Функция для добавления нового уведомления (для обеих версий)
const addNotification = (message) => {
    const content = document.querySelector('.notifications-popup__content');
    const contentPhone = document.querySelector('.notifications-popup__content_phone');
    const notificationElement = document.createElement('div');
    notificationElement.className = 'notification';
  
    // Получаем текущее время и форматируем его
    const time = formatTime(new Date());
  
    // Формируем структуру уведомления с сообщением и временем
    notificationElement.innerHTML = `
        <div class="notification-message">${message}</div>
        <div class="notification-time">${time}</div>
    `;
  
    // Добавляем уведомление и в ПК, и в мобильную версию
    content.appendChild(notificationElement.cloneNode(true));
    contentPhone.appendChild(notificationElement);
};

// Пример добавления нового уведомления
addNotification('Новое сообщение от менеджера');
addNotification('Новое сообщение от менеджера');


// // Определяем ширину экрана, при которой будет изменяться структура
const mediaQuery = window.matchMedia("(max-width: 1000px)");

function handleScreenResize(event) {
  const headerInner = document.querySelector('.header__inner');
  const headerNav = document.querySelector('.header__nav');

  if (event.matches) {

    if (headerNav && headerInner) {
      // Удаляем навигацию из header__inner и вставляем её после
      headerInner.parentNode.insertBefore(headerNav, headerInner.nextSibling);
    }
  } else {
    // Если ширина экрана больше 1000px
    const headerInner = document.querySelector('.header__inner');
    const headerNav = document.querySelector('.header__nav');

    if (headerNav && headerInner) {
      // Вставляем навигацию обратно в header__inner перед кнопками
      headerInner.insertBefore(headerNav, headerInner.querySelector('.header__buttons'));
    }
  }
}

// Добавляем слушателя на изменение ширины экрана
mediaQuery.addListener(handleScreenResize);


// Вызываем функции сразу при загрузке страницы для корректного отображения
handleScreenResize(mediaQuery);


// Получаем элементы
const burgerMenuButton = document.querySelector('.burger-menu_button');
const burgerMenuImage = burgerMenuButton.querySelector('.burger-menu_img');
const sideMenu = document.querySelector('.header__vertical_menu');
const overlay = document.querySelector('.overlay');

// Функция для открытия/закрытия меню
const toggleMenu = () => {
    const isActive = sideMenu.classList.contains('active');

    if (isActive) {
        // Закрываем меню
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    } else {
        // Открываем меню
        sideMenu.classList.add('active');
        overlay.classList.add('active');
    }

    // Смена иконки бургера
    burgerMenuButton.classList.toggle('active');
};

// Обработчики событий
burgerMenuButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

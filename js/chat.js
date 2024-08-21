// const chatMessages = document.querySelector('.chat__content')
// const chatInputForm = document.querySelector('.chat-input-form')
// const chatInput = document.querySelector('.chat-input')

// const createChatMessageElement = (message) => `
//     <div class="chat__item chat__item--responder">
//         <img src="./img/chat_avatar.svg" alt="photo" class="chat__person-avatar">
                          
//         <div class="chat__messages">
//             <div class="chat__message">
//                 <div class="chat__message-content chat__message-content--responder">${message.text}</div>
//                 <div class="chat__message-time chat__message-time--responder">${message.timestamp}</div>
//             </div>
//         </div>
//     </div>
// `

// const sendMessage = () => {
//     e.preventDefault()

//     const timestamp = new Date().toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric' })
//     const message = {
//         text: chatInput.value,
//         timestamp,
//     }

//     chatMessages.innerHTML += createChatMessageElement(message)
// }

// chatInputForm.addEventListener('submit', sendMessage)


// // Получаем элементы формы и чат-контейнер
// const chatForm = document.getElementById('chatForm');
// const chatInput = document.querySelector('.chat-input');
// const chatMessages = document.querySelector('.chat__content');

// // Функция для создания HTML-структуры сообщения
// const createChatMessageElement = (message) => `
//     <div class="chat__item chat__item--responder">
//         <img src="./img/chat_avatar.svg" alt="photo" class="chat__person-avatar">
                          
//         <div class="chat__messages">
//             <div class="chat__message">
//                 <div class="chat__message-content chat__message-content--responder">${message.text}</div>
//                 <div class="chat__message-time chat__message-time--responder">${message.timestamp}</div>
//             </div>
//         </div>
//     </div>
// `;

// // Обработчик отправки формы
// const sendMessage = (e) => {
//     e.preventDefault(); // Предотвращаем перезагрузку страницы

//     const messageText = chatInput.value.trim(); // Получаем текст сообщения и удаляем пробелы
//     if (!messageText) return; // Если текст пустой, не отправляем сообщение

//     const timestamp = new Date().toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric' }); // Время сообщения
//     const message = {
//         text: messageText,
//         timestamp,
//     };

//     chatMessages.innerHTML += createChatMessageElement(message); // Добавляем сообщение в чат
//     chatInput.value = ''; // Очищаем поле ввода

//     // Прокрутка вниз после добавления нового сообщения
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// };


// // Назначаем обработчик на форму
// chatForm.addEventListener('submit', sendMessage);


// Получаем элементы формы и чат-контейнер
const chatForm = document.getElementById('chatForm');
const chatInput = document.querySelector('.chat-input');
const chatMessages = document.querySelector('.chat__content');
const fileInput = document.getElementById('fileInput');

// Функция для создания HTML-структуры сообщения с файлом
const createChatMessageWithFileElement = (message, fileName) => `
    <div class="chat__item chat__item--responder">
        <img src="./img/chat_avatar.svg" alt="photo" class="chat__person-avatar">
                          
        <div class="chat__messages">
            <div class="chat__message">
                <div class="chat__message-content chat__message-content--responder">
                    ${message.text}
                    <div class="chat__message-file chat__message-file--responder">
                        <div class="chat__message-file-content">
                            <div class="chat__message-file-icon_name">
                                <img src="./img/adobe_icon.svg" alt="">
                                <div class="chat__message-file-name">${fileName}</div>
                            </div>
                            <img class="chat__download_icon" src="./img/download_icon.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="chat__message-time chat__message-time--responder">${message.timestamp}</div>
            </div>
        </div>
    </div>
`;

// Функция для создания HTML-структуры обычного сообщения
const createChatMessageElement = (message) => `
    <div class="chat__item chat__item--responder">
        <img src="./img/chat_avatar.svg" alt="photo" class="chat__person-avatar">
                          
        <div class="chat__messages">
            <div class="chat__message">
                <div class="chat__message-content chat__message-content--responder">${message.text}</div>
                <div class="chat__message-time chat__message-time--responder">${message.timestamp}</div>
            </div>
        </div>
    </div>
`;

// Обработчик отправки формы
const sendMessage = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    const messageText = chatInput.value.trim(); // Получаем текст сообщения и удаляем пробелы
    const file = fileInput.files[0]; // Получаем прикреплённый файл
    if (!messageText && !file) return; // Если текст и файл пустые, не отправляем сообщение

    const timestamp = new Date().toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric' });

    let messageHTML;
    if (file) {
        // Если файл прикреплен, добавляем его в сообщение
        messageHTML = createChatMessageWithFileElement(
            { text: messageText || "Документ прикреплён к сообщению.", timestamp },
            file.name
        );
    } else {
        // Обычное текстовое сообщение
        messageHTML = createChatMessageElement({ text: messageText, timestamp });
    }

    chatMessages.innerHTML += messageHTML; // Добавляем сообщение в чат
    chatInput.value = ''; // Очищаем поле ввода
    fileInput.value = ''; // Очищаем поле файла
    chatMessages.scrollTop = chatMessages.scrollHeight; // Скроллим вниз к новому сообщению
};

// Назначаем обработчик на форму
chatForm.addEventListener('submit', sendMessage);


// Получаем элемент для отображения даты
const topElement = document.getElementById('topElement');

// Функция для получения текущей даты в формате "Месяц, число"
const getFormattedDate = () => {
    const options = { month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('ru-RU', options);
};

// Устанавливаем текущую дату в элемент
topElement.textContent = `${getFormattedDate()}`;

// Логика для появления и исчезновения элемента при скролле
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Скроллим вниз – скрываем элемент
        topElement.style.opacity = '0';
    } else {
        // Скроллим вверх – показываем элемент
        topElement.style.opacity = '1';
    }

    lastScrollTop = scrollTop;
});




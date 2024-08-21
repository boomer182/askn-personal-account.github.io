// Функция для редактирования поля (электронная почта или телефон)
function editField(fieldId) {
    const field = document.getElementById(fieldId);
    const currentValue = field.textContent;
    
    // Заменяем текст на input для редактирования
    field.innerHTML = `<input type="text" value="${currentValue}" id="${fieldId}_input"> <button class='save_change' onclick="saveField('${fieldId}')">Сохранить</button>`;
}

// Функция для сохранения изменений поля
function saveField(fieldId) {
    const input = document.getElementById(`${fieldId}_input`);
    const newValue = input.value;
    
    // Заменяем input обратно на текст с новым значением
    const field = document.getElementById(fieldId);
    field.innerHTML = newValue;
}

// Функция для добавления новой социальной сети
function addSocialNetwork() {
    const socialNetworksContainer = document.getElementById('socialNetworks');

    // Добавляем input для ввода ссылки на социальную сеть и кнопку для сохранения
    const newNetworkInput = document.createElement('div');
    newNetworkInput.className = 'add_network_field'; // Присваиваем класс
    newNetworkInput.innerHTML = `
        <input type="text" placeholder="Введите ссылку" id="newSocialNetworkInput">
        <button class='save_change' onclick="saveNewSocialNetwork()">Сохранить</button>
    `;
    socialNetworksContainer.appendChild(newNetworkInput);
}

// Функция для сохранения новой социальной сети
function saveNewSocialNetwork() {
    const input = document.getElementById('newSocialNetworkInput');
    const newLink = input.value;

    if (newLink) {
        const socialNetworksContainer = document.getElementById('socialNetworks');

        // Добавляем новую ссылку с иконкой
        const newNetworkElement = document.createElement('a');
        newNetworkElement.href = newLink;
        newNetworkElement.innerHTML = `<img src="./img/whatsup_icon.svg" alt="" class="contacts__socnetworks_icon">`; // Можно заменить иконку на подходящую

        // Вставляем новую социальную сеть
        socialNetworksContainer.appendChild(newNetworkElement);

        // Удаляем input после сохранения
        input.parentElement.remove();
    }
}

// Функция для редактирования существующих ссылок социальных сетей
function editSocialNetworks() {
    const socialNetworksContainer = document.getElementById('socialNetworks');
    const links = socialNetworksContainer.querySelectorAll('a');

    // Для каждой ссылки заменяем её на input для редактирования
    links.forEach((link, index) => {
        const currentUrl = link.href;
        const editInput = document.createElement('div');
        editInput.className = 'edit_network_field'; // Присваиваем класс
        editInput.innerHTML = `
            <input type="text" value="${currentUrl}" id="editSocialNetwork_${index}">
            <button class='save_change' onclick="saveEditedSocialNetwork(${index})">Сохранить</button>
        `;
        link.replaceWith(editInput);
    });
}

// Функция для определения иконки в зависимости от ссылки
function getSocialNetworkIcon(url) {
    if (url.includes('vk.com')) {
        return './img/vk_icon.svg';
    } else if (url.includes('t.me') || url.includes('telegram.org')) {
        return './img/telegram_icon.svg';
    } else {
        // Иконка по умолчанию или для других соцсетей
        return './img/default_icon.svg';
    }
}

// Функция для сохранения отредактированных ссылок
function saveEditedSocialNetwork(index) {
    const input = document.getElementById(`editSocialNetwork_${index}`);
    const newLink = input.value;

    if (newLink) {
        const socialNetworksContainer = document.getElementById('socialNetworks');
        const newNetworkElement = document.createElement('a');
        newNetworkElement.href = newLink;

        // Определяем нужную иконку по URL
        const icon = getSocialNetworkIcon(newLink);
        newNetworkElement.innerHTML = `<img src="${icon}" alt="" class="contacts__socnetworks_icon">`;

        // Заменяем input обратно на ссылку
        input.parentElement.replaceWith(newNetworkElement);
    }
}
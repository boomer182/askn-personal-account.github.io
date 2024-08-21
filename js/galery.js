let currentOption = 'Сначала новые'; // Начальный выбранный пункт  

function toggleDropdown() {  
    const dropdown = document.getElementById("myDropdown");  
    dropdown.classList.toggle("show");  
    renderDropdownItems();  
}  

function renderDropdownItems() {  
    const dropdown = document.getElementById("myDropdown");  
    dropdown.innerHTML = ""; // Очищаем текущее содержимое  

    const options = ["Сначала новые", "Сначала старые"];  
    options.forEach(option => {  
        if (option !== currentOption) { // Добавляем только невыбранный пункт  
            const a = document.createElement('a');  
            a.href = "#";  
            a.textContent = option;  
            a.onclick = () => selectOption(option);  
            dropdown.appendChild(a);  
        }  
    });  
}  

function selectOption(option) {  
    const button = document.querySelector('.dropbtn');  
    button.innerHTML = option + ' '; // Обновляем текст кнопки  
    currentOption = option; // Обновляем текущий выбранный пункт  
    toggleDropdown(); // Закрываем меню после выбора  
    renderDropdownItems(); // Обновляем список после выбора  
}  

// Закрыть выпадающее меню, если пользователь нажимает вне его  
window.onclick = function(event) {  
    if (!event.target.matches('.dropbtn')) {  
        const dropdowns = document.getElementsByClassName("dropdown-content");  
        for (let i = 0; i < dropdowns.length; i++) {  
            const openDropdown = dropdowns[i];  
            if (openDropdown.classList.contains('show')) {  
                openDropdown.classList.remove('show');  
            }  
        }  
    }  
}  

function showPopup(comment, date) {  
    document.getElementById('popup-date').innerText = date;  
    const imgIndex = comment.split(' ')[3];  // Получаем номер картинки  
    document.getElementById('popup-image').src = `./img/galery_img${imgIndex}.jpg`;  
    document.getElementById('popup').style.display = 'flex';  
}  

function closePopup() {  
    document.getElementById('popup').style.display = 'none';  
}   

function getQueryParams() {  
    const params = {};  
    const queryString = window.location.search.substring(1);  
    const regex = /([^&=]+)=([^&]*)/g;  
    let m;  

    while (m = regex.exec(queryString)) {  
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);  
    }  

    return params;  
}  

// После загрузки страницы  
window.onload = function() {    
    const params = getQueryParams();  
  
    if (params.img && params.date) {  
        const imgIndex = params.img;  
        const date = params.date;  
        showPopup(`Контент для картинки ${imgIndex}`, date);  
    }  
};   

function togglePopup() {  
    const popup = document.getElementById("myPopupCom");  
    if (popup.style.display === "block") {  
      popup.style.display = "none";  // Закрыть окошко  
    } else {  
      popup.style.display = "block";  // Открыть окошко  
    }  
}  
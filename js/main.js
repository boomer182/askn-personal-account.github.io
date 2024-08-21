document.addEventListener('DOMContentLoaded', function() {
    // Переменные для хранения активной кнопки и активного попапа
    let activeButton = null;
    let activePopup = null;

    // Получаем все кнопки с классом work_progress__complited_steps_card_button
    const buttons = document.querySelectorAll('.work_progress__complited_steps_card_button');

    // Проходимся по каждой кнопке и добавляем обработчик клика
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Получаем соответствующий попап для текущей кнопки
            const popup = button.parentElement.querySelector('.popup-com');
            const buttonImage = button.querySelector('img'); // Находим изображение внутри кнопки

            // Если уже есть открытый попап и он отличается от текущего, закрываем его
            if (activePopup && activePopup !== popup) {
                activePopup.style.display = 'none';
                if (activeButton) {
                    activeButton.classList.remove('active'); // Убираем класс активности с предыдущей кнопки
                    const activeButtonImage = activeButton.querySelector('img');
                    activeButtonImage.src = './img/card_button.svg'; // Возвращаем стандартное изображение
                }
            }

            // Переключаем видимость текущего попапа
            if (popup.style.display === 'block') {
                popup.style.display = 'none';
                button.classList.remove('active'); // Убираем класс активности с кнопки
                buttonImage.src = './img/card_button.svg'; // Меняем изображение на стандартное
                activePopup = null;
                activeButton = null;
            } else {
                popup.style.display = 'block';
                button.classList.add('active'); // Добавляем класс активности к кнопке
                buttonImage.src = './img/card_button_active.svg'; // Меняем изображение на активное
                activePopup = popup;
                activeButton = button;
            }
        });
    });

    // Закрытие попапа при клике вне его области
    window.addEventListener('click', function(event) {
        if (activePopup && !activePopup.contains(event.target) && !activeButton.contains(event.target)) {
            activePopup.style.display = 'none';
            activeButton.classList.remove('active');
            const activeButtonImage = activeButton.querySelector('img');
            activeButtonImage.src = './img/card_button.svg'; // Возвращаем стандартное изображение
            activePopup = null;
            activeButton = null;
        }
    });
});

const originalMainUpdate = document.querySelector('.main__update').cloneNode(true);
const originalMainPhoto = document.querySelector('.main__photo').cloneNode(true);

function updateHTMLStructure(event) {
    const mainUpdate = document.querySelector('.main__update');
    const mainPhoto = document.querySelector('.main__photo');
  
    if (event.matches) {
  
        if (mainUpdate && mainPhoto) {
            // Обновляем структуру контейнера .main__update
            mainUpdate.innerHTML = `
                <div class="main__update_info_container">
                  <h1 class="main__whats_new"><span class="colortext">Что</span> нового</h1>
  
                  <div class="main__photo_date">
                      <img src="./img/calendar.svg" alt="calendar" class="calendar">
                      <div class="main__photo_date_text">Четверг, 15:17</div>
                  </div>
                </div>
  
                <div class="main__vidjet_container">
                  <div class="main__vidjet_content">
                    <div class="main__vidjet_content_update">
                      <div class="main__vidjet_content_update1_time">18.06.2024 10:01</div>
                      <div class="main__vidjet_content_update1_frame">
                        <img src="./img/doc_update.svg" alt="doc" class="doc_update">
  
                        <div class="main__vidjet_content_update_text">
                          <div class="main__vidjet_content_update_text_update">Обновление в разделе <a href="documents.html"><span class="colortextgreen">Документы</span></a></div>
                          <div class="main__vidjet_content_update_text_descr">Добавлен договор строительного порядка</div>
                        </div>
                                                    
                      </div>
                    </div>
                    
                    <div class="main__vidjet_content_update">
                      <div class="main__vidjet_content_update1_time">15.06.2024 16:43</div>
                      <div class="main__vidjet_content_update1_frame">
                        <img src="./img/galery_update.svg" alt="doc" class="doc_update">
  
                        <div class="main__vidjet_content_update_text">
                          <div class="main__vidjet_content_update_text_update">Обновление в разделе <a href="galery.html"><span class="colortextgreen">Галерея</span></a></div>
                          <div class="main__vidjet_content_update_text_descr">Завершение закладки фундамента</div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="main__vidjet_content_update">
                      <div class="main__vidjet_content_update1_time">14.06.2024 12:05</div>
                      <div class="main__vidjet_content_update1_frame">
                        <img src="./img/doc_update.svg" alt="doc" class="doc_update">
  
                        <div class="main__vidjet_content_update_text">
                          <div class="main__vidjet_content_update_text_update">Обновление в разделе <a href="documents.html"><span class="colortextgreen">Документы</span></a></div>
                          <div class="main__vidjet_content_update_text_descr">Добавлен заверенный кадастровый план</div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="main__vidjet_content_update">
                      <div class="main__vidjet_content_update1_time">13.06.2024 17:11</div>
                      <div class="main__vidjet_content_update1_frame">
                        <img src="./img/doc_update.svg" alt="doc" class="doc_update">
  
                        <div class="main__vidjet_content_update_text">
                          <div class="main__vidjet_content_update_text_update">Обновление в разделе <a href="documents.html"><span class="colortextgreen">Документы</span></a></div>
                          <div class="main__vidjet_content_update_text_descr">Добавлен заверенный кадастровый план</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            `;
  
            // Обновляем структуру контейнера .main__photo
            mainPhoto.innerHTML = `
                <div class="main__photo_info">
                    <h2 class="main__photo_title">Обстановка на объекте</h2>
                    <div class="main__photo_weather">
                        <img src="./img/weather_icon.svg" alt="weather" class="weather">
                        <div class="main__photo_weather_text">New-York City, 26 C°</div>
                    </div>
                </div>
  
                <div class="main__photo_image">
                    <img src="./img/photo_update.jpg" alt="last_photo" class="last_photo">
                </div>
  
                <div class="main__photo_lastupdate">
                    <img src="./img/mark.svg" alt="mark" class="mark">
                    <div class="main__photo_lastupdate_text">Последнее обновление: 18.06.2024 в 10:03</div>
                </div>
            `;
        }
    } 
    else {
      if (mainUpdate && mainPhoto) {
        // Возвращаем исходный HTML для .main__update и .main__photo
        mainUpdate.replaceWith(originalMainUpdate.cloneNode(true));
        mainPhoto.replaceWith(originalMainPhoto.cloneNode(true));
      }
    }
}

mediaQuery.addListener(updateHTMLStructure);

updateHTMLStructure(mediaQuery);
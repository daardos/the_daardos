<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=35&duration=4000&pause=1000&color=00D1B2&center=true&vCenter=true&width=600&lines=Daardos+DevFolio;Динамическое+портфолио" alt="Typing SVG" />
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
  <img src="https://img.shields.io/badge/Jinja2-B41717?style=for-the-badge&logo=jinja&logoColor=white" alt="Jinja2" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</p>

<p align="center">
  <a href="https://daardos.github.io/DevFolio/"><img src="https://img.shields.io/badge/🚀_Live_сайт-00d1b2?style=for-the-badge&logo=vercel" alt="Live Site" /></a>
  <a href="https://github.com/daardos/DevFolio/blob/main/README.md"><img src="https://img.shields.io/badge/📖_Документация-333?style=for-the-badge" alt="Docs" /></a>
</p>

<hr style="border: 1px solid #00d1b2; margin: 30px 0;">

<!-- КАРТОЧКИ С ОСОБЕННОСТЯМИ -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0;">
  <div style="background: linear-gradient(135deg, #141820 0%, #1e2530 100%); border: 1px solid #2a2f3a; border-radius: 16px; padding: 25px; text-align: center; transition: transform 0.3s, box-shadow 0.3s; cursor: default;">
    <div style="font-size: 3rem; margin-bottom: 10px;">⚡</div>
    <h3 style="color: #00d1b2; margin: 10px 0;">Динамический контент</h3>
    <p style="color: #8892a4;">Проекты, отзывы, настройки меняются через удобную админ‑панель без правки кода.</p>
  </div>
  <div style="background: linear-gradient(135deg, #141820 0%, #1e2530 100%); border: 1px solid #2a2f3a; border-radius: 16px; padding: 25px; text-align: center; transition: transform 0.3s, box-shadow 0.3s; cursor: default;">
    <div style="font-size: 3rem; margin-bottom: 10px;">🎨</div>
    <h3 style="color: #00d1b2; margin: 10px 0;">Стильный дизайн</h3>
    <p style="color: #8892a4;">Тёмная тема, неоновые акценты, плавные анимации и адаптивная вёрстка.</p>
  </div>
  <div style="background: linear-gradient(135deg, #141820 0%, #1e2530 100%); border: 1px solid #2a2f3a; border-radius: 16px; padding: 25px; text-align: center; transition: transform 0.3s, box-shadow 0.3s; cursor: default;">
    <div style="font-size: 3rem; margin-bottom: 10px;">🔒</div>
    <h3 style="color: #00d1b2; margin: 10px 0;">Безопасность</h3>
    <p style="color: #8892a4;">Защита от XSS/SQL‑инъекций, брутфорса, модерация отзывов, логирование попыток входа.</p>
  </div>
  <div style="background: linear-gradient(135deg, #141820 0%, #1e2530 100%); border: 1px solid #2a2f3a; border-radius: 16px; padding: 25px; text-align: center; transition: transform 0.3s, box-shadow 0.3s; cursor: default;">
    <div style="font-size: 3rem; margin-bottom: 10px;">🚀</div>
    <h3 style="color: #00d1b2; margin: 10px 0;">Мгновенная загрузка</h3>
    <p style="color: #8892a4;">Публичный сайт работает на статических HTML (GitHub Pages), без холодного старта.</p>
  </div>
</div>

<hr style="border: 1px solid #00d1b2; margin: 30px 0;">

<!-- КАК ЭТО РАБОТАЕТ -->
<h2 align="center" style="color: #00d1b2;">⚙️ Как это работает</h2>
<div style="background: #141820; border: 1px solid #2a2f3a; border-radius: 16px; padding: 30px; margin: 20px 0;">
  <pre style="color: #e0e6f0; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.8; overflow-x: auto; white-space: pre-wrap;">
<span style="color: #00d1b2;">1. Локальный запуск:</span>
   Открой терминал и выполни:
   <code style="color: #7b5cff;">python -m uvicorn app.main:app --port 7860</code>
   Админка станет доступна по адресу <code style="color: #7b5cff;">http://localhost:7860/admin</code>

<span style="color: #00d1b2;">2. Редактирование:</span>
   Вноси изменения через админ‑панель (проекты, отзывы, настройки, модерация).

<span style="color: #00d1b2;">3. Генерация статики:</span>
   Выполни команду в новом терминале:
   <code style="color: #7b5cff;">python -m app.generate_static http://localhost:7860 D:\GitHub\DevFolio</code>
   Скрипт соберёт все страницы и статические файлы, а затем отправит их в репозиторий GitHub Pages.

<span style="color: #00d1b2;">4. Публикация:</span>
   Через пару минут сайт <code style="color: #7b5cff;">https://daardos.github.io/DevFolio/</code> обновится автоматически.
  </pre>
</div>

<!-- СТЕК -->
<h2 align="center" style="color: #00d1b2;">🧰 Технологический стек</h2>
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
  <div style="background: #141820; border: 1px solid #2a2f3a; border-radius: 12px; padding: 15px; text-align: center;">
    <img src="https://img.icons8.com/color/48/000000/python--v1.png" style="height: 40px;" />
    <p style="color: #e0e6f0; font-weight: 600;">Python 3.11</p>
  </div>
  <div style="background: #141820; border: 1px solid #2a2f3a; border-radius: 12px; padding: 15px; text-align: center;">
    <img src="https://img.icons8.com/color/48/000000/fastapi.png" style="height: 40px;" />
    <p style="color: #e0e6f0; font-weight: 600;">FastAPI</p>
  </div>
  <div style="background: #141820; border: 1px solid #2a2f3a; border-radius: 12px; padding: 15px; text-align: center;">
    <img src="https://img.icons8.com/ios/50/ffffff/sql.png" style="height: 40px;" />
    <p style="color: #e0e6f0; font-weight: 600;">SQLite + SQLAlchemy</p>
  </div>
  <div style="background: #141820; border: 1px solid #2a2f3a; border-radius: 12px; padding: 15px; text-align: center;">
    <img src="https://img.icons8.com/color/48/000000/git.png" style="height: 40px;" />
    <p style="color: #e0e6f0; font-weight: 600;">GitHub Pages</p>
  </div>
  <div style="background: #141820; border: 1px solid #2a2f3a; border-radius: 12px; padding: 15px; text-align: center;">
    <img src="https://img.icons8.com/color/48/000000/docker.png" style="height: 40px;" />
    <p style="color: #e0e6f0; font-weight: 600;">Docker</p>
  </div>
  <div style="background: #141820; border: 1px solid #2a2f3a; border-radius: 12px; padding: 15px; text-align: center;">
    <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" style="height: 40px;" />
    <p style="color: #e0e6f0; font-weight: 600;">HTML5/CSS3/JS</p>
  </div>
</div>

<!-- УСТАНОВКА И ЗАПУСК -->
<h2 align="center" style="color: #00d1b2;">🛠️ Быстрый старт</h2>
<div style="background: #141820; border: 1px solid #2a2f3a; border-radius: 16px; padding: 30px; margin: 20px 0;">
  <pre style="color: #e0e6f0; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.8; overflow-x: auto; white-space: pre-wrap;">
# 1. Клонируйте репозиторий
git clone https://github.com/daardos/DevFolio.git
cd DevFolio

# 2. Установите зависимости
pip install -r requirements.txt

# 3. Запустите локальный сервер
python -m uvicorn app.main:app --port 7860

# 4. Откройте админку
http://localhost:7860/admin
</pre>
</div>

<!-- КОНТАКТЫ -->
<h2 align="center" style="color: #00d1b2;">📫 Контакты</h2>
<p align="center">
  <a href="https://daardos.github.io/DevFolio/" style="margin: 0 15px; color: #00d1b2; text-decoration: none; font-weight: bold;">🌐 Сайт</a>
  <a href="https://github.com/daardos" style="margin: 0 15px; color: #00d1b2; text-decoration: none; font-weight: bold;">🐙 GitHub</a>
  <a href="https://kwork.ru/user/daardos" style="margin: 0 15px; color: #00d1b2; text-decoration: none; font-weight: bold;">💼 Kwork</a>
</p>

<hr style="border: 1px solid #00d1b2; margin: 30px 0;">

<p align="center" style="color: #8892a4; font-size: 14px;">
  © 2026 Daardos. Built with Speed & Style. ❤️
</p>

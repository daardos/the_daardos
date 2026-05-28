# 🚀 Daardos DevFolio — динамическое портфолио

> **Старая версия сайта перенесена на новый движок!**  
> Теперь это полноценное веб-приложение с админкой, мгновенными обновлениями и защитой.

[![Live Demo](https://img.shields.io/badge/Live-сайт-00d1b2?style=for-the-badge&logo=vercel)](https://daardos-devfolio.hf.space)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-зеркало-333?style=for-the-badge&logo=github)](https://daardos.github.io/DevFolio/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker)](https://www.docker.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## ✨ Что нового?

- ⚡ **Динамический контент** — проекты, отзывы, настройки меняются через админ-панель.
- 🎨 **Стильный дизайн** — тёмная тема, неоновые акценты, плавные анимации.
- 🔒 **Защита от взлома** — модерация отзывов, защита от XSS/SQL-инъекций, ограничение попыток входа.
- 🌍 **Доступен 24/7** — бесплатный хостинг на Hugging Face с авто-пробуждением.

## 🖥️ Технологии

| Категория | Инструменты |
|-----------|-------------|
| **Backend** | Python 3.11, FastAPI, SQLAlchemy, SQLite |
| **Frontend** | Jinja2, HTML5, CSS3, JavaScript |
| **Безопасность** | Bcrypt, кастомная очистка ввода (XSS/SQL injection) |
| **Деплой** | Docker, Hugging Face Spaces |
| **Мониторинг** | Cron-job.org (для предотвращения холодного старта) |

## 🚀 Быстрый старт (локально)

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/daardos/DevFolio.git
cd DevFolio

# 2. Установите зависимости
pip install -r requirements.txt

# 3. Запустите сервер
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 7860

# 4. Откройте в браузере http://localhost:7860

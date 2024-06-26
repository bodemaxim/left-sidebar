<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import NotificationTypes from '@/Enum/NotificationTypes'

//#region Данные
/**
 * Флаг открытия меню.
 */
const isShowSidebar: Ref<boolean> = ref<boolean>(true)

/**
 * Флаг переключателя "Всегда открыто".
 */
const isAlwaysVisible: Ref<boolean> = ref<boolean>(false)

/**
 * Число новых событий в разделе "Уведомления"
 */
const notificationsNumber: Ref<number> = ref<number>(1)

/**
 * Число новых событий в разделе "Согласования"
 */
const agreementsNumber: Ref<number> = ref<number>(2)
//#endregion Данные

//#region Методы
/**
 * Пример логики кнопки.
 */
const sampleButtonLogic = () => {
  alert('Была нажата кнопка')
}

/**
 * Открывает / скрывает меню.
 */
const toggleSidebar = () => {
  isShowSidebar.value = isShowSidebar.value ? false : true
}

/**
 * Устанавливает значение переключателя "Всегда открыто".
 */
const setAlwaysVisible = () => {
  isAlwaysVisible.value = isAlwaysVisible.value ? false : true
}

/**
 * Устанавливает количество событий для разделов "Уведомления" и "Согласования".
 */
const setNotificationsNumber = (number: number, section: NotificationTypes) => {
  //получает данные
  if (section === NotificationTypes.Notifications) notificationsNumber.value = number
  else agreementsNumber.value = number
}

const isMobileView = ref(false)

//#endregion Методы
</script>

<template>
  <main>
    <div
      v-if="isShowSidebar"
      class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      id="sidebar"
    >
      <div class="user-area-container d-flex justify-content-between align-items-center">
        <span class="fs-4">Меню</span>

        <div class="user-area d-flex flex-row align-items-center">
          <img
            src="@/assets/images/sample-avatar.jpeg"
            alt="Аватар"
            class="user-avatar"
            title="Ваш профиль"
          />
          <div class="d-flex flex-column">
            <button
              class="notificationsButton btn btn-sm btn-light mx-1"
              @click="sampleButtonLogic"
              title="Посмотреть уведомления"
            >
              <img
                src="@/assets/images/notifications.svg"
                alt="Уведомления"
                class="notificationsButtonImg"
              />
              <p v-if="notificationsNumber > 0" class="notificationsNumber">
                {{ notificationsNumber }}
              </p>
            </button>
            <button
              class="agreementsButton btn btn-sm btn-light mx-1"
              @click="sampleButtonLogic"
              title="Посмотреть согласования"
            >
              <img
                src="@/assets/images/agreements.svg"
                alt="Согласования"
                class="agreementsButtonImg"
              />
              <p v-if="agreementsNumber > 0" class="agreementsNumber">{{ agreementsNumber }}</p>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
          >
            CRM
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Сделки</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Компании</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Контакты</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Объекты</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Договоры</router-link>
            </li>
            <li class="dropdown-item d-flex justify-content-between">
              <router-link :to="{ name: 'Home' }" class="router-link-ddb"
                >Коммерческие предложения</router-link
              >
              <button @click="sampleButtonLogic" class="btn btn-primary btn-sm ms-5">
                Создать
              </button>
            </li>
            <li class="dropdown-item d-flex justify-content-between">
              <router-link :to="{ name: 'Home' }" class="router-link-ddb">Счета</router-link>
              <button @click="sampleButtonLogic" class="btn btn-primary btn-sm ms-5">
                Создать
              </button>
            </li>
            <li class="dropdown-item d-flex justify-content-between">
              <router-link :to="{ name: 'Home' }" class="router-link-ddb"
                >Акты выполненных работ</router-link
              >
              <button @click="sampleButtonLogic" class="btn btn-primary btn-sm ms-5">
                Создать
              </button>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
          >
            Склад
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Закупки</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Продажи</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Товары</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{ name: 'Home' }" class="nav-link text-white">
            Инструменты
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
          >
            Helpdesk
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Заявки</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Календарь</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Календарь</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Пользователи</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Отчеты</router-link>
            </li>
            <li class="dropdown-item">
              <router-link :to="{ name: 'Home' }">Парк техники</router-link>
            </li>
          </ul>
        </li>

        <li>
          <router-link :to="{ name: 'Home' }" class="nav-link text-white"> ЭДО </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Home' }" class="nav-link text-white">
            Учет материальных ценностей
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Home' }" class="nav-link text-white">
            Путевые листы
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Home' }" class="nav-link text-white"> Отчетность </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Home' }" class="nav-link text-white">
            Управление персоналом
          </router-link>
        </li>
      </ul>

      <div class="form-check form-switch hideOnMobile">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          @change="setAlwaysVisible"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">Всегда открыто</label>
      </div>

      <hr />

      <div class="d-flex justify-content-around">
        <a href="#" class="text-white text-decoration-none" title="Скачать приложение в AppStore">
          <svg width="100" height="100">
            <circle cx="24" cy="24" r="24" fill="gray" />
          </svg>
        </a>
        <a href="#" class="text-white text-decoration-none" title="Скачать приложение в GooglePlay">
          <svg width="100" height="100">
            <circle cx="24" cy="24" r="24" fill="teal" />
          </svg>
        </a>
        <a href="#" class="text-white text-decoration-none" title="Открыть телеграм бот">
          <svg width="100" height="100">
            <circle cx="24" cy="24" r="24" fill="darkorchid" />
          </svg>
        </a>
      </div>
      <button
        type="button"
        id="sidebarCollapse"
        class="btn toggleSidebarButton btn-primary btnOnSidebarVisible hideOnMobile"
        @click="toggleSidebar"
        v-if="!isAlwaysVisible && isShowSidebar"
      >
        <span>Скрыть</span>
      </button>
    </div>
    <button
      type="button"
      id="sidebarCollapse"
      class="btn toggleSidebarButton btn-primary btnOnSidebarHidden hideOnMobile"
      @click="toggleSidebar"
      v-if="!isAlwaysVisible && !isShowSidebar"
    >
      <span>Меню</span>
    </button>
    <button
      @click="toggleSidebar()"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
    >
      <span
        class="navbar-toggler-icon"
        :class="[
          'navbar-toggler-icon',
          isShowSidebar ? 'burgerBtnOnSidebarVisible' : 'burgerBtnOnSidebarHidden'
        ]"
      ></span>
    </button>
  </main>
</template>

<style scoped>
.sidebar {
  width: 280px;
  height: 100vh;
  position: relative;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.user-area {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.notificationsButton,
.agreementsButton {
  background-color: transparent;
  border: none;
  position: relative;
}

.notificationsButtonImg,
.agreementsButtonImg {
  height: 24px;
  width: 24px;
}

.notificationsNumber,
.agreementsNumber {
  position: absolute;
  top: 0px;
  right: 0px;
  color: white;
  content: '';
  background-color: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  opacity: 0.9;
}

.toggleSidebarButton {
  position: absolute;
  top: 10px;
}

.btnOnSidebarVisible {
  right: -68px;
}

.btnOnSidebarHidden {
  left: 2px;
}

.router-link-exact-active,
.router-link-active {
  color: inherit;
  text-decoration: none;
}

.navbar-toggler {
  border: none;
  background-color: transparent;
  position: absolute;
  top: 5px;
  right: 5px;
}

.burgerBtnOnSidebarVisible,
.burgerBtnOnSidebarHidden {
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
}

.burgerBtnOnSidebarVisible {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.burgerBtnOnSidebarHidden {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0,.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.dropdown-item {
  max-width: 100vw;
}

.router-link-ddb {
  max-width: calc(100% - 120px);
}

/* XS */
@media (min-width: 320px) and (max-width: 575px) {
  main {
    font-size: 12px;
  }

  .sidebar {
    width: 100vw;
    min-width: 100vw;
    overflow-x: hidden;
    height: auto;
  }

  .hideOnMobile {
    visibility: hidden;
  }

  .user-area-container {
    width: calc(100% - 65px);
  }
}

/* S */
@media (min-width: 576px) and (max-width: 767px) {
  main {
    font-size: 13px;
  }

  .navbar-toggler {
    visibility: hidden;
  }
}

/* M */
@media (min-width: 768px) and (max-width: 991px) {
  .navbar-toggler {
    visibility: hidden;
  }
}

/* L */
@media (min-width: 992px) and (max-width: 1199px) {
  .navbar-toggler {
    visibility: hidden;
  }
}
/* XL */
@media (min-width: 1200px) and (max-width: 1399px) {
  .navbar-toggler {
    visibility: hidden;
  }
}

/* XXL */
@media (min-width: 1400px) {
  .navbar-toggler {
    visibility: hidden;
  }
}

/* Настройки высоты */
@media (max-height: 650px) {
  .sidebar {
    height: auto;
  }
}
</style>

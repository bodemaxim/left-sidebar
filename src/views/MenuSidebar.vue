<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { ref } from 'vue'
import type { Ref } from 'vue'

const isShowSidebar: Ref<boolean> = ref<boolean>(true)

const isAlwaysVisible: Ref<boolean> = ref<boolean>(false)

const sampleButtonLogic = () => {
  alert('Была нажата кнопка')
}

const toggleSidebar = () => {
  isShowSidebar.value = isShowSidebar.value ? false : true
}

const setAlwaysVisible = () => {
  isAlwaysVisible.value = isAlwaysVisible.value ? false : true
}
</script>

<template>
  <main>
    <div
      v-if="isShowSidebar"
      class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      :style="{ width: '280px', height: '100vh' }"
      id="sidebar"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span class="fs-4">Меню</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            CRM
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
              <router-link :to="{ name: 'Home' }">Коммерческие предложения</router-link>
              <button @click="sampleButtonLogic" class="btn btn-primary btn-sm ms-5">
                Создать
              </button>
            </li>
            <li class="dropdown-item d-flex justify-content-between">
              <router-link :to="{ name: 'Home' }">Счета</router-link>
              <button @click="sampleButtonLogic" class="btn btn-primary btn-sm ms-5">
                Создать
              </button>
            </li>
            <li class="dropdown-item d-flex justify-content-between">
              <router-link :to="{ name: 'Home' }">Акты выполненных работ</router-link>
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
            aria-expanded="false"
          >
            Склад
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
            aria-expanded="false"
          >
            Helpdesk
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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

      <div class="form-check form-switch">
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
        <a href="#" class="text-white text-decoration-none">
          <svg width="100" height="100">
            <circle cx="24" cy="24" r="24" fill="gray" />
          </svg>
        </a>
        <a href="#" class="text-white text-decoration-none">
          <svg width="100" height="100">
            <circle cx="24" cy="24" r="24" fill="gray" />
          </svg>
        </a>
        <a href="#" class="text-white text-decoration-none">
          <svg width="100" height="100">
            <circle cx="24" cy="24" r="24" fill="gray" />
          </svg>
        </a>
      </div>
    </div>
    <button
      type="button"
      id="sidebarCollapse"
      class="toggleSidebarButton btn btn-primary"
      :style="{ left: isShowSidebar ? '187px' : '0px' }"
      @click="toggleSidebar"
      v-if="!isAlwaysVisible"
    >
      <span>Свернуть</span>
    </button>
  </main>
</template>

<style scoped>
main {
  position: relative;
}

.toggleSidebarButton {
  position: absolute;
  top: 10px;
}

.router-link-exact-active,
.router-link-active {
  color: inherit;
  text-decoration: none;
}
</style>

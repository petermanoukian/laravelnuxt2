<template>
  <header class="w-full bg-sidebar py-5 px-6 sm:hidden">
    <nav class="flex flex-col pt-4">
      <a href="index.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
        <i class="fas fa-tachometer-alt mr-3"></i>
        Dashboard fro component mobile
      </a>
      <a href="blank.html" class="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
        <i class="fas fa-sticky-note mr-3"></i>
        Blank Page
      </a>
      <a href="tables.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
        <i class="fas fa-table mr-3"></i>
        Tables
      </a>
      <a href="forms.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
        <i class="fas fa-align-left mr-3"></i>
        Forms
      </a>
      <a href="tabs.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
        <i class="fas fa-tablet-alt mr-3"></i>
        Tabbed Content
      </a>
      <a href="calendar.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
        <i class="fas fa-calendar mr-3"></i>
        Calendar
      </a>
      <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
        <i class="fas fa-cogs mr-3"></i>
        Support
      </a>
      <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
        <i class="fas fa-user mr-3"></i>
        My Account
      </a>
      <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
        <i class="fas fa-sign-out-alt mr-3"></i>
        Sign Out
      </a>
      <button class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
        <i class="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
      </button>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

.font-family-karla { font-family: karla; }
.bg-sidebar { background: #3d68ff; }
.cta-btn { color: #3d68ff; }
.upgrade-btn { background: #1947ee; }
.upgrade-btn:hover { background: #0038fd; }
.active-nav-link { background: #1947ee; }
.nav-item:hover { background: #1947ee; }
.account-link:hover { background: #3d68ff; }
</style>

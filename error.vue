<template>
  <div class="error-page">
    <h1>This Page is not found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <NuxtLink to="/" class  = 'button'>Go back to homepage</NuxtLink>
  </div>
</template>

<script setup>
// You can add any specific logic or styling here.
</script>

<style scoped>
.error-page {
  text-align: center;
  margin: 50px;
  background-color:#ccc;
  color:#666;
  padding:50px;
}
p{
	margin:50px;
}

.button{
	margin:20px;color:#fff;font-weight:600;
}
</style>

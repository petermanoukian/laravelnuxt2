<template>
  <div class="forbidden-page">
	<div class ='fullwidth'>
    <h1>Access Denied </h1>
	</div>
	<div class ='fullwidth'>
    <p>You don't have the required permissions to access this page.
	 <NuxtLink to="/" > Go Pack </NuxtLink>
	</p>
	</div>
  </div>
</template>

<style scoped>
.forbidden-page {
 
  justify-content: center;
  align-items: center;
  height: auto;
  text-align: center;
  margin-top:10%;
}


@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

h1
{
	clear:both;margin:20px;width:90%;  justify-content: center;
	align-items: center;display:inline-block;text-align:center;
}

p
{
	clear:both;width:90%;  justify-content: center;
	align-items: center;display:inline-block;text-align:center;
}
.fullwidth
{
	clear:both;width:90%;  justify-content: center;
	align-items: center;display:inline-block;text-align:center;
}
</style>

<!-- SubCatSingleOpen.vue -->
<template>
	<div  class="mt-1 mb-1 col-lg-4 col-sm-6 wow fadeInUp "> 
		<div class= 'graybox'>
			<p> Category : <NuxtLink :to="`/prod/viewprodbycatid/${subcat.catid}`" > {{ subcat.cat.name }} </NuxtLink>  </p>
			<p v-if="subcat.img">
				<NuxtLink :to="`/prod/viewprodbycatsub/${subcat.catid}/${subcat.id}`" >
				<img :src="`${config.public.BaseUrl}/images/subcat/thumb/${subcat.img}`"
				:alt="subcat.name" class="mt-1 mb-1 maximg link1 h-32"/>
				</NuxtLink>  
			</p>   
			<p v-else>
				<NuxtLink :to="`/prod/viewprodbycatsub/${subcat.catid}/${subcat.id}`" >
				<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-1 mb-1  h-32 link1"/>
				</NuxtLink> 
			</p> 
			<p>		
				<NuxtLink :to="`/prod/viewprodbycatsub/${subcat.catid}/${subcat.id}`" class='link1'> <b>&rsaquo; {{ subcat.name }} </b></NuxtLink> 
			</p>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    subcat: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- CatSingleOpen.vue -->
<template>
	<div class="col-lg-4 col-sm-6 wow fadeInUp mt-1 mb-1" >
		<div class= 'graybox'>
			<p v-if="cat.img">
				<NuxtLink :to="`/prod/viewprodbycatid/${cat.id}`" >
				<img :src="`${config.public.BaseUrl}/images/cat/thumb/${cat.img}`"
				:alt="cat.name" class="mt-1 mb-1 maximg link1 h-32"/>
				</NuxtLink>  
			</p>   
			<p v-else>
				<NuxtLink :to="`/prod/viewprodbycatid/${cat.id}`" >
				<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-1 mb-1  h-32 link1"/>
				</NuxtLink> 
			</p> 
			<p>		
				<NuxtLink :to="`/prod/viewprodbycatid/${cat.id}`" class='link1'> <b>&rsaquo; {{ cat.name }} </b></NuxtLink> 
				<NuxtLink :to="`/subcat/viewsubcatbycatid/${cat.id}`" class='link1'> 
				<h6 class="mb-3">&rsaquo; View Subcategories  ( {{ cat.subcats_count }} )</h6>
				</NuxtLink>
			</p>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    cat: {
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

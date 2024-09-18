<!-- ProdSingleOpen.vue -->
<template> 
	<div class="col-lg-4 col-sm-6 wow fadeInUp mt-1 mb-1" >
		<div class= 'graybox'>	
			<p class='pless'> Category :  <NuxtLink :to="`/prod/viewprodbycatid/${prod.catid}`"  class='link1' >
		    &rsaquo; {{ prod.cat.name }} </NuxtLink> </p>
			<p class='pless'> SubCategory :  
			<NuxtLink :to="`/prod/viewprodbycatsub/${prod.catid}/${prod.subid}`" class='link1'> 
		    &rsaquo; {{ prod.subcat.name }} </NuxtLink></p>
			<p v-if="prod.img">
				  <NuxtLink :to="`/prod/detail/${prod.id}`" >
				  <img :src="`${config.public.BaseUrl}/images/prod/thumb/${prod.img}`"
				  :alt="prod.name" class="mt-2 mb-2 w-32 h-32"/>
				  </NuxtLink>  
				</p>
			<p v-else>
				<NuxtLink :to="`/prod/detail/${prod.id}`" >
					<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 w-32 h-32"/>
				</NuxtLink> 
			</p> 
			<NuxtLink :to="`/prod/detail/${prod.id}`"  class='link1'> <h3>&rsaquo; {{ prod.name }} </h3> </NuxtLink> 
			<div v-if="prod.des !== 'null' && prod.des !== 'NULL' && prod.des !== ''"  
		    class="formatted-result" v-html="prod.des"></div>
			<div v-if = "prod.prodtaggs.length > 0">
				<span v-for="(taggprod, index2) in prod.prodtaggs" >
					<NuxtLink    v-if="taggprod.tagg " 
					:key="taggprod.id" 
					:to="`/prod/tagg/${taggprod.tagg.name}`" class="link1 marginright5">
					&rsaquo; {{ taggprod.tagg.name }} 
					</NuxtLink>
				</span>		
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    prod: {
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

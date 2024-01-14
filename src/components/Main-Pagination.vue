<template>
    <div>
<el-pagination
      v-loading="loading"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100, 200]"
      layout="sizes, prev, pager, next"
      :total="totalCount"
      @size-change="getData"
      @current-change="getData"

 
    />
  </div>
</template>

<script>
export default{


    data() {return{
      loading:true,
        currentPage:1,
        pageSize:10,
    totalCount:0,
    pokemons: [],
    }
},


components:[],
methods:{
getData(){

    this.axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(this.currentPage-1)*this.pageSize}&limit=${this.pageSize}`)
    .then((response) => {
        this.totalCount=response.data.count;
        this.pokemons= [];
        response.data.results.forEach(items => {
          this.axios.get(items.url).then (async ( resp) => {
           this.pokemons.push(resp.data)} 
         
  
        
        );
      })
        this.loading=false;
        
    })
    .catch((error) => {
        console.warn(error);
    })
},


},

    mounted(){
         this.getData()
    }
}

</script>

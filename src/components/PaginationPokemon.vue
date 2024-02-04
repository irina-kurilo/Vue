<template>
    <div>
  
      <el-pagination v-loading="loading" v-model:current-page="currentPage" v-model:page-size="pageSize"
        :page-sizes="[10, 50, 100, 200]" layout="sizes, prev, pager, next" :total="totalCount" @size-change="onPaginationChange"
        @current-change="onPaginationChange" />
    </div>
  </template>
  <script>
  
  export default {
    data() {
      return {

  
        currentPage: 1,
        pageSize: 10,
   
      }
    },
    
    name:`Pagination-Pokemon`,
    props:
      {getData:Function,
    totalCount:Number,
    loading:Boolean
  },
  methods: {
    onPaginationChange(){
this.getData ({pageSize: this.pageSize, currentPage: this.currentPage})
    }},
    
  }
  </script>
  
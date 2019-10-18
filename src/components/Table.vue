<template>
  <a-table :columns="columns"
           :rowKey="record=>record.id"
           :dataSource="data"
           :pagination="pagination"
           :loading="loading"
           @change="handleTableChange"
  >
    <template slot="name" slot-scope="name">
      {{name}}
    </template>
  </a-table>
</template>
<script>
  import reqwest from 'reqwest'
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'name' },
  }, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  }, {
    title: 'Email',
    dataIndex: 'email',
  }];

  export default {
    name:"Table",
    mounted() {
      this.fetch();
    },
    data() {
      return {
        data: [],
        pagination: {},
        loading: false,
        columns,
      }
    },
    methods: {
      handleTableChange (pagination, filters, sorter) {
        console.log(pagination);
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      },
      fetch (params = {}) {
        console.log('params:', params);
        this.loading = true
        reqwest({
          url: 'http://localhost:5460/demo/list',
          method: 'get',
          data: {
            results: 10,
            ...params,
          },
          type: 'json',
        }).then((data) => {
          const pagination = { ...this.pagination };
          // Read total count from server
          // pagination.total = data.totalCount;
          console.log(data);
          pagination.total = 200;
          this.loading = false;
          //服务端必须要包含results
          this.data = data.results;
          this.pagination = pagination;
        });


      }
    },
  }
</script>


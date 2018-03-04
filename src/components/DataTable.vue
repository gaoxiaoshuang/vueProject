<template>
	<div>
	<p class="searchTime">
         <span>查询日期</span>
          <input type="text" id="min" v-model="min"> -
          <input type="text" id="max" v-model="max">
		  <button @click="changeData"></button>
   </p>
	<table id="table" class="table table-striped" ></table>
	</div>
</template>
<script>
export default {
    data() {
            return {
				table: null,
				min: '',
				max: '',
				option: {
					data: [{
                        DT_RowId: 'row_5',
                        name: 'Satou',
                        position: 'Accountant',
                        office: 'Tokyo',
                        start_date: '28th Nov 08',
                        salary: '$162,700',
                        age: '12'
                    }, {
                        DT_RowId: 'row_25',
                        name: 'Ramos',
                        position: 'Chief Executive Officer (CEO)',
                        office: 'London',
                        start_date: '9th Oct 09',
                        salary: '$1,200,000',
                        age: '13'
                    }, {
                        DT_RowId: 'row_3',
                        name: 'Cox',
                        position: 'Junior Technical Author',
                        office: 'San Francisco',
                        start_date: '12th Jan 09',
                        salary: '$86,000',
                        age: '14'
                    }, {
                        DT_RowId: 'row_19',
                        name: 'Greer',
                        position: 'Software Engineer',
                        office: 'London',
                        start_date: '13th Oct 12',
                        salary: '$132,000',
                        age: '15'
                    }, {
                        DT_RowId: 'row_28',
                        name: 'Wagner',
                        position: 'Software Engineer',
                        office: 'San Francisco',
                        start_date: '7th Jun 11',
                        salary: '$206,850',
                        age: '16'
                    }, {
                        DT_RowId: 'row_6',
                        name: 'Williamson',
                        position: 'Integration Specialist',
                        office: 'New York',
                        start_date: '2nd Dec 12',
                        salary: '$372,000',
                        age: '17'
                    }, {
                        DT_RowId: 'row_43',
                        name: 'Nash',
                        position: 'Software Engineer',
                        office: 'London',
                        start_date: '3rd May 11',
                        salary: '$163,500',
                        age: '18'
                    }, {
                        DT_RowId: 'row_23',
                        name: 'Vance',
                        position: 'Pre-Sales Support',
                        office: 'New York',
                        start_date: '12th Dec 11',
                        salary: '$106,450',
                        age: '19'
                    }, {
                        DT_RowId: 'row_51',
                        name: 'Stevens',
                        position: 'Sales Assistant',
                        office: 'New York',
                        start_date: '6th Dec 11',
                        salary: '$145,600',
                        age: '20'
                    }, {
                        DT_RowId: 'row_4',
                        name: 'Kelly',
                        position: 'Senior Javascript Developer',
                        office: 'Edinburgh',
                        start_date: '29th Mar 12',
                        salary: '$433,060',
                        age: '21'
                    }, {
                        DT_RowId: 'row_51',
                        name: 'Stevens',
                        position: 'Sales Assistant',
                        office: 'New York',
                        start_date: '6th Dec 11',
                        salary: '$145,600',
                        age: '22'
                    }, {
                        DT_RowId: 'row_4',
                        name: 'Kelly',
                        position: 'Senior Javascript Developer',
                        office: 'Edinburgh',
                        start_date: '29th Mar 12',
                        salary: '$433,060',
                        age: '23'
                    }],
					columns: [{
                        data: 'DT_RowId',
                        title: '<input type="checkbox" id="checkAll">',
                        render: function(data, type, row, meta) {
                            return '<input type="checkbox" name="checkList">';
                        }
                    }, {
                        data: 'name',
                        title: '姓名',
                        render: function(data, type, row, meta) {
                            return '<a href="javascript:;" class="show-name">' + data + '</a>'
                        }
                    }, {
                        data: 'position',
                        title: '地址'
                    }, {
                        data: 'office',
                        title: '职位'
                    }, {
                        data: 'start_date',
                        title: '日期'
                    }, {
                        data: 'salary',
                        title: '价格'
                    }, {
                        data: 'age',
                        title: '年龄'
                    }, {
                        data: null,
                        title: '操作',
                        render: function(data, type, row, meta) {
                            return '<a href="javascript:;" class="edit" id="' + meta.row + '">编辑</a> <a href="javascript:;" class="delete" id="' + meta.row + '">删除</a>'
                        }
                    }],
				}
			}
		},
		mounted() {
			console.log(11111)
			var that = this;
			that.table = $('#table').DataTable(this.option);
				
		},
		methods: {
			changeData() {
				var that = this;
				$.fn.dataTable.ext.search.push(function( settings, data, dataIndex ) {
					var min = that.min;
					var max = that.max;
					var age = parseFloat( data[6] ) || 0;
					console.log(age, '111111')
					if ( ( isNaN( min ) && isNaN( max ) ) ||
						 ( isNaN( min ) && age <= max ) ||
						 ( min <= age   && isNaN( max ) ) ||
						 ( min <= age   && age <= max ) )
					{
						return true;
					}
					return false;
				})
				that.table.draw();
			}
		}
}
</script>
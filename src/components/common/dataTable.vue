<!-- <template>
    <div>
        <table id="table" class="table table-striped table-bordered" cellspacing="0" width="100%"></table>
    </div>
</template>
<script>
export default {
    data() {
            return {
                option: {
                    dom: 'Brtilp',
                    "searching": false, //本地搜索
                    "ordering": false, //排序功能
                    "oLanguage": { //国际语言转化
                        "oAria": {
                            "sSortAscending": " - click/return to sort ascending",
                            "sSortDescending": " - click/return to sort descending"
                        },
                        "sLengthMenu": "显示 _MENU_ 记录",
                        "sZeroRecords": "对不起，查询不到任何相关数据",
                        "sEmptyTable": "未有相关数据",
                        "sLoadingRecords": "正在加载数据-请等待...",
                        "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录。",
                        "sInfoEmpty": "当前显示0到0条，共0条记录",
                        "sInfoFiltered": "（数据库中共为 _MAX_ 条记录）",
                        "sProcessing": "<img src='../resources/user_share/row_details/select2-spinner.gif'/> 正在加载数据...",
                        "sSearch": "模糊查询：",
                        "sUrl": "",
                        "oPaginate": {
                            "sFirst": "首页",
                            "sPrevious": " 上一页 ",
                            "sNext": " 下一页 ",
                            "sLast": " 尾页 "
                        }
                    },
                    select: true,
                    responsive: true,
                    buttons: [
                        'colvis', 'copy', 'print', 'excel', 'csv'
                    ]
                },
                table: null
            }
        },
        props: ['data', 'columns'],
        mounted() {
            this.option.data = this.data;
            this.option.columns = this.columns;
            this.table = $('#table').DataTable(this.option);
        },
        methods: {
            searchData() {

                $.fn.dataTable.ext.search.push(
                    function(settings, data, dataIndex) {
                        var min = parseInt($('#min').val(), 10);
                        var max = parseInt($('#max').val(), 10);
                        var age = parseFloat(data[6]) || 0; // use data for the age column

                        if ((isNaN(min) && isNaN(max)) ||
                            (isNaN(min) && age <= max) ||
                            (min <= age && isNaN(max)) ||
                            (min <= age && age <= max)) {
                            return true;
                        }
                        return false;
                    }
                );
                this.$emit('parentComponent', this.table)
            }
        },
        watch: {
            data(val) {
                this.option.data = this.data;
                this.option.columns = this.columns;
                this.table = $('#table').DataTable(this.option);
            }
        }
}
</script>
 -->

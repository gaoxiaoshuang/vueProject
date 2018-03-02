<template>
    <div class='hello'>
        <table class="search-box">
            <tbody>
                <tr>
                    <td>输入选择范围：</td>
                    <td>
                        <input type="text" id="min" name="min" v-model="min" />
                    </td>
                    <td>&nbsp;—&nbsp;</td>
                    <td>
                        <input type="text" id="max" name="max" v-model="max" />
                    </td>
                    <td>
                        &nbsp;&nbsp;
                        <button @click="searchBtn">查询</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="dt-buttons">
            <button class="dt-button buttons-collection" @click="deleteSelect">删除选中的行</button>
            <button class="dt-button buttons-collection buttons-colvis" @click="columnList"><span>列段显示/隐藏</span></button>
            <div class="dt-button-collection" style="top: 33.3125px; left: 212px;" v-show="columnLi">
                <button class="dt-button buttons-columnVisibility" @click="visiableChange(1)"><span>姓名</span></button>
                <button class="dt-button buttons-columnVisibility" @click="visiableChange(2)"><span>地址</span></button>
                <button class="dt-button buttons-columnVisibility" @click="visiableChange(3)"><span>职位</span></button>
                <button class="dt-button buttons-columnVisibility" @click="visiableChange(4)"><span>日期</span></button>
                <button class="dt-button buttons-columnVisibility" @click="visiableChange(5)"><span>价格</span></button>
                <button class="dt-button buttons-columnVisibility" @click="visiableChange(6)"><span>年龄</span></button>
            </div>
        </div>
        <table id="table" class="table table-striped table-bordered" cellspacing="0" width="100%"></table>
        <div class="showslider" v-show="show">
            <button class="closediv" @click="closeNodal">关闭</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                show: false,
                min: null,
                max: null,
                columnLi: false,
                option: {
                    "dom": 'Brtilp',
                    "searching": false, //本地搜索
                    "lengthMenu": [
                        [10, 20, 30, -1],
                        [10, 20, 30, "All"]
                    ], //每页显示条数设置
                    "lengthChange": true, //是否允许用户自定义显示数量
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
                    "columnDefs": [{
                        orderable: false,
                        targets: 0
                    }, {
                        orderable: false,
                        targets: 1
                    }, {
                        orderable: false,
                        targets: 2
                    }],
                    columns: [{
                        render: function(data, type, row, meta) {
                            return '<input type="checkbox" name="single">';
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
                    }],
                    initComplete: function() { //列筛选
                        var api = this.api();
                        api.columns().indexes().flatten().each(function(i) {
                            if (i != 0 && i > 2) { //删除第一列与第二列的筛选框
                                var column = api.column(i);
                                var $span = $('<span class="addselect">▾</span>').appendTo($(column.header()))
                                var select = $('<select><option value="">All</option></select>')
                                    .appendTo($(column.header()))
                                    .on('click', function(evt) {
                                        evt.stopPropagation();
                                        var val = $.fn.dataTable.util.escapeRegex(
                                            $(this).val()
                                        );
                                        column.search(val ? '^' + val + '$' : '', true, false).draw();
                                    });
                                column.data().unique().sort().each(function(d, j) {
                                    function delHtmlTag(str) {
                                        return str.replace(/<[^>]+>/g, ""); //去掉html标签
                                    }

                                    d = delHtmlTag(d)
                                    select.append('<option value="' + d + '">' + d + '</option>')
                                    $span.append(select)
                                });

                            }
                        });

                    },
                    responsive: true,
                },
                table: null
            }
        },
        mounted() {
            var that = this;
            that.table = $('#table').DataTable(this.option);
            //checkbox全选
            $("#checkAll").on("click", function() {
                if ($(this).prop("checked") === true) {
                    $("input[name='checkList']").prop("checked", $(this).prop("checked"));
                    $('#example tbody tr').addClass('selected');
                } else {
                    $("input[name='checkList']").prop("checked", false);
                    $('#example tbody tr').removeClass('selected');
                }
            });
            $('#table tbody').on('click', 'tr input[name="checkList"]', function() {
                var $tr = $(this).parents('tr');
                $tr.toggleClass('selected');
                var $tmp = $('[name=checkList]:checkbox');
                $('#checkAll').prop('checked', $tmp.length == $tmp.filter(':checked').length);
                var $tr = $(this).parents('tr');
                $tr.toggleClass('selected');
                var $tmp = $('[name=checkList]:checkbox');
                $('#checkAll').prop('checked', $tmp.length == $tmp.filter(':checked').length);
            });


            // 列显示隐藏toggle
            $('.showcol').click(function() {
                $('.showul').toggle();

            })
            $('.show-name').click(function() {
                    var text = $(this)[0].innerHTML;
                    console.log()
                    that.show = true;
                })
                //获取表格宽度赋值给右侧弹出层
            that.wt = $('.wt100').width();
            $('.showslider').css('right', -that.wt);


        },
        methods: {
            searchBtn() {
                var that = this;
                $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
                    var min = parseInt(that.min, 10);
                    var max = parseInt(that.max, 10);
                    var age = parseFloat(data[7]) || 0; // use data for the age column
                    if ((isNaN(min) && isNaN(max)) ||
                        (isNaN(min) && age <= max) ||
                        (min <= age && isNaN(max)) ||
                        (min <= age && age <= max)) {
                        return true;
                    }
                    return false;
                });

                this.table.draw();
            },


            /*** 列段显示隐藏 */
            columnList() {
                this.columnLi = this.columnLi ? false : true;
            },
            visiableChange(num) {
                console.log($(this))
                var column = this.table.column(num);
                column.visible(!column.visible());
            },

            /*** 删除选中的行 */
            deleteSelect() {
                this.table.row('.selected').remove().draw(false);
            },

            clickDom() {
                this.show = this.show ? false : true;
            },
            closeNodal() {
                this.show = false;
            },

        },
}
</script>
<style scopd>
.hello {
    max-width: 1200px;
    margin: 0 auto;
}

div.container {
    max-width: 1200px
}

.search-box {
    margin-bottom: 20px;
}

.operate-btn {
    margin-bottom: 10px;
}

.operate-btn::after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
}

.dataTables_length,
.table {
    margin-top: 10px;
}

.showul li {
    text-align: left;
}

.showslider {
    width: 400px;
    height: 400px;
    background-color: #fff;
    border: 1px solid #ccc;
    margin: 50px auto;
}

.addselect {
    border-radius: 2px;
    display: inline-block;
    background-color: #ccc;
    height: 12px;
    width: 16px;
    text-align: center;
    font-size: 9px;
    font-family: Arial;
    position: relative;
    margin-left: 4px;
    cursor: pointer;
    overflow: hidden;
    vertical-align: top;
    top: 1px;
}

.addselect select {
    width: 44px;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
}
</style>

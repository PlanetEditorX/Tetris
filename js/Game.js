(function() {
    window.Game = function () {
        //设置行和列
        this.row = 20
        this.col = 12
        //初始化
        this.init()
    } 
    //初始化布局
    Game.prototype.init = function () {
        var $table = $("<table></table>")
        //渲染表格
        for (var i = 0; i < this.row; i++) {
            //创建tr
            var $tr = $("<tr></tr>")
            for (var j = 0; j < this.col; j++) {
                //创建td
                var $td = $("<td></td>")
                //将每个单元格追加到行
                $td.appendTo($tr)
            }
            //将行追加到表格
            $tr.appendTo($table)
        }
        //将表格追加到body
        $($table).appendTo("body")
    }

    /**
     * 方块渲染
     * @param {int} row 行
     * @param {int} col 列
     * @param {int} num 状态
     */
    Game.prototype.setColor = function (row,col,num) {
        // 给对应的有颜色方块添加类名
        $("tr").eq(row).children("td").eq(col).addClass("c"+num)
    }
})()
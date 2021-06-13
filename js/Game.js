(function() {
    window.Game = function () {
        //设置行和列
        this.row = 20
        this.col = 12
        //初始化
        this.init()
    } 
    
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
})()
(function() {
    window.Game = function () {
        //设置行和列
        this.row = 20
        this.col = 12
        //初始化
        this.init()
        //实例方块
        this.block = new Block()
        //实例地图
        this.map = new Map()
        //启动定时器
        this.start()
        //键盘事件监听
        this.bindEvent()
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
    //清屏功能
    Game.prototype.clear = function () {
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                //移除所有的class
                $("tr").eq(i).children("td").eq(j).removeClass()
            }
        }
    }
    //定时器
    Game.prototype.start = function () {
        var self = this
        this.timer = setInterval(function () {
            //清屏
            self.clear()
            //渲染方块
            self.block.render()
            //渲染地图
            self.map.render(self)
            //下落
            self.block.checkDown()
        },500)
    }
    //事件监听
    Game.prototype.bindEvent = function () {
        //备份
        let self = this
        document.onkeydown = function (event) {
            console.log(event.key);
            if (event.key==='ArrowLeft') {
                //判断是否能向左走
                self.block.checkLeft()
            }else if (event.key==='ArrowRight') {
                self.block.checkRight()
            }
        }
    }
})()
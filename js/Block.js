(function () {
    window.Block = function () {
        //得到随机的方块
        //第一步 罗列所有的类型
        let allType = ["S", "T", "O", "L", "J", "I", "Z"]
        //第二步 从所有的类型中随机得到一种
        this.type = allType[parseInt(Math.random() * allType.length)]
        //第三步 得到随机的类型方块,通过类型获取当前类型所有形状的总数量,不同的类型,形状数量不同
        this.allDir = allBlock[this.type].length
        //第四步 通过当前的allDir(类型拥有的不同类型长度),随机得到不同的数字
        this.dir = parseInt(Math.random() * this.allDir)
        //第五步 得到随机的方块
        this.code = allBlock[this.type][this.dir]
        //初始的行
        this.row = 0
        //初始的列,因为要居中显示,所以列要为4
        this.col = 4
    }
    //渲染函数
    Block.prototype.render = function () {
        //渲染四行四列的方块
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                //如果4x4的矩阵中某一项不为0,就说明有颜色,渲染这个颜色
                if (this.code[i][j] != 0) {
                    game.setColor(i + this.row, j + this.col, this.code[i][j])
                }
            }
        }
    }
    Block.prototype.check = function (row, col) {
        //预判断方法，判断的是对应位置的方块和地图是否有不为0的情况，如果有则返回true，否则返回false
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.code[i][j] != 0 && game.map.mapCode[i + row][j + col] != 0) {
                    return false
                }
            }
        }
        return true
    }
    //方块下落，判断当前的方块是否能够下落
    Block.prototype.checkDown = function () {
        //判断当前地图的位置和自己方块的位置是否有重合，this.row+1指的是预判断
        if (this.check(this.row + 1, this.col)) {
            this.row++
        } else {
            //下落到底的状态,渲染新方块
            game.block = new Block()
            //方块到底,渲染到地图中
            this.renderMap()
        }

    }
    //将到底的方块渲染到地图上
    Block.prototype.renderMap = function () {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                //将现在已有的方块渲染到Map类的mapCode上
                if (this.code[i][j] != 0) {
                    game.map.mapCode[this.row + i][this.col + j] = this.code[i][j]
                }
            }
        }
    }
    //判断能否向左移动
    Block.prototype.checkLeft = function () {
        //判断能否向左
        if (this.check(this.row, this.col - 1)) {
            this.col--
        }
    }
    //判断能否向右移动
    Block.prototype.checkRight = function () {
        if (this.check(this.row, this.col + 1)) {
            this.col++
        }
    }
})()
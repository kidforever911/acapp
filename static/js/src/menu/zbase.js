class AcGameMenu{
    constructor(root){
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">

    <div class="ac_game_menu_game_introduction">
        <div class="ac_game_menu_game_introduction_headline">游戏玩法</div>
        <div class="ac_game_menu_game_introduction_content">&nbsp&nbsp&nbsp&nbsp移动：鼠标右键点击</div>
        <div class="ac_game_menu_game_introduction_content">&nbsp&nbsp&nbsp&nbsp技能1：<b>[火球]</b>先按Q键，再按鼠标左键进行技能使用</div>
        <div class="ac_game_menu_game_introduction_content">&nbsp&nbsp&nbsp&nbsp技能2：<b>[闪现]</b>先按F键，再按鼠标左键进行技能使用</div>
        <div class="ac_game_menu_game_introduction_content">&nbsp&nbsp&nbsp&nbsp友情提示：<b>[多人模式]</b>需要三个人才可开启多人模式，也可以一个浏览器开三次该网页</div>

    </div>
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            单人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
            退出
        </div>
    </div>
</div>
`);
        this.$menu.hide();
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');

        this.start();
    }

    start(){
        this.add_listening_events();
    }

    add_listening_events(){
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show("single mode");
        });
        this.$multi_mode.click(function(){
            outer.hide();
            outer.root.playground.show("multi mode");
        });
        this.$settings.click(function(){
            outer.root.settings.logout_on_remote();
        });
    }

    show(){  //显示menu界面
        this.$menu.show();
    }
    hide(){  //关闭menu界面
        this.$menu.hide();
    }
}


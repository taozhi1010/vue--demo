<template>
  <div id="app">
    <div class="main">
      <mt-header fixed title="黑马程序员.vue项目"></mt-header>
        <transition>
    <router-view></router-view>
      </transition>
       
        <div>
          <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
              <span class="mui-icon mui-icon-home"></span>
              <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
              <span class="mui-icon mui-icon-contact"></span>
              <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
              <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
              <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
              <span class="mui-icon mui-icon-search"></span>
              <span class="mui-tab-label">搜索</span>
            </router-link>
          </nav>
        </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.main{
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom:60px;
}
.title{
				margin: 20px 15px 10px;
				color: #6d6d72;
				font-size: 15px;
			}

			.oa-contact-cell.mui-table .mui-table-cell {
				padding: 11px 0;
				vertical-align: middle;
			}
			
			.oa-contact-cell {
				position: relative;
				margin: -11px 0;
			}
	
			.oa-contact-avatar {
				width: 75px;
			}
			.oa-contact-avatar img {
				border-radius: 50%;
			}
			.oa-contact-content {
				width: 100%;
			}
			.oa-contact-name {
				margin-right: 20px;
			}
			.oa-contact-name, oa-contact-position {
				float: left;
			}
       
.v-enter {
  opacity: 0;
  transform: translateX(100%); /*进入起点在屏幕100%部分,即屏幕最右*/
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%); /*离开的终点在屏幕-100%部分*/
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
} 
</style>

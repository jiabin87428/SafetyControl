import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: true,
        hasLogin: false,
        userName: "",
		userInfo: null,
		
		// 输入页的内容，供其他页面取用
		inputPageText: "",
		// 内容对应的id
		key: "",
		
		// ------------扫码新建检查----------------
		// sublist中的对象
		sublistItem: null,
		// 对象位于sublist中的位置
		sublistIndex: 0,
    },
    mutations: {
        login(state, user) {
			if (user != null) {
				state.userName = user.username || '新用户';
				state.hasLogin = true;
				state.userInfo = user;
			}
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		
		setInputPageText(state, item) {
			state.inputPageText = item.text;
			state.key = item.key;
		},
		
		setSublistItem(state, obj) {
			state.sublistItem = obj.item;
			state.sublistIndex = obj.index;
		},
    }
})

export default store

/*
	所有接口相关操作都集中在此，返回promise
*/
import axiosFun from './axios.js'


/**
	在这里维护一个全局变量 环境配置
	envConfig = {
		server:"", #服务器
		runTime:""  #运行环境
	}
    全局变量  当前环境，指测试服与正式服所使用的不同域名（接口）
            切换方法是在启动服务（npm run dev）或者打包构建（npm run build）
            的时候带上特有参数如  npm run dev-prod 为正式服
                               npm run dev      为测试服
                            npm run build-prod 同理
            见：package.json
*/

//window.envConfig = process.envConfig;

//var apiAddr = envConfig.server == "production-server" ? "" : "example.com/api/";

var api = {
	/*preUrl:'https://'+apiAddr,
	apiPreUrl : 'https://'+apiAddr,
	getUserInfo(){

	}*/
}
export default api;

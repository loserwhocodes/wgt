// live2d_path 参数建议使用绝对路径
const live2d_path = "https://fastly.jsdelivr.net/gh/loserwhocodes/wgt@master/";
//const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		// 配置选项的具体用法见 README.md
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/",
			cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
			tools: ["hitokoto", "asteroids", "switch-model", "switch-texture", "photo", "quit"]
		});
	});
}

console.log(`

░▒▓███████▓▒░░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓██████▓▒░ ░▒▓██████▓▒░ ░▒▓███████▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░       ░▒▓█▓▒▒▓█▓▒░░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░        
░▒▓█▓▒░░▒▓█▓▒░▒▓██████▓▒░  ░▒▓█▓▒▒▓█▓▒░░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒▒▓███▓▒░░▒▓██████▓▒░  
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░        ░▒▓█▓▓█▓▒░ ░▒▓█▓▒░     ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓███████▓▒░░▒▓████████▓▒░  ░▒▓██▓▒░  ░▒▓████████▓▒░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓███████▓▒░  

											    
=========================================================================================                                                                                            
                    _                        _    
                   ( )                      | |   
  _   _  ___  _   _|/ _ __ ___   _ __   ___ | |_  
 | | | |/ _ \| | | | | '__/ _ \ | '_ \ / _ \| __| 
 | |_| | (_) | |_| | | | |  __/ | | | | (_) | |_  
  \__, |\___/ \__,_| |_|  \___| |_| |_|\___/ \__| 
   __/ |                                  | |     
  |___/   _ _ __  _ __   ___  ___  ___  __| |     
 / __| | | | '_ \| '_ \ / _ \/ __|/ _ \/ _` |     
 \__ \ |_| | |_) | |_) | (_) \__ \  __/ (_| |     
 |___/\__,_| .__/| .__/ \___/|___/\___|\__,_|     
           | |   | |                              
  _        |_|   |_|      _                       
 | |        | |          | |                      
 | |_ ___   | |__   ___  | |__   ___ _ __ ___     
 | __/ _ \  | '_ \ / _ \ | '_ \ / _ \ '__/ _ \    
 | || (_) | | |_) |  __/ | | | |  __/ | |  __/    
  \__\___/  |_.__/ \___| |_| |_|\___|_|  \___|    
                                                  
                                                  
=========================================================================================
			CONTACT THE DEV ON DISCORD: _murke
`);

//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const {conn, Type } = require('./src/db.js');
const axios = require('axios');
const {POKEMON_TYPE} = require('./src/utils/constants');

conn.sync({force: true}).then(() => {
	server.listen(3001, () => {
		console.log('Server is listening on port 3001');
			axios.get(POKEMON_TYPE).then((response) => {
			response.data.results.forEach((el) => Type.create({name: el.name}));
			console.log('Types created & loaded on DB');
		}); 
	});
});

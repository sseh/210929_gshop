// 包含n个接口请求函数
// 函数的返回值为promise
import ajax from './ajax'
const BASE_URL = '/api'
// 1、根据经纬度获取位置详情
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqCategorys = () => ajax(BASE_URL + '/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = ({ longitude, latitude }) => ajax(BASE_URL + '/shops', { longitude, latitude })
// 4、根据经纬度和关键字搜索商铺列表
export const reqShopList = (keyword, geohash) => ajax('/search_shops', { keyword, geohash })
// 5、获取一次性验证码
export const reqOnceCaptcha = () => ajax('/captcha')
// 6、用户名密码登陆
export const reqLoginByPwd = ({ name, pwd, captcha }) => ajax('/login_pwd')
// 7、发送短信验证码
export const reqSendCaptcha = phone => ajax('/sendcode', { phone })
// 8、手机号验证码登陆
export const reqLoginByCaptcha = () => ajax()
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax()
// 10、用户登出
export const reqLogout = () => ajax()

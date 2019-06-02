var express = require('express');
var router = express.Router();

// 用户资料
router.post('/getUserInfo', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      user_info: {
        user_name: 'zhangyx00',
        nick_name: '周杰伦啊',
        sex: 2,
        user_tel: '15989488120',
        head_image: '/img/icons/android-chrome-192x192.png',
        real_name: '张',
        user_email: '1895695544@lyj.com',
        level_name: '',
        address: '这些是在哈哈哈',
        area_name: '四川省 成都市 金牛区',
        address_name: '内蒙古自治区 包头市 达尔罕茂明安联合旗',
        org_name: '',
        tfn: 'gg665556777781y',
        org_type: '药店 单体 直营分店',
        point: '0',
        balance: '0.00',
        is_through: 1,
        birthday: '2019-10-7',
        tags: 'd9caa6e02c990b0a'
      }
    }
  });
});

router.post('/getAddressList', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      list: [
        {
          address_id: 129,
          consigner: '绿箭侠',
          mobile: '13333333333',
          province: '河北省',
          province_id: 3,
          city: '沧州市',
          city_id: 11,
          district: '泊头市',
          district_id: 184,
          address: '阿斯顿发送发发阿斯顿发的啥饭阿斯顿发送',
          is_default: 1,
          zip_code: ''
        },
        {
          address_id: 123,
          consigner: '闪电侠',
          mobile: '15222222222',
          province: '河北省',
          province_id: 3,
          city: '沧州市',
          city_id: 11,
          district: '任丘市',
          district_id: 185,
          address: '蝙蝠侠大战超人呵呵',
          is_default: 0,
          zip_code: ''
        },
        {
          address_id: 127,
          consigner: '猪猪侠垃圾桶买裤子',
          mobile: '12544444555',
          province: '河北省',
          province_id: 3,
          city: '承德市',
          city_id: 10,
          district: '丰宁满族自治县',
          district_id: 169,
          address:
            '撒法师大法师地方发生发大水sass成都市大法师地方阿斯顿发送到发送到发送发生阿斯顿发送发大水',
          is_default: 0,
          zip_code: ''
        },
        {
          address_id: 130,
          consigner: '大的',
          mobile: '11222334444',
          province: '天津市',
          province_id: 2,
          city: '天津市',
          city_id: 2,
          district: '和平区',
          district_id: 19,
          address: '阿发到发送到发送到发送',
          is_default: 0,
          zip_code: ''
        },
        {
          address_id: 133,
          consigner: '小猪熊',
          mobile: '12555555555',
          province: '天津市',
          province_id: 2,
          city: '天津市',
          city_id: 2,
          district: '宝坻区',
          district_id: 33,
          address:
            '发送发送发生的啊发送到发送到发送到发送阿斯顿发送到发送到发送到发送发大水到发送阿斯顿发送发大水到发送地方撒法师发送',
          is_default: 0,
          zip_code: ''
        }
      ]
    }
  });
});

router.post('/deleteAddress', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      list: [
        {
          address_id: 129,
          consigner: '绿箭侠',
          mobile: '13333333333',
          province: '河北省',
          province_id: 3,
          city: '沧州市',
          city_id: 11,
          district: '泊头市',
          district_id: 184,
          address: '阿斯顿发送发发阿斯顿发的啥饭阿斯顿发送',
          is_default: 1,
          zip_code: ''
        },
        {
          address_id: 127,
          consigner: '猪猪侠垃圾桶买裤子',
          mobile: '12544444555',
          province: '河北省',
          province_id: 3,
          city: '承德市',
          city_id: 10,
          district: '丰宁满族自治县',
          district_id: 169,
          address:
            '撒法师大法师地方发生发大水sass成都市大法师地方阿斯顿发送到发送到发送发生阿斯顿发送发大水',
          is_default: 0,
          zip_code: ''
        },
        {
          address_id: 130,
          consigner: '大的',
          mobile: '11222334444',
          province: '天津市',
          province_id: 2,
          city: '天津市',
          city_id: 2,
          district: '和平区',
          district_id: 19,
          address: '阿发到发送到发送到发送',
          is_default: 0,
          zip_code: ''
        },
        {
          address_id: 133,
          consigner: '小猪熊',
          mobile: '12555555555',
          province: '天津市',
          province_id: 2,
          city: '天津市',
          city_id: 2,
          district: '宝坻区',
          district_id: 33,
          address:
            '发送发送发生的啊发送到发送到发送到发送阿斯顿发送到发送到发送到发送发大水到发送阿斯顿发送发大水到发送地方撒法师发送',
          is_default: 0,
          zip_code: ''
        }
      ]
    }
  });
});

router.post('/getCouponTypeList', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      list: [
        {
          coupon_type_id: 2,
          coupon_name: '满减',
          money: '10.00',
          count: 100,
          max_fetch: 10,
          at_least: '100.00',
          need_user_level: 0,
          start_time: 1552446184,
          end_time: 1574996588,
          range_type: 1,
          desc: '满100减10元呀',
          receive_quantity: 10,
          already_received: 27
        },
        {
          coupon_type_id: 3211111111111,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 3211111,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 32111,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 3211,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 329,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 328,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 327,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 326,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 325,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 324,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 321,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        },
        {
          coupon_type_id: 322,
          coupon_name: '优惠券-5-28',
          money: '10.00',
          count: 10,
          max_fetch: 5,
          at_least: '10.00',
          need_user_level: 0,
          start_time: 1559034757,
          end_time: 1559639566,
          range_type: 1,
          desc: '优惠券-5-28',
          receive_quantity: 0,
          already_received: 0
        }
      ]
    }
  });
});

router.post('/getMemberCouponList', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      list: [
        {
          coupon_id: 30,
          coupon_type_id: 2,
          coupon_code: '1553828598377',
          use_order_id: '',
          money: '10.00',
          fetch_time: 1554721860,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 29,
          coupon_type_id: 2,
          coupon_code: '1553828598325',
          use_order_id: '',
          money: '10.00',
          fetch_time: 1554702470,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 28,
          coupon_type_id: 2,
          coupon_code: '1553828598636',
          use_order_id: '',
          money: '10.00',
          fetch_time: 1554687392,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 27,
          coupon_type_id: 2,
          coupon_code: '1553828598311',
          use_order_id: '',
          money: '10.00',
          fetch_time: 1554687377,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 26,
          coupon_type_id: 2,
          coupon_code: '1553828598762',
          use_order_id: '',
          money: '10.00',
          fetch_time: 1554687364,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 25,
          coupon_type_id: 2,
          coupon_code: '1553828598773',
          use_order_id: '',
          money: '10.00',
          fetch_time: 1554687243,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 24,
          coupon_type_id: 2,
          coupon_code: '1553828598361',
          use_order_id: '',
          money: '10.00',
          fetch_time: 1554687042,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 23,
          coupon_type_id: 2,
          coupon_code: '1553828598286',
          use_order_id: 91,
          money: '10.00',
          fetch_time: 1554686839,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 22,
          coupon_type_id: 2,
          coupon_code: '1553828598486',
          use_order_id: 79,
          money: '10.00',
          fetch_time: 1554686815,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 21,
          coupon_type_id: 2,
          coupon_code: '1553828598868',
          use_order_id: 728,
          money: '10.00',
          fetch_time: 1553829897,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 222,
          coupon_type_id: 2,
          coupon_code: '1553828598868',
          use_order_id: 728,
          money: '10.00',
          fetch_time: 1553829897,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        },
        {
          coupon_id: 233,
          coupon_type_id: 2,
          coupon_code: '1553828598868',
          use_order_id: 728,
          money: '10.00',
          fetch_time: 1553829897,
          use_time: '',
          end_time: 1574996588,
          start_time: 1552446184,
          coupon_name: '满减',
          at_least: '100.00',
          desc: '满100减10元呀'
        }
      ]
    }
  });
});

router.post('/getFavoriteList', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      list: [
        {
          goods_unit: '件',
          min_buy: 1,
          goods_id: 24,
          goods_name: '土地骨/地骨',
          promotion_price: '55.00',
          market_price: '68.00',
          price: '55.00',
          stock: 1186,
          u_min_stock_alarm: 0,
          max_buy: 0,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 354,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190411/37c9bd30feb7ccc09c888f3b63acb03e3.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190411/37c9bd30feb7ccc09c888f3b63acb03e1.png',
          initial: 'T',
          state: 1,
          province_name: '四川省',
          goods_stock: 1186,
          sku_name: 'kg ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190411/37c9bd30feb7ccc09c888f3b63acb03e1.png',
          fav_price: '55.00',
          fav_time: 1559122183,
          sku_id: 92
        },
        {
          goods_unit: '件',
          min_buy: 0,
          goods_id: 35,
          goods_name: '川芎',
          promotion_price: '38.00',
          market_price: '40.00',
          price: '38.00',
          stock: 998,
          u_min_stock_alarm: 0,
          max_buy: 0,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 142,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190415/61b95e58d95978b579d40eceb5ff98883.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190415/61b95e58d95978b579d40eceb5ff98881.png',
          initial: 'c',
          state: 0,
          province_name: '四川省',
          goods_stock: 1096,
          sku_name: '1袋500g ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190415/61b95e58d95978b579d40eceb5ff98881.png',
          fav_price: '38.00',
          fav_time: 1558948501,
          sku_id: 125
        },
        {
          goods_unit: '件',
          min_buy: 1,
          goods_id: 32,
          goods_name: '荆芥',
          promotion_price: '8.00',
          market_price: '8.50',
          price: '5.00',
          stock: 3,
          u_min_stock_alarm: 0,
          max_buy: 50,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 27,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190415/1ac7e3044d2e7e6ac261c9a4a6a4c8e63.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190415/1ac7e3044d2e7e6ac261c9a4a6a4c8e61.png',
          initial: 'x',
          state: 1,
          province_name: '四川省',
          goods_stock: 3,
          sku_name: '150g ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190415/1ac7e3044d2e7e6ac261c9a4a6a4c8e61.png',
          fav_price: '8.00',
          fav_time: 1558948500,
          sku_id: 136
        },
        {
          goods_unit: '件',
          min_buy: 1,
          goods_id: 27,
          goods_name: '红参片',
          promotion_price: '190.00',
          market_price: '199.00',
          price: '89.00',
          stock: 92,
          u_min_stock_alarm: 0,
          max_buy: 0,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 179,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190412/266f674efce9c6927af98e4df8be766c3.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190412/266f674efce9c6927af98e4df8be766c1.png',
          initial: 'h',
          state: 1,
          province_name: '四川省',
          goods_stock: 286,
          sku_name: '中大片250g ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190412/266f674efce9c6927af98e4df8be766c1.png',
          fav_price: '190.00',
          fav_time: 1558948495,
          sku_id: 98
        },
        {
          goods_unit: '件',
          min_buy: 1,
          goods_id: 13,
          goods_name: '三七粉',
          promotion_price: '180.00',
          market_price: '182.00',
          price: '90.00',
          stock: 92,
          u_min_stock_alarm: 0,
          max_buy: 30,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 120,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190411/4398bdc1b90159009e9884da1cc2668c3.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190411/4398bdc1b90159009e9884da1cc2668c1.png',
          initial: 's',
          state: 1,
          province_name: '四川省',
          goods_stock: 181,
          sku_name: '60g 瓶 ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190411/4398bdc1b90159009e9884da1cc2668c1.png',
          fav_price: '180.00',
          fav_time: 1558948493,
          sku_id: 78
        },
        {
          goods_unit: '件',
          min_buy: 7,
          goods_id: 12,
          goods_name: '阿胶参桂膏',
          promotion_price: '25.00',
          market_price: '28.00',
          price: '25.00',
          stock: 388,
          u_min_stock_alarm: 0,
          max_buy: 60,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 137,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190409/0f3204e2f6d145ce4dc849236d290eb73.jpg',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190409/0f3204e2f6d145ce4dc849236d290eb71.jpg',
          initial: 'a',
          state: 1,
          province_name: '四川省',
          goods_stock: 860,
          sku_name: '8g 4瓶 ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190409/0f3204e2f6d145ce4dc849236d290eb71.jpg',
          fav_price: '25.00',
          fav_time: 1558941357,
          sku_id: 81
        },
        {
          goods_unit: '件',
          min_buy: 0,
          goods_id: 29,
          goods_name: '批杷叶',
          promotion_price: '23.00',
          market_price: '25.00',
          price: '13.00',
          stock: 100,
          u_min_stock_alarm: 0,
          max_buy: 0,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 111123,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190412/74d4e364d9e8f0d1d50e9cf50f5b4b333.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190412/74d4e364d9e8f0d1d50e9cf50f5b4b331.png',
          initial: 'p',
          state: 1,
          province_name: '四川省',
          goods_stock: 249,
          sku_name: '500g ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190412/74d4e364d9e8f0d1d50e9cf50f5b4b331.png',
          fav_price: '23.00',
          fav_time: 1558941126,
          sku_id: 106
        },
        {
          goods_unit: '个',
          min_buy: 0,
          goods_id: 40,
          goods_name: '黑虎掏心',
          promotion_price: '0.01',
          market_price: '0.01',
          price: '0.01',
          stock: 0,
          u_min_stock_alarm: 0,
          max_buy: 0,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 73,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190426/4ce4d8121885d6cbb62dc6e4422f847c3.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190426/4ce4d8121885d6cbb62dc6e4422f847c1.png',
          initial: '',
          state: 1,
          province_name: '四川省',
          goods_stock: 2,
          sku_name: 'kg ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190426/4ce4d8121885d6cbb62dc6e4422f847c1.png',
          fav_price: '0.01',
          fav_time: 1558940979,
          sku_id: 139
        },
        {
          goods_unit: '件',
          min_buy: 10,
          goods_id: 11,
          goods_name: '橘皮',
          promotion_price: '10.00',
          market_price: '12.00',
          price: '10.00',
          stock: 480,
          u_min_stock_alarm: 0,
          max_buy: 50,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 68,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190412/e3c0cd32f0e36d57ab4e3350a9f2e74f3.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190412/e3c0cd32f0e36d57ab4e3350a9f2e74f1.png',
          initial: 'J',
          state: 1,
          province_name: '四川省',
          goods_stock: 777,
          sku_name: '120g ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190412/e3c0cd32f0e36d57ab4e3350a9f2e74f1.png',
          fav_price: '10.00',
          fav_time: 1558680701,
          sku_id: 66
        },
        {
          goods_unit: '瓶',
          min_buy: 1,
          goods_id: 18,
          goods_name: '西洋参粉',
          promotion_price: '245.00',
          market_price: '250.00',
          price: '245.00',
          stock: 0,
          u_min_stock_alarm: 0,
          max_buy: 50,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 123456789,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190411/d10d72d1ec7f3afd4e9bb747b19ec3ff3.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190411/d10d72d1ec7f3afd4e9bb747b19ec3ff1.png',
          initial: 'x',
          state: 1,
          province_name: '四川省',
          goods_stock: 0,
          sku_name: '88g ',
          fav_price: '245.00',
          fav_time: 1558579798,
          sku_id: 59
        },
        {
          goods_unit: '瓶',
          min_buy: 1,
          goods_id: 19,
          goods_name: '枸杞',
          promotion_price: '18.00',
          market_price: '20.00',
          price: '15.00',
          stock: 96,
          u_min_stock_alarm: 0,
          max_buy: 7000,
          is_hot: 1,
          is_recommend: 0,
          is_new: 0,
          sales: 166,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190410/bde6af1f0fd090cfb906e96dc954bfe63.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190410/bde6af1f0fd090cfb906e96dc954bfe61.png',
          initial: 'g',
          state: 1,
          province_name: '新疆维吾尔自治区',
          goods_stock: 295,
          sku_name: '100g ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190410/bde6af1f0fd090cfb906e96dc954bfe61.png',
          fav_price: '18.00',
          fav_time: 1558084307,
          sku_id: 73
        },
        {
          goods_unit: '袋',
          min_buy: 10,
          goods_id: 6,
          goods_name: '金银花',
          promotion_price: '10.00',
          market_price: '12.00',
          price: '10.00',
          stock: 20,
          u_min_stock_alarm: 10,
          max_buy: 0,
          is_hot: 1,
          is_recommend: 1,
          is_new: 0,
          sales: 320,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190412/a9f07f7b41f7b2756f7b284834da7a573.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190412/a9f07f7b41f7b2756f7b284834da7a571.png',
          initial: 'J',
          state: 1,
          province_name: '四川省',
          goods_stock: 27,
          sku_name: '100g 黑色 ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190412/a9f07f7b41f7b2756f7b284834da7a571.png',
          fav_price: '10.00',
          fav_time: 1557195499,
          sku_id: 10
        },
        {
          goods_unit: '件',
          min_buy: 1,
          goods_id: 17,
          goods_name: '龙眼肉',
          promotion_price: '70.00',
          market_price: '75.00',
          price: '25.00',
          stock: 73,
          u_min_stock_alarm: 0,
          max_buy: 20,
          is_hot: 0,
          is_recommend: 0,
          is_new: 1,
          sales: 206,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190412/05c2ffad77e37bb3b7511b481b88c1ac3.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190412/05c2ffad77e37bb3b7511b481b88c1ac1.png',
          initial: 'l',
          state: 1,
          province_name: '四川省',
          goods_stock: 264,
          sku_name: '240g 瓶 ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190412/05c2ffad77e37bb3b7511b481b88c1ac1.png',
          fav_price: '70.00',
          fav_time: 1557035126,
          sku_id: 76
        },
        {
          goods_unit: '件',
          min_buy: 0,
          goods_id: 38,
          goods_name: '灵芝',
          promotion_price: '32.00',
          market_price: '33.00',
          price: '32.00',
          stock: 72,
          u_min_stock_alarm: 5,
          max_buy: 5,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 154,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190415/b40bcfd4c20ec224045819cdeb1607dd3.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190415/b40bcfd4c20ec224045819cdeb1607dd1.png',
          initial: 'L',
          state: 1,
          province_name: '台湾省',
          goods_stock: 152,
          sku_name: '60g 深色 ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190415/b40bcfd4c20ec224045819cdeb1607dd1.png',
          fav_price: '32.00',
          fav_time: 1557034756,
          sku_id: 134
        },
        {
          goods_unit: '件',
          min_buy: 0,
          goods_id: 34,
          goods_name: '水蛭',
          promotion_price: '135.00',
          market_price: '139.00',
          price: '135.00',
          stock: 96,
          u_min_stock_alarm: 0,
          max_buy: 0,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 38,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190415/65d37cf4b4b957bdca2ee4b6c9f14a153.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190415/65d37cf4b4b957bdca2ee4b6c9f14a151.png',
          initial: 's',
          state: 0,
          province_name: '四川省',
          goods_stock: 101,
          sku_name: '100g ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190415/65d37cf4b4b957bdca2ee4b6c9f14a151.png',
          fav_price: '135.00',
          fav_time: 1557034740,
          sku_id: 123
        }
      ]
    }
  });
});
// getUserQualificationStatus
router.post('/getUserQualificationStatus', function(req, res, next) {
  res.send({ code: 0, message: 'success', data: { status: 4, log_status:2 } });
});

router.post('/getUserQualification', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      title: '绿源集科技公司',
      username: '独角大王',
      createtime: 1557026121,
      province_id: 23,
      city_id: 235,
      district_id: 2042,
      address: '这些是在哈哈哈',
      org_type: 1,
      double: 1,
      org_id: 1,
      tfn: 'gg665556777781y',
      phone: '18235625461',
      org_type_name: '药店',
      org_id_name: '直营分店',
      double_name: '单体',
      is_tfn: 1,
      province_name: '四川省',
      city_name: '成都市',
      district_name: '金牛区',
      qualification: [
        {
          certificate_id: 1,
          pic: 'upload/certificate/1556599052.jpg',
          path: '/img/icons/android-chrome-512x512.png',
          is_over: 4,
          tpl_image: ''
        },
        {
          certificate_id: 4,
          pic: 'upload/avator/1554692641.png',
          path: 'http://10.168.1.222:89/upload/avator/1554692641.png',
          is_over: 1,
          tpl_image: ''
        },
        {
          certificate_id: 5,
          pic: 'upload/avator/1554691431.png',
          path: 'http://10.168.1.222:89/upload/avator/1554691431.png',
          is_over: 1,
          tpl_image: ''
        },
        {
          certificate_id: 6,
          pic: 'upload/certificate/1556425035.jpg',
          path: 'http://10.168.1.222:89/upload/certificate/1556425035.jpg',
          is_over: 4,
          tpl_image: ''
        },
        {
          certificate_id: 7,
          pic: 'upload/avator/1554688728.jpg',
          path: 'http://10.168.1.222:89/upload/avator/1554688728.jpg',
          is_over: 1,
          tpl_image: ''
        },
        {
          certificate_id: 8,
          pic: 'upload/avator/1554705613.png',
          path: 'http://10.168.1.222:89/upload/avator/1554705613.png',
          is_over: 4,
          tpl_image: ''
        },
        {
          certificate_id: 9,
          pic: 'upload/certificate/1556425650.jpg',
          path: 'http://10.168.1.222:89/upload/certificate/1556425650.jpg',
          is_over: 4,
          tpl_image: ''
        },
        {
          certificate_id: 222,
          pic: 'upload/certificate/1556505547.png',
          path: 'http://10.168.1.222:89/upload/certificate/1556505547.png',
          is_over: 4,
          tpl_image: ''
        }
      ],
      not_desc: ''
    }
  });
});

module.exports = router;

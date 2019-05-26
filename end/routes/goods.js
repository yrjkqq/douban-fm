var express = require('express');
var router = express.Router();

// 购物车
router.post('/goodsDetail', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      goods_info: {
        goods_unit: '件',
        goods_spec_format: [
          {
            spec_name: '规格',
            spec_id: '26',
            value: [
              {
                spec_value_name: '60g',
                spec_name: '规格',
                spec_id: '26',
                spec_value_id: '43',
                spec_show_type: '1',
                spec_value_data: ''
              }
            ]
          },
          {
            spec_name: '类型',
            spec_id: '34',
            value: [
              {
                spec_value_name: '瓶',
                spec_name: '类型',
                spec_id: '34',
                spec_value_id: '60',
                spec_show_type: '1',
                spec_value_data: ''
              },
              {
                spec_value_name: '袋',
                spec_name: '类型',
                spec_id: '34',
                spec_value_id: '61',
                spec_show_type: '1',
                spec_value_data: ''
              }
            ]
          }
        ],
        min_buy: 1,
        goods_id: 13,
        goods_name: '三七粉',
        promotion_price: '90.00',
        market_price: '92.00',
        stock: 182,
        u_min_stock_alarm: 0,
        max_buy: 30,
        is_hot: 0,
        is_recommend: 0,
        is_new: 0,
        sales: 113,
        pic_cover_small:
          'http://10.168.1.222:89/upload/goods/20190411/4398bdc1b90159009e9884da1cc2668c3.png',
        pic_cover:
          'http://10.168.1.222:89/upload/goods/20190411/b7595d4810e67366f3a498fc974fc0d0.png',
        shipping_fee: '0.00',
        is_favorite: 0,
        brand_name: '新绿药',
        province_name: '四川省',
        sku_list: [
          {
            sku_id: 78,
            sku_name: '60g 瓶 ',
            market_price: '182.00',
            price: '180.00',
            promote_price: '180.00',
            stock: 92,
            pic_cover_big:
              'http://10.168.1.222:89/upload/goods/20190411/4398bdc1b90159009e9884da1cc2668c1.png',
            pic_cover_small:
              'http://10.168.1.222:89/upload/goods/20190411/4398bdc1b90159009e9884da1cc2668c3.png',
            attr_value_items: '26:43;34:60'
          },
          {
            sku_id: 79,
            sku_name: '60g 袋 ',
            market_price: '92.00',
            price: '90.00',
            promote_price: '90.00',
            stock: 90,
            pic_cover_big:
              'http://10.168.1.222:89/upload/goods/20190411/26eb41ebf554e239d3fd2b5d999ce9651.png',
            pic_cover_small:
              'http://10.168.1.222:89/upload/goods/20190411/26eb41ebf554e239d3fd2b5d999ce9653.png',
            attr_value_items: '26:43;34:61'
          }
        ],
        pic_arr: [
          {
            pic_cover_big:
              'http://10.168.1.222:89/upload/goods/20190411/4398bdc1b90159009e9884da1cc2668c1.png',
            pic_cover_small:
              'http://10.168.1.222:89/upload/goods/20190411/4398bdc1b90159009e9884da1cc2668c3.png'
          },
          {
            pic_cover_big:
              'http://10.168.1.222:89/upload/goods/20190411/26eb41ebf554e239d3fd2b5d999ce9651.png',
            pic_cover_small:
              'http://10.168.1.222:89/upload/goods/20190411/26eb41ebf554e239d3fd2b5d999ce9653.png'
          },
          {
            pic_cover_big:
              'http://10.168.1.222:89/upload/goods/20190411/6a0aa8076cdcb6e745be965de2b7c2151.png',
            pic_cover_small:
              'http://10.168.1.222:89/upload/goods/20190411/6a0aa8076cdcb6e745be965de2b7c2153.png'
          }
        ],
        info_img_arr: [
          {
            path:
              'http://10.168.1.222:89//upload/goods/20190410/bec026b1510163df9e466389c0c4138a.png',
            width: 281,
            height: 356
          },
          {
            path:
              'http://10.168.1.222:89//upload/goods/20190409/295e65ca90b2ee511bf3d0592ff0348f.jpg',
            width: 741,
            height: 639
          },
          {
            path:
              'http://10.168.1.222:89//upload/goods/20190409/a975b4d1a872f72dbe8c9b9c06eeed17.jpg',
            width: 722,
            height: 603
          },
          {
            path:
              'http://10.168.1.222:89//upload/goods/20190409/c1c77de369496a1facfa7c912a5a5d1e.jpg',
            width: 676,
            height: 585
          },
          {
            path:
              'http://10.168.1.222:89//upload/goods/20190409/cb89385427eb9d524d4e9f5e8591ff28.jpg',
            width: 387,
            height: 267
          },
          {
            path:
              'http://10.168.1.222:89//upload/goods/20190409/7a9adec7d700fab8d26bc388b9d71257.jpg',
            width: 253,
            height: 259
          },
          {
            path:
              'http://10.168.1.222:89//upload/goods/20190409/8356b63c42cbfac25d49d959a7a7fe2b.jpg',
            width: 371,
            height: 283
          },
          {
            path:
              'http://10.168.1.222:89//upload/goods/20190409/1f80a8f607100460fdb445dd0a6e28c6.jpg',
            width: 749,
            height: 556
          },
          {
            path:
              'http://10.168.1.222:89//upload/goods/20190409/efe4157791030c2b4de2a7602c387044.jpg',
            width: 738,
            height: 552
          },
          {
            path:
              'http://10.168.1.222:89//upload/goods/20190409/af5774715493ba110c7548118817d035.jpg',
            width: 730,
            height: 442
          }
        ],
        goods_attribute: [
          {
            attr_value: '名称',
            attr_value_name: ' 三七粉'
          },
          {
            attr_value: '别名',
            attr_value_name: ' 三七粉'
          },
          {
            attr_value: '类别',
            attr_value_name: '荆芥'
          },
          {
            attr_value: '规格',
            attr_value_name: '60g袋'
          },
          {
            attr_value: '产地',
            attr_value_name: '云南'
          },
          {
            attr_value: '等级',
            attr_value_name: '二等级'
          },
          {
            attr_value: '执行标准',
            attr_value_name: '药监局执行'
          }
        ],
        initial: 's',
        state: 1,
        drug_type: 2,
        evaluates_count: {
          evaluate_count: 0,
          imgs_count: 0,
          praise_count: 0,
          center_count: 0,
          bad_count: 0
        },
        member_price: '0.00'
      },
      coupon: [
        {
          count: 100,
          coupon_name: '满减',
          money: '10.00',
          max_fetch: 10,
          at_least: '100.00',
          coupon_type_id: 2,
          start_time: 1552446184,
          end_time: 1574996588,
          desc: '满100减10元呀',
          receive_quantity: 31,
          already_received: 33
        },
        {
          count: 12,
          coupon_name: 'yhq1',
          money: '10.00',
          max_fetch: 2,
          at_least: '12.00',
          coupon_type_id: 22,
          start_time: 1558518544,
          end_time: 1558691347,
          desc: '',
          receive_quantity: 0,
          already_received: 0
        }
      ],
      stepwise: [
        {
          quantity: 2,
          price: '1.00'
        },
        {
          quantity: 5,
          price: '1.00'
        },
        {
          quantity: 10,
          price: '2.00'
        }
      ]
    }
  });
});

router.post('/addCart', function(req, res, next) {
  res.send({
    code: 0,
    message: 'success',
    data: {
      list: [
        {
          goods_unit: '袋',
          min_buy: 10,
          goods_id: 6,
          goods_name: '金银花',
          promotion_price: '9.99',
          market_price: '12.00',
          price: '10.00',
          stock: 20,
          u_min_stock_alarm: 10,
          max_buy: 0,
          is_hot: 1,
          is_recommend: 1,
          is_new: 0,
          sales: 279,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190412/a9f07f7b41f7b2756f7b284834da7a573.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190412/a9f07f7b41f7b2756f7b284834da7a571.png',
          initial: 'J',
          state: 1,
          province_name: '四川省',
          goods_stock: 37,
          sku_name: '100g 黑色 ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190412/a9f07f7b41f7b2756f7b284834da7a571.png',
          cart_id: 696,
          sku_id: 10,
          old_price: '9.99',
          num: 3,
          stepwise: [
            { quantity: 7, price: '1.00' },
            { quantity: 30, price: '5.00' }
          ]
        },
        {
          goods_unit: '袋',
          min_buy: 10,
          goods_id: 6,
          goods_name: '金银花',
          promotion_price: '9.99',
          market_price: '12.00',
          price: '10.00',
          stock: 8,
          u_min_stock_alarm: 10,
          max_buy: 0,
          is_hot: 1,
          is_recommend: 1,
          is_new: 0,
          sales: 279,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190412/8932cfea73779b42014d71edcc646de43.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190412/8932cfea73779b42014d71edcc646de41.png',
          initial: 'J',
          state: 1,
          province_name: '四川省',
          goods_stock: 37,
          sku_name: '100g 浅黑色 ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190412/8932cfea73779b42014d71edcc646de41.png',
          cart_id: 697,
          sku_id: 11,
          old_price: '9.99',
          num: 8,
          stepwise: [
            { quantity: 7, price: '1.00' },
            { quantity: 30, price: '5.00' }
          ]
        },
        {
          goods_unit: '件',
          min_buy: 2,
          goods_id: 20,
          goods_name: '蒲公英',
          promotion_price: '28.00',
          market_price: '35.00',
          price: '25.00',
          stock: 100,
          u_min_stock_alarm: 0,
          max_buy: 0,
          is_hot: 0,
          is_recommend: 0,
          is_new: 0,
          sales: 167,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190411/a542249ffb59f6511adfc74d260ddabd3.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190411/a542249ffb59f6511adfc74d260ddabd1.png',
          initial: 'p',
          state: 1,
          province_name: '四川省',
          goods_stock: 397,
          sku_name: '100g 深色 ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190411/a542249ffb59f6511adfc74d260ddabd1.png',
          cart_id: 698,
          sku_id: 84,
          old_price: '28.00',
          num: 1,
          stepwise: [
            { quantity: 3, price: '2.00' },
            { quantity: 5, price: '4.00' }
          ]
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
          sales: 62,
          pic_cover_small:
            'http://10.168.1.222:89/upload/goods/20190426/4ce4d8121885d6cbb62dc6e4422f847c3.png',
          pic_cover:
            'http://10.168.1.222:89/upload/goods/20190426/4ce4d8121885d6cbb62dc6e4422f847c1.png',
          initial: '',
          state: 1,
          province_name: '四川省',
          goods_stock: 8,
          sku_name: 'kg ',
          pic_cover_big:
            'http://10.168.1.222:89/upload/goods/20190426/4ce4d8121885d6cbb62dc6e4422f847c1.png',
          cart_id: 700,
          sku_id: 139,
          old_price: '0.01',
          num: 1
        }
      ]
    }
  });
});

module.exports = router;

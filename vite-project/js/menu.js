
const menu = [
  {
    name: `TRIO MILK TEA`,
    boba: true,
    price: 6.95,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/fr78rt0x2xnxzkgyw23d",
    inStock: true,
    type: `Milk Tea`,
  },
  {
    name: `OOLONG MILK TEA`,
    boba: true,
    price: 5.85,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/w18d7qvaeml3zrrioipo",
    inStock: true,
    type: `Milk Tea`
  },
  {
    name: `MATCHA N' JASMINE`,
    boba: false,
    price: 7.5,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/dugptzuiuvgep1uma9c5",
    inStock: false,
    type: `Milk Tea`
  },
  {
    name: `COCOA BOBA LATTE`,
    boba: true,
    price: 7.5,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/vywuycpyom18nyla0vie",
    inStock: false,
    type: `Milk Tea`
  },
  {
    name: `STRAWBERRY MATCHA LATTE`,
    boba: false,
    price: 7.25,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/mvsi6wuskharqkea9fl6",
    inStock: true,
    type: `Milk Tea`
  },
  {
    name: `HOJICHA LATTE`,
    boba: false,
    price: 7.25,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/ao2kekvd0orkpjty8kud",
    inStock: true,
    type: `Milk Tea`
  },
  {
    name: `GLUTINOUS RICE MILLK TEA`,
    boba: false,
    price: 7.25,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/j6uhizsp3gepeiyngutz",
    inStock: true,
    type: `Milk Tea`
  },
  //=====Winter Limited====
  {
    name: `OATSOME BOBA MILK TEA`,
    boba: true,
    price: 7.95,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/btumbeqedf6ca1wjpmgg",
    inStock: true,
    type: `Winter Limited`
  },
  {
    name: `OATSOME BOBA TEA LATTE`,
    boba: true,
    price: 8.5,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/ajnhci4picao0ees9ycj",
    inStock: true,
    type: `Winter Limited`
  },
  {
    name: `THÉ PERSIMMON MILK`,
    boba: false,
    price: 8.95,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/usnhxaxzv2hixpskxdkz",
    inStock: true,
    type: `Winter Limited`
  },
  {
    name: `THÉ OSMANTHUS PLUM`,
    boba: false,
    price: 8.5,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/yvatr8cra8ieqpiy3gyv",
    inStock: true,
    type: `Winter Limited`
  },
  //======fall===
  {
    name: `BROWN SUGAR GINGER LATTE`,
    boba: false,
    price: 7.5,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/vdm1wrsxxuoyn5lpmfxy",
    inStock: true,
    type: `Fall Limited`
  },
  {
    name: `PAPAYA BOBO`,
    boba: true,
    price: 9.25,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/npkqatqdjqkzheqqrfbm",
    inStock: true,
    type: `Fall Limited`
  },
  {
    name: `MOCHI PUMMPKIN`,
    boba: false,
    price: 8.5,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/soatb4i0nzw9ks8p1fqt",
    inStock: true,
    type: `Fall Limited`
  },
  {
    name: `BROWN SUGAR GINGER MILK TEA`,
    boba: false,
    price: 7.5,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/d6sqj3uzybjh3ejv5ome",
    inStock: true,
    type: `Fall Limited`
  },
  //======specials
  {
    name: `DEWY GRAPE N' LIME`,
    boba: false,
    price: 8.25,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/wr2bjkllaqxt5zbddpex",
    inStock: true,
    type: `Specials`
  },
  {
    name: `COCO MANGO`,
    boba: true,
    price: 8.25,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/xwwnjwu49wo5ltgwknlx",
    inStock: true,
    type: `Specials`
  },
  {
    name: `POMEGRANATE BURST`,
    boba: false,
    price: 8.75,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/imp3pucpzosh4wsiyq9a",
    inStock: false,
    type: `Specials`
  },
  {
    name: `THAI BRULEE`,
    boba: false,
    price: 7.25,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/wywcjwwaxsmnohqdoud2",
    inStock: true,
    type: `Specials`
  },
  {
    name: `MOCHI N' RICE`,
    boba: false,
    price: 8.25,
    image:"https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_115,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_123/nhhpvxciltipd0iyl9jq",
    inStock: false,
    type: `Specials`
  },
  
];
export { menu };
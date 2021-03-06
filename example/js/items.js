// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
   {
      "name" : "Closed Door",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/646/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js",
      "type" : "7"
    }, 
    {
      "name" : "Open Door",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/617/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/174/open_door.js",
      "type" : "7"
    }, 
    {
      "name" : "Window",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/618/thumbnail_window.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/165/whitewindow.js",
      "type" : "3"
    }, 
    {
      "name" : "Chair",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/182/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/132/gus-churchchair-whiteoak.js",
      "type" : "1"
    }, 
    {
      "name" : "Red Chair",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/739/thumbnail_tn-orange.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/723/ik-ekero-orange_baked.js",
      "type" : "1"
    },
    {
      "name" : "Blue Chair",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/740/thumbnail_ekero-blue3.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/722/ik-ekero-blue_baked.js",
      "type" : "1"
    },
    {
      "name" : "Dresser - Dark Wood",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/240/thumbnail_matera_dresser_5.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/189/DWR_MATERA_DRESSER2.js",
      "type" : "1"
    }, 
    {
      "name" : "Dresser - White",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/500/thumbnail_img25o.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/478/we-narrow6white_baked.js",
      "type" : "1"
    },  
    {
      "name" : "Bedside table - Shale",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/386/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/357/bd-shalebedside-smoke_baked.js",
      "type" : "1"
    }, 
    {
      "name" : "Bedside table - White",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/382/thumbnail_arch-white-oval-nightstand.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/353/cb-archnight-white_baked.js",
      "type" : "1"
    }, 
    {
      "name" : "Wardrobe - White",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/735/thumbnail_TN-ikea-kvikine.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/717/ik-kivine_baked.js",
      "type" : "1"
    }, 
    {
      "name" : "Full Bed",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/72/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/39/ik_nordli_full.js",
      "type" : "1"
    }, 
    {
      "name" : "Bookshelf",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/419/thumbnail_kendall-walnut-bookcase.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/388/cb-kendallbookcasewalnut_baked.js",
      "type" : "1"
    }, 
        {
      "name" : "Media Console - White",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/434/thumbnail_clapboard-white-60-media-console-1.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/400/cb-clapboard_baked.js",
      "type" : "1"
    }, 
        {
      "name" : "Media Console - Black",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/435/thumbnail_moore-60-media-console-1.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/404/cb-moore_baked.js",
      "type" : "1"
    }, 
       {
      "name" : "Sectional - Olive",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/547/thumbnail_img21o.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/526/we-crosby2piece-greenbaked.js",
      "type" : "1"
    }, 
    {
      "name" : "Sofa - Grey",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/627/thumbnail_rochelle-sofa-3.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/596/cb-rochelle-gray_baked.js",
      "type" : "1"
    }, 
        {
      "name" : "Wooden Trunk",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/372/thumbnail_teca-storage-trunk.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/343/cb-tecs_baked.js",
      "type" : "1"
    }, 
        {
      "name" : "Floor Lamp",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/641/thumbnail_ore-white.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/614/ore-3legged-white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Coffee Table - Wood",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/104/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/68/ik-stockholmcoffee-brown.js",
      "type" : "1"
    }, 
    {
      "name" : "Side Table",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/188/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/138/GUSossingtonendtable.js",
      "type" : "1"
    }, 
    {
      "name" : "Dining Table",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/369/thumbnail_scholar-dining-table.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/340/cb-scholartable_baked.js",
      "type" : "1"
    }, 
    {
      "name" : "Dining table",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/143/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/100/BlakeAvenuejoshuatreecheftable.js",
      "type" : "1"
    },
    {
      "name" : "Blue Rug",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/467/thumbnail_cb-blue-block60x96.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/440/cb-blue-block-60x96.js",
      "type" : "8"
    },
    {
      "name" : "NYC Poster",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/111/thumbnail_nyc2.jpg",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/77/nyc-poster2.js",
      "type" : "2"
    }
   /*     
   {
      "name" : "",
      "image" : "",
      "model" : "",
      "type" : "1"
    }, 
    */
  ]



  var itemsDiv = $("#items-wrapper")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var html = '<div class="col-sm-4">' +
                '<a class="thumbnail add-item" model-name="' + 
                item.name + 
                '" model-url="' +
                item.model +
                '" model-type="' +
                item.type + 
                '"><img src="' +
                item.image + 
                '" alt="Add Item"> '+
                item.name +
                '</a></div>';
    itemsDiv.append(html);
  }
});
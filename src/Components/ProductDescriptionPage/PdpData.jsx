import Potato from '../../images/item-01.jpg'; 
import Banana from '../../images/item-02.jpg';
import Drumsticks from '../../images/item-03.jpg';
import Orange from '../../images/item-04.jpg';

var ItemsDataObject = {
 "products" : [
     {
        "name":"Potato", 
        "id":1, 
        "price":30, 
        "available":1, 
        "vendor":"Himachal Pvt Ltd", 
        "category":"Vegtables",
        "Image" : Potato
     },{
        "name":"Banana", 
        "id":2, 
        "price":50, 
        "available":1, 
        "category":"Fruits",
        "vendor": "Organic farms",
        "Image" : Banana
    },{
        "name":"Drumsticks", 
        "id":3, 
        "price":20, 
        "available":0, 
        "category":"Vegetables", 
        "vendor":"Mallikarjuna farms",
        "Image" : Drumsticks
    },{
        "name":"Orange", 
        "id":4, 
        "price":25, 
        "available":1, 
        "vendor":"Nagpur farms", 
        "category":"Fruits",
        "Image" : Orange
    }
 ]   
}

export default ItemsDataObject;
zm
==

##Zero Markup JS templating function

This function allows you to write HTML in javascript.

## Example
    var Zm = require("./lib/zm");
    var div = new Zm.Div();
    div.addContent("this is a div")
    			.addClass("no_wrap blue funny_class")
    			.setAttr("clown","true")
    			.setAttr("scary","yes");
 
    var html = div.print();
    console.log(html);
    
## Output of example

    <div class=" no_wrap blue funny_class"  clown="true" scary="yes" >this is a div</div> 
    
    
## Better Example in a Backbone View, as a function called `getTemplate`

### * akon is an alias for addContent *

    var ShoppingCartView = Backbone.View.extend({
    	el:"#shopping_cart",
    	initialize: function(){
    		this.collection.on("add", this.render, this); 
    	},
    	render: function(){
    		var total = this.getTotal();
    		this.$el.html(this.getTemplate());
    	},
    	getTotal: function(){
    		var sum = 0;
    		_.each(this.collection.models, function(product){
    			sum += parseFloat(product.get("price"));
    		});
    		return parseFloat(sum).toFixed(2);
    	},
    	getTemplate: function(){
    		var header_row = new Zm.Tr().akon(new Zm.Td().akon("Product")).akon(new Zm.Td().akon("Price"));
    		var table = new Zm.Table().addClass("shopping_cart_table width_all").akon(header_row);
    		_.each(this.collection.models, function(model){
    			table.akon(new Zm.Tr().akon(new Zm.Td().akon(model.get("title"))).akon(new Zm.Td().akon(new Zm.Span().addClass("price").akon(model.get("price")))));
    		});
    		return new Zm.H1("Your Cart").print() + table.print();
    	}
    });
    
## This produces the html below:

    <h1   >Your Cart</h1><table class=" shopping_cart_table width_all"  ><tr   ><td   >Product</td><td   >Price</td></tr><tr   ><td   >Tylenol</td><td   ><span class=" price"  >20.00</span></td></tr></table> 
    
    
    






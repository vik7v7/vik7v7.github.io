
$(document).ready(function(){
	
	 
	 /*סכאהיונ הטאןאחאמם*/
	 $("#slider").slider({
		 min: 0,
		 max: 30000,
		 values: [0,30000],
		 range: true
	 });
	 
	 $("#slider").slider({
		min: 0,
		max: 30000,
		values: [0,30000],
		range: true,
		stop: function(event, ui) {
			$("input#minCost2").val($("#slider").slider("values",0));
			$("input#maxCost2").val($("#slider").slider("values",1));
		},
		slide: function(event, ui){
			$("input#minCost2").val($("#slider").slider("values",0));
			$("input#maxCost2").val($("#slider").slider("values",1));
		}
	 });
	
	 $("input#minCost2").change(function(){
		var value1=$("input#minCost2").val();
		var value2=$("input#maxCost2").val();

		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost2").val(value1);
		}
		$("#slider").slider("values",0,value1);	
	 });

		
	 $("input#maxCost2").change(function(){
		var value1=$("input#minCost2").val();
		var value2=$("input#maxCost2").val();
		
		if (value2 > 30000) { value2 = 30000; $("input#maxCost2").val(30000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost2").val(value2);
		}
		$("#slider").slider("values",1,value2);
	 });

	

	 
	 
});
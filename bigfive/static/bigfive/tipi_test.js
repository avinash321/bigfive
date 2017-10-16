$(document).ready(function(){
    $("#myForm").submit(function(e){
        e.preventDefault();
        var name = $("#name").val();
        if(!name.length) {
			$("#myspan").text("Please enter the Name");
        	$("#name").focus();
			return false;
		}
		numbers = []
        $("input[type='radio']").each(function()  {
            numbers.push($(this).attr('name'));
        });
    numbers = $.unique(numbers);
        for (var i = 0; i < numbers.length; i++){
            if(!$('input:radio[name='+numbers[i]+']').is(':checked')) {
                $("#myspan").text("Please Answer Question:"+ (i+1));
                return false;
            }
        }
		saveAnswers();
        });
});

function getSelection() {
	var mySelection = $('input:radio:checked').map(function() {
        return this.value;
	}).get();
	return mySelection;
}

function getPersonality() {
    var name = $("#name").val();
    var answers= getSelection();
    var a1 = parseFloat(answers[0])
    var a2 = parseFloat(answers[1])
    var a3 = parseFloat(answers[2])
    var a4 = parseFloat(answers[3])
    var a5 = parseFloat(answers[4])
    var a6 = parseFloat(answers[5])
    var a7 = parseFloat(answers[6])
    var a8 = parseFloat(answers[7])
    var a9 = parseFloat(answers[8])
    var a10 = parseFloat(answers[9])
    //Reversed Questions:
    a2 = reverse(a2)
    a4 = reverse(a4)
    a6 = reverse(a6)
    a8 = reverse(a8)
    a10 = reverse(a10)
    //Code for reverse   1,2,3,4,5,6,  E A C N O
    E_score = a1 + a6
    A_score = a2 + a7
    C_score = a3 + a8
    N_score = a4 + a9
    O_score = a5 + a10
       //print E_score, A_score, C_score, N_score, O_score
    E_avg = E_score/2
    A_avg = A_score/2
    C_avg = C_score/2
    N_avg = N_score/2
    O_avg = O_score/2
    score_list = [E_avg, A_avg, C_avg, N_avg, O_avg]
    return score_list
}

function print_Result(score){
    score_list = score
    var total = 0;
    for (var i = 0; i < score_list.length; i++) {
        total += score_list[i];
    }
    mean_point = total/score_list.length;
    personality_list = ["Extraversion", "Agreeableness", "Conscientiousness","Neuroticism", "Openness to Experience"]
    high = Math.max.apply(null, score_list)
    high_index = score_list.indexOf(high)
    result = personality_list[high_index]
    console.log("Your Personality is:")
    $("#result_span").text("Your Personality is: "+ result);

    result_list = []
    for (var i = 0; i < score_list.length; i++){
        if (score_list[i] == high){
            result_list.push('"HIGH"')
            }
        else if(score_list[i] >= mean_point){
            result_list.push('"AVERAGE"')
            }
        else if (score_list[i]< mean_point){
            result_list.push('"LOW"')
            }
    }
    console.log(result_list)
    //Printing Result
    console.log("Your TIPI Score is:")
    msg= ""
    for (var i = 0; i < score_list.length; i++){
        console.log(personality_list[i] + "------------------>" +
        result_list[i] + " (" + score_list[i] + ")")
        msg = msg + personality_list[i]  + ": " +
        result_list[i] + " (" + score_list[i] + ")" + " , "
    }
    $("#tipi_score_span").text(msg);

    console.log("Personality Code:")
    code_str = ""
    for (var i = 0; i < result_list.length; i++){
        code = result_list[i]
        code_str = code_str + code.charAt(1)
    }
    console.log(code_str)
    $("#tipi_code_span").text("Your Personality Code is: "+ code_str);
}

function saveAnswers(){
    var score = getPersonality();
    print_Result(score)
    var name = $("#name").val();
    var answers= getSelection();
    var mydata_obj = {"name":name,"answers":answers,"score":score};
	var myjson_obj = JSON.stringify(mydata_obj);
    console.log(myjson_obj)
	//POST - send JSON data to Python/Django server
	$.post({
	  url: "/test",
	  type: "POST",
	  datatype: 'json',
	  data: myjson_obj,
	  async: true,
      processData: true,
	  success: function() {
	    alert('Your data is saved , Thank you!');
	    clearForm();
	  },
	  error: function() {
	    alert('Error occured while saving your Data');
	  }
	});
}

function reverse(a){
	if (a==1){
		return 7
		}
	else if (a==2){
		return 6
		}
	else if (a==3){
		return 5
		}
	else if (a==4){
		return 4
		}
	else if (a==5){
		return 3
		}
	else if (a==6){
		return 2
		}
	else if (a==7){
		return 1
		}
}

function clearForm()
{
    $("#name").val("");
    $('input:radio').prop('checked',false);
    $("#myspan").val("");
}


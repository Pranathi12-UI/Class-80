names_array=[]

function submit()
{
var display_name_array =[];
for (var j = 1; j <= 4; j++)
{
    var name = document.getElementById("name_of_people_"+j).value;
    console.log(name);
    names_array.push(name);
}

    console.log(names_array);
var length =names_array.length;
console.log(length);
for (var k=0; k<length;k++)
{
    display_name_array.push("<h4>NAME -  "+ names_array[k] + "</h4>");
    console.log(display_name_array);
}

    document.getElementById("display_name_with_comma").innerHTML = display_name_array;
    var remove_comma = display_name_array.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_comma").innerHTML = remove_comma;

    document.getElementById("submit_button").style.display ="none";
    document.getElementById("sort_button").style.display ="inline-block";
}

function sorting()
{
    var display_name_array =[];
    names_array.sort();
    console.log(names_array);
    var length =names_array.length;
console.log(length);
for (var k=0; k<length;k++)
{
    display_name_array.push("<h4>NAME -  "+ names_array[k] + "</h4>");
    console.log(display_name_array);
}

    var remove_comma = display_name_array.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_comma").innerHTML = remove_comma;
}

//Additional Activity

function new_update()
{
    document.getElementById("display_name_without_comma").innerHTML = "<h1>" + names_array + "</h1>";
}
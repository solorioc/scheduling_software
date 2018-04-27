// JavaScript for Phone Application Demo Program
// Jim Skon, Kenyon College, 2017
var operation; // operation
var editid;
var tablebuilt = false;
var infobuilt = false;
//src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
//src="https://code.jquery.com/jquery-3.2.1.min.js";


$(document).ready(function able() {
  $('#VolunteerList').hide();
  $('#searchinfo').hide();
  $('#VolInfo').hide();
  $('#VolInfoTitle').hide();
  console.log("hidden");
  operation = "SearchAll";


  $('#SearchOptions li a').click(function() {
    console.log("pick!" + $(this).text());
    //$(this).parents(".btn-group").find('.selection').text($(this).text());
    operation = $(this).text();
    //changeOperation(operation);
  });

  /* $("#editEntry").click(function(){
  	 $('#VolInfo').show();
  	$('#VolInfoTitle').show();
  	});
  	*/


});

/* var response = prompt("Enter Password:");

while (response != "123")
{
	response = prompt("Wrong Password, please re-enter:");
}
alert("Hello, Molly" );*/



changeOperation(operation);

function changeOperation(operation) {

  if (operation == "SearchAll") {
    $('#VolunteerList').show();

    var result = '<table class="table table-hover borderless" style="font-size:12px" >';
    result += '<thead class="thead-dark tablehead-center">';

    result += '<tr>';
    result += '<th scope="col" style="border-radius:5px 0 0 0">First</th>';
    result += '<th scope="col">Last</th>';
    result += '<th scope="col">Side</th>';
    result += '<th scope="col" style="border-radius:0 5px 0 0">Option</th>';

    result += '</tr>';
    result += '</thead>';
    result += '<tbody>';
    result += ' <tr>';
    result += '<td class="table-center">Mary</td>';
    result += ' <td class="table-center">Otto</td>';
    result += '<td class="table-center">F or M</td>';

    result += '<td class="table-center"><button type="button" id="one2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Jacob</td>';
    result += '<td class="table-center">Thornton</td>';
    result += '<td class="table-center">M</td>';

    result += '<td class="table-center"><button type="button"  id="two2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Laney</td>';
    result += '<td class="table-center">the Bird</td>';
    result += ' <td class="table-center">F</td>';

    result += '<td class="table-center"><button type="button"  id="three2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Mark</td>';
    result += '<td class="table-center">Otto</td>';
    result += '<td class="table-center">M</td>';

    result += '<td class="table-center"><button type="button"  id="four2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Jacob</td>';
    result += '<td class="table-center">Thornton</td>';
    result += '<td class="table-center">M</td>';

    result += '<td class="table-center"><button type="button"  id="five2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '  </tr>';
    result += ' <tr>';
    result += '  <td class="table-center">Lake</td>';
    result += '<td class="table-center">the Bird</td>';
    result += '<td class="table-center">F</td>';

    result += '<td class="table-center"><button type="button"  id="six2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Larry</td>';
    result += '<td class="table-center">the Bird</td>';
    result += '<td class="table-center">F</td>';

    result += '<td class="table-center"><button type="button"  id="seven2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Larry</td>';
    result += '<td class="table-center">the Bird</td>';
    result += '<td class="table-center">F</td>';

    result += '<td class="table-center"><button type="button"  id="eight2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Larry</td>';
    result += '<td class="table-center">the Bird</td>';
    result += '<td class="table-center">M</td>';

    result += '<td class="table-center"><button type="button"  id="nine2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '</tbody>';
    result += '</table>';

    $('#VolunteerList').append(result);



  } else {
    //$('#searchresults').clear();
    //getMatches();
    $('#VolunteerList').hide();
    $('#searchinfo').hide();
    $('#VolInfo').hide();
    //$('#VolInfoTitle').hide();

  }

}

;(function($){
	
		function ajax() {
		
			var request = new XMLHttpRequest();
			
			request.onreadystatechange = function() {

			console.log(request.readyState);

			if (request.readyState === 4 && request.status == 200) {

				var data = JSON.parse(request.responseText);

				var employees = '<ul class="bulleted">'
				

				for (var i = 0; i < data.length; i++) {

					var status = data[i]['inoffice'];

					var li = status ? 'in':'out';
				
				employees += '<li class="' + li + '">' + (data[i]['name']) + '<li>';	
			}

				employees += '</ul>';
			
			}

			document.getElementById('employeeList').innerHTML = employees;
		}

		request.open('GET', 'data/employees.json');

		request.send();

		};

	$(document).ready(function(){	
		
		ajax();

	});

})(jQuery);

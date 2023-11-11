
			var dayToday = new Date();
			var days = ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"];
			document.getElementById("beforeYesterday").innerHTML = days.at(dayToday.getDay() - 2);
			document.getElementById("yesterday").innerHTML = days.at(dayToday.getDay() - 1);
			document.getElementById("tomorrow").innerHTML = days.at(dayToday.getDay() - 7 + 1);
			document.getElementById("afterTomorrow").innerHTML = days.at(dayToday.getDay() - 7 + 2);
			
			var dateBeforeYesterday = new Date();
			dateBeforeYesterday.setDate(dateBeforeYesterday.getDate()-2);
			var dateBeforeYesterday = dateBeforeYesterday.toLocaleString('ru', {
					day: 'numeric'
			});  

			document.getElementById("dateBeforeYesterday").innerHTML = dateBeforeYesterday;
			 
			var dateYesterday = new Date();
			dateYesterday.setDate(dateYesterday.getDate()-1);
			var dateYesterday = dateYesterday.toLocaleString('ru', {
					day: 'numeric'
			});  

			document.getElementById("dateYesterday").innerHTML = dateYesterday; 

			var dateToday = new Date();
			dateToday.setDate(dateToday.getDate());
			var dateToday = dateToday.toLocaleString('ru', {
					day: 'numeric'
			});  

			document.getElementById("dateToday").innerHTML = dateToday; 

			var dateTomorrow = new Date();
			dateTomorrow.setDate(dateTomorrow.getDate()+1);
			var dateTomorrow = dateTomorrow.toLocaleString('ru', {
					day: 'numeric'
			});  

			document.getElementById("dateTomorrow").innerHTML = dateTomorrow; 

			var dateAfterTomorrow = new Date();
			dateAfterTomorrow.setDate(dateAfterTomorrow.getDate()+2);
			var dateAfterTomorrow = dateAfterTomorrow.toLocaleString('ru', {
					day: 'numeric'
			});  

			document.getElementById("dateAfterTomorrow").innerHTML = dateAfterTomorrow; 
				
			function openDay(evt, dayName) {
				var i, tabcontentCalendar, tablinks;
				tabcontentCalendar = document.getElementsByClassName("tabcontentCalendar");
				for (i = 0; i < tabcontentCalendar.length; i++) {
					tabcontentCalendar[i].style.display = "none";
				}
				tablinks = document.getElementsByClassName("tablinks");
				for (i = 0; i < tablinks.length; i++) {
					tablinks[i].className = tablinks[i].className.replace(" active", "");
				}
				document.getElementById(dayName).style.display = "block";
				evt.currentTarget.className += " active";
			}
			
			document.getElementById("dateToday").click();

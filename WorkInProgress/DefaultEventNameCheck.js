var DefaultEventNameCheck = function(MyEvent){
	var bNameIsValid = 0;
	var i = 0;
	while (!bNameIsValid){
		var tempEventName = concat(MyEvent.name, i);
		for (int e = 0; e < event.list.lenghth; e++){
			if (MyEvent.name == event.name){
				i++;
				var tempEventName = concat(MyEvent.name, i);
				e = 0;
			}
		}

		bNameIsValid = true;
	}

	MyEvent.name = tempEventName;
}
function illegalDataErrors(number){
	switch(number){
		case 1: 
			throw new Error ("Изберете го наредниот чекор!(Изберете дали ќе оди на преглед, одобрување, архивирање или дали е завршен процесот)");
			break;
		default: 
			break;
	} 
}
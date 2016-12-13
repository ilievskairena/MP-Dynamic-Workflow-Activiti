function illegalDataErrors(number){
	switch(number){
		case 1: 
			throw new Error ("Одберете го наредниот чекор!(Одберете дали ќе оди на преглед, одобрување, архивирање или дали процесот е завршен)");
			break;
		case 2: 
			throw new Error ("Одберете задолжено лице за наредниот чекор!");
			break;
		case 3: 
			throw new Error ("Не можете да ја одберете опцијата Завршен процес на незапочнат процес!");
			break;
		case 4: 
			throw new Error ("Одберете го наредниот чекор!(Одберете дали ќе оди на преглед, одобрување или архивирање)");
			break;
		default: 
			break;
	} 
}
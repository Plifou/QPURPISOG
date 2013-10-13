

function message(thatBody, pseudo) {
	
	this.sender = pseudo;
	this.body = thatBody;
	this.next = undefined;
}


function messageQueue(firstMessage, maxSize) {
	
	firstMessage = new message(firstMessage, "System");
	this.head = firstMessage;
	this.last = firstMessage;
	this.size = 1;
	this.maxSize = maxSize;
	
}

messageQueue.prototype.pop = function() {
	
	this.head = this.head.next;
}

messageQueue.prototype.post = function(body, pseudo) {
	
	if (this.size === this.maxSize) {
		this.pop();
		this.last.next = new message(body, pseudo);
		this.last = this.last.next;
	}
	else {
		this.last.next = new message(body, pseudo);
		this.last = this.last.next;
		this.size++;
	}
	
	
}

messageQueue.prototype.printAll = function(chat,currentMessage) {
	
	var current = this.head;
	
	for(var e = 0; e < this.size; ++e) {
		chat.fillStyle = "rgb(0,20,180)";
		chat.fillText(current.sender,10,(20+(e*20)));
		chat.fillText(current.body,60,(20+(e*20)));
		current = current.next;
		
	}
	chat.fillText(currentMessage,50,520);
	
}

messageQueue.prototype.flush = function() {
	
	this.head.next = undefined;
	this.last = this.head;
	
}
messageQueue.prototype.stringToSend = function() {
	
	if (this.size > 1) {
		string = ",message:[";
		current = this.head;
		while (current !== this.last) {
			current = current.next;
			string += this.body+",";
		}
		string += this.body+"]";
		return string;
	}
	else {return "";}
}
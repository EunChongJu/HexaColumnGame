
// 이 스크립트는 게임을 표시하기 이전에 이론적으로, 논리적으로 표시되는 게임의 자체 엔진 되시겠다.

// 이 게임에 필요한 요소: Queue
// Queue (length)
var Queue = function() {
	var queue = [];
	
	this.enqueue = function(data) {
		queue.push(data);
	};
	
	this.dequeue = function() {
		return queue.shift();
	};
	
//	this.view = function() {
//		return queue;
//	};
	
	this.size = function() {
		return queue.length;
	};
	
//	this.peek = function() {
//		return this.view()[this.size];
//	};
	
	this.clear = function() {
		for (var i = 0; i < queue.length; i++) this.dequeue();
	};
}

// HexaColumn 게임의 클래스
var HexaColumn = function(w, h, n) {	// width, height, number : (너비, 높이, 아이템 타입 갯수)
	// 나중에 방해요소 아이템을 추가할 계획임
	
	// 기본 요소
	var width = w;
	var height = h;
	var item = n;
	
	// 생성자가 생기면 먼저 맵을 생성하도록 한다.
	
	// 맵 (아이템 맵, 마스크 맵) - 이 맵은 배열로 되있으나 배열의 요소에서는 스택 형태를 띈다.
	var itemMap = [];
	var maskMap = [];
	
	// Queue라는 클래스 형태를 만들어서 생성자를 만드는게 제일 좋을 것 같다.
	
	// queue (내려오는 아이템 3개)
	var itemQueue = new Queue();
	
	this.suppleItemQ = function() {
		itemQueue.enqueue(itemQueue.dequeue());
	}
	
	this.importItemQ = function(nextQ) {
		for (var i = 0; i < nextQ.length; i++) {
			itemQueue.enqueue(nextQ[i]);
		}
	};
	
	this.exportItemQ = function() {
		var tmpQ = [];
		
		for (var i = 0; i < this.itemQueue.length; i++) {
			tmpQ.push(itemQueue.dequeue());
		}
		
		return tmpQ;
	}
	
	// queue (다음으로 내려갈 예정인 아이템 3개)
	var nextQueue = new Queue();
	
	this.createNextQ = function() {
		// set random item -> nextQueue
		for (var i = 0; i < 3; i++) {
			nextQueue.enqueue();
		}
	}
	
	this.exportNextQ = function() {
		var tmpQ = [];
		
		for (var i = 0; i < this.nextQueue; i++) {
			tmpQ.push(nextQueue.dequeue());
		}
		
		return tmpQ;
	}
	
	// Methods
	this.createMap = function() {
		var map = new Array(width);
		for (var i = 0; i < width; i++) map[i] = new Array(height);
	};
	
	this.start = function() {
		var map = this.createMap(width, height);
		itemMap = map;
		maskMap = map;
	};
	
	this.over = function() {
		var map = this.createMap(width, height);
		itemMap = map;
		maskMap = map;
	};
	
	this.startItem = function() {
		
	}
	
	this.nextItem = function() {
		this.importItemQ(this.exportNextQ());
	}
	
}

var hc = new HexaColumn(6, 12, 6);

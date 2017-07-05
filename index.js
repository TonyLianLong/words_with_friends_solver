const RACK_SIZE = 7;
const BOARD_SIZE = 11;
const WORD_LOCATION = "words.txt";

document.addEventListener('DOMContentLoaded', function() {
	var app = new Vue({
		el: '#app',
		data: {
			board: function() {
				var tb = [];
				for (var i = 0; i < BOARD_SIZE; i++) {
					tb.push([]);
					for (var j = 0; j < BOARD_SIZE; j++) {
						tb[i].push("");
					}
				}
				return tb;
			}(),
			rack: function() {
				var r = [];
				for (var i = 0; i < RACK_SIZE; i++) {
					r.push("");
				}
				return r;
			}(),
			error: "",
			readOnlyMode: false,
			tempBoard: [],
			wordlist: function() {
				var output = "hi";
				$.get({
					url: 'words.txt',
					success: function(data) {
						output = data;
					},
					async: false
				});
				return output;
			}()
		},
		methods: {
			solve: function() {
				// beginning of solving process
				this.readOnlyMode = true;
				// Verify inputs
				for (var i = 0; i < RACK_SIZE; i++) {
					if (this.rack[i].length != 1) {
						alert("Invalid rack at position " + i.toString());
						return;
					}
					if (this.rack[i] === " ") {
						continue;
					}
					this.rack[i] = this.rack[i].toLowerCase();
					if (this.rack[i][0] > 'z' || this.rack[i][0] < 'a') {
						alert("Invalid rack at position " + i.toString());
						return;
						
					}
				}
				for (var r = 0; r < BOARD_SIZE; r++) {
					for (var c = 0; c < BOARD_SIZE; c++) {
						if (board[r][c].length > 1) {
							alert("Invalid board at position:"
								+ r.toString() + "," + c.toString());
							return;
						}
						if (board[r][c].length == 1) {
							board[r][c] = board[r][c].toLowerCase();
							if (board[r][c] > 'z' || board[r][c] < 'a') {
								alert("Invalid board at position:"
									+ r.toString() + "," + c.toString());
								return;
							}
						}
					}
				}
				// beginning of solving process
				this.readOnlyMode = true;
			},
			clearSolve: function() {
				this.readOnlyMode = false;
			},
			reset: function() {
				this.readOnlyMode = false;
			},
		},
	});
});












function wordChecker(wordArray , boardArray) {
	for (var y = 0 ; y < boardArray.length ; y++) {
		for (var x = 0 ; x < boardArray[0].length ; x++) {
			var square = boardArray[y][x];
			var side = false;
			var possiblity = false;
			if (y - 1 < 0 || x - 1 < 0 || y + 1 > boardArray.length || x + 1 > boardArray[0].length) {
				side = true;
			} else {
				var adjacentSquares = [boardArray[y - 1][x] , boardArray[y + 1][x] , boardArray[y][x - 1] , boardArray[y][x + 1]];
				for (var i = 0 ; i < adjacentSquares.length ; i++) {
					if (adjacentSquares[i] !== "" &&) {
						possibility = true;
					}
				}
			}
		}
	}
};
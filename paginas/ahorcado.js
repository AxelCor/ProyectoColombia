(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.stick2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#756E54").ss(7,2,0,3).p("ABzheIjlC9");
	this.shape.setTransform(11.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stick2, new cjs.Rectangle(-4.9,-4.9,32.9,28.9), null);


(lib.stick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#756E54").ss(5,2,0,3).p("AgEkXIAJIv");
	this.shape.setTransform(0.5,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stick, new cjs.Rectangle(-2.5,-2.5,6.1,61.1), null);


(lib.rope = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#756E54").ss(7,2,0,3).p("AAAhPIAACf");
	this.shape.setTransform(0,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rope, new cjs.Rectangle(-3.5,-3.5,7,23), null);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#756E54").ss(5.8,2,0,3).p("AhmhmQArgqA7AAQA8AAArAqQAqArAAA7QAAA8gqArQgrAqg8AAQg7AAgrgqQgqgrAAg8QAAg7Aqgrg");
	this.shape.setTransform(14.5,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6753D").s().p("AhmBnQgqgrAAg8QAAg7AqgrQArgqA7AAQA8AAArAqQAqArAAA7QAAA8gqArQgrAqg8AAQg7AAgrgqg");
	this.shape_1.setTransform(14.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-2.8,-2.8,34.699999999999996,34.699999999999996), null);


(lib.button_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#242077").s().p("AxVFoQhkAAAAhkIAAoHQAAhkBkAAMAirAAAQBkAAAABkIAAIHQAABkhkAAg");
	this.shape.setTransform(120.975,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_back, new cjs.Rectangle(0,0,242,72), null);


(lib.back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6753D").s().p("AnaH0QhkAAAAhkIAAsfQAAhkBkAAIO1AAQBkAAAABkIAAMfQAABkhkAAg");
	this.shape.setTransform(49.9871,50,0.8696,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(0,0,100,100), null);


(lib.playButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.text = new cjs.Text("PLAY", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 182;
	this.text.parent = this;
	this.text.setTransform(115.4,5.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#C6753D"},0).wait(1).to({_off:true},1).wait(1));

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.427],0.6,-120.9,-0.5,121).s().p("AxVFoQhkAAAAhkIAAoHQAAhkBkAAMAirAAAQBkAAAABkIAAIHQAABkhkAAg");
	this.shape.setTransform(120.975,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3));

	// back
	this.instance = new lib.button_back();
	this.instance.setTransform(121,36,1,1,0,0,0,121,36);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,251,82);


(lib.LetterPad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.196],0.9,-57.5,-0.9,57.5).s().p("AmcH0QhXAAAAhkIAAsfQAAhkBXAAIM5AAQBXAAAABkIAAMfQAABkhXAAg");
	this.shape.setTransform(20.0005,20.0005,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.tf = new cjs.Text("A", "30px 'Arial'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 36;
	this.tf.lineWidth = 29;
	this.tf.parent = this;
	this.tf.setTransform(19.5,2.85);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	// back
	this.instance = new lib.back();
	this.instance.setTransform(20,20,0.4,0.4,0,0,0,50,50);
	this.instance.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,48,48);


(lib.LetterHolder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.196],0.9,-57.5,-0.9,57.5).s().p("AmcH0QhXAAAAhkIAAsfQAAhkBXAAIM5AAQBXAAAABkIAAMfQAABkhXAAg");
	this.shape.setTransform(40.0002,40.0002,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.tf = new cjs.Text("A", "50px 'Arial'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 58;
	this.tf.lineWidth = 53;
	this.tf.parent = this;
	this.tf.setTransform(40,9.05);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	// back
	this.instance = new lib.back();
	this.instance.setTransform(40,40,0.8,0.8,0,0,0,50,50);
	this.instance.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LetterHolder, new cjs.Rectangle(-2,-2,88,88), null);


(lib.GuessHolder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.196],0.9,-57.5,-0.9,57.5).s().p("AmcH0QhXAAAAhkIAAsfQAAhkBXAAIM5AAQBXAAAABkIAAMfQAABkhXAAg");
	this.shape.setTransform(40.0002,40.0002,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.tf = new cjs.Text("A", "50px 'Arial'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 58;
	this.tf.lineWidth = 53;
	this.tf.parent = this;
	this.tf.setTransform(40,9.05);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	// back
	this.instance = new lib.back();
	this.instance.setTransform(40,40,0.8,0.8,0,0,0,50,50);
	this.instance.shadow = new cjs.Shadow("rgba(118,0,0,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GuessHolder, new cjs.Rectangle(-9,-9,102,102), null);


(lib.backButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.text = new cjs.Text("BACK", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 182;
	this.text.parent = this;
	this.text.setTransform(115.4,5.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:true},1).wait(1));

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.427],0.6,-120.9,-0.5,121).s().p("AxVFoQhkAAAAhkIAAoHQAAhkBkAAMAirAAAQBkAAAABkIAAIHQAABkhkAAg");
	this.shape.setTransform(120.975,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3));

	// back
	this.instance = new lib.button_back();
	this.instance.setTransform(121,36,1,1,0,0,0,121,36);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,251,82);


// stage content:
(lib.Sintítulo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var that = this;
		var title = "hangman";
		var arr = title.split('');
		for (var k in arr) {
			this[arr[k] + k].tf.text = arr[k].toUpperCase();
		}
		this.playButton.addEventListener('click', function () {
			that.gotoAndStop(1);
		});
	}
	this.frame_1 = function() {
		this.stop();
		
		
		var wordtoGuess, wordLength, badGuess, correctGuess;
		var letterPad = {};
		var wordPad = {},
			badGuess = 0,
			correctGuess = 0,
			wordtoGuess = getWord(),
			wordLength = wordtoGuess.length;
		this.theWord = wordtoGuess;
		
		var hangman = ['rope', 'head', 'body', 'hand1', 'hand2', 'leg1', 'leg2'];
		for (var z in hangman) {
			this[hangman[z]].visible = false;
		}
		
		this['bad_guess'].text = '0';
		this['bad_guess'].text = '0';
		
		var xWord = 75;
		var yWord = 500;
		//alert(wordtoGuess);
		
		for (var i = 0; i < wordLength; i++) {
			wordPad['word_' + i] = new lib.GuessHolder();
			wordPad['word_' + i].tf.text = '';
			wordPad['word_' + i].x = xWord + i * 90;
			wordPad['word_' + i].y = yWord;
			this.addChild(wordPad['word_' + i]);
		}
		
		var that = this;
		var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		
		var xValue = 530;
		var yValue = 200;
		
		for (var counter = 0; counter < 26; counter++) {
			letterPad['pad_' + abc[counter]] = new lib.LetterPad();
			letterPad['pad_' + abc[counter]].tf.text = abc[counter];
			letterPad['pad_' + abc[counter]].tf.en
			letterPad['pad_' + abc[counter]].x = xValue + (counter % 6) * 50;
			letterPad['pad_' + abc[counter]].y = yValue + parseInt((counter / 6)) * 50;
			letterPad['pad_' + abc[counter]].addEventListener('click', getLetter);
			this.addChild(letterPad['pad_' + abc[counter]]);
		}
		
		function getLetter(e) {
			var obj = e.target;
			var letter;
			if (obj instanceof createjs.Text) {
				letter = obj.text;
			}
			else if (obj instanceof createjs.Shape) {
				letter = obj.parent.tf.text;
			}
			else{
				letter = obj.tf.text;
			}
			
			checkLetter(letter);
			
		}
		
		
		function checkLetter(letter) {
			var wrongGuess = true;
			for (var j = 0; j < wordLength; j++) {
				if (wordtoGuess.charAt(j) === letter.toLowerCase()) {
					wordPad['word_' + j].tf.text = letter.toUpperCase();
					wrongGuess = false;
					correctGuess++;
					that['good_guess'].text = correctGuess;
					if (correctGuess == wordLength) {
						removeAll();
						that.gotoAndStop(3);
					}
				}
			}
		
			if (wrongGuess) {
				badGuess++;
				that['bad_guess'].text = badGuess;
				drawHangman();
			}
		}
		
		function drawHangman() {
			var target = that[hangman[badGuess - 1]];
			target.visible = true;
			target.alpha = 0;
			createjs.Tween.get(target).to({
				alpha: 1
			}, 1000).call(onComplete);
		
		}
		
		function onComplete() {
			if (badGuess == hangman.length) {
				removeAll();
				that.gotoAndStop(2);
			}
		}
		
		function removeAll() {
			for (var k in letterPad) {
				that.removeChild(letterPad[k]);
			}
			for (var m in wordPad) {
				that.removeChild(wordPad[m]);
			}
		}
		// Select random word to guess
		
		function getWord() {
			var a = new Array('abate', 'aberrant', 'abscond', 'accolade', 'acerbic', 'acumen', 'adulation', 'adulterate', 'aesthetic', 'aggrandize', 'alacrity', 'alchemy', 'amalgamate', 'ameliorate', 'amenable', 'anachronism', 'anomaly', 'approbation', 'archaic', 'arduous', 'ascetic', 'assuage', 'astringent', 'audacious', 'austere', 'avarice', 'aver', 'axiom', 'bolster', 'bombast', 'bombastic', 'bucolic', 'burgeon', 'cacophony', 'canon', 'canonical', 'capricious', 'castigation', 'catalyst', 'caustic', 'censure', 'chary', 'chicanery', 'cogent', 'complaisance', 'connoisseur', 'contentious', 'contrite', 'convention', 'convoluted', 'credulous', 'culpable', 'cynicism', 'dearth', 'decorum', 'demur', 'derision', 'desiccate', 'diatribe', 'didactic', 'dilettante', 'disabuse', 'discordant', 'discretion', 'disinterested', 'disparage', 'disparate', 'dissemble', 'divulge', 'dogmatic', 'ebullience', 'eccentric', 'eclectic', 'effrontery', 'elegy', 'eloquent', 'emollient', 'empirical', 'endemic', 'enervate', 'enigmatic', 'ennui', 'ephemeral', 'equivocate', 'erudite', 'esoteric', 'eulogy', 'evanescent', 'exacerbate', 'exculpate', 'exigent', 'exonerate', 'extemporaneous', 'facetious', 'fallacy', 'fawn', 'fervent', 'filibuster', 'flout', 'fortuitous', 'fulminate', 'furtive', 'garrulous', 'germane', 'glib', 'grandiloquence', 'gregarious', 'hackneyed', 'halcyon', 'harangue', 'hedonism', 'hegemony', 'heretical', 'hubris', 'hyperbole', 'iconoclast', 'idolatrous', 'imminent', 'immutable', 'impassive', 'impecunious', 'imperturbable', 'impetuous', 'implacable', 'impunity', 'inchoate', 'incipient', 'indifferent', 'inert', 'infelicitous', 'ingenuous', 'inimical', 'innocuous', 'insipid', 'intractable', 'intransigent', 'intrepid', 'inured', 'inveigle', 'irascible', 'laconic', 'laud', 'loquacious', 'lucid', 'luminous', 'magnanimity', 'malevolent', 'malleable', 'martial', 'maverick', 'mendacity', 'mercurial', 'meticulous', 'misanthrope', 'mitigate', 'mollify', 'morose', 'mundane', 'nebulous', 'neologism', 'neophyte', 'noxious', 'obdurate', 'obfuscate', 'obsequious', 'obstinate', 'obtuse', 'obviate', 'occlude', 'odious', 'onerous', 'opaque', 'opprobrium', 'oscillation', 'ostentatious', 'paean', 'parody', 'pedagogy', 'pedantic', 'penurious', 'penury', 'perennial', 'perfidy', 'perfunctory', 'pernicious', 'perspicacious', 'peruse', 'pervade', 'pervasive', 'phlegmatic', 'pine', 'pious', 'pirate', 'pith', 'pithy', 'placate', 'platitude', 'plethora', 'plummet', 'polemical', 'pragmatic', 'prattle', 'precipitate', 'precursor', 'predilection', 'preen', 'prescience', 'presumptuous', 'prevaricate', 'pristine', 'probity', 'proclivity', 'prodigal', 'prodigious', 'profligate', 'profuse', 'proliferate', 'prolific', 'propensity', 'prosaic', 'pungent', 'putrefy', 'quaff', 'qualm', 'querulous', 'query', 'quiescence', 'quixotic', 'quotidian', 'rancorous', 'rarefy', 'recalcitrant', 'recant', 'recondite', 'redoubtable', 'refulgent', 'refute', 'relegate', 'renege', 'repudiate', 'rescind', 'reticent', 'reverent', 'rhetoric', 'salubrious', 'sanction', 'satire', 'sedulous', 'shard', 'solicitous', 'solvent', 'soporific', 'sordid', 'sparse', 'specious', 'spendthrift', 'sporadic', 'spurious', 'squalid', 'squander', 'static', 'stoic', 'stupefy', 'stymie', 'subpoena', 'subtle', 'succinct', 'superfluous', 'supplant', 'surfeit', 'synthesis', 'tacit', 'tenacity', 'terse', 'tirade', 'torpid', 'torque', 'tortuous', 'tout', 'transient', 'trenchant', 'truculent', 'ubiquitous', 'unfeigned', 'untenable', 'urbane', 'vacillate', 'variegated', 'veracity', 'vexation', 'vigilant', 'vilify', 'virulent', 'viscous', 'vituperate', 'volatile', 'voracious', 'waver', 'zealous');
			return a[parseInt(Math.random() * a.length)];
		}
	}
	this.frame_2 = function() {
		this.stop();
		this.lost_word.text = this.theWord;
		var that = this;
		this.lost_back.addEventListener('click', function () {
			that.gotoAndStop(0);
		});
	}
	this.frame_3 = function() {
		this.stop();
		this.won_word.text = this.theWord;
		var that = this;
		this.won_back.addEventListener('click', function () {
			that.gotoAndStop(0);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// actions
	this.bad_guess = new cjs.Text("0", "30px 'Arial'", "#C6753D");
	this.bad_guess.name = "bad_guess";
	this.bad_guess.textAlign = "center";
	this.bad_guess.lineHeight = 36;
	this.bad_guess.lineWidth = 35;
	this.bad_guess.parent = this;
	this.bad_guess.setTransform(916.55,48.6);

	this.good_guess = new cjs.Text("0", "30px 'Arial'", "#C6753D");
	this.good_guess.name = "good_guess";
	this.good_guess.textAlign = "center";
	this.good_guess.lineHeight = 36;
	this.good_guess.lineWidth = 35;
	this.good_guess.parent = this;
	this.good_guess.setTransform(634.4,48.6);

	this.text = new cjs.Text("Incorrecto", "30px 'Arial'", "#C6753D");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 185;
	this.text.parent = this;
	this.text.setTransform(786.35,48.6);

	this.text_1 = new cjs.Text("Correcto", "30px 'Arial'", "#C6753D");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 185;
	this.text_1.parent = this;
	this.text_1.setTransform(507.1,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text},{t:this.good_guess},{t:this.bad_guess}]},1).to({state:[]},1).wait(2));

	// buttons
	this.playButton = new lib.playButton();
	this.playButton.name = "playButton";
	this.playButton.setTransform(359.05,377.4);
	this.playButton.cache(-5,-5,255,86);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.playButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).to({_off:true},1).wait(3));

	// title
	this.a5 = new lib.LetterHolder();
	this.a5.name = "a5";
	this.a5.setTransform(664.35,260.15,1,1,0,0,0,40,40);

	this.n6 = new lib.LetterHolder();
	this.n6.name = "n6";
	this.n6.setTransform(760.65,260.15,1,1,0,0,0,40,40);

	this.m4 = new lib.LetterHolder();
	this.m4.name = "m4";
	this.m4.setTransform(568.1,260.15,1,1,0,0,0,40,40);

	this.g3 = new lib.LetterHolder();
	this.g3.name = "g3";
	this.g3.setTransform(471.85,260.15,1,1,0,0,0,40,40);

	this.n2 = new lib.LetterHolder();
	this.n2.name = "n2";
	this.n2.setTransform(375.6,260.15,1,1,0,0,0,40,40);

	this.a1 = new lib.LetterHolder();
	this.a1.name = "a1";
	this.a1.setTransform(279.35,260.15,1,1,0,0,0,40,40);

	this.h0 = new lib.LetterHolder();
	this.h0.name = "h0";
	this.h0.setTransform(193.1,270.15,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.h0},{t:this.a1},{t:this.n2},{t:this.g3},{t:this.m4},{t:this.n6},{t:this.a5}]}).to({state:[]},1).wait(3));

	// man
	this.rope = new lib.rope();
	this.rope.name = "rope";
	this.rope.setTransform(249.35,82.4,1,1.5625,0,0,0,0,8);
	this.rope.visible = false;

	this.leg2 = new lib.stick2();
	this.leg2.name = "leg2";
	this.leg2.setTransform(263.85,269.4,1,1,0,0,180,11.5,9.5);
	this.leg2.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.leg2.visible = false;

	this.hand2 = new lib.stick2();
	this.hand2.name = "hand2";
	this.hand2.setTransform(268.85,206.4,1,1,0,0,180,11.5,9.5);
	this.hand2.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.hand2.visible = false;

	this.leg1 = new lib.stick2();
	this.leg1.name = "leg1";
	this.leg1.setTransform(235.85,269.4,1,1,0,0,0,11.5,9.5);
	this.leg1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.leg1.visible = false;

	this.hand1 = new lib.stick2();
	this.hand1.name = "hand1";
	this.hand1.setTransform(235.85,206.4,1,1,0,0,0,11.5,9.5);
	this.hand1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.hand1.visible = false;

	this.body = new lib.stick();
	this.body.name = "body";
	this.body.setTransform(251.35,209.9,2,1.7857,0,0,0,0.5,28);
	this.body.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.body.visible = false;

	this.head = new lib.head();
	this.head.name = "head";
	this.head.setTransform(249.35,127.9,1.7241,1.7241,0,0,0,14.5,14.5);
	this.head.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.head.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.head},{t:this.body},{t:this.hand1},{t:this.leg1},{t:this.hand2},{t:this.leg2},{t:this.rope}]},1).to({state:[]},1).wait(2));

	// board
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8D6D58").ss(12,2,0,3).p("Ai/D8IGAn3");
	this.shape.setTransform(128.05,95.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8D6D58").ss(12,2,0,3).p("AsIAGIYQgM");
	this.shape_1.setTransform(183.8,63.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8D6D58").ss(12,2,0,3).p("AAAddMAAAg65");
	this.shape_2.setTransform(107.5,253.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8D6D58").ss(12,2,0,3).p("Ax7AAMAj3AAA");
	this.shape_3.setTransform(190.45,445.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

	// lost
	this.lost_word = new cjs.Text("La palabra es", "40px 'Arial'", "#242077");
	this.lost_word.name = "lost_word";
	this.lost_word.textAlign = "center";
	this.lost_word.lineHeight = 47;
	this.lost_word.lineWidth = 339;
	this.lost_word.parent = this;
	this.lost_word.setTransform(645.7,251.45);

	this.text_2 = new cjs.Text("La palabra es", "40px 'Arial'", "#C6753D");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 47;
	this.text_2.lineWidth = 339;
	this.text_2.parent = this;
	this.text_2.setTransform(645.7,161.9);

	this.lost_back = new lib.backButton();
	this.lost_back.name = "lost_back";
	this.lost_back.setTransform(516.75,391.65);
	new cjs.ButtonHelper(this.lost_back, 0, 1, 2, false, new lib.backButton(), 3);

	this.text_3 = new cjs.Text("HA PERDIDO", "80px 'Arial'", "#C6753D");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 91;
	this.text_3.lineWidth = 476;
	this.text_3.parent = this;
	this.text_3.setTransform(653.65,38.8);

	this.rope_1 = new lib.rope();
	this.rope_1.name = "rope_1";
	this.rope_1.setTransform(249.35,82.4,1,1.5625,0,0,0,0,8);

	this.leg2_1 = new lib.stick2();
	this.leg2_1.name = "leg2_1";
	this.leg2_1.setTransform(263.85,269.4,1,1,0,0,180,11.5,9.5);
	this.leg2_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.hand2_1 = new lib.stick2();
	this.hand2_1.name = "hand2_1";
	this.hand2_1.setTransform(268.85,206.4,1,1,0,0,180,11.5,9.5);
	this.hand2_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.leg1_1 = new lib.stick2();
	this.leg1_1.name = "leg1_1";
	this.leg1_1.setTransform(235.85,269.4,1,1,0,0,0,11.5,9.5);
	this.leg1_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.hand1_1 = new lib.stick2();
	this.hand1_1.name = "hand1_1";
	this.hand1_1.setTransform(235.85,206.4,1,1,0,0,0,11.5,9.5);
	this.hand1_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.body_1 = new lib.stick();
	this.body_1.name = "body_1";
	this.body_1.setTransform(251.35,209.9,2,1.7857,0,0,0,0.5,28);
	this.body_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.head_1 = new lib.head();
	this.head_1.name = "head_1";
	this.head_1.setTransform(249.35,127.9,1.7241,1.7241,0,0,0,14.5,14.5);
	this.head_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#8D6D58").ss(12,2,0,3).p("Ai/D8IGAn3");
	this.shape_4.setTransform(128.05,95.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#8D6D58").ss(12,2,0,3).p("AsIAGIYQgM");
	this.shape_5.setTransform(183.8,63.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8D6D58").ss(12,2,0,3).p("AAAddMAAAg65");
	this.shape_6.setTransform(107.5,253.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8D6D58").ss(12,2,0,3).p("Ax7AAMAj3AAA");
	this.shape_7.setTransform(190.45,445.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.head_1},{t:this.body_1},{t:this.hand1_1},{t:this.leg1_1},{t:this.hand2_1},{t:this.leg2_1},{t:this.rope_1},{t:this.text_3},{t:this.lost_back},{t:this.text_2},{t:this.lost_word}]},2).to({state:[]},1).wait(1));

	// won
	this.text_4 = new cjs.Text("Esta es una muestra del juego del ahorcado creada con el documento de HTML5 Canvas y se puede publicar en HTML5. La muestra tiene fragmentos de código de Java Script para mejorar la interactividad.", "13px 'Arial'", "#99FF99");
	this.text_4.lineHeight = 17;
	this.text_4.lineWidth = 975;
	this.text_4.parent = this;
	this.text_4.setTransform(2,-41);

	this.won_word = new cjs.Text("La palabra es", "40px 'Arial'", "#242077");
	this.won_word.name = "won_word";
	this.won_word.textAlign = "center";
	this.won_word.lineHeight = 47;
	this.won_word.lineWidth = 339;
	this.won_word.parent = this;
	this.won_word.setTransform(479.4,358.6);

	this.text_5 = new cjs.Text("La palabra es", "40px 'Arial'", "#C6753D");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 47;
	this.text_5.lineWidth = 339;
	this.text_5.parent = this;
	this.text_5.setTransform(479.4,269.05);

	this.won_back = new lib.backButton();
	this.won_back.name = "won_back";
	this.won_back.setTransform(359.05,476.9);
	new cjs.ButtonHelper(this.won_back, 0, 1, 2, false, new lib.backButton(), 3);

	this.text_6 = new cjs.Text("ENHORABUENA \nHA GANADO", "80px 'Arial'", "#C6753D");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 91;
	this.text_6.lineWidth = 541;
	this.text_6.parent = this;
	this.text_6.setTransform(483.05,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_6},{t:this.won_back},{t:this.text_5},{t:this.won_word},{t:this.text_4}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,277,499,278.9);
// library properties:
lib.properties = {
	id: 'F1887926FF7FAF428D68742921CC34C7',
	width: 960,
	height: 640,
	fps: 24,
	color: "#F7E1AF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F1887926FF7FAF428D68742921CC34C7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
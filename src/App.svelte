<script lang="ts">
	import { each } from "svelte/internal";
	import { onMount } from "svelte";

	let amountOfTries: number = 5;
	let tries: number = 0;
	let wordLength: number = 5;
	let inputCaret: number = 0;
	let gameGrid: InputCharacter[][] = new Array<Array<InputCharacter>>(
		amountOfTries
	);
	let words: string[] = [];
	let wordToFind: string;

	enum GameState {
		Ongoing,
		Won,
		Lost,
	}

	let gameState: GameState = GameState.Ongoing;

	enum CharMatching {
		CorrectPlace = "correctplace",
		WrongPlace = "wrongplace",
		NotFound = "notused",
		Absent = "absent",
	}

	class InputCharacter {
		character: string;
		match: CharMatching;

		constructor() {
			this.character = "";
			this.match = CharMatching.Absent;
		}
	}

	function fillInGameGrid() {
		for (var i: number = 0; i < amountOfTries; i++) {
			gameGrid[i] = new Array<InputCharacter>(wordLength);
			for (var j: number = 0; j < wordLength; j++) {
				gameGrid[i][j] = new InputCharacter();
			}
		}
	}

	function addCharacter(character: string) {
		if (inputCaret < wordLength) {
			gameGrid[tries][inputCaret].character = character;
			inputCaret++;
		}
	}
	function removeCharacter() {
		if (inputCaret > 0) {
			inputCaret--;
			gameGrid[tries][inputCaret].character = "";
		}
	}
	/**
	 * The input word will be compared to the word that needs to be guessed.
	 *
	 * Guessing is a two-pass algorithm:
	 * The first pass will check if the characters are in the exact spot.
	 * The second pass is to determine the class of the characters not in the exact spot: wrong place or not used.
	 *
	 * First, it loops over every character in the input word. Each character will be compared to the
	 * character in the same location of the answer word:
	 *  - If the characters match, the character will be marked "as in the exact same place".
	 *  - If they don't match the character of the answer will be added to a List (notMatchedChars), which will be used
	 *    in the second pass.
	 *
	 * Secondly, we loop over every not-matched character of the input word again. If that character is contained in
	 * the list with the not-matched characters of the answer word:
	 *  - If so, the character is in the wrong place.
	 *  - If not, the character is not used.
	 *
	 * It is important to note that if a character is determined to be in the wrong place, it is removed from the list
	 * with the non matched characters.
	 */
	function addWord() {
		if (
			gameState == GameState.Ongoing &&
			tries < amountOfTries &&
			inputCaret === wordLength
		) {
			let notMatchedChars: string[] = new Array<string>();
			let unmappedIndexes: number[] = new Array<number>();
			// First pass to determine the characters in the exact same spot as the answer word.
			for (var i = 0; i < wordLength; i++) {
				if (wordToFind.charAt(i) === gameGrid[tries][i].character) {
					gameGrid[tries][i].match = CharMatching.CorrectPlace;
				} else {
					unmappedIndexes.push(i);
					notMatchedChars.push(wordToFind.charAt(i));
				}
			}
			// Second pass to determine the class of the not-matched characters.
			unmappedIndexes.forEach(function (idx) {
				var char = gameGrid[tries][idx].character;
				if (notMatchedChars.includes(char)) {
					gameGrid[tries][idx].match = CharMatching.WrongPlace;
					notMatchedChars.splice(notMatchedChars.indexOf(char), 1);
				} else {
					gameGrid[tries][idx].match = CharMatching.NotFound;
				}
			});
			tries++;
			inputCaret = 0;
			// Check game state
			if (unmappedIndexes.length == 0) {
				gameState = GameState.Won;
			} else if (tries == amountOfTries) {
				gameState = GameState.Lost;
			}
		}
	}

	function getRandomWord(){
		return words[Math.floor(Math.random() * words.length)];
	}

	function resetGame() {
		wordToFind = getRandomWord();
		gameState = GameState.Ongoing;
		tries = 0;
		fillInGameGrid();
	}

	fillInGameGrid();

	// Load in the word list on mount.
	onMount(async () => {
		const res = await fetch("/words.txt");
		words = (await res.text())
			.split(/\r?\n/)
			.map((item: string) => item.trim());
		wordToFind = getRandomWord();
	});
</script>

<main>
	<div id="container">
		{#each gameGrid as inputWord}
			<div>
				{#each inputWord as inputChar}
					<div class="square {inputChar.match}">
						{inputChar.character}
					</div>
				{/each}
			</div>
		{/each}
		<div id="keyboard">
			<div class="row">
				<button on:click={() => addCharacter("a")}>a</button>
				<button on:click={() => addCharacter("z")}>z</button>
				<button on:click={() => addCharacter("e")}>e</button>
				<button on:click={() => addCharacter("r")}>r</button>
				<button on:click={() => addCharacter("t")}>t</button>
				<button on:click={() => addCharacter("y")}>y</button>
				<button on:click={() => addCharacter("u")}>u</button>
				<button on:click={() => addCharacter("i")}>i</button>
				<button on:click={() => addCharacter("o")}>o</button>
				<button on:click={() => addCharacter("p")}>p</button>
			</div>
			<div class="row">
				<button on:click={() => addCharacter("q")}>q</button>
				<button on:click={() => addCharacter("s")}>s</button>
				<button on:click={() => addCharacter("d")}>d</button>
				<button on:click={() => addCharacter("f")}>f</button>
				<button on:click={() => addCharacter("g")}>g</button>
				<button on:click={() => addCharacter("h")}>h</button>
				<button on:click={() => addCharacter("j")}>j</button>
				<button on:click={() => addCharacter("k")}>k</button>
				<button on:click={() => addCharacter("l")}>l</button>
				<button on:click={() => addCharacter("m")}>m</button>
			</div>
			<div class="row">
				<button on:click={addWord}>enter</button>
				<button on:click={() => addCharacter("w")}>w</button>
				<button on:click={() => addCharacter("x")}>x</button>
				<button on:click={() => addCharacter("c")}>c</button>
				<button on:click={() => addCharacter("v")}>v</button>
				<button on:click={() => addCharacter("b")}>b</button>
				<button on:click={() => addCharacter("n")}>n</button>
				<button on:click={removeCharacter}>return</button>
			</div>
		</div>

		{#if gameState == GameState.Won}
			<p>Joepie gewonnen!</p>
		{:else if gameState == GameState.Lost}
			<p>Verloren, jammer! Het woord is: {wordToFind}</p>
		{:else}
			<p />
		{/if}

		<button on:click={resetGame}>Nieuw woord</button>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	#container {
		margin: auto;
		width: 23em;
	}
	.correctplace {
		background: #6aaa64;
	}

	.wrongplace {
		background: #c9b458;
	}

	.notused {
		background: grey;
	}

	.absent {
		background: #b2beb5;
	}

	.square {
		vertical-align: top;
		margin-top: 4px;
		border: 1px black solid;
		border-radius: 5px;
		display: inline-block;
		height: 1.25em;
		width: 1.25em;
		text-align: center;
		font-size: 3.5em;
		font-family: "Lato", sans-serif;
		color: white;
	}
</style>

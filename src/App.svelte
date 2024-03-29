<script lang="ts">
	import { each } from "svelte/internal";
	import { onMount } from "svelte";

	import { toasts, ToastContainer, FlatToast }  from "svelte-toasts";

	const showToast = () => {
		const toast = toasts.add({
			description: 'Onbekend woord',
			duration: 1000, // in millis
			placement: 'top-center',
			type: 'error',
			theme: 'light',
			onClick: () => {},
			onRemove: () => {},
		});

	};

	let amountOfTries: number = 6;
	let tries: number = 0;
	let wordLength: number = 5;
	let inputCaret: number = 0;
	let gameGrid: InputCharacter[][] = new Array<Array<InputCharacter>>(
		amountOfTries
	);
	let words: string[] = [];
	let validWords: Set<string>;
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
			let inputWord: string = "";
			for (var z = 0; z < wordLength; z++){
				inputWord += gameGrid[tries][z].character;
			}
			if (!validWords.has(inputWord)) {
				showToast();
				return;
			}
			let notMatchedChars: string[] = new Array<string>();
			let unmappedIndexes: number[] = new Array<number>();
			// First pass to determine the characters in the exact same spot as the answer word.
			for (var i = 0; i < wordLength; i++) {
				if (wordToFind.charAt(i) === inputWord.charAt(i)) {
					gameGrid[tries][i].match = CharMatching.CorrectPlace;
				} else {
					unmappedIndexes.push(i);
					notMatchedChars.push(wordToFind.charAt(i));
				}
			}
			// Second pass to determine the class of the not-matched characters.
			unmappedIndexes.forEach(function (idx) {
				var char = inputWord.charAt(idx);
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

	function getRandomWord() {
		return words[Math.floor(Math.random() * words.length)];
	}

	function resetGame() {
		wordToFind = getRandomWord();
		gameState = GameState.Ongoing;
		tries = 0;
		inputCaret = 0;
		fillInGameGrid();
	}

	fillInGameGrid();

	// Load in the word list on mount.
	onMount(async () => {
		const res = await fetch("./words.txt");
		words = (await res.text())
			.split(/\r?\n/)
			.map((item: string) => item.trim());
		validWords = new Set(words);
		wordToFind = getRandomWord();
		console.log(wordToFind);
	});
</script>

<app>
	<ToastContainer placement="top-center" let:data={data}>
		<FlatToast {data} /> <!-- Provider template for your toasts -->
	</ToastContainer>
	<div id="container">
		<div class="navbar navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="">Woddle</a>
				<button
					title="New word"
					class="btn button-icon-reload my-2 my-sm-0"
					on:click={resetGame}
				>
					<span class="bi bi-arrow-clockwise" />
				</button>
			</div>
		</div>
		<div class="game-grid-container">
			<div class="game-grid">
				{#each gameGrid as inputWord}
					<div class="game-grid-row">
						{#each inputWord as inputChar}
							<div class="square {inputChar.match}">
								{inputChar.character}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>

		<div id="keyboard">
			<div class="keyboard-row">
				<button on:click={() => addCharacter("a")}>a</button>
				<button on:click={() => addCharacter("z")}>z</button>
				<button on:click={() => addCharacter("e")}>e</button>
				<button on:click={() => addCharacter("r")}>r</button>
				<button on:click={() => addCharacter("t")}>t</button>
				<button on:click={() => addCharacter("y")}>y</button>
				<button on:click={() => addCharacter("u")}>u</button>
				<button on:click={() => addCharacter("i")}>i</button>
				<button on:click={() => addCharacter("o")}>o</button>
				<button on:click={() => addCharacter("p")} class="last-item-row">p</button>
			</div>
			<div class="keyboard-row">
				<button on:click={() => addCharacter("q")}>q</button>
				<button on:click={() => addCharacter("s")}>s</button>
				<button on:click={() => addCharacter("d")}>d</button>
				<button on:click={() => addCharacter("f")}>f</button>
				<button on:click={() => addCharacter("g")}>g</button>
				<button on:click={() => addCharacter("h")}>h</button>
				<button on:click={() => addCharacter("j")}>j</button>
				<button on:click={() => addCharacter("k")}>k</button>
				<button on:click={() => addCharacter("l")}>l</button>
				<button on:click={() => addCharacter("m")} class="last-item-row">m</button>
			</div>
			<div class="keyboard-row">
				<button on:click={addWord} class="double-size">
					<span class="bi bi-arrow-return-left" />
				</button>
				<button on:click={() => addCharacter("w")}>w</button>
				<button on:click={() => addCharacter("x")}>x</button>
				<button on:click={() => addCharacter("c")}>c</button>
				<button on:click={() => addCharacter("v")}>v</button>
				<button on:click={() => addCharacter("b")}>b</button>
				<button on:click={() => addCharacter("n")}>n</button>
				<button on:click={removeCharacter} class="double-size last-item-row">
					<span class="bi bi-backspace" />
				</button>
			</div>
		</div>

		{#if gameState == GameState.Won}
			<p>Joepie gewonnen!</p>
		{:else if gameState == GameState.Lost}
			<p>Verloren, jammer! Het woord is: {wordToFind}</p>
		{:else}
			<p />
		{/if}
	</div>
</app>

<style>
	@media (min-width: 640px) {
		app {
			max-width: none;
		}
	}

	#container {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		height: 100%;
		display: flex;
		flex-direction: column;
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

	.game-grid-container {
		margin: auto 8px 8px 8px;
	}

	.game-grid {
		margin: 10px 0 10px 0;
	}
	.game-grid-row {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.square {
		vertical-align: top;
		border: 1px black solid;
		border-radius: 5px;
		height: 53px;
		width: 53px;
		font-size: 34px;
		font-family: "Lato", sans-serif;
		color: white;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin: 2px 2px 2px 0;
		text-transform: uppercase;
	}
	.navbar-light .navbar-brand {
		color: #b2beb5;
	}
	.button-icon-reload {
		color: #b2beb5;
		border-color: #b2beb5;
	}
	.button-icon-reload:hover {
		color: #fff;
		background-color: #b2beb5;
		border-color: #b2beb5;
	}
	.button-icon-reload:focus {
		box-shadow: 0 0 0 0.25rem rgba(178, 190, 181, 0.25);
	}

	#keyboard {
		margin: auto 8px 8px 8px;
		touch-action: manipulation;
	}

	.keyboard-row {
		display: flex;
		width: 100%;
		margin: 0 auto 8px;
		touch-action: manipulation;
	}

	#keyboard button {
		font-family: inherit;
		font-weight: bold;
		margin: 0 4px 0 0;
		height: 60px;
		text-transform: uppercase;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#keyboard .keyboard-row .double-size {
		flex: 2;
	}
	#keyboard .keyboard-row .last-item-row {
		margin: 0;
	}
</style>

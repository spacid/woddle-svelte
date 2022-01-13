<script lang="ts">
	import { each } from "svelte/internal";
	let amountOfTries: number = 5;
	let wordLength: number = 5;
	let gameGrid: InputCharacter[][] = new Array<Array<InputCharacter>>(
		amountOfTries
	);

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

	function fillInWords() {
		for (var i: number = 0; i < amountOfTries; i++) {
			gameGrid[i] = new Array<InputCharacter>(wordLength);
			for (var j: number = 0; j < wordLength; j++) {
				gameGrid[i][j] = new InputCharacter();
			}
		}
	}
	fillInWords();
</script>

<main>
	<div id="container">
		{#each gameGrid as inputWord}
			<div>
				{#each inputWord as inputChar}
					<div class="square {inputChar.match}">{inputChar.character}</div>
				{/each}
			</div>
		{/each}
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

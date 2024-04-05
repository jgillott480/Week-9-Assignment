// Function to shuffle a deck of cards
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Initialize deck of 52 cards
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
let deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push({ value: value, suit: suit });
    }
}

// Compare cards round
function compareCards(card1, card2) {
    const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    
    // Check if card1 or card2 is undefined
    if (!card1 || !card2) {
        return 0;
    }
    
    // Get the index of values in the cardValues array
    const val1 = cardValues.indexOf(card1.value || 'Invalid');
    const val2 = cardValues.indexOf(card2.value || 'Invalid');

    return val1 - val2;
}

// Play the War card game for 26 rounds
function playWarGame() {
    let player1Wins = 0;
    let player2Wins = 0;

    for (let round = 1; round <= 26 && deck.length >= 2; round++) {
        shuffleDeck(deck);

        if (deck.length < 2) {
            console.log("Not enough cards in the deck to continue. Ending the game.");
            break;
        }

        const player1Card = deck.shift();
        const player2Card = deck.shift();

        if (player1Card && player2Card) {
            const result = compareCards(player1Card, player2Card);
            if (result > 0) {
                player1Wins++;
            } else if (result < 0) {
                player2Wins++;
            }

            console.log(`Round ${round}: Player 1's Card - ${player1Card.value} of ${player1Card.suit}, Player 2's Card - ${player2Card.value} of ${player2Card.suit}, Winner: ${result > 0 ? 'Player 1' : (result < 0 ? 'Player 2' : 'Tie')}`);
        } else {
            console.log("Invalid cards for the current round. Skipping the round.");
        }
    }

    let gameWinner = player1Wins > player2Wins ? 'Player 1' : (player1Wins < player2Wins ? 'Player 2' : 'Tie');
    console.log(`Game over! Player 1 Wins: ${player1Wins} rounds, Player 2 Wins: ${player2Wins} rounds. Winner: ${gameWinner}`);
}

// Start the War game
playWarGame();

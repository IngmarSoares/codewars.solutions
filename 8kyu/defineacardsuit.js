function defineSuit(card) {
  
  if (card.includes('♠')) return 'spades';
  if (card.includes('♣')) return 'clubs';
  if (card.includes('♥')) return 'hearts';
  if (card.includes('♦')) return 'diamonds';
  
}

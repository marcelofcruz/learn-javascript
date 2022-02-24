const getItem = (cards, position) => {
    return cards[position];
};

const setItem = (cards, position, replacementCard) => {
    cards[position] = replacementCard;
    return cards;
};

const insertItemAtTop = (cards, newCard) => {

    cards.push(newCard);
    return cards;
};

const removeItem = (cards, position) => {
if (cards.length == 1){
        cards.shift();
        return cards;
    } else{
        cards.splice(position, 1);
        return cards;
    }
};

const removeItemFromTop = (cards) => {
    cards.pop();
    return cards;  
};

const insertItemAtBottom = (cards, newCard) => {
    cards.unshift(newCard);
    return cards;
};

const removeItemAtBottom = (cards) => {
    if(cards.length === 0){
        cards = [];
        return cards;
    } else {
        cards.shift();
        return cards;
    }
};

const checkSizeOfStack = (cards, stackSize) =>  {
    if (cards.length == stackSize){
        return true;
    } else {
        return false;
    }
};
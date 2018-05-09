interface ICard {
    _hiragana: string;
    _english: string;

    Flip(): void;
}

class Card implements ICard {
    _hiragana: string;
    _english: string;
    _card: any;

    constructor(hiragana: string, english: string, card?: Card) {
        this._card = card;
        this._hiragana = hiragana;
        this._english = english;
    }

    Flip(): void {
        if(!this._card.classList.contains('flipped'))
            this._card.classList.add('flipped');
        else
            this._card.classList.remove('flipped');
    }
}

class Deck {
    _target: any;
    _cards: Card[];

    constructor(target: any, cards: Card[]) {
        this._target = target;
        this._cards = cards;

        this.Create();
    }

    Create(): void {
        for (let card of this._cards) {
            let
                charCard = document.createElement('div'),
                charCardFront = document.createElement('div'),
                charCardBack = document.createElement('div'),
                charLinkAttr = document.createAttribute('data-link');

            charLinkAttr.value = `https://en.wikipedia.org/wiki/${card._english.trim()}_(kana)`;
            charCard.setAttributeNode(charLinkAttr);

            charCard.classList.add('card');
            charCard.classList.add('text-dark');

            charCardFront.classList.add('face');
            charCardFront.classList.add('front');            
            charCardFront.textContent = card._hiragana;
            if(card._hiragana.length > 1)
                charCardFront.style.fontSize = '80px';
            
            charCardBack.classList.add('face');
            charCardBack.classList.add('back');
            charCardBack.textContent = card._english;
            charCardBack.style.fontSize = '60px';
            
            charCard.appendChild(charCardFront);
            charCard.appendChild(charCardBack);
            this._target.appendChild(charCard);

            card._card = charCard;
            charCard.addEventListener('click', () => { card.Flip(); });
            charCard.addEventListener('dblclick', () => { window.open(charCard.dataset.link, '_blank'); });
        }
    }

    Display(): void {
        for(let card of this._target.children)
            card.style.display = 'block';
    }

    Hide(): void {
        for(let card of this._target.children)
            card.style.display = 'none';
    }

    Destroy(): void { this._target.innerHTML = ''; }

    Filter(query: string): void {
        let regex: RegExp = new RegExp(query, 'i');

        for(let card of this._target.children) {
            if(card.children[1].textContent.trim().search(regex) != -1)
                card.style.display = 'block';
            else
                card.style.display = 'none';
        }
    }

    Count(): number {
        let count: number = 0;

        for(let card of this._target.children) {
            if(card.style.display === 'block')
            count++;
        }

        return count;
    }
}

window.addEventListener('load', () =>  {
    const
        btnReset = document.getElementById('btnReset'),
        btnRandomize = document.getElementById('btnRandomize'),
        btnFAS = document.getElementById('btnFAS'),
        btnFANS = document.getElementById('btnFANS'),
        charCount = document.getElementById('characterCount'),
        charsContainer = document.getElementById('charactersContainer'),
        inputSearch = document.getElementById('inputSearch'),
        deck: Deck = new Deck(charsContainer, [
            new Card('あ', 'a'),
            new Card('い', 'i'),
            new Card('う', 'u'),
            new Card('え', 'e'),
            new Card('お', 'o'),
        
            new Card('か', 'ka'),
            new Card('き', 'ki'),
            new Card('く', 'ku'),
            new Card('け', 'ke'),
            new Card('こ', 'ko'),
            new Card('きゃ', 'kya'),
            new Card('きゅ', 'kyu'),
            new Card('きょ', 'kyo'),
        
            new Card('さ', 'sa'),
            new Card('し', 'shi'),
            new Card('す', 'su'),
            new Card('せ', 'se'),
            new Card('そ', 'so'),
            new Card('しゃ', 'sha'),
            new Card('しゅ', 'shu'),
            new Card('しょ', 'sho'),
        
            new Card('た', 'ta'),
            new Card('ち', 'chi'),
            new Card('つ', 'tsu'),
            new Card('て', 'te'),
            new Card('と', 'to'),
            new Card('ちゃ', 'cha'),
            new Card('ちゅ', 'chu'),
            new Card('ちょ', 'cho'),
        
            new Card('な', 'na'),
            new Card('に', 'ni'),
            new Card('ぬ', 'nu'),
            new Card('ね', 'ne'),
            new Card('の', 'no'),
            new Card('にゃ', 'nya'),
            new Card('にゅ', 'nyu'),
            new Card('にょ', 'nyo'),
        
            new Card('は', 'ha'),
            new Card('ひ', 'hi'),
            new Card('ふ', 'hu'),
            new Card('へ', 'he'),
            new Card('ほ', 'ho'),
            new Card('ひゃ', 'hya'),
            new Card('ひゅ', 'hyu'),
            new Card('ひょ', 'hyo'),
        
            new Card('ま', 'ma'),
            new Card('み', 'mi'),
            new Card('む', 'mu'),
            new Card('め', 'me'),
            new Card('も', 'mo'),
            new Card('みゃ', 'mya'),
            new Card('みゅ', 'myu'),
            new Card('みょ', 'myo'),
        
            new Card('や', 'ya'),
            new Card('ゆ', 'yu'),
            new Card('よ', 'yo'),
        
            new Card('ら', 'ra'),
            new Card('り', 'ri'),
            new Card('る', 'ru'),
            new Card('れ', 're'),
            new Card('ろ', 'ro'),
            new Card('りゃ', 'rya'),
            new Card('りゅ', 'ryu'),
            new Card('りょ', 'ryo'),
        
            new Card('わ', 'wa'),
            new Card('ゐ', 'wi'),
            new Card('ゑ', 'we'),
            new Card('を', 'wo'),
            
            new Card('ん', 'n'),
        
            new Card('が', 'ga'),
            new Card('ぎ', 'gi'),
            new Card('ぐ', 'gu'),
            new Card('げ', 'ge'),
            new Card('ご', 'go'),
            new Card('ぎゃ', 'gya'),
            new Card('ぎゅ', 'gyu'),
            new Card('ぎょ', 'gyo'),
        
            new Card('ざ', 'za'),
            new Card('じ', 'ji'),
            new Card('ず', 'zu'),
            new Card('ぜ', 'ze'),
            new Card('ぞ', 'zo'),
            new Card('じゃ', 'ja'),
            new Card('じゅ', 'ju'),
            new Card('じょ', 'jo'),
        
            new Card('だ', 'da'),
            new Card('ぢ', 'ji'),
            new Card('づ', 'zu'),
            new Card('で', 'de'),
            new Card('ど', 'do'),
            new Card('ぢゃ', 'ja'),
            new Card('ぢゅ', 'ju'),
            new Card('ぢょ', 'jo'),
        
            new Card('ば', 'ba'),
            new Card('び', 'bi'),
            new Card('ぶ', 'bu'),
            new Card('べ', 'be'),
            new Card('ぼ', 'bo'),
            new Card('びゃ', 'bya'),
            new Card('びゅ', 'byu'),
            new Card('びょ', 'byo'),
        
            new Card('ぱ', 'pa'),
            new Card('ぴ', 'pi'),
            new Card('ぷ', 'pu'),
            new Card('ぺ', 'pe'),
            new Card('ぽ', 'po'),
            new Card('ぴゃ', 'pya'),
            new Card('ぴゅ', 'pyu'),
            new Card('ぴょ', 'pyo')
    ]);

    charCount.textContent = deck._cards.length.toString();

    inputSearch.addEventListener('keyup', () => {
        if(inputSearch.value.length > 0)
            deck.Filter(inputSearch.value);
        else
            deck.Display();

        charCount.textContent = deck.Count().toString();
    });

    btnReset.addEventListener('click', () => {
        deck.Display();
        
        for(let card of deck._cards) {
            card._card.style.order = '0';
            
            if(card._card.classList.contains('flipped'))
                card.Flip();
        }
    });

    btnRandomize.addEventListener('click', () => {
        for(let card of deck._cards)
            card._card.style.order = (Math.floor(Math.random() * deck._cards.length) + 1).toString();
    });

    btnFAS.addEventListener('click', () => {
        for(let card of deck._cards) {
            if(!card._card.classList.contains('flipped'))
                card.Flip();
        }
    });

    btnFANS.addEventListener('click', () => {
        for(let card of deck._cards) {
            if(card._card.classList.contains('flipped'))
                card.Flip();
        }
    });
});
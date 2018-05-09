var Card = /** @class */ (function () {
    function Card(hiragana, english, card) {
        this._card = card;
        this._hiragana = hiragana;
        this._english = english;
    }
    Card.prototype.Flip = function () {
        if (!this._card.classList.contains('flipped'))
            this._card.classList.add('flipped');
        else
            this._card.classList.remove('flipped');
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck(target, cards) {
        this._target = target;
        this._cards = cards;
        this.Create();
    }
    Deck.prototype.Create = function () {
        var _loop_1 = function (card) {
            var charCard = document.createElement('div'), charCardFront = document.createElement('div'), charCardBack = document.createElement('div'), charLinkAttr = document.createAttribute('data-link');
            charLinkAttr.value = "https://en.wikipedia.org/wiki/" + card._english.trim() + "_(kana)";
            charCard.setAttributeNode(charLinkAttr);
            charCard.classList.add('card');
            charCard.classList.add('text-dark');
            charCardFront.classList.add('face');
            charCardFront.classList.add('front');
            charCardFront.textContent = card._hiragana;
            if (card._hiragana.length > 1)
                charCardFront.style.fontSize = '80px';
            charCardBack.classList.add('face');
            charCardBack.classList.add('back');
            charCardBack.textContent = card._english;
            charCardBack.style.fontSize = '60px';
            charCard.appendChild(charCardFront);
            charCard.appendChild(charCardBack);
            this_1._target.appendChild(charCard);
            card._card = charCard;
            charCard.addEventListener('click', function () { card.Flip(); });
            charCard.addEventListener('dblclick', function () { window.open(charCard.dataset.link, '_blank'); });
        };
        var this_1 = this;
        for (var _i = 0, _a = this._cards; _i < _a.length; _i++) {
            var card = _a[_i];
            _loop_1(card);
        }
    };
    Deck.prototype.Display = function () {
        for (var _i = 0, _a = this._target.children; _i < _a.length; _i++) {
            var card = _a[_i];
            card.style.display = 'block';
        }
    };
    Deck.prototype.Hide = function () {
        for (var _i = 0, _a = this._target.children; _i < _a.length; _i++) {
            var card = _a[_i];
            card.style.display = 'none';
        }
    };
    Deck.prototype.Destroy = function () { this._target.innerHTML = ''; };
    Deck.prototype.Filter = function (query) {
        var regex = new RegExp(query, 'i');
        for (var _i = 0, _a = this._target.children; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.children[1].textContent.trim().search(regex) != -1)
                card.style.display = 'block';
            else
                card.style.display = 'none';
        }
    };
    Deck.prototype.Count = function () {
        var count = 0;
        for (var _i = 0, _a = this._target.children; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.style.display === 'block')
                count++;
        }
        return count;
    };
    return Deck;
}());
window.addEventListener('load', function () {
    var btnReset = document.getElementById('btnReset'), btnRandomize = document.getElementById('btnRandomize'), btnFAS = document.getElementById('btnFAS'), btnFANS = document.getElementById('btnFANS'), charCount = document.getElementById('characterCount'), charsContainer = document.getElementById('charactersContainer'), inputSearch = document.getElementById('inputSearch'), deck = new Deck(charsContainer, [
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
    inputSearch.addEventListener('keyup', function () {
        if (inputSearch.value.length > 0)
            deck.Filter(inputSearch.value);
        else
            deck.Display();
        charCount.textContent = deck.Count().toString();
    });
    btnReset.addEventListener('click', function () {
        deck.Display();
        for (var _i = 0, _a = deck._cards; _i < _a.length; _i++) {
            var card = _a[_i];
            card._card.style.order = '0';
            if (card._card.classList.contains('flipped'))
                card.Flip();
        }
    });
    btnRandomize.addEventListener('click', function () {
        for (var _i = 0, _a = deck._cards; _i < _a.length; _i++) {
            var card = _a[_i];
            card._card.style.order = (Math.floor(Math.random() * deck._cards.length) + 1).toString();
        }
    });
    btnFAS.addEventListener('click', function () {
        for (var _i = 0, _a = deck._cards; _i < _a.length; _i++) {
            var card = _a[_i];
            if (!card._card.classList.contains('flipped'))
                card.Flip();
        }
    });
    btnFANS.addEventListener('click', function () {
        for (var _i = 0, _a = deck._cards; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card._card.classList.contains('flipped'))
                card.Flip();
        }
    });
});

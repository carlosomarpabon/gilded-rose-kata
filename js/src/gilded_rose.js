function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = [];
const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

function getNewQualityWithinBounds(quality, mod) {
    var rawResult = quality + mod;
    if (rawResult < MIN_QUALITY) {
        return MIN_QUALITY;
    }
    if (rawResult > MAX_QUALITY) {
        return MAX_QUALITY;
    }
    return rawResult;
}

function update_quality() {
    for (var i = 0; i < items.length; i++) {
        switch (items[i].name) {
            case CONJURED_MANA_CAKE:
                items[i].quality = getNewQualityWithinBounds(items[i].quality, -2);
                break;
            case AGED_BRIE:
                items[i].quality = getNewQualityWithinBounds(items[i].quality, 1);
                break;
            case SULFURAS_HAND_OF_RAGNAROS:
                break;
            case BACKSTAGE_PASSES:
                if (items[i].sell_in <= 0) {
                    items[i].quality = 0;
                    break;
                }
                if (items[i].sell_in <= 5) {
                    items[i].quality = getNewQualityWithinBounds(items[i].quality, 3);
                    break;
                }
                if (items[i].sell_in <= 10) {
                    items[i].quality = getNewQualityWithinBounds(items[i].quality, 2);
                }
                break;
            default:
                if (items[i].sell_in <= 0) {
                    items[i].quality = getNewQualityWithinBounds(items[i].quality, -2);
                } else {
                    items[i].quality = getNewQualityWithinBounds(items[i].quality, -1);
                }
                break;
        }
        items[i].sell_in--;
    }
}

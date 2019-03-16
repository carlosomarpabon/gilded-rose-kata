describe("Gilded Rose", function () {
    it("All items Should Reduce sell-in", function () {
        items = [new Item(DEXTERITY_VEST, 5, 5),
                new Item(AGED_BRIE, 5, 5),
                new Item(SULFURAS_HAND_OF_RAGNAROS, 5, 5),
                new Item(BACKSTAGE_PASSES, 5, 5),
                new Item(CONJURED_MANA_CAKE, 5, 5)];
        update_quality();
        expect(items[0].sell_in).toEqual(4);
        expect(items[1].sell_in).toEqual(4);
        expect(items[2].sell_in).toEqual(4);
        expect(items[3].sell_in).toEqual(4);
        expect(items[4].sell_in).toEqual(4);
    });

    it("Normal Item Should Reduce quality", function () {
        items = [new Item(DEXTERITY_VEST, 5, 5)];
        update_quality();
        expect(items[0].quality).toEqual(4);
    });

    it("Quality cannot be negative", function () {
        items = [new Item(DEXTERITY_VEST, 0, 0)];
        update_quality();
        expect(items[0].quality).toEqual(0);
    });

    it("Aged Brie increases in quality", function () {
        items = [new Item(AGED_BRIE, 3, 0)];
        update_quality();
        expect(items[0].quality).toEqual(1);
    });

    it("Aged Brie does not increase in quality past 50", function () {
        items = [new Item(AGED_BRIE, 3, 50)];
        update_quality();
        expect(items[0].quality).toEqual(50);
    });

    it("Sulfuras never decrease in quality", function () {
        items = [new Item(SULFURAS_HAND_OF_RAGNAROS, 3, 80)];
        update_quality();
        expect(items[0].quality).toEqual(80);
    });

    it("Backstage passes, increases in quality increases by 2 when there are 10 days or less", function () {
        items = [new Item(BACKSTAGE_PASSES, 10, 2)];
        update_quality();
        expect(items[0].quality).toEqual(4);
        });

    it("Backstage passes, increases in quality increases by 3 when there are 5 days or less", function () {
        items = [new Item(BACKSTAGE_PASSES, 5, 2)];
            update_quality();
            expect(items[0].quality).toEqual(5);
    });

    it("Backstage passes, quality drops to 0 after the concert", function () {
        items = [new Item(BACKSTAGE_PASSES, 0, 20)];
        update_quality();
        expect(items[0].quality).toEqual(0);
    });

    it("Conjured items decrease by 2", function () {
        items = [new Item(CONJURED_MANA_CAKE, 10, 20)];
        update_quality();
        expect(items[0].quality).toEqual(18);
    });
});

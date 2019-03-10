describe("Gilded Rose", function () {

    it("Normal Item Should Reduce sell-in", function () {
        items = [new Item("Normal Sword", 5, 5)];
        update_quality();
        expect(items[0].sell_in).toEqual(4);
    });

    it("Normal Item Should Reduce quality", function () {
        items = [new Item("Normal Sword", 5, 5)];
        update_quality();
        expect(items[0].quality).toEqual(4);
    });

    it("Quality cannot be negative", function () {
        items = [new Item("Normal Sword", 0, 0)];
        update_quality();
        expect(items[0].quality).toEqual(0);
    });

    it("Aged Brie increases in quality", function () {
        items = [new Item("Aged Brie", 3, 0)];
        update_quality();
        expect(items[0].quality).toEqual(1);
    });

    it("Aged Brie does not increase in quality past 50", function () {
        items = [new Item("Aged Brie", 3, 50)];
        update_quality();
        expect(items[0].quality).toEqual(50);
    });

    it("Sulfuras never decrease in quality", function () {
        items = [new Item("Sulfuras, Hand of Ragnaros", 3, 80)];
        update_quality();
        expect(items[0].quality).toEqual(80);
    });

    it("Backstage passes, increases in quality increases by 2 when there are 10 days or less", function () {
        items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 2)];
        update_quality();
        expect(items[0].quality).toEqual(4);
        });

    it("Backstage passes, increases in quality increases by 3 when there are 5 days or less", function () {
            items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 2)];
            update_quality();
            expect(items[0].quality).toEqual(5);
    });

    it("Backstage passes, quality drops to 0 after the concert", function () {
        items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)];
        update_quality();
        expect(items[0].quality).toEqual(0);
    });

    it("Conjured items decrease by 2", function () {
        items = [new Item("Conjured Mana Cake", 10, 20)];
        update_quality();
        expect(items[0].quality).toEqual(18);
    });
});

// This script removes crafting table recipes for crafting paper ad sugar
// in favor of Create mod machines recipes

ServerEvents.recipes(event => {
    event.remove({ input: 'minecraft:sugar_cane', output: 'minecraft:sugar' })
    event.custom({
        type: "create:milling",
        ingredients: [
            Ingredient.of("minecraft:sugar_cane").toJson()
        ],
        results: [
            Item.of("minecraft:sugar").withChance(0.1).toJson()
        ],
        processingTime: 50
    })
    // event.recipes.createMilling(['minecraft:sugar', Item.of('minecraft:sugar').withChance(0.1)],
    //     ['minecraft:sugar_cane']).processingTime(50)

    // event.remove({ input: 'betternether:nether_reed_stem', output: 'minecraft:sugar' })
    // event.remove({ input: 'betternether:nether_reed_stem'})
    // event.remove({ id: 'betternether:sugar'})
    event.custom({
        type: "create:milling",
        ingredients: [
            Ingredient.of("betternether:nether_reed_stem").toJson()
        ],
        results: [
            Item.of("minecraft:sugar", 2).toJson(),
        ],
        processingTime: 50
    })
    // event.recipes.createMilling(['2x minecraft:sugar', Item.of('minecraft:sugar').withChance(0.2)],
    //     ['betternether:nether_reed_stem']).processingTime(50)

    event.remove({ input: 'betterend:amber_root_raw', output: 'minecraft:sugar' })
    event.custom({
        type: "create:milling",
        ingredients: [
            Ingredient.of("betterend:amber_root_raw").toJson()
        ],
        results: [
            Item.of("minecraft:sugar", 1).toJson(),
        ],
        processingTime: 50
    })
    // event.recipes.createMilling(['2x minecraft:sugar', Item.of('minecraft:sugar').withChance(0.5)],
    //     ['betterend:amber_root_raw']).processingTime(50)

})

ServerEvents.afterRecipes(event => {
    // console.log("Hello World!")
})

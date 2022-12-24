
ServerEvents.recipes(event => {
    // event.remove({ input: 'betternether:nether_reed_stem', output: 'minecraft:paper' })
    // event.remove({ input: 'betterend:end_lily_leaf_dried', output: 'minecraft:paper' })
    event.remove({ input: 'minecraft:sugar_cane', output: 'minecraft:paper' })
    event.remove({ input: 'farmersdelight:tree_bark', output: 'minecraft:paper' })
    event.custom({
        type: "create:pressing",
        ingredients: [
            Ingredient.of("farmersdelight:tree_bark").toJson(),
            // Ingredient.of("minecraft:sugar_cane").toJson()
            // Ingredient.of("betternether:nether_reed_stem").toJson()
        ],
        results: [
            Item.of("minecraft:paper").toJson()
            // Item.of("minecraft:sugar", 2).toJson(),
        ],
        processingTime: 50
    })
    event.custom({
        type: "create:pressing",
        ingredients: [
            Ingredient.of("minecraft:sugar_cane").toJson()
        ],
        results: [
            Item.of("minecraft:paper").toJson()
            // Item.of("minecraft:sugar", 2).toJson(),
        ],
        processingTime: 50
    })
    // event.recipes.createPressing('minecraft:paper', ['minecraft:sugar_cane'])
    // event.recipes.createMixing(['minecraft:paper'],
    //     ['3x farmersdelight:tree_bark', { fluid: 'minecraft:water', amount: 27000 }]).processingTime(50)
    // event.recipes.createPressing('minecraft:paper', ['betternether:nether_reed_stem'])
})

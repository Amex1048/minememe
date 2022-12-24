// There are two dough items: Dough from Create mod and Dough from Farmer's Delight mod
// This script changes all Create recipes to craft and use Wheat Flour from Farmer's Delight
// and removes all original Wheat Flour craft recipes

ServerEvents.recipes(event => {
    event.remove({ output: 'create:dough' })
    event.remove({ input: 'create:dough' })
    event.remove({ output: 'farmersdelight:wheat_dough' })

    // event.recipes.createSplashing('farmersdelight:wheat_dough', 'create:wheat_flour')
    event.shapeless('farmersdelight:wheat_dough', ['3x create:wheat_flour', 'minecraft:water_bucket'])
        .replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    // event.recipes.createMixing('farmersdelight:wheat_dough',
    //     [{ "fluid": "minecraft:water", "amount": 81000 }, 'create:wheat_flour'])
    /*event.custom({
        "type": "create:mixing",
        "ingredients": [{ "item": "create:wheat_flour" }, { "fluid": "minecraft:water", "nbt": {}, "amount": 81000 }],
        "results": [{ "item": "farmersdelight:wheat_dough" }]
    })*/
    event.custom({
        type: "create:mixing",
        ingredients: [
            Ingredient.of("create:wheat_flour").toJson(),
            Ingredient.of("create:wheat_flour").toJson(),
            Ingredient.of("create:wheat_flour").toJson(),
            {"fluid":"minecraft:water", "amount": 81000 }
            // Fluid.of("minecraft:water", 250)
        ],
        results: [
            Item.of("farmersdelight:wheat_dough").toJson(),
        ],
        processingTime: 50
    })

    event.shapeless('minecraft:slime_ball', ['farmersdelight:wheat_dough', 'minecraft:lime_dye'])
})


// Many recipes use wheat instead of dough in food crafting. We love hardcore, so we would change this
ServerEvents.recipes(event => {
    event.remove({ input: 'minecraft:wheat', output: 'minecraft:bread' })

    event.remove({ input: 'minecraft:wheat', output: 'minecraft:cookie' })
    event.shapeless('8x minecraft:cookie',
        ['farmersdelight:wheat_dough', 'minecraft:cocoa_beans', 'farmersdelight:wheat_dough'])

    event.remove({ input: 'minecraft:wheat', output: 'farmersdelight:sweet_berry_cookie' })
    event.shapeless('8x farmersdelight:sweet_berry_cookie',
        ['farmersdelight:wheat_dough', 'minecraft:sweet_berries', 'farmersdelight:wheat_dough'])

    event.remove({ input: 'minecraft:wheat', output: 'expandeddelight:sugar_cookie' })
    event.shapeless('8x expandeddelight:sugar_cookie',
        ['farmersdelight:wheat_dough', 'minecraft:sugar', 'farmersdelight:wheat_dough'])

    event.remove({ input: 'minecraft:wheat', output: 'farmersdelight:honey_cookie' })
    event.shapeless('8x farmersdelight:honey_cookie',
        ['farmersdelight:wheat_dough', 'minecraft:honey_bottle', 'farmersdelight:wheat_dough'])
    event.custom({
        type: "create:mixing",
        ingredients: [
            Ingredient.of("farmersdelight:wheat_dough").toJson(),
            Ingredient.of("farmersdelight:wheat_dough").toJson(),
            {"fluid":"create:honey", "amount": 27000 }
            // Fluid.of("minecraft:water", 250)
        ],
        results: [
            Item.of("farmersdelight:honey_cookie", 8).toJson(),
        ],
        processingTime: 100
    })
    // event.recipes.createMixing('8x farmersdelight:honey_cookie',
    //     [{ "fluid": "create:honey", "amount": 27000 }, "2x farmersdelight:wheat_dough"])

    event.remove({ input: 'minecraft:wheat', output: 'expandeddelight:chocolate_cookie' })
    event.shapeless('8x expandeddelight:chocolate_cookie',
        ['minecraft:cocoa_beans', 'farmersdelight:wheat_dough', 'minecraft:cocoa_beans'])
    event.custom({
        type: "create:mixing",
        ingredients: [
            Ingredient.of("farmersdelight:wheat_dough", 1).toJson(),
            {"fluid":"create:chocolate", "amount": 27000 }
            // Fluid.of("minecraft:water", 250)
        ],
        results: [
            Item.of("expandeddelight:chocolate_cookie", 8).toJson(),
        ],
        processingTime: 100
    })
    // event.recipes.createMixing('8x expandeddelight:chocolate_cookie',
    //     [{ "fluid": "create:chocolate", "amount": 27000 }, "farmersdelight:wheat_dough"])

    event.remove({ input: 'minecraft:wheat', output: 'expandeddelight:snickerdoodle' })
    event.shapeless('8x expandeddelight:snickerdoodle',
        ['farmersdelight:wheat_dough', 'expandeddelight:ground_cinnamon', 'farmersdelight:wheat_dough'])

    event.remove({ output: 'farmersdelight:pie_crust' })
    event.shaped('farmersdelight:pie_crust', [
        'DMD',
        ' D ',
    ], {
        D: 'farmersdelight:wheat_dough',
        M: '#fabric:milk'
    })

    event.remove({ input: 'minecraft:wheat', output: 'farmersdelight:raw_pasta' })
    // This recipe doesn't make sence in your conditions:
    //event.shapeless('2x farmersdelight:raw_pasta',
    //    ['minecraft:water_bucket', '4x farmersdelight:wheat_dough'])
    event.shapeless('2x farmersdelight:raw_pasta',
        ['minecraft:egg', '2x farmersdelight:wheat_dough'])

    event.remove({ input: 'minecraft:wheat', output: 'farmersdelight:apple_pie' })
    event.shaped('farmersdelight:apple_pie', [
        'DDD',
        'AAA',
        'SCS',
    ], {
        D: 'farmersdelight:wheat_dough',
        A: 'minecraft:apple',
        S: 'minecraft:sugar',
        C: 'farmersdelight:pie_crust',
    })

    event.remove({ input: 'minecraft:wheat', output: 'minecraft:cake' })
    event.shaped('minecraft:cake', [
        'MMM',
        'SES',
        'DDD',
    ], {
        D: 'farmersdelight:wheat_dough',
        S: 'minecraft:sugar',
        E: 'minecraft:egg',
        M: 'minecraft:milk_bucket',
    })
})

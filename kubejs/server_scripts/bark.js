// Immersive weathering baek system is not working fully,
// so its bark is replaced with bark from Farmer's Delight

ServerEvents.recipes(event => {
    event.remove({ output: "immersive_weathering:mulch_block" })
    event.remove({ output: 'farmersdelight:organic_compost' })
    event.shapeless('farmersdelight:organic_compost',
        ['#minecraft:dirt', 'farmersdelight:straw', 'minecraft:bone_meal',
         'farmersdelight:tree_bark','immersive_weathering:ash_layer_block', 'immersive_weathering:moss_clump'])

    event.remove({ output: "immersive_weathering:nulch_block" })
    event.shapeless('immersive_weathering:nulch_block',
        ['betternether:netherrack_moss', 'minecraft:magma_cream', 'immersive_weathering:ash_layer_block',
         'minecraft:nether_wart'])
    event.shapeless('immersive_weathering:nulch_block',
        ['betternether:nether_mycelium', 'minecraft:magma_cream', 'immersive_weathering:ash_layer_block',
         'minecraft:nether_wart'])
})

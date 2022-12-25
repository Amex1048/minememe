// One of the recipes from Comforts use #c:rope tag, which is empty, but REI shows it due to a bag.
// Farmers delight gives a rope, so the new alternative recipe is added

ServerEvents.recipes(event => {
    event.remove({ id: "comforts:rope_and_nail_shapeless" })
    event.shapeless('2x comforts:rope_and_nail',
        ['farmersdelight:rope', '#c:iron_ingots'])
})

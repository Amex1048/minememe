ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:beacon' })
    event.shaped('minecraft:beacon', [
        'GAG',
        'ENV',
        'OHO',
    ], {
        G: 'minecraft:glass',
        O: 'minecraft:obsidian',
        N: 'minecraft:nether_star',
        H: 'bosses_of_mass_destruction:obsidian_heart',
        A: 'bosses_of_mass_destruction:ancient_anima',
        E: 'bosses_of_mass_destruction:blazing_eye',
        V: 'bosses_of_mass_destruction:void_thorn'
    })
})

// Make compass recipes slightly harder

ServerEvents.recipes(event => {
    event.remove({ output: 'naturescompass:naturescompass' })
    event.shaped('naturescompass:naturescompass', [
        'KLP',
        'LCL',
        'GLB',
    ], {
        C: 'minecraft:compass',
        L: '#minecraft:logs',
        B: 'minecraft:bamboo',
        P: '#minecraft:saplings',
        K: 'minecraft:kelp',
        G: 'minecraft:glow_berries',
    })

    event.remove({ output: 'explorerscompass:explorerscompass' })
    event.shaped('explorerscompass:explorerscompass', [
        'EBH',
        'BCB',
        'MBW',
    ], {
        C: 'minecraft:compass',
        B: 'minecraft:cracked_stone_bricks',
        H: 'minecraft:heart_of_the_sea',
        E: 'charm:ender_pearl_block',
        M: 'minecraft:music_disc_11',
        W: 'minecraft:cobweb'
    })
})

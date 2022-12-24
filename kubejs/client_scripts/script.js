// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

// JEIEvents.hideItems(event => {
// 	// Hide items in JEI here
// 	// event.hide('minecraft:cobblestone')
// })

REIEvents.hide('item', event => {
    event.hide(['create:dough', '#immersive_weathering:bark', 'immersive_weathering:mulch_block'])
})

REIEvents.removeCategories(event => {
    console.log(event.getCategoryIds())

    // event.remove('create:automatic_packing')

    // Temporary fix for crash
    event.remove('create:automatic_shaped')
})

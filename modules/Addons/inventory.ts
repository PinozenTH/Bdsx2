import { events } from "bdsx/event";


events.playerJoin.on(ev=>{
    const inv = ev.player.getInventory();
    const slots = inv.getSlots();
    const size = slots.size();
    console.log(`[Inventory] ${ev.player.getName()} Begining Read`);
    for (let i=0;i<size;i++) {
        const item = slots.get(i);
        if (item === null) continue;
        console.log(`item ${i}: ${item.getName()}`);
    }
    console.log(`[Inventory] ${ev.player.getName()} End Read`);
    slots.destruct();
});

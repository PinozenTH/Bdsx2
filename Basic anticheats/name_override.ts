import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { DeviceOS } from "bdsx/common";
import { events } from "bdsx/event";
import { Cheats, punish } from "./punish";

const names = new Map<NetworkIdentifier, string>();

events.packetAfter(MinecraftPacketIds.Login).on((pk, ni) => {
    let connreq = pk.connreq;
    if (!connreq) return;
    let cert = connreq.cert;
    if (connreq.getJsonValue()!.DeviceOS !== DeviceOS.PLAYSTATION) {
        names.set(ni, cert.getIdentityName());
    }
});

events.packetSend(MinecraftPacketIds.PlayStatus).on((pk, ni) => {
    if (pk.status === 3) {
        if (names.get(ni)) {
            if (ni.getActor()!.getName() !== names.get(ni)) {
                punish(ni, Cheats.NameOverride);
            }
        }
    }
});

events.networkDisconnected.on(ni => {
    names.delete(ni);
});
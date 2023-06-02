import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
    const { roomID } = useParams();

    const meeting = async (element) => {
        const appID = 1942513322;

        const serverSecret = "f88c6c9651a62b602b04e1aec0866839";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            "Tushar Upadhyay"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };

    return (
        <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>
    );
};

export default Room;

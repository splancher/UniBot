import React, { useEffect } from 'react'
import "./chatbot.css"

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            window.botpressWebChat.init({
                botId: 'a8c05c56-6565-4601-966f-680ae905670b',
                hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
                messagingUrl: 'https://messaging.botpress.cloud',
                clientId: 'a8c05c56-6565-4601-966f-680ae905670b',
                avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/UniBZ-Logo.svg/1200px-UniBZ-Logo.svg.png',
                showBotInfoPage: true,
                enableConversationDelete: true,
                botConversationDescription: "Thesis Chatbot by Simon Plancher",
                useSessionStorage: true,
                composerPlaceholder: "Chat with UniBot"
            });
            window.botpressWebChat.onEvent(
                function () {
                    window.botpressWebChat.sendEvent({ type: "show" });
                },
                ["LIFECYCLE.LOADED"]
            )
            window.botpressWebChat.onEvent(
                (event) => {
                    if(event.type === 'MESSAGE.RECEIVED') {
                        console.log(event.value.payload.text);
                    }
                },
                ['MESSAGE.RECEIVED']
            )

        }
    }, [])

    return <div id="webChat" />
}

export default Chatbot
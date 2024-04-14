import React, {useEffect, useRef} from 'react'
import "./chatbot.css"

const Chatbot = () => {
    const initialized = useRef(false);
    useEffect(() => {
        if(!initialized.current){
            initialized.current = true;
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
                    webhookId: '08abd269-979b-4f38-9588-3919a4c7b25f',
                    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/UniBZ-Logo.svg/1200px-UniBZ-Logo.svg.png',
                    showBotInfoPage: true,
                    lazySocket: true,
                    themeName: 'prism',
                    theme: 'prism',
                    themeColor: '#2563eb',
                    frontendVersion: 'v1',
                    botName: 'unibzBot',
                    enableConversationDelete: true,
                    botConversationDescription: "Thesis Chatbot by Simon Plancher",
                    useSessionStorage: true,
                    composerPlaceholder: "Chat with unibzBot"
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
        }
    }, [])

    return <div id="webChat" />
}

export default Chatbot
export async function MediaTracks() {
    const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    })
    const localTracks = localStream.getTracks()
} 

export async mkConnection(){
    const config = { iceServers: [{ urls: ['stun:stun.l.google.com:19302'] }] }

// https://w3c.github.io/webrtc-pc/#interface-definition
    const pc = new RTCPeerConnection(config)

    stream.getTracks().forEach((track) => {
        // https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-addtrack
        pc.addTrack(track, stream)
    })

    const offer = await pc.createOffer()
    pc.setLocalDescription(offer)
}



socket.emit('call', {
    // идентификатор Б
    to: remoteId,
    // предложение
    sdp: offer
   })


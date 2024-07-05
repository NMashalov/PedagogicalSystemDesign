import { useEffect } from "react"
import {socket} from './socket'



export function MainWindow(){
    const [localId, setLocalId] = useState('')
    const [remoteId, setRemoteId] = useState('')
    const [error, setError] = useState('')


    useEffect(() => {
        socket
            .on('init', ({ id }) => {
                // наш `id`, сгенерированный на сервере
                setLocalId(id)
            })
            .emit('init')
        }, []
    )


    const callWithVideo = (video: boolean) => {
        // `id` нашего друга должен быть обязательно указан в соответствующем поле
        if (!remoteId.trim()) {
          return setError('Your friend ID must be specified!')
        }
        // настройки для захвата медиапотока
        const config = { audio: true, video }
        // инициализация `PeerConnection`
        startCall(true, remoteId, config)
    }

    return (
        <div className='container main-window'>
          <div className='local-id'>
            <h2>Your ID is</h2>
            <p>{localId}</p>
          </div>
          <div className='remote-id'>
            <label htmlFor='remoteId'>Your friend ID</label>
            <p className='error'>{error}</p>
            <input
              type='text'
              spellCheck={false}
              placeholder='Enter friend ID'
              onChange={({ target: { value } }) => {
                setError('')
                setRemoteId(value)
              }}
            />
            <div className='control'>
              {/* видео звонок */}
              <button onClick={() => callWithVideo(true)}>
                <BsCameraVideo />
              </button>
              {/* аудио звонок */}
              <button onClick={() => callWithVideo(false)}>
                <BsPhone />
              </button>
            </div>
          </div>
        </div>
       )
}

const function Video(){
    return (
        <div className='call-window'>
          <div className='inner'>
            <div className='video'>
              {/* элемент для удаленного видеопотока */}
              <video className='remote' ref={remoteVideo} autoPlay />
              {/*
                элемент для локального видеопотока
                обратите внимание на атрибут `muted`,
                без него мы будем слышать сами себя,
                что сделает коммуникацию затруднительной
              */}
              <video
                className='local'
                ref={localVideo}
                autoPlay
                muted
                {/* перенос элемента */}
                onClick={() => setDragging(!dragging)}
                style={{
                  top: `${coords.y}px`,
                  left: `${coords.x}px`
                }}
              />
            </div>
            <div className='control'>
              {/* кнопка для переключения видео */}
              <button
                className={video ? '' : 'reject'}
                onClick={() => toggleMediaDevice('video')}
              >
                <BsCameraVideo />
              </button>
              {/* кнопка для переключения аудио */}
              <button
                className={audio ? '' : 'reject'}
                onClick={() => toggleMediaDevice('audio')}
              >
                <BsPhone />
              </button>
              {/* кнопка для завершения звонка */}
              <button className='reject' onClick={() => finishCall(true)}>
                <FiPhoneOff />
              </button>
            </div>
          </div>
        </div>
       )
}

const toggleMediaDevice = (deviceType) => {
    // видео
    if (deviceType === 'video') {
      setVideo(!video)
      mediaDevice.toggle('Video')
    }
    // аудио
    if (deviceType === 'audio') {
      setAudio(!audio)
      mediaDevice.toggle('Audio')
    }
}
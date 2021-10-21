import React, { useState } from 'react';

const Icons = () => {

    const [iconHoverBell, seticonHoverBell] = useState('white');
    const [iconHoverNoti, seticonHoverNoti] = useState('white');
    const [iconHoverUser, seticonHoverUser] = useState('white');
    const [iconHoverMenu, seticonHoverMenu] = useState('white');

    const _styleIcons = {
        icons: {
            display: 'flex',
            width: '15%',
            height: '60%',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        bell:{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '20%',
            height: '100%',
            backgroundColor: `${iconHoverBell}`,
            borderRadius: '50%',
            cursor: 'pointer'
        },
        noti:{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '20%',
            height: '100%',
            backgroundColor: `${iconHoverNoti}`,
            borderRadius: '50%',
            cursor: 'pointer'
        },
        user:{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '20%',
            height: '100%',
            backgroundColor: `${iconHoverUser}`,
            borderRadius: '50%',
            cursor: 'pointer'
        },
        menu:{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '20%',
            height: '100%',
            backgroundColor: `${iconHoverMenu}`,
            borderRadius: '50%',
            cursor: 'pointer'
        }
    }

    return (
        <div style={ _styleIcons.icons}>
            <div style={{..._styleIcons.bell }} onMouseEnter={() => {seticonHoverBell('#ddd');}} onMouseOut={() => seticonHoverBell('white')} >
                <svg className="gUZ B9u U9O kVc" fill='#767676' height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                    <path onMouseEnter={() => {seticonHoverBell('#ddd');}}  d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z">
                    </path>
                </svg>
            </div>
            <div style={{..._styleIcons.noti}} onMouseEnter={() => {seticonHoverNoti('#ddd');}} onMouseOut={() => seticonHoverNoti('white')}>
                <svg className="gUZ B9u U9O kVc" fill='#767676' height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                    <path onMouseEnter={() => {seticonHoverNoti('#ddd');}} d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0">
                    </path>
                </svg>
            </div>
            <div style={{..._styleIcons.user}} onMouseEnter={() => {seticonHoverUser('#ddd');}} onMouseOut={() => seticonHoverUser('white')}>
                <svg className="perfil" height="32" fill='#767676' viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path onMouseEnter={() => {seticonHoverUser('#ddd');}} d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0">
                    </path>
                </svg>
            </div>
            <div style={{..._styleIcons.menu}} onMouseEnter={() => {seticonHoverMenu('#ddd');}} onMouseOut={() => seticonHoverMenu('white')}>
                <svg className="gUZ B9u U9O kVc" fill='#767676' height="18" width="18" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
                    <path onMouseEnter={() => {seticonHoverMenu('#ddd');}} d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z">
                    </path>
                </svg>
            </div>
        </div>
    );
}

export default Icons;
import {FC} from 'react'


type Props = {
    size:string
    className?:string
}

export  class Icons {

    static Logo:FC<Props> = ({className})=> {
        return(
            <figure className={className}>
                   <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.6 19.33"><title>hacker_logo</title><g id="d862a4be-a949-473b-9289-d2021be95385" data-name="Layer 2"><g id="9e4ab657-0dce-4bca-be6c-82f6192d6a77" data-name="Layer 1"><g style={{isolation: 'isolate'}}><path d="M15.19,9.58H5.51v4.47a23.59,23.59,0,0,0,.11,2.87,1.46,1.46,0,0,0,.55,1,3,3,0,0,0,1.69.33h.48v.63H0v-.63H.48A3.25,3.25,0,0,0,2.13,18,1.37,1.37,0,0,0,2.71,17a19.31,19.31,0,0,0,.13-3V5a18.24,18.24,0,0,0-.13-2.85,1.24,1.24,0,0,0-.54-.89A4.18,4.18,0,0,0,.34,1H0V.34H8.34V1H8a4.46,4.46,0,0,0-1.78.23A1.21,1.21,0,0,0,5.65,2,18.17,18.17,0,0,0,5.51,5V8.64h9.68V5a20.23,20.23,0,0,0-.12-2.85,1.27,1.27,0,0,0-.54-.89A4.18,4.18,0,0,0,12.7,1h-.49V.34h8.43V1h-.27a4.49,4.49,0,0,0-1.79.23A1.21,1.21,0,0,0,18,2,18.17,18.17,0,0,0,17.87,5v9.09a24.36,24.36,0,0,0,.1,2.87,1.4,1.4,0,0,0,.56,1,3,3,0,0,0,1.69.33h.42v.63H12.21v-.63h.64a3.2,3.2,0,0,0,1.64-.3,1.41,1.41,0,0,0,.58-.94,21.41,21.41,0,0,0,.12-3Z" fill="#3b3b3b" /><path d="M33.67,12h-7l-.48,1.18a11.82,11.82,0,0,0-1.06,3.34,1.49,1.49,0,0,0,.57,1.26,2.29,2.29,0,0,0,1.45.43v.63H21.6v-.63a3,3,0,0,0,1.83-.87,10.47,10.47,0,0,0,1.45-2.85c.05-.13.27-.66.66-1.58L30.93.08h.53l6.19,14.73.85,1.94a2.57,2.57,0,0,0,.77,1,2.82,2.82,0,0,0,1.46.47v.63H33.44v-.63a5.2,5.2,0,0,0,1.81-.2.75.75,0,0,0,.47-.78,8.19,8.19,0,0,0-.62-1.79Zm-.23-.61-3.28-7.9-3.27,7.9Z" fill="#3b3b3b" /><path d="M57.46,11.92h.59v6.5h-.59a4.94,4.94,0,0,0-.89-2,8,8,0,0,1-6.24,2.76,8.89,8.89,0,0,1-6.57-2.54A9.09,9.09,0,0,1,41.21,10a11.76,11.76,0,0,1,1.17-5.17,8,8,0,0,1,3.28-3.6A9.3,9.3,0,0,1,50.29,0a8.32,8.32,0,0,1,3.76.85,7.48,7.48,0,0,1,2.52,1.9A6.83,6.83,0,0,0,57.29.34h.6l.16,7h-.59c-.41-2.5-1.24-4.23-2.51-5.21A6.76,6.76,0,0,0,50.68.7a5.45,5.45,0,0,0-4.63,2.36,11.46,11.46,0,0,0-1.71,6.77q0,4.17,1.87,6.39a5.86,5.86,0,0,0,4.66,2.22,7.23,7.23,0,0,0,3.05-.72,5.3,5.3,0,0,0,2.47-2.46A9.08,9.08,0,0,0,57.46,11.92Z" fill="#3b3b3b" /><path d="M66.29,9.78,72,4.68c1.31-1.18,2-2,2-2.52,0-.76-.65-1.15-2-1.19V.34h7V1a4.72,4.72,0,0,0-1.73.37,6.63,6.63,0,0,0-1.59.93c-.48.38-1.38,1.19-2.69,2.42L69.55,7.81l6.94,7a25.62,25.62,0,0,0,3.19,2.93,4,4,0,0,0,2.09.5v.63H72.15v-.63h.37A4.25,4.25,0,0,0,74.46,18a.77.77,0,0,0,.38-.64c0-.38-.66-1.24-2-2.56L67.62,9.52l-1.33,1.16v3.37a23.59,23.59,0,0,0,.11,2.87,1.47,1.47,0,0,0,.56,1,3,3,0,0,0,1.7.33H69v.63H60.69v-.63h.57a3.2,3.2,0,0,0,1.65-.3A1.38,1.38,0,0,0,63.5,17a19.31,19.31,0,0,0,.13-3V5A18.35,18.35,0,0,0,63.49,2a1.19,1.19,0,0,0-.57-.85,5.33,5.33,0,0,0-2-.22V.34h8.2V1H68.8A4.49,4.49,0,0,0,67,1.2a1.16,1.16,0,0,0-.57.84A16.59,16.59,0,0,0,66.29,5Z" fill="#3b3b3b" /><path d="M97.75,13.11h.66L98,18.88H82.66v-.63H83a2.87,2.87,0,0,0,1.79-.37,1.62,1.62,0,0,0,.51-.93,22.36,22.36,0,0,0,.11-2.9V5a20.06,20.06,0,0,0-.12-2.79,1.28,1.28,0,0,0-.53-.93A3.71,3.71,0,0,0,83,1V.34H96.29L96.73,5h-.64A7.24,7.24,0,0,0,95,2.21a2.72,2.72,0,0,0-1.51-1A13.31,13.31,0,0,0,90.69,1H88.12V8.75h2A5.48,5.48,0,0,0,92,8.52a1.24,1.24,0,0,0,.71-.71A6.5,6.5,0,0,0,92.86,6h.64v6.35h-.64a5.46,5.46,0,0,0-.26-2.07,1.28,1.28,0,0,0-.76-.69,6.55,6.55,0,0,0-1.69-.15h-2v4.38c0,2.2.14,3.49.42,3.88s1,.58,2.28.58H92.2a6.6,6.6,0,0,0,2.41-.37,4.39,4.39,0,0,0,1.8-1.55A8.87,8.87,0,0,0,97.75,13.11Z" fill="#3b3b3b" /><path d="M119.63,18.88h-5A22,22,0,0,1,110.58,14c-.58-.84-1.19-1.64-1.82-2.41a9.47,9.47,0,0,0-1.3-1.41,1.94,1.94,0,0,0-1.11-.25h-.73v4.11a24.36,24.36,0,0,0,.1,2.87,1.45,1.45,0,0,0,.54,1,3.1,3.1,0,0,0,1.71.33h.89v.63H100v-.63h.6a3.2,3.2,0,0,0,1.65-.3,1.34,1.34,0,0,0,.58-.94,20.79,20.79,0,0,0,.13-3V5a19.66,19.66,0,0,0-.13-2.85,1.21,1.21,0,0,0-.54-.89A4.26,4.26,0,0,0,100.43,1h-.31V.34l2.65-.13c1.77-.09,3.17-.13,4.21-.13a16,16,0,0,1,4.32.49A5.77,5.77,0,0,1,114,2.19a3.8,3.8,0,0,1,1,2.68A4.16,4.16,0,0,1,113.67,8a6.71,6.71,0,0,1-3.94,1.6q1.15.55,3.75,4a18.51,18.51,0,0,0,3.31,3.7,4.9,4.9,0,0,0,2.84.93Zm-14-9.57,2.11-.08a8.23,8.23,0,0,0,1.9-.3,3.36,3.36,0,0,0,1.31-.72A3.23,3.23,0,0,0,111.73,7,5.44,5.44,0,0,0,112,5.09,4.73,4.73,0,0,0,111,2c-.66-.79-2.08-1.18-4.26-1.18-.34,0-.73,0-1.16,0Z" fill="#3b3b3b" /><path d="M143.92,19.3,130.81,1.93V14.79A9,9,0,0,0,131,16.9a1.73,1.73,0,0,0,.9.93,4.58,4.58,0,0,0,2.21.42v.63h-6.92v-.63a5,5,0,0,0,2-.48,1.56,1.56,0,0,0,.82-.84,10.19,10.19,0,0,0,.13-2.14V5a12.5,12.5,0,0,0-.2-2.85,1.32,1.32,0,0,0-.62-.93A5.45,5.45,0,0,0,127.39,1V.34h5.47l11,14.51V3.76A4.1,4.1,0,0,0,143.59,2a1.76,1.76,0,0,0-1-.78A5.5,5.5,0,0,0,140.68,1V.34h6.73V1a4.77,4.77,0,0,0-1.85.45,1.66,1.66,0,0,0-.86.86A5.1,5.1,0,0,0,144.51,4V19.3Z" fill="#3b3b3b" /><path d="M163.67,13.11h.65l-.39,5.77H148.57v-.63H149a2.83,2.83,0,0,0,1.78-.37,1.62,1.62,0,0,0,.51-.93,20.56,20.56,0,0,0,.11-2.9V5a22.55,22.55,0,0,0-.11-2.79,1.32,1.32,0,0,0-.54-.93A3.69,3.69,0,0,0,149,1V.34H162.2L162.64,5H162a7.08,7.08,0,0,0-1.08-2.75,2.69,2.69,0,0,0-1.51-1A13.31,13.31,0,0,0,156.6,1H154V8.75h2a5.45,5.45,0,0,0,1.89-.23,1.21,1.21,0,0,0,.71-.71A6.5,6.5,0,0,0,158.77,6h.64v6.35h-.64a5.46,5.46,0,0,0-.26-2.07,1.26,1.26,0,0,0-.76-.69,6.55,6.55,0,0,0-1.69-.15h-2v4.38c0,2.2.14,3.49.42,3.88s1.05.58,2.28.58h1.39a6.58,6.58,0,0,0,2.4-.37,4.39,4.39,0,0,0,1.8-1.55A9,9,0,0,0,163.67,13.11Z" fill="#3b3b3b" /><path d="M184.5,19.33h-.61L178.24,4.05,173.3,19.33h-.65L168.18,4.89q-.6-2-.87-2.61a2.07,2.07,0,0,0-.7-1A2.67,2.67,0,0,0,165.18,1V.34h7V1a3.47,3.47,0,0,0-1.61.36,1,1,0,0,0-.36.79,12.22,12.22,0,0,0,.58,2.31l3.31,10.8L178.9.34h.76l5.44,14.89,2.83-9.84a12.34,12.34,0,0,0,.56-2.61c0-1.21-.64-1.81-1.92-1.81V.34h5.05V1A2.14,2.14,0,0,0,190,1.8a13.68,13.68,0,0,0-1.38,3.57Z" fill="#3b3b3b" /><path d="M193.33,18.69v-6H194q1.15,5.82,5.51,5.82a4,4,0,0,0,3-1.11,3.54,3.54,0,0,0,1.07-2.5,3.17,3.17,0,0,0-.94-2.33,11.66,11.66,0,0,0-3.45-2,24.54,24.54,0,0,1-3.36-1.68,5,5,0,0,1-1.77-1.86,4.93,4.93,0,0,1-.64-2.45,4.41,4.41,0,0,1,1.37-3.3A4.83,4.83,0,0,1,198.32,0a6.47,6.47,0,0,1,2.22.38A5.78,5.78,0,0,1,202.67,2a2.91,2.91,0,0,0,.71-1.63h.6V5.2h-.6a6.44,6.44,0,0,0-1.84-3.34,4.36,4.36,0,0,0-3-1.22,3,3,0,0,0-2.43.9,3,3,0,0,0-.77,2,2.81,2.81,0,0,0,1,2.17,13,13,0,0,0,3.46,2,38,38,0,0,1,3.48,1.71,5,5,0,0,1,1.74,1.8,5.24,5.24,0,0,1,.66,2.65A5.05,5.05,0,0,1,204,17.73a5.92,5.92,0,0,1-4.24,1.49,6.46,6.46,0,0,1-5.08-2.34,4.63,4.63,0,0,0-.67,1.81Z" fill="#3b3b3b" /></g></g></g></svg>
            </figure>
        )
    }

    }



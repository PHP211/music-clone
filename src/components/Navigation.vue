<template>
    

    <div class='rounded-md bg-navbg p-5 mb-2'>
        <div class='mb-3'><img class='w-2/3' src="/Spotify_Full_Logo_RGB_White.png" alt=""></div>
        <div class='my-3'>
            <svg class='inline-block' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#b3b3b3"><path d="M180-140v-450l300-225.77L780-590v450H556.15v-267.69h-152.3V-140H180Z"/></svg>
            <span class='align-middle text-lg text-unhighlight ml-5'>Home</span>
        </div>
        <div class='mt-3'>
            <svg class='inline-block' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#b3b3b3"><path d="M787.64-137.33 530.87-394.1q-29.9 25.86-69.4 40.06-39.51 14.19-81.78 14.19-102.1 0-172.82-70.68-70.71-70.68-70.71-171.84 0-101.17 70.68-171.91t171.99-70.74q101.31 0 172.03 70.69 70.73 70.7 70.73 171.9 0 42.3-14.39 81.84-14.38 39.54-40.53 70.69l257.17 256.1-36.2 36.47ZM379.28-390.1q80.41 0 136.23-55.96 55.82-55.97 55.82-136.38t-55.82-136.37q-55.82-55.96-136.23-55.96-80.75 0-136.81 55.96t-56.06 136.37q0 80.41 56.06 136.38 56.06 55.96 136.81 55.96Z"/></svg>
            <span class='align-middle text-lg text-unhighlight ml-5'>Search</span>
        </div>
    </div>


    <div class='rounded-md bg-navbg p-5 mb-2 space-y-5 '> 
        <div>
            <svg class='inline-block' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#b3b3b3"><path d="M490.67-342Q532-342 561-370.61q29-28.62 29-70.06V-682h117.33v-66.67H550v231.34q-11.67-9.34-26.88-14.34-15.21-5-32.45-5-40.04 0-67.69 27.91-27.65 27.92-27.65 68.34T422.98-371q27.65 29 67.69 29ZM280-213.33q-27 0-46.83-19.84Q213.33-253 213.33-280v-533.33q0-27 19.84-46.84Q253-880 280-880h533.33q27 0 46.84 19.83Q880-840.33 880-813.33V-280q0 27-19.83 46.83-19.84 19.84-46.84 19.84H280Zm0-66.67h533.33v-533.33H280V-280ZM146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-600h66.67v600h600V-80h-600ZM280-813.33V-280v-533.33Z"/></svg>
            <span class='align-middle text-lg text-unhighlight ml-2 inline-block'>Your Library</span>
            <svg class='inline-block ml-7' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#b3b3b3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </div>

        <div class='flex'>
            <span type="button" class="text-white bg-btn font-medium rounded-full text-sm px-2.5 py-1.5 me-2 mb-2 ">Playlists</span>
            <span type="button" class="text-white bg-btn font-medium rounded-full text-sm px-4 py-1.5 me-2 mb-2 ">Artists</span>
        </div>

        <div class='flex space-x-20'>
            <svg class='inline-block' xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#b3b3b3"><path d="M787.64-137.33 530.87-394.1q-29.9 25.86-69.4 40.06-39.51 14.19-81.78 14.19-102.1 0-172.82-70.68-70.71-70.68-70.71-171.84 0-101.17 70.68-171.91t171.99-70.74q101.31 0 172.03 70.69 70.73 70.7 70.73 171.9 0 42.3-14.39 81.84-14.38 39.54-40.53 70.69l257.17 256.1-36.2 36.47ZM379.28-390.1q80.41 0 136.23-55.96 55.82-55.97 55.82-136.38t-55.82-136.37q-55.82-55.96-136.23-55.96-80.75 0-136.81 55.96t-56.06 136.37q0 80.41 56.06 136.38 56.06 55.96 136.81 55.96Z"/></svg>
            <div>
                <span class='text-unhighlight text-sm ml-1'>Recents</span>
                <svg class='inline-block ml-2' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b3b3b3"><path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"/></svg>
            </div>
        </div>

        <div class='flex'>
            <Card></Card>
        </div>
    </div>


</template>

<script setup>
import Card from '../components/LibraryCard.vue'
</script>
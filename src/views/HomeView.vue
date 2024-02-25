<script setup>
import HomeCardData from '@/JsonData/HomeCardData.js'
import { RouterLink } from 'vue-router'

const getImage = (img) => {
    const imageUrl = new URL('/src/Images/' + img, import.meta.url).href
    return imageUrl;
}
</script>

<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <RouterLink class="col" v-for="info in HomeCardData" :to="'/Content/' + info.view">
            <div class="card bg-dark text-white fw-bold CardInfo">
                <img :src="getImage(info.img)" class="card-img" style="height: 20rem;">
                <div class="card-img-overlay" style="background-color: rgba(0, 0, 0, .5);">
                    <h3 class="card-title fw-bold">{{ info.title }}</h3>
                    <p class="card-text">{{ info.content }}</p>
                </div>
            </div>
        </RouterLink>

    </div>
</template>

<style scoped>
.CardInfo>.card-img-overlay:hover {
    opacity: 0;
}
</style>
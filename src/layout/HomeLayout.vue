<style scoped>
.jumbotron {
    background: url('@/images/office2.jpg') no-repeat center center;
    background-size: cover;
    padding-top: 20%;
    padding-bottom: 20%;
}

h1 {
    -webkit-text-stroke: 1px #6c757d;
}
</style>
<template>
    <section class="py-5 text-center container-fluid jumbotron">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light fw-bold" style="color:#42cbf5;">菜鳥碼農學習歷程</h1>
                <p class="lead text-muted fw-bold">I will update the information from time to time occasionally.</p>
                <p class="lead text-muted fw-bold">Have nice day~</p>
            </div>
        </div>
    </section>
    <div class="album py-5 bg-light">
        <div class="container">
            <HomeView></HomeView>
        </div>
    </div>
</template>

<script setup>
import HomeView from '@/views/HomeView.vue';
</script>
